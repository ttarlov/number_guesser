var randomNum = randomNum || (Math.floor(Math.random() * 100) + 1);
var submitBtn = document.querySelector('.submit-btn-js');
var resetBtn = document.querySelector('.reset-btn-js');
var clearBtn = document.querySelector('.clear-btn-js');
var updateBtn = document.querySelector('.update-btn-js');
var ch1InputName = document.querySelector('.challenger1-name-js');
var ch1InputGuess = document.querySelector('.challenger1-guess-js');
var ch2InputName = document.querySelector('.challenger2-name-js');
var ch2InputGuess = document.querySelector('.challenger2-guess-js');
var ch1NameDisplayed = document.querySelector('.ch-1-name-displayed-js');
var ch2NameDisplayed = document.querySelector('.ch-2-name-displayed-js');
var ch1GuessDisplayed = document.querySelector('.ch-1-guess-displayed-js');
var ch2GuessDisplayed = document.querySelector('.ch-2-guess-displayed-js');
var errorMessageCh1Name = document.querySelector('.error-message-ch1-name-js');
var ch1GuessResult = document.querySelector('.ch1-guess-result');
var ch2GuessResult = document.querySelector('.ch2-guess-result');
var minRange = document.querySelector('.min-range-input-js');
var maxRange = document.querySelector('.max-range-input-js');
var minRangeDisplayed = document.querySelector('.range-num-min-js');
var maxRangeDisplayed = document.querySelector('.range-num-max-js');
var maxRangeErrorMsg = document.querySelector('.max-range-error-popup-js');
var rightSideContainer = document.querySelector('.right-side');
var ch2GuessErrorPopup = document.querySelector('.ch2-guess-error-popup-js');
var clicks = 0;

window.onload = disableButtons();

ch1InputName.addEventListener('keyup', checkAlpha);
ch1InputName.addEventListener('input', validateUserInput);
ch1InputGuess.addEventListener('input', validateUserInput);
ch2InputName.addEventListener('input', validateUserInput);
ch2InputGuess.addEventListener('input', validateUserInput);
clearBtn.addEventListener('click', clearForm);
submitBtn.addEventListener('click', checkGuessesAgainstRange);
updateBtn.addEventListener('click', updateRangeValues);
maxRange.addEventListener('keyup', removeDisabledClassUpdateBtn);

function bringBackRandomNumber() {
  randomNum = (Math.floor(Math.random() * 100));
}

function resetGame() {
  resetBtn.addEventListener('click', resetGame);
  window.location.reload();
}

function removeDisabledClassUpdateBtn() {
  if (minRange.value > maxRange.value) {
    updateBtn.disabled = true;
    updateBtn.classList.add('button-disabled');
  } else if (minRange.value < maxRange.value) {
    updateBtn.disabled = false;
    updateBtn.classList.remove('button-disabled');
  } else {
    updateBtn.disabled = true;
    updateBtn.classList.add('button-disabled');
  }
}

function updateRangeValues() {
  updateBtn.addEventListener('click', randomNumberMinVsMax);
  var minRangeInt = parseInt(minRange.value);
  var maxRangeInt = parseInt(maxRange.value);
  if (maxRangeInt < minRangeInt) {
    maxRange.classList.add('max-range-input-error-js');
    maxRangeErrorMsg.innerHTML = `<span class='max-range-error-popup-js'>
    <img class='error-icon' src='assets/error-icon.svg' alt='error message'>
    <span>Must be less than min</span></span>`;
  } else if (maxRangeInt > minRangeInt) {
    minRangeDisplayed.innerText = minRange.value;
    maxRangeDisplayed.innerText = maxRange.value;
    maxRange.classList.remove('max-range-input-error-js');
    maxRangeErrorMsg.innerHTML = `<span></span>`;
  }

  function randomNumberMinVsMax(minRangeInt, maxRangeInt) {
    randomNum = (Math.floor(Math.random() * (maxRangeInt - minRangeInt + 1) + minRangeInt));
  }

  randomNumberMinVsMax(minRangeInt, maxRangeInt);
}

function checkAlpha() {
  var letterNumber = /^[a-zA-Z]+/;
  if (!ch1InputName.value.match(letterNumber)) {
    ch1InputName.classList.add('challenger1-name-error-js');
    errorMessageCh1Name.innerHTML = `<span class='error-message-ch1-name-js'>
    <img class='error-icon' src='assets/error-icon.svg' alt='error message'>
    <span>Enter a name</span></span>`;
  } else if (ch1InputName.value.match(letterNumber)) {
    ch1InputName.classList.remove('challenger1-name-error-js');
    errorMessageCh1Name.innerHTML = `<span class='error-message-ch1-name-js'>
    <img class='' src='' alt=''>
    <span></span></span>`;
  }
}

function disableButtons() {
  submitBtn.disabled = true;
  resetBtn.disabled = true;
  clearBtn.disabled = true;
  submitBtn.classList.add('button-disabled');
  resetBtn.classList.add('button-disabled');
  clearBtn.classList.add('button-disabled');
}

function enableButtons() {
  submitBtn.disabled = false;
  resetBtn.disabled = false;
  clearBtn.disabled = false;
  submitBtn.classList.remove('button-disabled');
  resetBtn.classList.remove('button-disabled');
  clearBtn.classList.remove('button-disabled');
}

function validateUserInput() {
  if (ch1InputName.value.length > 0 && ch1InputGuess.value.length > 0 &&
   ch2InputName.value.length > 0 && ch2InputGuess.value.length > 0) {
    enableButtons();
  } else if (ch1InputName.value.length > 0 || ch1InputGuess.value.length > 0 ||
  ch2InputName.value.length > 0 || ch2InputGuess.value.length > 0) {
    submitBtn.disabled = true;
    resetBtn.disabled = true;
    clearBtn.disabled = false;
    clearBtn.classList.remove('button-disabled');
  }
}

function clearForm() {
  ch1InputName.value = '';
  ch1InputGuess.value = '';
  ch2InputName.value = '';
  ch2InputGuess.value = '';
  disableButtons();
}

function checkGuessesAgainstRange() {
  var minRangeDisplayedInt = parseInt(minRangeDisplayed.innerText);
  var maxRangeDisplayedInt = parseInt(maxRangeDisplayed.innerText);
  var ch2InputGuessInt = parseInt(ch2InputGuess.value);
  var ch1InputGuessInt = parseInt(ch1InputGuess.value);
  if (ch1InputGuessInt < minRangeDisplayedInt ||
    ch1InputGuessInt > maxRangeDisplayedInt) {
    ch1InputGuess.classList.add('ch2-guess-error-js');
    ch2GuessErrorPopup.innerHTML = `<span class='ch2-guess-error-popup-js'>
    <img class='error-icon' src='assets/error-icon.svg' alt='error message'>
    <span>Guess must be within specified range</span></span>`;
  } else if (ch2InputGuessInt < minRangeDisplayedInt ||
  ch2InputGuessInt > maxRangeDisplayedInt) {
    ch2InputGuess.classList.add('ch2-guess-error-js');
    ch2GuessErrorPopup.innerHTML = `<span class='ch2-guess-error-popup-js'>
    <img class='error-icon' src='assets/error-icon.svg' alt='error message'>
    <span>Guess must be within specified range</span></span>`;
    ch1InputGuess.classList.remove('ch2-guess-error-js');
  } else {
    ch1InputGuess.classList.remove('ch2-guess-error-js');
    ch2InputGuess.classList.remove('ch2-guess-error-js');
    ch2GuessErrorPopup.innerHTML = `<span></span>`;
    executeSubmitButton();
  }
}

function executeSubmitButton() {
  submitBtn.addEventListener('click', updateCounter);
  ch1NameDisplayed.innerText = ch1InputName.value;
  ch2NameDisplayed.innerText = ch2InputName.value;
  ch1GuessDisplayed.innerText = ch1InputGuess.value;
  ch2GuessDisplayed.innerText = ch2InputGuess.value;
  function updateCounter() {
    clicks += 1;
  }

  updateCounter();
  compareCh2GuessToRange();
  compareCh1GuessToRange();
}

function compareCh1GuessToRange() {
  var ch1InputGuessInt = parseInt(ch1InputGuess.value);
  if (ch1InputGuessInt < randomNum) {
    ch1GuessResult.innerText = 'that\'s too low!';
  } else if (ch1InputGuessInt > randomNum) {
    ch1GuessResult.innerText = 'that\'s too high!';
  } else if (ch1InputGuessInt === randomNum) {
    ch1GuessResult.innerText = 'BOOM!';
    displayWinnerCard();
    bringBackRandomNumber();
    clearForm();
    clicks = 0;
  }
}

function compareCh2GuessToRange() {
  var ch2InputGuessInt = parseInt(ch2InputGuess.value);
  if (ch2InputGuessInt < randomNum) {
    ch2GuessResult.innerText = 'that\'s too low!';
  } else if (ch2InputGuessInt > randomNum) {
    ch2GuessResult.innerText = 'that\'s too high!';
  } else if (ch2InputGuessInt === randomNum) {
    ch2GuessResult.innerText = 'BOOM!';
    displayWinnerCard();
    bringBackRandomNumber();
    clearForm();
    clicks = 0;
  }
}

function displayWinnerCard() {
  rightSideContainer.insertAdjacentHTML('afterbegin', '<div class="winner-card-1"><p class="winner-card-header-container"><span class="winner-card-header ch1-name-inserted-winner-card-js">challenger 1 name</span><span class="vs">vs</span><span class="winner-card-header ch2-name-inserted-winner-card-js">challenger 2 name</span></p><hr><p class="winner-card-name winner-card-name-js">challenger 2 name</p><p class="winner-status">winner</p><hr><div class="winner-card-output-and-close-btn"><div class="number-of-guesses"><p class="guess-counter-js">47 guesses</p></div><div class="time-elapsed"><p>1 minute 35 seconds</p></div><div class="close-card-icon"><img src="assets/x_icon.png" class="x-icon" alt="x-icon"></div></div></div>');
  updateWinnerCardInfo();
  var guessCounter = document.querySelector('.guess-counter-js');
  guessCounter.innerText = `${clicks} guesses`;
  rightSideContainer.addEventListener('click', removeWinnerCard);
}

function updateWinnerCardInfo() {
  var ch1InputGuessInt = parseInt(ch1InputGuess.value);
  var ch1WinnerNameInserted = document.querySelector('.ch1-name-inserted-winner-card-js');
  ch1WinnerNameInserted.innerText = ch1NameDisplayed.innerText;
  var ch2WinnerNameInserted = document.querySelector('.ch2-name-inserted-winner-card-js');
  ch2WinnerNameInserted.innerText = ch2NameDisplayed.innerText;
  var challengerWinnerName = document.querySelector('.winner-card-name-js');
  if (ch1InputGuessInt === randomNum) {
    challengerWinnerName.innerText = ch1NameDisplayed.innerText;
  } else {
    challengerWinnerName.innerText = ch2NameDisplayed.innerText;
  }
}

function removeWinnerCard(event) {
  winnerCardDiv = document.querySelector('.winner-card-1');
  if (event.target.className == 'x-icon') {
    event.target.closest('.winner-card-1').remove();
  }
}

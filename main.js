var submitBtn = document.querySelector('.submit-btn-js');
var resetBtn = document.querySelector('.reset-btn-js');
var clearBtn = document.querySelector('.clear-btn-js');
var ch1InputName = document.querySelector('.challenger1-name-js');
var ch1InputGuess = document.querySelector('.challenger1-guess-js');
var ch2InputName = document.querySelector('.challenger2-name-js');
var ch2InputGuess = document.querySelector('.challenger2-guess-js');
var ch1NameDisplayed = document.querySelector('.ch-1-name-displayed-js');
var ch2NameDisplayed = document.querySelector('.ch-2-name-displayed-js');
var ch1GuessDisplayed = document.querySelector('.ch-1-guess-displayed-js');
var ch2GuessDisplayed = document.querySelector('.ch-2-guess-displayed-js');
var errorMessageCh1Name = document.querySelector('.error-message-ch1-name-js');

ch1InputName.addEventListener('keyup', checkAlpha);

function checkAlpha() {
  var letterNumber = /^[a-zA-Z]+/;
  // var noLetter = /^[0-9]+/;
  if (!ch1InputName.value.match(letterNumber)) {
    console.log('error message');
    ch1InputName.classList.add('challenger1-name-error-js');
    errorMessageCh1Name.innerHTML = `<span class='error-message-ch1-name-js'>
    <img class='error-icon' src="assets/error-icon.svg" alt="error message">
    <span>Enter a name</span></span>`;
  } else if (ch1InputName.value.match(letterNumber)) {
    ch1InputName.classList.remove('challenger1-name-error-js');
  }
}

ch1InputName.addEventListener('input', validateUserInput);
ch1InputGuess.addEventListener('input', validateUserInput);
ch2InputName.addEventListener('input', validateUserInput);
ch2InputGuess.addEventListener('input', validateUserInput);
clearBtn.addEventListener('click', clearForm);
submitBtn.addEventListener('click', executeSubmitButton);



window.onload = disableButtons();

// debugger;
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
  console.log('Sanity check', ch1InputName.value, ch1InputGuess.value,
  ch2InputName.value, ch2InputGuess.value);
  if (ch1InputName.value.length > 0 && ch1InputGuess.value.length > 0 &&
   ch2InputName.value.length > 0 && ch2InputGuess.value.length > 0) {
    console.log('second condional');
    enableButtons();
  } else if (ch1InputName.value.length > 0 || ch1InputGuess.value.length > 0 ||
  ch2InputName.value.length > 0 || ch2InputGuess.value.length > 0) {
    console.log('first conditional');
    submitBtn.disabled = true;
    resetBtn.disabled = true;
    clearBtn.disabled = false;
    clearBtn.classList.remove('button-disabled');
  } else {
    console.log('else statement');
  }

}

function clearForm() {
  // debugger;
  console.log('another sanity check', disableButtons());
  ch1InputName.value = '';
  ch1InputGuess.value = '';
  ch2InputName.value = '';
  ch2InputGuess.value = '';
  disableButtons();
}

function executeSubmitButton() {
  ch1NameDisplayed.innerText = ch1InputName.value;
  ch2NameDisplayed.innerText = ch2InputName.value;
  ch1GuessDisplayed.innerText = ch1InputGuess.value;
  console.log('WORD UP', ch1GuessDisplayed.innerText);
  ch2GuessDisplayed.innerText = ch2InputGuess.value;
  clearForm();
}



// function alphanumeric(inputtxt)
// {
//  var letterNumber = /^[0-9a-zA-Z]+$/;
//  if((inputtxt.value.match(letterNumber))
//   {
//    return true;
//   }
// else
//   {
//    alert("message");
//    return false;
//   }
//   }

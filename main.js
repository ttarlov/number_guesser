var submitBtn = document.querySelector('.submit-btn-js');
var resetBtn = document.querySelector('.reset-btn-js');
var clearBtn = document.querySelector('.clear-btn-js');

var ch1InputName = document.querySelector('.challenger1-name-js');
var ch1InputGuess = document.querySelector('.challenger1-guess-js');
var ch2InputName = document.querySelector('.challenger2-name-js');
var ch2InputGuess = document.querySelector('.challenger2-guess-js');

ch1InputName.addEventListener('input', validateUserInput);
ch1InputGuess.addEventListener('input', validateUserInput);
ch2InputName.addEventListener('input', validateUserInput);
ch2InputGuess.addEventListener('input', validateUserInput);

window.onload = disableButtons();
// debugger;
function disableButtons() {
  submitBtn.disabled = true;
  resetBtn.disabled = true;
  clearBtn.disabled = true;
}

function validateUserInput() {
  // debugger;
  if (ch1InputName.value.length === 0 || ch1InputGuess.value.length < 0 ||
  ch2InputName.value.length === 0 || ch2InputGuess.value.length < 0) {
    submitBtn.disabled = true;
    resetBtn.disabled = true;
    clearBtn.disabled = true;
  } else if (ch1InputName.value.length !== 0 && ch1InputGuess.value.length !== 0 &&
   ch2InputName.value.length !== 0 && ch2InputGuess.value.length !== 0) {
    submitBtn.disabled = false;
    resetBtn.disabled = false;
    clearBtn.disabled = false;
    submitBtn.classList.remove('button-disabled');
    resetBtn.classList.remove('button-disabled');
    clearBtn.classList.remove('button-disabled');
  }  else {
    submitBtn.disabled = true;
    resetBtn.disabled = true;
    clearBtn.disabled = true;
    submitBtn.classList.add('button-disabled');
    resetBtn.classList.add('button-disabled');
    clearBtn.classList.add('button-disabled');
  }
}



// submitBtn.addEventListener('click', )

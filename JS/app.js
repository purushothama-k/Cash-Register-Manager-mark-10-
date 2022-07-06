'use strict';

const billAmountEl = document.querySelector('#bill-amount');
const cashGivenEl = document.querySelector('#cash-given');
const calculateBtnEl = document.querySelector('#calculate-btn');
const errorMessageEl = document.querySelector('#error-msg');
const numberOfNotes = document.querySelectorAll('.notesChange');
const notes = [2000, 500, 100, 20, 10, 5, 1];

calculateBtnEl.addEventListener('click', function () {
  errorMessageEl.textContent = '';
  if (Number(billAmountEl.value) > 0 || Number(cashGivenEl.value) > 0) {
    if (Number(cashGivenEl.value) >= Number(billAmountEl.value)) {
      const amountToBeReturned = cashGivenEl.value - billAmountEl.value;
      validatingTheChange(amountToBeReturned);
    } else {
      errorMessageEl.textContent = 'Do you want to work with us 😃 🍽 ?';
    }
  } else {
    errorMessageEl.textContent = 'Please enter a valid amount';
  }
});

const validatingTheChange = function (amountToBeReturned) {
  for (let i = 0; i < notes.length; i++) {
    const numberOfNotesToBeReturned = Math.trunc(amountToBeReturned / notes[i]);
    // console.log(numberOfNotesToBeReturned);

    amountToBeReturned = amountToBeReturned % notes[i];
    // console.log(amountToBeReturned);
    numberOfNotes[i].textContent = numberOfNotesToBeReturned;
  }
};

"use strict";

const billAmountEl = document.querySelector("#bill-amount");
const cashGivenEl = document.querySelector("#cash-given");
const calculateBtnEl = document.querySelector("#calculate-btn");
const errorMessageEl = document.querySelector("#error-msg");

const notes = [2000, 500, 100, 20, 10, 5, 1];

calculateBtnEl.addEventListener("click", function () {
  errorMessageEl.textContent = "";
  if (billAmountEl.value > 0) {
    if (cashGivenEl.value >= billAmountEl.value) {
      const amountToBereturned = cashGivenEl.value - billAmountEl.value;
      console.log(amountToBereturned);
    } else {
      errorMessageEl.textContent = "Do you want to work with us 😃 🍽?";
    }
  } else {
    errorMessageEl.textContent = "Please enter a valid amount";
  }
});

const validatingTheChange = function (amountToBereturned) {
  for (let i = 0; i < notes.length; i++) {
    const numberOfNotesToBeReturned = Math.trunc(amountToBereturned / notes[i]);
  }
};

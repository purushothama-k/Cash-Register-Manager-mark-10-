"use strict";

const billAmountEl = document.querySelector("#bill-amount");
const cashGivenEl = document.querySelector("#cash-given");
const calculateBtnEl = document.querySelector("#calculate-btn");
const errorMessageEl = document.querySelector("#error-msg");

// errorMessageEl.textContent = "";

calculateBtnEl.addEventListener("click", function () {
  errorMessageEl.textContent = "";
  if (billAmountEl.value > 0) {
    if (cashGivenEl.value >= billAmountEl) {
    } else {
      errorMessageEl.textContent = "Do you wanna wash plates 🍽?";
    }
  } else {
    errorMessageEl.textContent = "Please enter a valid amount";
  }
});

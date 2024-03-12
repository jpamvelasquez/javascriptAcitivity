const calc = function (param) {
  let firstNum = Number(document.querySelector("#num-first-number").value);
  let secondNum = Number(document.querySelector("#num-second-number").value);
  let total = document.querySelector("#num-total");

  if (param === "Addition") {
    let sum = firstNum + secondNum;
    total.value = sum;
  } else if (param === "Subtraction") {
    let sub = firstNum - secondNum;
    total.value = sub;
  } else if (param === "Multiplication") {
    let mul = firstNum * secondNum;
    total.value = mul;
  } else if (param === "Division") {
    let div = firstNum / secondNum;
    total.value = div.toFixed(2);
  }

  //   document.querySelector("#num-first-number").value = "";
  //   document.querySelector("#num-second-number").value = "";
};

const add = function () {
  let firstNum = Number(document.querySelector("#num-first-number").value);
  let secondNum = Number(document.querySelector("#num-second-number").value);
  let total = document.querySelector("#num-total");

  let sum = firstNum + secondNum;
  total.value = sum;
};

const division = function () {
  let firstNum = Number(document.querySelector("#num-first-number").value);
  let secondNum = Number(document.querySelector("#num-second-number").value);
  let total = document.querySelector("#num-total");

  if (secondNum !== 0) {
    let div = firstNum / secondNum;
    total.value = div;
  } else {
    total.value = "Cannot divide by zero";
  }
};

const subtract = function () {
  let firstNum = Number(document.querySelector("#num-first-number").value);
  let secondNum = Number(document.querySelector("#num-second-number").value);
  let total = document.querySelector("#num-total");

  let sub = firstNum - secondNum;
  total.value = sub;
};

const multiply = function () {
  let firstNum = Number(document.querySelector("#num-first-number").value);
  let secondNum = Number(document.querySelector("#num-second-number").value);
  let total = document.querySelector("#num-total");

  let mul = firstNum * secondNum;
  total.value = mul;
};

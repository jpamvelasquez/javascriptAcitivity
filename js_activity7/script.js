"use strict";

let add = document.querySelector(".add-grade");
let calculate = document.querySelector(".calc-grade");
let remove = document.querySelector(".remove-grade");

add.addEventListener("click", function () {
  //   alert("oks");

  let inputGrade = document.createElement("input");
  inputGrade.className = "form-control display-grade";
  inputGrade.type = "number";
  inputGrade.placeholder = "Input Grade";
  let li = document.createElement("li");
  li.className = "mt-2 p-2";
  li.append(inputGrade);
  document.querySelector(".li-parent").append(li);
});

calculate.addEventListener("click", function () {
  //alert('oks')
  let grades = document.querySelectorAll(".display-grade");
  let total = 0;
  let gradeCount = 0;

  grades.forEach(function (el) {
    if (el.value !== "") {
      total += Number(el.value);
      gradeCount++;
      console.log(total);
      console.log(gradeCount);
    }
  });

  let averageGrade = total / gradeCount;
  document.querySelector("span").innerText = averageGrade.toFixed(2);
});

remove.addEventListener("click", function () {
  //alert('oks')
  let grades = document.querySelectorAll(".display-grade");

  let lastElement = document.querySelector("li:last-child");
  if (lastElement) {
    lastElement.remove();
  }

  grades = document.querySelectorAll(".display-grade");

  let total = 0;
  let gradeCount = 0;

  grades.forEach(function (el) {
    if (el.value.trim() !== "") {
      total += Number(el.value);
      gradeCount++;
    }
  });

  if (gradeCount === 0) {
    document.querySelector("span").innerText = "0.00";
    return;
  }

  let averageGrade = total / gradeCount;
  document.querySelector("span").innerText = averageGrade.toFixed(2);
});

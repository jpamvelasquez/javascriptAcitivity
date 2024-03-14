"use strict";

let logHours = document.getElementById("e.log");
let updateIndex = -1;
let info = [];

logHours.addEventListener("click", function () {
  //   alert("okS");

  let employeeId = document.getElementById("e.id").value;
  let employeeName = document.getElementById("e.name").value;
  let employeeHours = document.getElementById("e.hours").value;

  if (!employeeHours || !employeeName || !employeeId) {
    alert("Invalid Input");
  } else if (updateIndex !== -1) {
    let originalEmployeeId = info[updateIndex][0];
    info[updateIndex] = [originalEmployeeId, employeeName, employeeHours];

    updateIndex = -1;
    clearForm();
  } else {
    if (idExist(employeeId)) {
      alert("Employee ID already exists");
      return;
    }
    info.push([employeeId, employeeName, employeeHours]);
    clearForm();
  }
  console.log(info);
  displayInfo();

  document.querySelector(".updating").innerText = "Log Hours";
});

function displayInfo() {
  let list = "";
  let total = 0;

  for (let x = 0; x < info.length; x++) {
    list += `<tr>
            <td> ${info[x][0]} </td> 
            <td> ${info[x][1]} </td> 
            <td> ${info[x][2]} </td> 
            <td> <button class='btn btn-danger removes' onclick='remove(${x})'> Remove</button> <button class='btn  btn-success' onclick='update(${x})'> Edit  </button>  </td>
          
            </tr>`;
    total += Number(info[x][2]);
  }
  document.querySelector(".tr-row").innerHTML = list;
  document.querySelector(".total-hours").innerHTML = total;
}

function remove(index) {
  info.splice(index, 1);
  displayInfo();
}

function update(index) {
  updateIndex = index;
  // let originalId = (document.getElementById("e.id").value = info[index][0]);
  document.getElementById("e.id").value = info[index][0];
  document.getElementById("e.name").value = info[index][1];
  document.getElementById("e.hours").value = info[index][2];

  document.querySelector(".updating").innerText = "Update Form";
}

function idExist(id) {
  for (let i = 0; i < info.length; i++) {
    if (info[i][0] === id) {
      return true;
    }
  }
  return false;
}

function clearForm() {
  document.getElementById("e.id").value = "";
  document.getElementById("e.name").value = "";
  document.getElementById("e.hours").value = "";
}

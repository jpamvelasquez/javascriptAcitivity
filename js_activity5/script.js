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
    info[updateIndex] = [employeeId, employeeName, employeeHours];

    updateIndex = -1;

    document.getElementById("e.id").value = "";
    document.getElementById("e.name").value = "";
    document.getElementById("e.hours").value = "";
  } else {
    info.push([employeeId, employeeName, employeeHours]);
    document.getElementById("e.id").value = "";
    document.getElementById("e.name").value = "";
    document.getElementById("e.hours").value = "";
  }
  console.log(info);
  displayInfo();
  document.getElementById("e.id").disabled = false;
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
  document.getElementById("e.id").value = info[index][0];
  document.getElementById("e.name").value = info[index][1];
  document.getElementById("e.hours").value = info[index][2];
  document.getElementById("e.id").disabled = true;
}

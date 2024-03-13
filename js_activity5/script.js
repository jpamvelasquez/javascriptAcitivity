let logHours = document.getElementById("e.log");

let info = [];

logHours.addEventListener("click", function () {
  //   alert("okS");

  let employeeId = document.getElementById("e.id").value;
  let employeeName = document.getElementById("e.name").value;
  let employeeHours = document.getElementById("e.hours").value;

  if (!employeeHours || !employeeName || !employeeId) {
    alert("Invalid Input");
  } else {
    info.push([employeeId, employeeName, employeeHours]);
    document.getElementById("e.id").value = "";
    document.getElementById("e.name").value = "";
    document.getElementById("e.hours").value = "";
  }
  console.log(info);
  displayInfo();
});

function displayInfo() {
  let list = "";
  let total = 0;

  for (let x = 0; x < info.length; x++) {
    list += `<tr>
            <td> ${info[x][0]} </td> 
            <td> ${info[x][1]} </td> 
            <td> ${info[x][2]} </td> 
            <td> <button class='btn btn-danger removes' onclick='remove(${x})'> Remove</button> </td>
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

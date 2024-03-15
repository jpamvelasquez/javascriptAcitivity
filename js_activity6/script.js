"use strict";

// let logHours = document.getElementById("e.log");
// let updateIndex = -1;
// let info = [];

// logHours.addEventListener("click", function () {
//   //   alert("okS");

//   let employeeId = document.getElementById("e.id").value;
//   let employeeName = document.getElementById("e.name").value;
//   let employeeHours = document.getElementById("e.hours").value;

//   if (!employeeHours || !employeeName || !employeeId) {
//     alert("Invalid Input");
//   } else if (updateIndex !== -1) {
//     let originalEmployeeId = info[updateIndex][0];
//     info[updateIndex] = [originalEmployeeId, employeeName, employeeHours];

//     updateIndex = -1;
//     clearForm();
//   } else {
//     if (idExist(employeeId)) {
//       alert("Employee ID already exists");
//       return;
//     }
//     info.push([employeeId, employeeName, employeeHours]);
//     clearForm();
//   }
//   console.log(info);
//   displayInfo();

//   document.querySelector(".updating").innerText = "Log Hours";
// });

// function displayInfo() {
//   let list = "";
//   let total = 0;

//   for (let x = 0; x < info.length; x++) {
//     list += `<tr>
//             <td> ${info[x][0]} </td>
//             <td> ${info[x][1]} </td>
//             <td> ${info[x][2]} </td>
//             <td> <button class='btn btn-danger removes' onclick='remove(${x})'> Remove</button> <button class='btn  btn-success' onclick='update(${x})'> Edit  </button>  </td>

//             </tr>`;
//     total += Number(info[x][2]);
//   }
//   document.querySelector(".tr-row").innerHTML = list;
//   document.querySelector(".total-hours").innerHTML = total;
// }

// function remove(index) {
//   info.splice(index, 1);
//   displayInfo();
//   clearForm();
//   document.querySelector(".updating").innerText = "Log Hours";
// }

// function update(index) {
//   updateIndex = index;
//   // let originalId = (document.getElementById("e.id").value = info[index][0]);
//   document.getElementById("e.id").value = info[index][0];
//   document.getElementById("e.name").value = info[index][1];
//   document.getElementById("e.hours").value = info[index][2];

//   document.querySelector(".updating").innerText = "Update Form";
// }

// function idExist(id) {
//   for (let i = 0; i < info.length; i++) {
//     if (info[i][0] === id) {
//       return true;
//     }
//   }
//   return false;
// }

// function clearForm() {
//   document.getElementById("e.id").value = "";
//   document.getElementById("e.name").value = "";
//   document.getElementById("e.hours").value = "";
// }

let addItem = document.getElementById("add-item");

let items = [];
let indexUpdate = -1;

addItem.addEventListener("click", function () {
  let sku = document.getElementById("sku").value;
  let itemName = document.getElementById("item-name").value;
  let itemPhoto = document.getElementById("item-photo").value;
  let itemPrice = document.getElementById("item-price").value;
  //   alert("oks");

  let objProduct = {
    itemsSku: sku,
    itemsName: itemName,
    itemsPhoto: itemPhoto,
    itemsPrice: itemPrice,
    itemsQuantity: 1,
  };
  //incomplete form
  if (!sku || !itemName || !itemPhoto || !itemPrice) {
    alert("Complete the Form");
    return;
  } else if (indexUpdate !== -1) {
    let originalSku = items[indexUpdate].itemsSku;
    items[indexUpdate] = {
      itemsSku: originalSku,
      itemsName: itemName,
      itemsPhoto: itemPhoto,
      itemsPrice: itemPrice,
      itemsQuantity: 1,
    };
    indexUpdate = -1;
    clearForm();
  } else {
    if (isExist(sku)) {
      alert("SKU Already Exist");
      return;
    }
    items.push(objProduct);
    console.log(items);
    clearForm();
  }

  displayItems();
  console.log(items);
});

//displaying Items
function displayItems() {
  let list = "";

  for (let x = 0; x < items.length; x++) {
    list += `<div class="col-md-4 col-sm-6">
        <div class="card">
            <div class="img-resize"><img src="${items[x].itemsPhoto}" /></div>
            <div class="card-body">
            <p>${items[x].itemsName}</p>
            <p class="card-title">
                Amount : <span class="price">${items[x].itemsPrice}</span>
            </p>

            <div class="cart-button d-flex">
                <button class="btn btn-success" onclick = 'cartF(${x})'>Cart</button>
                <button class="btn btn-warning" onclick = 'modifyF(${x})'>Modify</button>
                <button class="btn btn-danger" onclick = 'removeF (${x})'>Remove</button>
            </div>
            </div>
        </div>
        </div>`;
  }
  document.getElementById("displayAll").innerHTML = list;
}
//SKU EXIST
function isExist(id) {
  for (let i = 0; i < items.length; i++) {
    if (items[i].itemsSku === id) {
      return true;
    }
  }
  return false;
}

//ADDING TO CART PLUS 1
// function alreadyAdded() {
//   for (let i = 0; i < items.length; i++) {
//     if (items[i].itemsSku === sku) {
//       return true;
//     }
//   }
//   return false;
// }

//Clearing the form
function clearForm() {
  document.getElementById("sku").value = "";
  document.getElementById("item-name").value = "";
  document.getElementById("item-photo").value = "";
  document.getElementById("item-price").value = "";
}

//adding to cart
function cartF(i) {
  let list = "";

  for (let x = 0; x < items.length; x++) {
    list += ` <tr>
    <td>${x + 1}</td>
    <td class="photo-circle"><img src="${items[x].itemsPhoto}" /></td>
    <td>${items[x].itemsSku}</td>
    <td>${items[x].itemsName}</td>
    <td>${items[x].itemsPrice}</td>
    <td>${items[x].itemsQuantity}</td>
    <td>${items[x].itemsPrice * items[x].itemsQuantity}</td>
    <td>
      <button class="btn btn-danger removes" onclick='minusF(${x})'>MINUS</button>
      <button class="btn btn-warning" onclick='plusF(${x})'>PLUS</button>
    </td>
  </tr>`;
  }
  document.querySelector(".tr-row").innerHTML = list;
  //   items[i].itemsQuantity++;
  //   displayItems();
}

//removing from list
function removeF(index) {
  items.splice(index, 1);
  displayItems();
}

//Modify the Items
function modifyF(index) {
  indexUpdate = index;

  document.getElementById("sku").value = items[index].itemsSku;
  document.getElementById("item-name").value = items[index].itemsName;
  document.getElementById("item-photo").value = items[index].itemsPhoto;
  document.getElementById("item-price").value = items[index].itemsPrice;
}

// function plusF(i) {
//   items[i].itemsQuantity++;

//   console.log(items[i].itemsQuantity);
//   let list = "";

//   for (let x = 0; x < items.length; x++) {
//     list += ` <tr>
//     <td>${x + 1}</td>
//     <td class="photo-circle"><img src="${items[x].itemsPhoto}" /></td>
//     <td>${items[x].itemsSku}</td>
//     <td>${items[x].itemsName}</td>
//     <td>${items[x].itemsPrice}</td>
//     <td>${items[x].itemsQuantity}</td>
//     <td>${items[x].itemsPrice * items[x].itemsQuantity}</td>
//     <td>
//       <button class="btn btn-danger removes" onclick='minusF(${x})'>MINUS</button>
//       <button class="btn btn-warning" onclick='plusF(${x})'>PLUS</button>
//     </td>
//   </tr>`;
//   }
//   document.querySelector(".tr-row").innerHTML = list;
// }

// function minusF(x) {
//   items[x].itemsQuantity--;
//   console.log(items[x].itemsQuantity);
//   if (items[x].itemsQuantity === 0) {
//     items.splice(x, 1);
//   }
//   let list = "";

//   for (let x = 0; x < items.length; x++) {
//     list += ` <tr>
//     <td>${x + 1}</td>
//     <td class="photo-circle"><img src="${items[x].itemsPhoto}" /></td>
//     <td>${items[x].itemsSku}</td>
//     <td>${items[x].itemsName}</td>
//     <td>${items[x].itemsPrice}</td>
//     <td>${items[x].itemsQuantity}</td>
//     <td>${items[x].itemsPrice * items[x].itemsQuantity}</td>
//     <td>
//       <button class="btn btn-danger removes" onclick='minusF(${x})'>MINUS</button>
//       <button class="btn btn-warning" onclick='plusF(${x})'>PLUS</button>
//     </td>
//   </tr>`;
//   }
//   document.querySelector(".tr-row").innerHTML = list;
// }

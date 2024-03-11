const multiply = document.querySelector(".ops-mul");

multiply.addEventListener("click", function () {
  let rows = Number(document.querySelector(".type-row").value);
  let cols = Number(document.querySelector(".type-col").value);

  let spacing = "";

  for (let i = 1; i <= rows; i++) {
    for (let j = 1; j <= cols; j++) {
      spacing +=
        "<span class='num-space' style='height:4rem; width:4rem'>" +
        i * j +
        " " +
        "</span>";
    }
    spacing += "<div class='margin'></div>";
  }

  document.querySelector(".output-here").innerHTML = spacing;
  document.querySelector(".type-row").value = "";
  document.querySelector(".type-col").value = "";
});

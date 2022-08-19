const container = document.getElementById("container");
const customButton = document.getElementById("personaliceBtn");

function makeRows(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (i = 0; i < (rows * cols); i++) {
      let cell = document.createElement("div");
      container.appendChild(cell).className = "grid-item";
      hoverColor();
    };
  };
 
function hoverColor() {
    let items = document.querySelectorAll('.grid-item');
    items.forEach(item => {
        item.addEventListener('mouseover', () => {
        item.style.backgroundColor = "aqua";
        });
    });
}
function reset() {
    document
    .querySelectorAll(".grid-item")
    .forEach((e) => e.parentNode.removeChild(e));
}
function newGrid(){ 
    reset();
    userRows = prompt("Enter number of rows: ");
    userColumns = prompt("Enter number of columns: ");
    makeRows(userRows,userColumns);
}
makeRows(16,16)
const gridContainer = document.getElementById("gridContainer");

for (let i = 1; i <= 81; i++) {
  const div = document.createElement("div");
  div.id = `cell_${i}`;
  div.style.backgroundColor = "white";
  gridContainer.appendChild(div);
}

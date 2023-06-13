const animatedDiv = document.getElementById("animation-box");
let x = 0;
let y = 0;
let scale = 1;
let rotate = 0;
let sec = 3;

xlabel = document.getElementById("anim-x-label");
ylabel = document.getElementById("anim-y-label");
scalelabel = document.getElementById("anim-scale-label");
rotatelabel = document.getElementById("anim-rotation-label");
seclabel = document.getElementById("anim-duration-label");

xlabel.innerText = `X: ${x}%`;
ylabel.innerText = `Y: ${y}%`;
scalelabel.innerText = `Scale: ${scale}`;
rotatelabel.innerText = `Rotate: ${rotate}deg`;
seclabel.innerText = `Duration: ${sec}s`;

function changeHandler(event) {
  let inputDiv = event.target;
  let inputValue = inputDiv.value;
  inputDiv.style.transition = `transform ${sec}s`;
  if (inputDiv.name === "anim-x") {
    x = inputValue;
    xlabel.innerText = `X: ${x}%`;
    doTransform(x, y, scale, rotate);
  } else if (inputDiv.name === "anim-y") {
    y = inputValue;
    ylabel.innerText = `Y: ${y}%`;
    doTransform(x, y, scale, rotate);
  } else if (inputDiv.name === "anim-scale") {
    scale = inputValue;
    scalelabel.innerText = `Scale: ${scale}`;
    doTransform(x, y, scale, rotate);
  } else if (inputDiv.id === "anim-rotation") {
    rotate = inputValue;
    rotatelabel.innerText = `Rotate: ${rotate}deg`;
    doTransform(x, y, scale, rotate);
  } else if (inputDiv.id === "anim-duration") {
    sec = inputValue;
    seclabel.innerText = `Duration: ${sec}s`;
    inputDiv.style.transition = `transform ${sec}s`;
  }
}

function doTransform(x, y, scale, rotate) {
  animatedDiv.style.transform = `translate(${x}%,${y}%) scale(${scale}) rotate(${rotate}deg)`;
}

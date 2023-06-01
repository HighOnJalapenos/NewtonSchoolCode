const outputDiv = document.getElementById("container");
const powerBtn = document.getElementById("power-off");
const lights = document.querySelectorAll(".dot");

function indicator(lights) {
  lights.forEach((element) => {
    element.classList.toggle("clicked");

    setTimeout(() => {
      element.classList.toggle("clicked");
    }, 500);
  });
}

document.querySelector(".block-navigate").addEventListener("click", (e) => {
  indicator(lights);
  if (e.target.className === "off") {
    outputDiv.textContent = "";
    e.target.className = "on";
  } else if (e.target.className === "on") {
    outputDiv.textContent = "Power Off";
    e.target.className = "off";
  }
});

document.querySelector(".block-channel").addEventListener("click", (e) => {
  indicator(lights);
  const channel = e.target.textContent;
  if (!isNaN(channel)) {
    if (powerBtn.className === "on") {
      outputDiv.textContent = channel;
    }
  }
});

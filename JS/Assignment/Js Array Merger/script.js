const arr1 = document.getElementById("1");
const arr2 = document.getElementById("2");
const btn1 = document.getElementById("add-1");
const btn2 = document.getElementById("add-2");
const result = document.getElementById("result");
const error = document.getElementById("error");

const firstArray = [];
const secondArray = [];

btn1.addEventListener("click", () => {
  firstArray.length = 0;
  let flag = true;
  let inputArray = arr1.value.split(",");
  let outputDiv = document.getElementById("disp-1");
  outputDiv.textContent = "";
  flag = inputArray.every((element) => {
    return !isNaN(element);
  });

  if (flag) {
    firstArray.push(...inputArray);
    outputDiv.textContent = `[${firstArray}]`;
    error.classList.add("d-none");
  } else {
    error.classList.remove("d-none");
  }
});

btn2.addEventListener("click", () => {
  secondArray.length = 0;
  let flag = true;
  let inputArray = arr2.value.split(",");
  let outputDiv = document.getElementById("disp-2");
  outputDiv.textContent = "";
  flag = inputArray.every((element) => {
    return !isNaN(element);
  });

  if (flag) {
    secondArray.push(...inputArray);
    outputDiv.textContent = `[${secondArray}]`;
    error.classList.add("d-none");
  } else {
    error.classList.remove("d-none");
  }
});

document.getElementById("merge").addEventListener("click", () => {
  const mergedArray = [...firstArray, ...secondArray];
  result.textContent = `[${mergedArray}]`;
});

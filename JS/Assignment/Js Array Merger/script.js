
const arr1 = document.getElementById('1');
const arr2 = document.getElementById('2');
const btn1 = document.getElementById('add-1');
const btn2 = document.getElementById('add-2');

const firstArray = [];
const secondArray = [];

btn1.addEventListener('click', () => {
    firstArray.length = 0;
    let flag = true;
    let inputArray = arr1.value.split(",");
    let outputDiv = document.getElementById("disp-1");
    inputArray.forEach(element => {
        if(isNaN(element)){
            outputDiv.textContent = "Wrong Input!";
            flag = false;
            break;
        } else{
            firstArray.push(+element);
        }
    });

    if(flag) outputDiv.textContent = `[${firstArray}]`;
})

btn2.addEventListener('click', () => {
    firstArray.length = 0;
    let flag = true;
    let inputArray = arr2.value.split(",");
    let outputDiv = document.getElementById("disp-2");
    inputArray.forEach(element => {
        if(isNaN(element)){
            outputDiv.textContent = "Wrong Input!";
            flag = false;
            break;
        } else{
            secondArray.push(+element);
        }
    });
    
    if(flag) outputDiv.textContent = `[${secondArray}]`;
})

document.getElementById('merge').addEventListener('click', () => {
})
// let a


// var b
// console.log("working")
// let c
// var d
// const e = 15;

// f = 20;
// var f = 30
// console.log(f)

// const array = [1, 2, [1,2,3,4], 'abc']

// for(item in array){
//     console.log()
// }

// function addition(arr){
//     let sum = 0;
//     for(let value of arr){
//         let num = value
//         if(typeof num == 'string'){
//             num = +num
//         }
//         if(typeof num == 'number'){
//             sum = sum + num;
//         }
//         // if(typeof value == 'number'){
//         //     sum = sum + value
//         // }
//     }
//     console.log(sum)
// }

// let arr = [1,2,3,4,5, '6', '7', undefined, true, false, 3, '6']
// addition(arr)

// addition(2,4)
// functionName(2,4)
// let a = 12
// let b = true
// addition(a,b)
// functionName(a,b)

// function functionName(a,b){
//     console.log("the value of a is ", a, "the value of b is ", b)
// }

// function addNumber(arr){
//     let sum = 0;
//     for(let value of arr){
//         if(isNaN(value) || typeof value == 'boolean'){
//             continue;
//         }
//         sum = sum + (+value)
//     }
//     console.log(sum)
// }

// const arr = [1, 2, 3, 4, 5, null, undefined, "", '1']
// addNumber(arr)

// console.log('function' ,callme);

// function callme (a) {
// var b =30;
// return b*a;
// }

// var c = callme(3);
// console.log(callme(5))

//console.log(call)

// var scopeFinal = "final";

// {
//     var scopeFinal = "final1";
//     let block = "Scope";
//     console.log(block) //
//     console.log(scopeFinal) //
// }

// console.log(scopeFinal) //
// console.log(block); //

// const printMultipleOfArray = (value, index, array) => {
//     console.log("the data in the array multiplied by 2 is ", value*2);
//     return value*2;
// }

// function myForEach(callBackFunc, array){
//    for(let i=0; i<array.length; i++){
//         callBackFunc(array[i], i, array);
//    }
// }

// const arr = [1, 2, 3, 4, 5];

//arr.forEach(printMultipleOfArray);  //-> This is forEach that is inbuilt
//myForEach(printMultipleOfArray, arr); //-> This one is made by us

// function myMap(callBackFunc, array){
//     let res = [];
//     for(let i=0; i<array.length; i++){
//         res.push(callBackFunc(array[i], i, array));
//     }
//     return res;
// }

// const myMapArray = myMap(printMultipleOfArray, arr);
// console.log(myMapArray);

// const defaultMapArray = arr.map(printMultipleOfArray);
// console.log(defaultMapArray);

// let a = 50;
// var b = 40;

// {
// console.log(b);
// console.log(a);
// var b = 90;
// let a = 200;

// function call() {
// console.log(b);
// console.log(a);
// let b = 55;
// var a = 65;
// console.log(a);
// console.log(b);
// }

// call();
// console.log(a);
// console.log(b);

// }

// console.log(a);

// console.log(b);

let arr = [1,1,1,1,1,2,2,2,2,4,4,44,44,44,5,5,5,5];

// let obj = arr.reduce((accum, value)=>{
//     if(!accum.hasOwnProperty(value)){
//         accum[value] = 1;
//     } else {
//         accum[value]++;
//     }
//     return accum;
// }, {})

// console.log(obj);

function myReduce(callBackFn, array, accum){
    if(accum===undefined){
        accum = array[0];
        for(let i=1; i<array.length; i++){
            accum = callBackFn(accum, array[i]);
        }
    }
    for(let i=0; i<array.length; i++){
        accum = callBackFn(accum, array[i]);
    }
    return accum;
}

function makeMap(accum, value){
    if(!accum.hasOwnProperty(value)){
        accum[value] = 1;
    } else {
        accum[value]++;
    }
    return accum;
}

// let obj = myReduce(makeMap, arr);
let obj = arr.reduce(makeMap, "hi");
console.log(obj);
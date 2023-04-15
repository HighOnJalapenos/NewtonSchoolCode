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

var scopeFinal = "final";

{
    var scopeFinal = "final1";
    let block = "Scope";
    console.log(block) //
    console.log(scopeFinal) //
}

console.log(scopeFinal) //
console.log(block); //

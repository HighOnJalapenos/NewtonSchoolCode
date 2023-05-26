
// async function kanyeQuote(){
//     const response = await fetch('https://api.kanye.rest/');
//     console.log(response);
//     const promise = await response.json();
//     console.log(promise);

//     const{quote} = promise;
//     console.log(quote);
// }

// function addToDom(){
//     const elem = document.createElement("div");
    
// }

// kanyeQuote();

// function promiseMe(time, data) {
//     const promise1 = new Promise((data)=>{
//         setTimeout(()=>{
//             return data;
//         }, time);
//     });

//     return promise1;
// }

// promiseMe(200, 'hi').then(data=>{
//     console.log(data) // prints hi
// })

// console.log("start");

// setTimeout(() => {
// console.log("setTimeout");
// }, 0);

// Promise.resolve().then(() => {
// console.log("resolve");
// });

// console.log("end");

// const promise = new Promise((resolve, reject) => {
// console.log(1);
// setTimeout(() => {
// console.log("timerStart");
// resolve("success"); //
// console.log("timerEnd");
// }, 0);
// console.log(2);
// });

// promise.then((res) => {
// console.log(res);
// });

// setTimeout(() => {
// console.log("Are!!");
// }, 0);

// console.log(4);

const timer1 = setTimeout(() => {
console.log("timer1");
    const promise1 = Promise.resolve().then(() => {
        console.log("promise1");
    });
}, 0);

const timer2 = setTimeout(() => {
    console.log("timer2");
}, 0);
    
console.log("start");
    
const promise1 = Promise.resolve().then(() => {
    console.log("promise1");
    const timer2 = setTimeout(() => {
    console.log("timer2");
    }, 0);  
});
    
console.log("end");


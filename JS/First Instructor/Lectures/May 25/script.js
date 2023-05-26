
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

function promiseMe(time, data) {
    const promise1 = new Promise((data)=>{
        setTimeout(()=>{
            return data;
        }, time);
    });

    return promise1;
}

promiseMe(200, 'hi').then(data=>{
    console.log(data) // prints hi
})
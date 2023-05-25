
async function kanyeQuote(){
    const response = await fetch('https://api.kanye.rest/');
    console.log(response);
    const promise = await response.json();
    console.log(promise);

    const{quote} = promise;
    console.log(quote);
}

function addToDom(){
    const elem = document.createElement("div");
    
}

kanyeQuote();
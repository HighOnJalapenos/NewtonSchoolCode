console.log("hello");

function arithmatic(a,b, action){
    
    try{
        let res;
        if(action === "add"){
            res = a + b;
        } else if(action === "sub"){
            res = a - b;
        } else if(action === "multiply"){
            res = a * b;
        } else {
            throw Error("Oprator used is not available")
        }
        return res;
    }

    catch(error){
        console.log("error is there");
        if(error.message === "Oprator used is not available"){
            console.log("add, sub, multiply are the only ones available");
        }
    }

}

let res1 = arithmatic(1,2,"add");
console.log(res1);

let res2 = arithmatic(1,2,"sub");
console.log(res2);

let res3 = arithmatic(1,2,"multiply");
console.log(res3);

let res4 = arithmatic(1,2,"divide");
console.log(res4);
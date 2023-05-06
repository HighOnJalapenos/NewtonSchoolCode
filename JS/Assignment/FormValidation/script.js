
function ageChange(e){
    const age = e.target.value;
    const errorDiv = document.getElementById("errors-holder");

    if(age<5){
        errorDiv.innerText = "You need to be atleast 5 years old to participate";
        document.querySelector("button").disabled = true;
    } else {
        errorDiv.innerText = "";
        document.querySelector("button").disabled = false;
    }
}

function handleSubmit(e){
    e.preventDefault();
    const checkBox = document.getElementById("q_owns_phone");
    const age = document.getElementById("q_age").value;
    const errorDiv = document.getElementById("errors-holder");
    const resDiv = document.getElementById("result-holder");
    if(age==0){
        errorDiv.innerText = "Please choose age";
        return;
    }

    if(checkBox.checked){
        if(age<13){
            resDiv.innerText = "You are too young to have a phone";
        } else {
            resDiv.innerText = "Use your phone in moderation";
        }
    } else {
        if(age<13){
            resDiv.innerText = "You will get a phone soon";
        } else {
            resDiv.innerText = "You should get a phone";
        }
    }
}
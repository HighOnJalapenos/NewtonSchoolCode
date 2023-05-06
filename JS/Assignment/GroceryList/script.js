
function calcTotal() {
    const totalPrice = document.querySelector("[data-ns-test=grandTotal]");
    if(totalPrice){
        totalPrice.parentElement.remove();
    }
    const arr = Array.from(document.querySelectorAll("[data-ns-test]"));

    let sum = 0;
    arr.forEach((object)=>{
        sum = sum + Number(object.textContent);
    });

    const newRowElem = document.createElement("tr");
    const initialtdElement = document.createElement("td");
    initialtdElement.innerText = "Grand Total";
    const secondtdElement = document.createElement("td");
    secondtdElement.innerText = sum;
    secondtdElement.setAttribute('data-ns-test', 'grandTotal');
    newRowElem.insertAdjacentElement("afterbegin", secondtdElement);
    newRowElem.insertAdjacentElement("afterbegin", initialtdElement);


    let tableBody = document.querySelector("tbody");
    tableBody.insertAdjacentElement("beforeend", newRowElem);
}
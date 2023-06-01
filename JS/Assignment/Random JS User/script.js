const nameDiv = document.querySelector(".default-data");
const imageDiv = document.getElementsByTagName("img");
const ageBtn = document.querySelector("[data-attr=age");
const emailBtn = document.querySelector("[data-attr=email");
const phoneBtn = document.querySelector("[data-attr=phone");
const additionalDataDiv = document.querySelector(".additional-info");
let userData;

async function getData() {
  additionalDataDiv.textContent = "";
  const data = await fetch("https://randomuser.me/api/");
  const data1 = await data.json();
  const fullName =
    data1.results[0].name.first + " " + data1.results[0].name.last;
  const photo = data1.results[0].picture.large;
  nameDiv.textContent = fullName;
  imageDiv[0].src = photo;
  userData = data1;
}

getData();
document.getElementById("getUser").addEventListener("click", getData);

ageBtn.addEventListener("click", () => {
  additionalDataDiv.textContent = userData.results[0].dob.age;
});

emailBtn.addEventListener("click", () => {
  additionalDataDiv.textContent = userData.results[0].email;
});

phoneBtn.addEventListener("click", () => {
  additionalDataDiv.textContent = userData.results[0].phone;
});

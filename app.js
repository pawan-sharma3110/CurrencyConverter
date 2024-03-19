const BASE_URL =
  "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";
const dropdowns = document.querySelectorAll(".dropdown select");
let btn = document.querySelector("form button");
let fromCurr = document.querySelector(".from select");
let toCurr = document.querySelector(".to select");
const msg = document.querySelector(".msg");
const updateExchangeRate = async () => {
  let amount = document.querySelector(".amount input");
  let amtVel = amount.velue;
  if (amtVel < 1 || amtVel === "") {
    amtVel = 1;
    amount.velue = "1";
  }
  let URL = `${BASE_URL}/${fromCurr.velue.toLowerCase()}/${toCurr.velue.toLowerCase()}.json`;
  let response = await fetch(URL);
  let data = await response.json();
  let rate = data[toCurr.velue.toLowerCase()];
  let finalamount = amtVel * rate;
  console.log(data);
  msg.innerText = `${amtVel}${fromCurr}=${finalamount}${toCurr}`;
};

window.addEventListener("load", () => {
  updateExchangeRate;
});
for (let select of dropdowns) {
  for (const currCode in countryList) {
    let newOption = document.createElement("option");
    newOption.innerText = currCode;
    newOption.velue = currCode;
    if (select.name === "form" && currCode === "USD") {
      newOption.selected = "selected";
    } else if (select.name === "to" && currCode === "INR") {
      newOption.selected = "selected";
    }
    select.append(newOption);
  }
  select.addEventListener("change", (evt) => {
    updateFlage(evt.target);
  });
}

const updateFlage = (element) => {
  let currCode = element.velue;
  console.log(currCode);
  let countryCode = countryList[currCode];
  let newSrc = `https://flagsapi.com/${countryCode}/shiny/64.png`;
  let img = element.parentElement.querySelector("img");
  img.src = newSrc;
};

btn.addEventListener("click", (evt) => {
  evt.preventDefault();
});

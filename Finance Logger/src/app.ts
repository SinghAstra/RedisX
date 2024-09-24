let form = document.querySelector(".new-item-form") as HTMLFormElement;
let type = document.querySelector("#type") as HTMLSelectElement;
let toFrom = document.querySelector("#toFrom") as HTMLInputElement;
let details = document.querySelector("#details") as HTMLInputElement;
let amount = document.querySelector("#amount") as HTMLInputElement;
import Invoice from "./models/Invoice";

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let formData = {
    [type.name]: type.value,
    [toFrom.name]: toFrom.value,
    [details.name]: details.value,
    [amount.name]: amount.value,
  };
  console.log("formData is ", formData);
});

let invoice = new Invoice("mario", "web development", 200);
console.log("invoice is ", invoice);

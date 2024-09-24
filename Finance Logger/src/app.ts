let form = document.querySelector(".new-item-form") as HTMLFormElement;
let type = document.querySelector("#type") as HTMLSelectElement;
let toFrom = document.querySelector("#toFrom") as HTMLInputElement;
let details = document.querySelector("#details") as HTMLInputElement;
let amount = document.querySelector("#amount") as HTMLInputElement;
import { HasFormat } from "./interface/HasFormat";
import Invoice from "./models/Invoice";
import Payment from "./models/Payment";

let docs: HasFormat[] = [];

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let formData = {
    [type.name]: type.value,
    [toFrom.name]: toFrom.value,
    [details.name]: details.value,
    [amount.name]: amount.value,
  };
  let invoiceOrPayment: HasFormat;
  if (type.value === "invoice") {
    invoiceOrPayment = new Invoice(
      formData.toFrom,
      formData.details,
      parseFloat(formData.amount)
    );
  } else {
    invoiceOrPayment = new Payment(
      formData.toFrom,
      formData.details,
      parseFloat(formData.amount)
    );
  }
  docs.push(invoiceOrPayment);
  console.log("docs is ", docs);
});

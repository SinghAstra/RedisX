"use strict";
let form = document.querySelector(".new-item-form");
let type = document.querySelector("#type");
let toFrom = document.querySelector("#toFrom");
let details = document.querySelector("#details");
let amount = document.querySelector("#amount");
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
class Invoice {
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `Invoice for ${this.client}:\nDetails: ${this.details}\nAmount: $${this.amount.toFixed(2)}`;
    }
}
const invOne = new Invoice("mario", "Web Development", 250);
console.log("invOne is ", invOne);

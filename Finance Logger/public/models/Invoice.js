export default class Invoice {
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `Invoice for ${this.client}:\nDetails: ${this.details}\nAmount: $${this.amount.toFixed(2)}`;
    }
}

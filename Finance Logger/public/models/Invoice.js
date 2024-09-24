export default class Invoice {
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `Invoice of $${this.amount.toFixed(2)}  by ${this.client} for ${this.details}`;
    }
}

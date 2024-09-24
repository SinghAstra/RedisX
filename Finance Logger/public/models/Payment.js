export default class Payment {
    constructor(recipient, details, amount) {
        this.recipient = recipient;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `Paid $${this.amount.toFixed(2)} to ${this.recipient} for ${this.details} `;
    }
}

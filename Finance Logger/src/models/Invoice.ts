export default class Invoice {
  client: string;
  details: string;
  amount: number;
  constructor(client: string, details: string, amount: number) {
    this.client = client;
    this.details = details;
    this.amount = amount;
  }
  format() {
    return `Invoice for ${this.client}:\nDetails: ${
      this.details
    }\nAmount: $${this.amount.toFixed(2)}`;
  }
}

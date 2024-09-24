import { HasFormat } from "../interface/HasFormat";

export default class Payment implements HasFormat {
  readonly recipient: string;
  readonly details: string;
  readonly amount: number;
  constructor(recipient: string, details: string, amount: number) {
    this.recipient = recipient;
    this.details = details;
    this.amount = amount;
  }
  format() {
    return `Paid $${this.amount.toFixed(2)} to ${this.recipient} for ${
      this.details
    } `;
  }
}

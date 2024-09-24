import { HasFormat } from "../interface/HasFormat";

export default class Invoice implements HasFormat {
  readonly client: string;
  readonly details: string;
  readonly amount: number;
  constructor(client: string, details: string, amount: number) {
    this.client = client;
    this.details = details;
    this.amount = amount;
  }
  format() {
    return `Invoice of $${this.amount.toFixed(2)}  by ${this.client} for ${
      this.details
    }`;
  }
}

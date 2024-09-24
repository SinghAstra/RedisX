import { HasFormat } from "../interface/HasFormat.js";

export default class Invoice implements HasFormat {
  constructor(
    readonly client: string,
    readonly details: string,
    readonly amount: number
  ) {}
  format() {
    return `Invoice of $${this.amount.toFixed(2)}  by ${this.client} for ${
      this.details
    }`;
  }
}

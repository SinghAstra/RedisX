import { HasFormat } from "../interface/HasFormat.js";

export class ListTemplate {
  constructor(private container: HTMLUListElement) {}
  render(item: HasFormat, heading: string) {
    const li = document.createElement("li");
    const h4 = document.createElement("h4");
    const p = document.createElement("p");
    h4.innerText = heading;
    p.innerText = item.format();
    li.append(h4);
    li.append(p);
    this.container.append(li);
  }
}

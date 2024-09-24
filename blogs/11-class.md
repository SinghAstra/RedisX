# Classes in TypeScript

TypeScript enhances JavaScript’s class system by adding strict typing, access modifiers, and more. Here’s a look at how to use classes in TypeScript.

## Basic Class

A class is a blueprint for creating objects. Here's a basic example:

```bash
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name}.`);
  }
}

const person1 = new Person('Alice', 30);
person1.greet();
```

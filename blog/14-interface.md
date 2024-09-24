# Interfaces in TypeScript

In TypeScript, an `interface` is a powerful way to define the structure of an object or function. It enforces type safety by ensuring that objects conform to specific shapes, which is crucial when working with large and complex applications.

## Defining an Interface

You can define an interface to describe the structure of an object:

```bash
interface Person {
  name: string;
  age: number;
}

const person: Person = {
  name: "John",
  age: 30
};
```

## Optional Properties

You can mark properties in an interface as optional by using a question mark (?):

```bash
interface Car {
  make: string;
  model: string;
  year?: number;
}

const car1: Car = {
  make: "Toyota",
  model: "Camry"
};

const car2: Car = {
  make: "Honda",
  model: "Civic",
  year: 2020
};

```

## Readonly Properties

Properties can be marked as readonly to prevent modification after the object is initialized:

```bash
interface Book {
  readonly title: string;
  author: string;
}

const myBook: Book = { title: "TypeScript Guide", author: "Alice" };
// myBook.title = "New Title"; // Error: Cannot assign to 'title' because it is a read-only property.
```

In this case, title is immutable, so it cannot be changed after initialization.

## Interfaces with Functions

You can define the structure of a function using an interface:

```bash

interface MathOperation {
  (a: number, b: number): number;
}

const add: MathOperation = (a: number, b: number) => a + b;
const subtract: MathOperation = (a: number, b: number) => a - b;

console.log(add(5, 3));        // Output: 8
console.log(subtract(5, 3));   // Output: 2
```

## Extending Interfaces

Interfaces can be extended to create a new interface that inherits properties from one or more other interfaces:

```bash
interface Vehicle {
  make: string;
  model: string;
}

interface Electric {
  batteryCapacity: number;
}

interface ElectricCar extends Vehicle, Electric {
  range: number;
}

const tesla: ElectricCar = {
  make: "Tesla",
  model: "Model 3",
  batteryCapacity: 75,
  range: 322
};
```

## Interfaces vs. Type Aliases

Both interfaces and type aliases can be used to describe objects, but interfaces are better suited for defining structures that might need to be extended or implemented.

Use interfaces when you need to define a contract that will be extended or implemented.
Use type aliases when you are defining more complex types like unions or tuples.

## Conclusion

Interfaces are a core part of TypeScript, enabling you to define the structure of objects, classes, and functions with strict typing. They help you ensure that your code follows consistent shapes and is more maintainable and predictable.

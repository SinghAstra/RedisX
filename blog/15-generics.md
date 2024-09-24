# Generics in TypeScript

Generics provide a way to create reusable components that work with a variety of types, while still maintaining type safety. They allow you to define functions, classes, and interfaces that can operate with different types without sacrificing correctness.

## Why Use Generics?

Generics enable you to write code that can work with any type, instead of being limited to specific types. This flexibility helps in building reusable and maintainable code.

Without generics, a function might look like this:

```bash
function identity(arg: any): any {
  return arg;
}
```

The problem here is that we lose type information. We want to ensure that the function returns the same type as the argument it receives. With generics, we can solve this.

## Generic Functions

A generic function allows for type inference. Here’s a simple example:

```bash
function identity<T>(arg: T): T {
  return arg;
}
```

In this function:

T is a type variable that works as a placeholder for the type the function will work with.
When you call the function, TypeScript infers the type based on the argument passed.

```bash
const result = identity(5);  // result is of type 'number'
const result2 = identity("Hello");  // result2 is of type 'string'
```

## Explicitly Passing Types

While TypeScript can infer types, you can also explicitly pass the type:

```bash
const result = identity<number>(10);
```

## Generics with Arrays

Generics are often used with arrays to maintain type safety. Here’s an example of a generic function that works with arrays:

```bash
function getArrayItems<T>(items: T[]): T[] {
  return items;
}

const numberArray = getArrayItems<number>([1, 2, 3, 4]);
const stringArray = getArrayItems<string>(["apple", "banana"]);
```

In this case, T ensures that the array type is preserved and operates with any array type (e.g., number[] or string[]).

## Generic Interfaces

You can define interfaces that use generics to describe the shape of objects more flexibly.

```bash
interface Box<T> {
  contents: T;
}

const numberBox: Box<number> = { contents: 42 };
const stringBox: Box<string> = { contents: "TypeScript" };
```

Here, Box<T> allows the contents property to take on any type specified when the interface is used.

## Generic Constraints

Sometimes, you want to impose restrictions on the types that can be used with your generic. You can do this by using constraints. For instance, you might want to ensure that a type has certain properties.

```bash
interface Lengthwise {
  length: number;
}

function logLength<T extends Lengthwise>(item: T): void {
  console.log(item.length);
}

logLength({ length: 10, value: "Hello" });  // Valid
// logLength(3);  // Error: 'number' doesn't have a 'length' property
```

Here, T extends Lengthwise ensures that whatever type T is, it must have a length property. This allows for more type-safe operations.

## Generics with Classes

Classes can also make use of generics to handle different types of data in a flexible manner:

```bash
class DataStorage<T> {
  private data: T[] = [];

  addItem(item: T): void {
    this.data.push(item);
  }

  removeItem(item: T): void {
    this.data = this.data.filter(i => i !== item);
  }

  getItems(): T[] {
    return this.data;
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem("Hello");
textStorage.addItem("World");
textStorage.removeItem("Hello");

const numberStorage = new DataStorage<number>();
numberStorage.addItem(10);
numberStorage.addItem(20);
```

In this example, DataStorage<T> is a generic class that can store any type of data (string[], number[], etc.).

## Conclusion

Generics in TypeScript allow you to create flexible, reusable components that can work with different types, while ensuring type safety. They are a crucial part of building maintainable code, especially in large-scale applications.

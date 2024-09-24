# Working with Objects and Arrays in TypeScript

In TypeScript, objects and arrays are commonly used structures for storing and managing data. TypeScript provides static types to ensure that properties within objects and elements in arrays conform to specific types. This section covers how to define and use these types effectively.

## Objects

An object in TypeScript can have typed properties. You can define the shape of an object using either type annotations or interfaces.

### Defining Object Types

Here's an example of defining an object type using inline type annotations:

```typescript
let person: { name: string; age: number } = {
  name: "Alice",
  age: 25,
};
```

### Interfaces

You can also define object types using `interface`, which is especially useful when you need to reuse the structure

```typescript
interface Person {
  name: string;
  age: number;
}

let student: Person = {
  name: "Bob",
  age: 21,
};
```

### Optional Properties

You can make object properties optional by using the `?` symbol:

```typescript
interface Car {
  brand: string;
  model: string;
  year?: number; // This property is optional
}

let myCar: Car = {
  brand: "Toyota",
  model: "Corolla",
};
```

## Arrays

Arrays in TypeScript can be typed to store only elements of a specific type. This ensures that every element in the array is of the same type.

```typescript
let numbers: number[] = [1, 2, 3, 4];
let names: string[] = ["Alice", "Bob", "Charlie"];
```

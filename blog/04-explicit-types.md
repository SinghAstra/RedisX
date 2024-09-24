# Explicit Types in TypeScript

In TypeScript, while the compiler can often infer types, there are many cases where explicitly defining types helps ensure clarity and prevent bugs. This section will cover how to explicitly define types for arrays, union types, and objects.

## Arrays with Explicit Types

In TypeScript, arrays can be defined with explicit types to ensure that all elements within the array are of a specific type.

### Single Type Arrays

You can explicitly define the type of elements in an array using this syntax:

```typescript
let numbers: number[] = [1, 2, 3, 4];
let strings: string[] = ["TypeScript", "JavaScript", "Node"];
```

### Array of Objects

It’s also possible to create an array that holds objects, and you can define the type of those objects explicitly:

```typescript
interface Person {
  name: string;
  age: number;
}

let people: Person[] = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
];
```

This ensures that every object in the people array has both a name and age property, of type string and number respectively.

## Union Types

A union type allows a value to take on more than one type. This is useful when a variable or function parameter can accept multiple different types.

### Defining a Union Type

You define a union type by using the pipe (|) symbol between types. For example:

```typescript
let id: number | string;

id = 123; // OK
id = "ABC123"; // Also OK
```

### Union Types in Functions

Union types are often used in function parameters to accept multiple possible types:

```typescript
function printId(id: number | string): void {
  console.log(`ID: ${id}`);
}

printId(101); // Valid
printId("ABC123"); // Valid
```

### Union Types with Arrays

You can also define arrays that hold multiple types:

```typescript
let mixedArray: (number | string)[] = [1, "two", 3, "four"];
In this example, mixedArray can contain both numbers and strings.
```

## Objects with Explicit Types

Objects in TypeScript can have their structure defined explicitly using type annotations or interfaces.

### Inline Object Type Annotations

You can define the structure of an object using inline type annotations directly in the variable definition:

```typescript
let car: { brand: string; model: string; year: number } = {
  brand: "Toyota",
  model: "Corolla",
  year: 2020,
};
```

### Optional Properties

You can also make some properties optional by using the ? symbol:

```typescript
interface Laptop {
  brand: string;
  model: string;
  year?: number; // Optional property
}

let myLaptop: Laptop = {
  brand: "Apple",
  model: "MacBook Pro",
};
```

### Read-Only Properties

Sometimes you may want to make object properties read-only so they cannot be modified after being set:

```typescript
interface Book {
  readonly title: string;
  author: string;
}

let myBook: Book = {
  title: "TypeScript Handbook",
  author: "Microsoft",
};
```

# Type Aliases in TypeScript

Type aliases in TypeScript allow you to create a new name for a type. This is useful when you have complex types that you need to refer to multiple times or when you want to make your code more readable and maintainable.

## Defining a Type Alias

You can create a type alias using the `type` keyword followed by the alias name and the type definition:

```bash
type UserID = string;
let user1: UserID = "abc123";
let user2: UserID = "xyz789";
```

## Why Use Type Aliases?

Type aliases help in:

- Reducing code duplication.
- Improving code readability.
- Referring to complex types with a simple name.

## Aliases for Object Types

Type aliases are especially useful when working with complex object types. Instead of repeating an object structure multiple times, you can create an alias for it:

```bash
type User = {
  name: string;
  age: number;
  isActive: boolean;
};

let user: User = {
  name: "John",
  age: 25,
  isActive: true,
};
```

## Aliases for Union Types

Type aliases can also be used to define union types, which allow a value to be one of several types:

```bash
type ID = number | string;

let userId: ID;
userId = 123;      // OK
userId = "abc123"; // OK
```

## Aliases for Arrays

You can also create aliases for arrays. This can simplify the declaration of array types:

```bash
type StringArray = string[];
type NumberArray = number[];

let names: StringArray = ["Alice", "Bob"];
let scores: NumberArray = [10, 20, 30];
```

## Aliases for Function Types

Type aliases can be used to define function types. This is particularly helpful when you want to enforce consistency across multiple functions that follow the same signature.

```bash
type MathOperation = (x: number, y: number) => number;

let add: MathOperation = (a, b) => a + b;
let subtract: MathOperation = (a, b) => a - b;

console.log(add(5, 10));       // Output: 15
console.log(subtract(20, 5));  // Output: 15
```

## Nested Type Aliases

You can also nest type aliases inside other type aliases:

```bash
type Address = {
  street: string;
  city: string;
  country: string;
};

type UserProfile = {
  name: string;
  age: number;
  address: Address;
};

let profile: UserProfile = {
  name: "Alice",
  age: 30,
  address: {
    street: "123 Main St",
    city: "Wonderland",
    country: "Fantasyland"
  }
};

```

## Combining Type Aliases with Union and Intersection Types

You can combine type aliases with union (|) or intersection (&) types to create more flexible or precise types.

```bash
# Union Type Example:
type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin | Employee;

let worker: ElevatedEmployee = {
  name: "Jane",
  startDate: new Date(),
};
# In this case, ElevatedEmployee can be either an Admin or an Employee.

# Intersection Type Example:
type Manager = Admin & Employee;

let manager: Manager = {
  name: "Bob",
  privileges: ["server-access"],
  startDate: new Date(),
};
```

## Type Aliases vs Interfaces

Type aliases and interfaces are similar in TypeScript but have some key differences. Both can be used to describe objects and functions, but:

Type aliases can represent primitive types, union types, and other advanced types.
Interfaces are limited to describing objects.
Here’s an example showing the overlap:

```bash
# Using a Type Alias:
type Person = {
  name: string;
  age: number;
};
# Using an Interface:
interface Person {
  name: string;
  age: number;
}
```

Both are valid and serve similar purposes. However, type aliases offer more flexibility with complex types like unions or intersections, while interfaces are more suitable for defining objects and classes.

## Conclusion

Type aliases provide a way to create more readable and maintainable code by giving a name to a specific type or combination of types. Whether you're dealing with primitive types, objects, unions, or functions, type aliases help simplify your code and reduce repetition. They are a versatile feature in TypeScript that you will often use to handle complex type declarations.

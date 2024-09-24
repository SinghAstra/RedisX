# Functions in TypeScript

In TypeScript, you can explicitly define the types of parameters and return values, allowing for better type safety and readability.

## Function Syntax in TypeScript

A basic function in TypeScript looks similar to JavaScript but with type annotations:

```bash
function add(x: number, y: number): number {
  return x + y;
}
```

## Optional Parameters

You can mark function parameters as optional by adding a question mark (?) after the parameter name. If the optional parameter is not passed, it will be undefined by default.

```bash
function greet(name: string, greeting?: string): string {
  if (greeting) {
    return `${greeting}, ${name}!`;
  } else {
    return `Hello, ${name}!`;
  }
}

greet("Alice");           // Output: "Hello, Alice!"
greet("Alice", "Hi");     // Output: "Hi, Alice!"
```

## Default Parameters

You can also assign default values to function parameters:

```bash
function greet(name: string, greeting: string = "Hello"): string {
  return `${greeting}, ${name}!`;
}

greet("Bob");            // Output: "Hello, Bob!"
greet("Bob", "Welcome"); // Output: "Welcome, Bob!"
```

## Rest Parameters

TypeScript supports rest parameters, which allow you to pass an arbitrary number of arguments to a function. Rest parameters are typed as an array of the specified type.

```bash
function sum(...numbers: number[]): number {
  return numbers.reduce((acc, current) => acc + current, 0);
}

sum(1, 2, 3, 4); // Output: 10
```

## Typing Function Return Values

Explicitly specifying the return type of a function improves code clarity and prevents unexpected return values.

```bash
function multiply(a: number, b: number): number {
  return a * b;
}
```

If you omit the return type, TypeScript will use type inference to determine the return type based on the function's implementation. However, it's often a good practice to define return types explicitly for clarity.

Example with inferred return type:

```bash
function divide(x: number, y: number) {
  return x / y; // TypeScript infers the return type to be `number`
}
```

## Void and Never Types

`void` Type:
When a function doesn’t return any value, you can use the void type.

```bash
function logMessage(message: string): void {
  console.log(message);
}
```

`never` Type:
The never type is used for functions that never return, typically in functions that throw an error or have an infinite loop.

```bash
function throwError(errorMsg: string): never {
  throw new Error(errorMsg);
}
```

## Arrow Functions

Arrow functions in TypeScript work the same way as in JavaScript, with the benefit of adding type annotations.

Example of an arrow function:

```bash
const multiply = (a: number, b: number): number => a * b;
```

## Overloading Functions

In TypeScript, you can overload functions, meaning you can define multiple function signatures for the same function name. This is useful when a function can accept arguments of different types or numbers of arguments.

Example:

```bash
function combine(a: string, b: string): string;
function combine(a: number, b: number): number;
function combine(a: any, b: any): any {
  if (typeof a === "string" && typeof b === "string") {
    return a + b;
  }
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  }
}

combine("Hello", "World"); // Output: "HelloWorld"
combine(5, 10);            // Output: 15
```

## Conclusion

Functions in TypeScript are powerful tools that help you write cleaner, more predictable code by allowing you to define types for parameters and return values. You can take advantage of features like optional and default parameters, rest parameters, function overloading, and arrow functions to make your code more flexible and maintainable.

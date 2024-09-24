# TypeScript Basics: Type Inference & Function Types

In TypeScript, understanding how types work is fundamental. TypeScript is a statically typed language, meaning that variable types are checked at compile time. One of the powerful features of TypeScript is `type inference`, where the compiler automatically infers the type of variables based on their initial value. Additionally, TypeScript enforces types for function arguments and return values, ensuring that functions behave predictably.

## Type Inference with `let`

When you declare a variable using `let` and assign a value, TypeScript automatically infers the type based on that value. This reduces the need to explicitly annotate types in many cases.

For example:

```typescript
let message = "Hello, TypeScript!";

message = 42;
```

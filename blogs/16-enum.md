# Enums in TypeScript

Enums (short for "enumerations") allow you to define a set of named constants, making your code more readable and easier to manage. They provide a way to organize related values in a type-safe way.

## Why Use Enums?

Enums make it easier to work with a collection of related values, especially when those values are logically grouped. Instead of using arbitrary numbers or strings, you can refer to the named values that describe your intent clearly.

### Example without Enums

```bash
const STATUS_PENDING = 0;
const STATUS_COMPLETED = 1;
const STATUS_FAILED = 2;

let currentStatus = STATUS_PENDING;
```

Using enums, the same code becomes more readable:

```bash
enum Status {
  Pending,
  Completed,
  Failed
}

let currentStatus = Status.Pending;
```

## Numeric Enums

By default, TypeScript assigns numeric values to each member of the enum starting from 0. Here’s an example of a numeric enum:

```bash
enum Direction {
  Up,    // 0
  Down,  // 1
  Left,  // 2
  Right  // 3
}

let move = Direction.Left; // move is 2
```

You can also explicitly assign values to each member:

```bash
enum Direction {
  Up = 1,
  Down = 2,
  Left = 3,
  Right = 4
}

let move = Direction.Right; // move is 4
```

## Conclusion

Enums are a powerful feature in TypeScript that allow you to define a set of named constants, improving the clarity and maintainability of your code. Whether you're dealing with numeric values, string values, or more complex sets of options, enums provide a type-safe and readable way to manage them.

```

```

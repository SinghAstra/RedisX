# Modules in TypeScript

Modules in TypeScript help organize code into self-contained units, promoting code reuse and maintainability. TypeScript modules are based on the ES6 module system, where each file is treated as a module.

## Exporting from Modules

In TypeScript, you can define what should be exposed (exported) from a module so it can be used in other files.

### Named Exports

You can export multiple values (variables, functions, classes) from a module using named exports:

```bash
#  utils.ts
export function add(a: number, b: number): number {
  return a + b;
}

export const PI = 3.14;
```

In another file, you can import the specific functions or variables you need:

```bash
#  main.ts
import { add, PI } from './utils';

console.log(add(2, 3));  // Output: 5
console.log(PI);         // Output: 3.14
```

## Default Export

A module can have a default export, which is typically used when a module exports only one value:

```bash
#  math.ts
export default class MathUtils {
  static square(n: number): number {
    return n * n;
  }
}
```

You can import a default export using any name:

```bash
#  main.ts
import MathUtils from './math';

console.log(MathUtils.square(4));  // Output: 16
```

## Combining Named and Default Exports

You can combine both named and default exports within the same module:

```bash
#  user.ts
export const userType = 'admin';

export default class User {
  constructor(public name: string) {}
}
```

Then, you can import both like this:

```bash
#  main.ts
import User, { userType } from './user';

const user = new User('Alice');
console.log(userType);   // Output: admin
```

Importing Everything from a Module
You can import all exported members of a module using \* as:

```bash
# main.ts
import * as Utils from './utils';

console.log(Utils.add(5, 10));  // Output: 15
console.log(Utils.PI);          // Output: 3.14
```

## Importing Types

TypeScript allows importing types separately from the implementation, providing better control and performance:

```bash
export type User = {
  name: string;
  age: number;
};

#  main.ts
import { User } from './types';

const user: User = { name: 'Alice', age: 25 };
```

## Conclusion

Modules in TypeScript provide a structured way to organize and share code across files. They can be exported as named exports, default exports, or even re-exported. By understanding how to use modules, you can write cleaner, reusable, and more maintainable code.

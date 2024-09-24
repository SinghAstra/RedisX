## Access Modifiers

TypeScript allows control over access to class properties:

- public: Accessible from anywhere.
- private: Accessible only within the class.
- protected: Accessible in the class and its subclasses.
- readOnly : Cannot be modified in or outside of the class

Example:

```bash
class Employee {
  public name: string;
  private salary: number;

  constructor(name: string, salary: number) {
    this.name = name;
    this.salary = salary;
  }

  getSalary() {
    return this.salary;
  }
}

const emp = new Employee('John', 50000);
console.log(emp.name);
console.log(emp.getSalary());
```

## Readonly Modifier

Properties marked with readonly can only be assigned a value once, either during declaration or in the constructor:

```bash
class Car {
  readonly model: string;

  constructor(model: string) {
    this.model = model;
  }
}

const car = new Car('Tesla');
// car.model = 'Ford'; // Error: Cannot reassign 'model'
```

## Inheritance

Classes can extend others using the extends keyword. This allows for inheriting properties and methods:

```bash
class Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  makeSound() {
    console.log(`${this.name} makes a sound.`);
  }
}

class Dog extends Animal {
  bark() {
    console.log(`${this.name} barks.`);
  }
}

const dog = new Dog('Rex');
dog.makeSound();
dog.bark();
```

## Static Methods

Static methods are called on the class itself rather than on instances of the class:

```bash
class MathUtils {
  static PI = 3.14;

  static calcCircumference(radius: number): number {
    return 2 * MathUtils.PI * radius;
  }
}

console.log(MathUtils.calcCircumference(10));
```

## Abstract Classes

Abstract classes cannot be instantiated directly. They serve as a base class for other classes:

```bash

abstract class Shape {
  abstract getArea(): number;
}

class Square extends Shape {
  sideLength: number;

  constructor(sideLength: number) {
    super();
    this.sideLength = sideLength;
  }

  getArea() {
    return this.sideLength * this.sideLength;
  }
}

const square = new Square(5);
console.log(square.getArea()); // 25
```

## Conclusion

Classes in TypeScript make it easier to use OOP principles in a typed manner. They include features such as access control, static methods, inheritance, and more.

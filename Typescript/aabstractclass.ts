//An abstract class is a blueprint for other classes — it cannot be instantiated directly but forces subclasses to implement specific methods.

abstract class Shape {
    abstract getArea(): number

    printArea(): void {
        console.log(`Area is: ${this.getArea()}`)
    }
}

class Circle extends Shape {
    constructor(private radius: number) {
        super()
    }

    getArea(): number {
        return 3.14 * this.radius * this.radius
    }
}

class Rectangle extends Shape {
    constructor(private width: number, private height: number) {
        super()
    }

    getArea(): number {
        return this.width * this.height
    }
}

const circle = new Circle(5)
circle.printArea()      // Area is: 78.5

const rectangle = new Rectangle(10, 5)
rectangle.printArea()   // Area is: 50


//Abstract Class with Constructor
abstract class Animal {
    constructor(public name: string, public age: number) {}

    abstract makeSound(): void  // must be implemented

    printDetails(): void {
        console.log(`Name: ${this.name}, Age: ${this.age}`)
    }
}

class Dog extends Animal {
    constructor(name: string, age: number, public breed: string) {
        super(name, age)  // calls abstract class constructor
    }

    makeSound(): void {
        console.log(`${this.name} says: Woof!`)
    }
}

class Cat extends Animal {
    makeSound(): void {
        console.log(`${this.name} says: Meow!`)
    }
}

const dog = new Dog("Bruno", 3, "Labrador")
dog.printDetails()   // Name: Bruno, Age: 3
dog.makeSound()      // Bruno says: Woof!

const cat = new Cat("Kitty", 2)
cat.printDetails()   // Name: Kitty, Age: 2
cat.makeSound()      // Kitty says: Meow!


//abstract vs interface
interface Shape{
 getArea(): number
}

abstract class Shape {
    abstract getArea(): number

    printArea(): void{
        console.log(this.getArea)
    }

}
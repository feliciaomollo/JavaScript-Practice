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
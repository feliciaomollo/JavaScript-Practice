abstract class Person{
    constructor (public name: string, public age: number, readonly id: number){}

    abstract getRole(): string
    
    printDetails():void{
        console.log(`Name: ${this.name}`)
    }
}
interface Enrollable {//Interfaces only define what a method looks like — not how it works. The implementation goes in the class.
    enroll(course: string): void
    printCourses(): void
}

class Student extends Person implements Enrollable {
    private courses: string[] = []

    constructor(name: string, age: number, id: number) {
        super(name, age, id)
    }

    getRole(): string {
        return "Student"
    }

    enroll(course: string): void {
        this.courses.push(course)
        console.log(`${this.name} has enrolled in ${course}`)
    }

    printCourses(): void {
        console.log(`${this.name}'s courses: ${this.courses.join(", ")}`)
    }
}

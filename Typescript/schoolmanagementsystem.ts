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

class Teacher extends Person {
    constructor(
        name: string,
        age: number,
        id: number,
        public department: string
    ) {
        super(name, age, id)
    }

    getRole(): string {
        return "Teacher"
    }

    teach(): void {
        console.log(`Mr. ${this.name} is teaching in the ${this.department} department`)
    }
}

const student = new Student("Arjun", 20, 1)
getDetails(student)
student.enroll("Mathematics")
student.enroll("Science")
student.printCourses()

console.log("")

const teacher = new Teacher("John", 35, 2, "Science")
getDetails(teacher)
teacher.teach()

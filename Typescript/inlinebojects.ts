//variables

const student: {name: string, age: number} = {
    name: "Arjun",
    age: 25
}

//function parameter
function printStudent(student: {name: string, age: number}): void {
    console.log(`Name: ${student.name}, Age: ${student.age}`)
}

printStudent({name: "Arjun", age: 25})

//Function return
function getStudent(): {name: string, age: number} {
    return {name: "Arjun", age: 25}
}

// Inline Object Type vs type alias
const student1: {name: string, age: number} = {name: "Arjun", age: 25}
const student2: {name: string, age: number} = {name: "John", age: 22}


type Student = {name: string, age: number}

const student1: Student = {name: "Arjun", age: 25}
const student2: Student = {name: "John", age: 22}
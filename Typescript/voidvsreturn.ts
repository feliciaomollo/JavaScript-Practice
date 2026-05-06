function printStudent(student: {name: string, age: number}): void {
    console.log(`Name: ${student.name}, Age: ${student.age}`)
} //This function just prints to the console — it does not return any value back to the caller.

// void — just does a task, returns nothing
function printStudent(student: {name: string, age: number}): void {
    console.log(`Name: ${student.name}, Age: ${student.age}`)
}

// string — does a task AND returns a value
function getStudent(student: {name: string, age: number}): string {
    return `Name: ${student.name}, Age: ${student.age}`
}
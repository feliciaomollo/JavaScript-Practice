//Typed parameters are function parameters with an explicit type declared, so TypeScript checks at compile time that the correct type of value is passed in.

function greet(name: string, age: number): string {
    return `Hello ${name}, you are ${age} years old`
}

greet("Arjun", 25)   // correct types
greet(25, "Arjun")   // Error — types are swapped
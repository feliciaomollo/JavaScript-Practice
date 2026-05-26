//Generics allow you to create reusable components that work with any type while still maintaining type safety.

 // works with any type
function identity<T>(value: T): T {
    return value
}

console.log(identity<number>(25))       // 25
console.log(identity<string>("Arjun"))  // Arjun
console.log(identity<boolean>(true))    // true
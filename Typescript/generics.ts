//Generics allow you to create reusable components that work with any type while still maintaining type safety.


function identity<Type>(val: Type):Type{
    return val 
}
identity(4)
console.log(identity<number>(25))       // 25
console.log(identity<string>("Arjun"))  // Arjun
console.log(identity<boolean>(true))    // true


//with multiple types
function pair<T, U>(first: T, second: U): [T, U] {
    return [first, second]
}

console.log(pair<string, number>("Arjun", 25))  // ["Arjun", 25]
console.log(pair<number, boolean>(1, true))     // [1, true]

//Generic type
interface ApiResponse<T> {
    data: T
    status: number
    message: string
}

// response with a string data type
const response1: ApiResponse<string> = {
    data: "Success",
    status: 200,
    message: "OK"
}

// response with an object data type
const response2: ApiResponse<{name: string, age: number}> = {
    data: {name: "Arjun", age: 25},
    status: 200,
    message: "OK"
}

// without generics — only works with one type
function filterItems(arr: number[], value: number): number[] {
    return arr.filter(item => item === value)
}

// with generics — works with any type
function filterItems<T>(arr: T[], value: T): T[] {
    return arr.filter(item => item === value)
}

filterItems<number>([1, 2, 3, 2], 2)          // [2, 2]
filterItems<string>(["a", "b", "a"], "a")     // ["a", "a"]
// Two ways to declare an array

// Way 1 — Type[]
let fruits: string[] = ["Apple", "Banana", "Mango"]
let numbers: number[] = [1, 2, 3, 4, 5]
let flags: boolean[] = [true, false, true]

// Way 2 — Array<Type>
let fruits: Array<string> = ["Apple", "Banana", "Mango"]


//common array methods
let fruits: string[] = ["Apple", "Banana", "Mango"]

// add to end
fruits.push("Orange")       

// remove from end
fruits.pop()                 

// get length
console.log(fruits.length) // 3

// check if item exists
console.log(fruits.includes("Apple")) //true


const superHeroes: string[] = []//syntax so that we dont get never. this lets it know its a string array.

superHeroes.push("Starlight")


//accessing items
let fruits: string[] = ["Apple", "Banana", "Mango"]

console.log(fruits[0])  // Apple
console.log(fruits[1])  // Banana
console.log(fruits[2])  // Mango


let fruits: string[] = ["Apple", "Banana", "Mango"]

// for loop
for(let i = 0; i < fruits.length; i++) {
    console.log(fruits[i])
}

// for...of loop (cleaner)
for(let fruit of fruits) {
    console.log(fruit)
}

// forEach
fruits.forEach((fruit): void => {
    console.log(fruit)
})

let numbers: number[] = [1, 2, 3]

let doubled = numbers.map((num): number => {
    return num * 2
})

console.log(doubled)  // [2, 4, 6]

let numbers: number[] = [1, 2, 3, 4, 5]

let evenNumbers = numbers.filter((num): boolean => {
    return num % 2 === 0
})

console.log(evenNumbers)  // [2, 4]

let fruits: string[] = ["Apple", "Banana", "Mango"]

fruits.push(99)   // ❌ Error — number not assignable to string array
fruits.push("Grapes")  // ✅ Correct
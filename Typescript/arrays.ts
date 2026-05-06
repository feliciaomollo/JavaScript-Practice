// Two ways to declare an array

// Way 1 — Type[]
let fruits: string[] = ["Apple", "Banana", "Mango"]
let numbers: number[] = [1, 2, 3, 4, 5]
let flags: boolean[] = [true, false, true]

// Way 2 — Array<Type>
let fruits: Array<string> = ["Apple", "Banana", "Mango"]


const superHeroes: string[] = []//syntax so that we dont get never. this lets it know its a string array.

superHeroes.push("Starlight")


//accessing items
let fruits: string[] = ["Apple", "Banana", "Mango"]

console.log(fruits[0])  // Apple
console.log(fruits[1])  // Banana
console.log(fruits[2])  // Mango
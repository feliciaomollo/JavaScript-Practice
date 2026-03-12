// Declaring a function. A function declares what to do. Calling it actually does it.
function greet(name) {
    return `Hello, ${name}!`;
}

// Calling a function
greet("Claude");  
greet("DJ");      

// Regular function
function add(a, b) {
    return a + b;
}

// 1. Regular function declaration
function greet(name) {
    return `Hello ${name}`;
}

// 2. Function expression — stored in a variable
const greet = function(name) {
    return `Hello ${name}`;
};

// 3. Arrow function — shortest, most modern
const greet = (name) => `Hello ${name}`;

// All three do the same thing!
greet("Hello, World!"); 

// Same thing as arrow function
const add = (a, b) => a + b;

add(3, 4); 

// name is the PARAMETER — a placeholder
function makeCoffee(name) {
    console.log(`Here is your ${name}! ☕`);
}

// "Latte" is the ARGUMENT — the actual value
makeCoffee("Latte");      
makeCoffee("Espresso");   
makeCoffee("Cold Brew");  

// Write a function called calculateOrder that:
// 1. Takes two parameters — item and price
// 2. Returns a string saying "Your [item] costs $[price]"

// Then call it 3 times with different coffees

function calculateOrder(item, price){
    return `Your ${item} costs ${price}`
}
console.log(calculateOrder('Latte', 20))  
console.log(calculateOrder('Espresso', 40))   
console.log(calculateOrder('Mocha', 60)) 

function calculateOrder(item, price){
    console.log (`Your ${item} costs ${price}`)
}
calculateOrder('Latte', 20)
calculateOrder('Espresso', 40)
calculateOrder('Mocha', 60)

//Write a function called greetDJ that takes a name parameter and prints: "Welcome to the stage, DJ [name]!"

function greetDJ(name){
    return `Hello, Welcome to your set ${name}`
}

const greetDJ_two = function(name){
    return `Hello, Welcome to your set ${name}`
}

const greetDJ_three = (name)=>{
    return `Hello, Welcome to your set ${name}`
}

greetDJ('Andiego')

const calcSetDuration = (tracks, minutesPerTrack) => {
    // 1. calculate total duration here
    const totalDuration = tracks * minutesPerTrack
    // 2. return a template literal with the result
    return `Your set is ${totalDuration} long`
}

// 3. console.log the function calls down here
console.log(calcSetDuration(10, 6))

//default parameters
const orderDrink = (drink, size = "Medium") => {
    return `One ${size} ${drink} coming up!`
}

console.log(orderDrink("Latte", "Large"))  // "One Large Latte coming up!"
console.log(orderDrink("Espresso"))        // "One Medium Espresso coming up!"



// Step 1 — write calcPrice first
const calcPrice = (price, quantity) => {
    const totalPrice = price * quantity
    return totalPrice
}

// Step 2 — write printOrder and call calcPrice inside
const printOrder = (item, price, quantity) => {
    // call calcPrice here and store the result
    const totalPrintOrder = calcPrice( totalPrice)
    // return a template literal using all parameters
    return `Your total ${totalPrintOrder}`
}

// Step 3 — console.log outside
console.log(printOrder("Latte", 4, 3))
console.log(printOrder("Espresso", 3, 2))


//Write a function called `djSetSummary` that takes:

const djSetSummary = (djName, tracks, minutesPerTrack) =>{
    return `${djName} will play ${tracks} for a total of ${minutesPerTrack}`
}

console.log('Andiego', '10', '50')

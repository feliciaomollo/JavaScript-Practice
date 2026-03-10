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
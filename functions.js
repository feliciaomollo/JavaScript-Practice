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
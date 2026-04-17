let message: string = "Hello, Im Felicia";

console.log(message);

const age: number = 25;

console.log(age);


let count = 10;

if(count > 5){
    let message: string = "The count has begun"; //let gives message block-level scope, meaning it's only available within the if block.
    console.log(message)
}

let userName: string = "Arjun";  
let age: number = 25;            
let isActive: boolean = true;    

function greetUser(name: string, age: number): string { //The function must return a string
  return `Hello, ${name}! You are ${age} years old.`;
}

let greeting = greetUser(userName, age);
console.log(greeting);

//Local scope
function testLocalScope() {
  let localVar = "I am local";
  console.log(localVar);  
}

//Global scope
let globalVar = 10;  
function displayGlobalVar() {
  console.log(globalVar); 
}
displayGlobalVar();
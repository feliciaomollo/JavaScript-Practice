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

//class Scope
class Employee {
    salary: number = 50000;
    printSalary(): void { //Method name with no parameters and Return type — means the function returns nothing
        console.log(`Salary: ${this.salary}`); //Refers to the salary property of the current object. this is important here — it tells TypeScript to look for salary inside the same instance of the class, not some external variable.
    }
}

const emp = new Employee();
emp.printSalary();

//Understanding variables
let globalVar: number = 10;

class Geeks {
    private classVar: number = 11;

    assignNum(): void {
        let localVar: number = 12;
        console.log('Local Variable: ' + localVar);
    }
}

console.log('Global Variable: ' + globalVar);

let obj = new Geeks();
obj.assignNum(); 
"use strict";
let message = "Hello, Im Felicia";
console.log(message);
const age = 25;
console.log(age);
let count = 10;
if (count > 5) {
    let message = "The count has begun"; //let gives message block-level scope, meaning it's only available within the if block.
    console.log(message);
}
let userName = "Arjun";
let age = 25;
let isActive = true;
function greetUser(name, age) {
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
    salary = 50000;
    printSalary() {
        console.log(`Salary: ${this.salary}`); //Refers to the salary property of the current object. this is important here — it tells TypeScript to look for salary inside the same instance of the class, not some external variable.
    }
}
const emp = new Employee();
emp.printSalary();
//Understanding variables
let globalVar = 10;
class Geeks {
    classVar = 11;
    assignNum() {
        let localVar = 12;
        console.log('Local Variable: ' + localVar);
    }
}
console.log('Global Variable: ' + globalVar);
let obj = new Geeks();
obj.assignNum();
//variables using let keyword. The let variables are block-scoped.
let number1 = 1;
function keyword() {
    let number2 = 2;
    if (number1 + number2 == 3) {
        let number3 = 3;
    }
    console.log(number1);
    console.log(number2);
    console.log(number3); // Throws error but gets better after converting to js.
}
keyword();
//var keyword
var number1 = 1;
function var_keyword() {
    var number2 = 2;
    if (number1 + number2 == 3) {
        var number3 = 3;
    }
    console.log(number1);
    console.log(number2);
    console.log(number3);
}
var_keyword();

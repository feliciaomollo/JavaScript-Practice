let admin, name; // can declare two variables at once
name = "John";
admin = name;

alert( admin ); // "John"


let name! = "John";

// embed a variable
alert( `Hello, ${name}!` ); // Hello, John!

// embed an expression
alert( `the result is ${1 + 2}` ); // the result is 3
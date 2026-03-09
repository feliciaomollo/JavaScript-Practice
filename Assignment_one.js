// A customer wants to order an alcoholic coffee drink
// If they are 18 or older, allow the order
// If they are under 18, deny it

let age = 16; 


if (age >= 18){
    console.log("Please place your order")
}else{
    console.log("Sorry, you must be 18 or older to order this drink.")
}

// A customer picks a size: "small", "medium", or "large"
// Print the price for each size
// If unknown size, print "Invalid size"

let size = "medium"; 

switch(size){
    case "Medium":
        console.log("Medium coffee costs $4")
        break;
    case "Small":
        console.log("Small coffee costs $1")
        break;
    case "Large":
        console.log("Large coffee costs $9")
        break;
    default:
        console.log("Invalid size")
}

// Loop through this array and print each item
const menu = ["Espresso", "Latte", "Cappuccino", "Mocha", "Cold Brew"];

for (let i = 0; i < menu.length; i++) {
    console.log(i + 1 + ". " + menu[i]);
}
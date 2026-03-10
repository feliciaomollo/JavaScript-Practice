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

//Write a switch statement that prints a different coffee recommendation based on the day of the week.
let day = "Monday";
let weather = "rainy"; // declare weather variable

// switch handles the day
switch(day) {
    case 'Monday':
        console.log("Start your week with a strong Espresso!")
        break;
    case 'Wednesday':
        console.log("Hump day! Treat yourself to a Mocha")
        break;
    case 'Friday':
        console.log("TGIF! Celebrate with a Cold Brew")
        break;
    case 'Saturday':
        console.log("Weekend vibes! Try a Caramel Latte")
        break;
    case 'Sunday':
        console.log("Slow Sunday, enjoy a Cappuccino")
        break;
    default:
        console.log("Just a regular day, have a regular coffee")
}

// After the switch, add an if statement. if statement handles the weather 
if (weather === "rainy") {
    console.log("It's rainy today, extra shot recommended!")
} else {
    console.log("Beautiful day to enjoy your coffee outside!")
}

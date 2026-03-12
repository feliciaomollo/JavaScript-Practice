//Use if/else or switch to set the price per ticket type
//Write a function that takes ticketType and quantity and returns the total price.

let ticketType = "VIP"

switch(ticketType){
    case 'VIP':
    return `${ticketType} ${price}`
    break;
    case 'Regular':
    return `${ticketType}${price}`
    break;
    case 'Student':
    return `${ticketType} ${price}`
    break;
    default : console.log("Invalid Input")
}

const calcTicketPrice = (ticketType, Quantity) =>{
    const totalPrice = ticketType * Quantity
}

console.log(calcTicketPrice("VIP", 2)) 
console.log(calcTicketPrice("Regular", 5)) 
console.log(calcTicketPrice("Student", 3)) 


//The corrected version
const calcTicketPrice = (ticketType, quantity) => {
    let price  // declare price here

    // switch sets the price based on ticket type
    switch(ticketType) {
        case 'VIP':
            price = 50
            break
        case 'Regular':
            price = 20
            break
        case 'Student':
            price = 10
            break
        default:
            return "Invalid ticket type!"
    }

    // now multiply and return
    const totalPrice = price * quantity
    return `${quantity} ${ticketType} tickets = $${totalPrice}`
}

console.log(calcTicketPrice("VIP", 2))      // "2 VIP tickets = $100"
console.log(calcTicketPrice("Regular", 5))  // "5 Regular tickets = $100"
console.log(calcTicketPrice("Student", 3))  // "3 Student tickets = $30"

if (price == 50 && ticketType == "VIP"){
    return `${ticketType} price is ${price}`
}else if (price == 20 && ticketType == "Regular"){
    return `${ticketType} price is ${price}`
}else (price == 10 && ticketType == "Student"){
    return `${ticketType} price is ${price}`
}


//correct version vs yours up there
const calcTicketPrice = (ticketType, quantity) => {
    let price // declare price first — empty for now

    if (ticketType === "VIP") {
        price = 50          // now set the price
    } else if (ticketType === "Regular") {
        price = 20
    } else if (ticketType === "Student") {
        price = 10
    } else {
        return "Invalid ticket type!"
    }

    // now calculate and return
    const totalPrice = price * quantity
    return `${quantity} ${ticketType} tickets = $${totalPrice}`
}

console.log(calcTicketPrice("VIP", 2))      // "2 VIP tickets = $100"
console.log(calcTicketPrice("Regular", 5))  // "5 Regular tickets = $100"
console.log(calcTicketPrice("Student", 3))  // "3 Student tickets = $30"
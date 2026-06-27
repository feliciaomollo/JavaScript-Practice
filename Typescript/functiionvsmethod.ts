// Function — standalone
function calculateTax(amount: number): number {
    return amount * 0.16
}
calculateTax(1000)  // called on its own

// Method — belongs to a class. methods can use this to access class properties, functions cannot.
class BankAccount {
    deposit(amount: number): void {
        console.log(`Deposited ${amount}`)
    }
}
const account = new BankAccount()
account.deposit(500)  // called on an instance



// Function — general utility, no object needed. Use a function when the logic is general purpose and does not depend on any specific object's data. 
// Use a method when the logic belongs to and operates on a specific object's state.
function convertKmToMiles(km: number): number {
    return km * 0.621
}

// Method — tied to a specific car's speed. Rule of thumb: if the action needs this or is naturally "owned" by an object, make it a method. 
// If it's reusable anywhere without needing object state, make it a function.
class Car {
    constructor(private speed: number) {}

    accelerate(amount: number): void {
        this.speed += amount  // needs this car's own data
    }
}
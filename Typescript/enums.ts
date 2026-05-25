//plane seating choice

//An enum is a way to define a set of named constants — a collection of related values that belong together. By default TypeScript automatically assigns numbers starting from 0.
enum Direction {
    Up,     // 0
    Down,   // 1
    Left,   // 2
    Right   // 3
}

console.log(Direction.Up)     // 0
console.log(Direction.Down)   // 1


enum seatChoice {
    AISLE,
    WINDOW,
    MIDDLE,
    OTHER
}

const planeSeat = seatChoice.AISLE

//enums in functions
enum Status {
    Active = "ACTIVE",
    Inactive = "INACTIVE",
    Pending = "PENDING"
}

function printStatus(status: Status): void {
    console.log(`User status is: ${status}`)
}

printStatus(Status.Active)    // User status is: ACTIVE
printStatus(Status.Pending)   // User status is: PENDING

//type safety
enum Status {
    Active = "ACTIVE",
    Inactive = "INACTIVE"
}

//Real world scenario.
let userStatus: Status = Status.Active   // Correct
let userStatus: Status = "ACTIVE"        // Error — must use enum value

// ❌ Without enum — easy to make mistakes
let orderStatus: string = "shipped"  // what if someone types "Shipped" or "SHIPPED"?

// ✅ With enum — consistent and safe
enum OrderStatus {
    Pending = "PENDING",
    Shipped = "SHIPPED",
    Delivered = "DELIVERED",
    Cancelled = "CANCELLED"
}

let orderStatus: OrderStatus = OrderStatus.Shipped  // always consistent


//What is an enum and when would you use it? Use enums for fixed sets of related values like statuses, roles, or directions.
// without enum — inconsistent and error prone
let status: string = "active" // someone could type "Active" or "ACTIVE"

// with enum — consistent and safe
enum Status {
    Active = "ACTIVE",
    Inactive = "INACTIVE",
    Pending = "PENDING"
}

let userStatus: Status = Status.Active  // always consistent
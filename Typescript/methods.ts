interface User {
    name: string
    greet(): void  // method definition
}

const user: User = {
    name: "Arjun",
    greet(): void {
        console.log(`Hello, I am ${this.name}`)
    }
}

user.greet()
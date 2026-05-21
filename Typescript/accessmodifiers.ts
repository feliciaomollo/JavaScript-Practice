class Person {
    public name: string       // accessible everywhere
    private age: number       // accessible only inside the class
    protected email: string   // accessible inside class and subclasses(inheritance)

    constructor(name: string, age: number, email: string) {
        this.name = name
        this.age = age
        this.email = email
    }
}

const person1 = new Person("Arjun", 25, "a@g.com")
console.log(person1.name)    // Public
console.log(person1.age)     // Error — private
console.log(person1.email)   // Error — protected


//Shorthand Constructor
// Long way
class Person {
    name: string
    age: number

    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }
}

//Shorthand — does the same thing
class Person {
    constructor(
        public name: string,
        private age: number
    ) {}
}


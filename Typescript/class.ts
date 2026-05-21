class User{
    email: string
    name: string
    readonly city = "Nairobi"
    constructor(email: string, name: string){
        this.email = email; //this is commonly used in javascript
        this.name = name
    }
}

const bubba = new User("b@bubbs.com", 'bubba')

//private and public
class User1{
    
    constructor(
        public email: string, //this removes dependancy on using this.
        private name: string
        ){}
        get emailID():string{
            return `id${this.email}`
        }
}

const bubb = new User1("b@bubbs.com", 'bubba')

class Person {
    name: string
    age: number

    constructor(name: string, age: number) { //constructor Used to initialize properties with values
        this.name = name
        this.age = age
    }

    greet(): void {
        console.log(`Hi, I am ${this.name} and I am ${this.age} years old`)
    }
}

const person1 = new Person("Arjun", 25)
person1.greet()  // Hi, I am Arjun and I am 25 years old

//readonly
class Person {
    constructor(
        public readonly id: number,
        public name: string
    ) {}
}

const person1 = new Person(1, "Arjun")
person1.id = 2      // Error — id is readonly
person1.name = "John"  // Fine


//iheritance
class Animal {
    constructor(public name: string) {}

    makeSound(): void {
        console.log(`${this.name} makes a sound`)
    }
}

class Dog extends Animal {
    constructor(name: string, public breed: string) {
        super(name)  // calls the parent constructor
    }

    fetch(): void {
        console.log(`${this.name} is fetching!`)
    }
}

const dog = new Dog("Bruno", "Labrador")
dog.makeSound()  // Bruno makes a sound
dog.fetch()      // Bruno is fetching!

//Getters and Setters
class Person {
    private _age: number = 0

    get age(): number {
        return this._age
    }

    set age(value: number) {
        if(value < 0) {
            console.log("Age cannot be negative")
        } else {
            this._age = value
        }
    }
}

const person1 = new Person()
person1.age = 25      // calls setter
console.log(person1.age)  // calls getter — 25
person1.age = -5      // Age cannot be negative
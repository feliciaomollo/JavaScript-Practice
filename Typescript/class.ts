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
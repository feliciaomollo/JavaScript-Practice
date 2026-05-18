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
        public email: string,
        private name: string
        ){}
}

const bubb = new User1("b@bubbs.com", 'bubba')
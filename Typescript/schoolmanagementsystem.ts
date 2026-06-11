abstract class Person{
    constructor (public name: string, public age: number, readonly id: number){}

    abstract getRole(): string
    
    printDetails():void{
        console.log(`Name: ${this.name}`)
    }
}




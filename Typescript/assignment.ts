class BankAccount {
    accountHolder: string
    readonly accountNumber: number
    balance: number

    constructor(accountHolder: string, accountNumber: number, balance: number) {
       this.accountHolder = accountHolder,
       this.accountNumber = accountNumber,
       this.balance = balance

    }

    deposit(amount: number): void {
        this.balance += amount
        console.log(`Deposited ${amount}. New balance: ${this.balance}`)
    }

    withdraw(amount: number): void {
    if (this.balance >= amount) {
        this.balance -= amount
        console.log(`Withdrew ${amount}. New balance: ${this.balance}`)
    } else {
        console.log("Insufficient funds")
        }
    }

    getBalance(): number { // acts as a controlled gateway to read the private balance — this is called a getter pattern.
        return this.balance
    }

    printDetails(): void {
    console.log(`Account Holder: ${this.accountHolder}`)
    console.log(`Account Number: ${this.accountNumber}`)
    console.log(`Balance: ${this.balance}`)
}
}

// create an instance
const account = new BankAccount("Arjun", 1234, 1500)


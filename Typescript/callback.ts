// a function passed as an argument to another function
function processUser(callback: (name: string) => void): void {
    callback("Arjun")
}

processUser((name) => {
    console.log(`Hello ${name}`)
})
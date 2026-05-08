type User = {
    name: string,
    id: number
}
type Admin = {
    username: string,
    id: number
}

let Andeezy: User | Admin ={name: "Andeezy", id: 789}

Andeezy = {username: "andeezy", id: 998}


function getId(ID: string | number){
    console.log `theID is ${ID}`
}

getId(98)
getId("78")

//using if and typeof
function getId(ID: string | number){
   if(typeof ID === "string"){
    ID.toLowerCase()
   }
}

//arrays and unions
let superHeroes: (string| number)[] = ["Homelander", "MothersMilk", "Butcher", 4]

superHeroes.push("Starlight")

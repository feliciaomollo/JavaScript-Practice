type Course = {
    readonly _id: string,
    name: string,
    price: number,
    isActive: boolean
}

let myCourse: Course = {
    _id: "1234",
    name: "Hilda",
    price: 899,
    isActive: true,
    creditDetails?: number //? is for optional incase some users dont use credit.
}

type cardNumber ={
    cardNumber: number
}
type cardDate ={
    cardDate: string
}

type cardDetails = cardDate & cardNumber & {
    cvv: number
}

myCourse.name = "Andeezy"
myCourse._id = "" //cannot assign ID as its a readonly property



//membership example

type Membership = {
    name: string,
    email: string,
    passoword: number,
    readonly _UID: number
    passport?: number
}

let mpesaAccount: membership = {
    name: "Fletcher",
    email: "Beckysohotv@vintage.tshirt",
    passoword: "@mypasscode1",
    _UID: 7346587
    passport: 99
}


 
export{}
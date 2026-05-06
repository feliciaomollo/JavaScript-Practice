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
export{}
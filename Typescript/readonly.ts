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
    isActive: true
}
myCourse.name = "Andeezy"
myCourse._id = "" //cannot assign ID as its a readonly property
export{}
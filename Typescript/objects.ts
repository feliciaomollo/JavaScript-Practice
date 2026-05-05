function createUser({name: string, isPaid: boolean}){

}
createUser({name: "Andeezy", isPaid: true})


function createCourse(): {name: string, price: number}{ //Instead of returning a primitive type like string or number, this function returns an object with a specific shape.
    return {name: "Andy", price: 899} //Return Type — Inline Object Type. The returned object must have a name property of type string. The returned object must have a price property of type number
}

export{} //Treat this file as a module, not a global script. Without it, variables and functions could leak into the global scope and clash with other files

//alternative
type Course = {
    name: string,
    price: number
}

function createCourse(): Course {
    return {name: "Andy", price: 899}
}

export{}

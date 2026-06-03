interface User{
    username: string,
    password: string
}

interface Admin{
    username: string,
    password: string,
    isAdmin: boolean
}

function loginSystem(login: User | Admin){
    if("isAdmin" in login){ //using the in keyword that helps go into login and check if there's isAdmin is present
        return login.isAdmin
    }    
}

function detectType(val: number | string){
    if(typeof val === "string"){
        return val.toLowerCase
    }
}
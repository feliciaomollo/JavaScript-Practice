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
    if("isAdmin" in login){
        return login.isAdmin
    }    
}
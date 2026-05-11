//An interface defines the shape or structure an object must follow — like a contract that an object must obey.
interface User{
    readonly dbId: number,
    email: string,
    userId: number
    googleId?: number //not compulsory
}

const hitesh: User ={dbId: 556, email: "h@gh.com", userId:8347}
//Type aliases make code reusable, readable and easy to update.

// without type alias — repetitive
function getUser(): {name: string, age: number} {}
function updateUser(): {name: string, age: number} {}

// with type alias — clean and reusable
type User = {
    name: string,
    age: number
}

function getUser(): User {}
function updateUser(): User {}


type Point = {
    x: number;
    y: number;
};

type Shape = "circle" | "square" | "rectangle";

function drawShape(shape: Shape, position: Point): void {
    console.log(`Drawing a ${shape} at (${position.x}, ${position.y})`);
}

drawShape("circle", { x: 10, y: 20 });

//alias for union type.ID is a type alias that allows a variable to be either a number or a string.
//This provides flexibility for userId to accept both numeric and alphanumeric identifiers.
type UserId = number | string;

let Id: UserId;
Id = 'hsgh',
Id = 123

//create blueprint
type UserProfile = {
    username: string;
    email: string;
    age: number;
    isValid: boolean
};

//give blueprint life
const User1: UserProfile = {
    username: 'Andiego',
    email: 'andiego@gmail.com',
    age: 28,
    isValid: true
}

//create a function that calls the blueprint that came to life
function checkUser(profile: UserProfile){
    return `Hello ${profile.username}, are you valid ${profile.isValid}`;
}

console.log(checkUser(User1));
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

//alias for union type
type UserId = number | string;

let Id: UserId;
Id = 'hsgh',
Id = 123
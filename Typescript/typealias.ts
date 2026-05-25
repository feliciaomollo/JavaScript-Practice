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
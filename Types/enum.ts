// Automatically enumerated global constant identifiers

// by defualt number will be auto assign 0, 1, 2,....
// to be more specific -> {MASCOT = 12, USER = 'USER'}
enum Role {MASCOT, USER} 

const person5 = {
    name: 'Hello Kitty',
    age: 12,
    hobbies: ['run', 'eat'],
    role: Role.MASCOT
}

if (person5.role === Role.MASCOT) console.log("HELLO KITTY!!!")

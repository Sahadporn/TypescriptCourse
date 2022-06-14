// tuple = fixed length array

// const person4 = {
//     name: 'Hello Kitty',
//     age: 12,
//     hobbies: ['run', 'eat'],
//     // (string | number) = union type, either
//     role: [2, 'mascot']
// }

// in case we want a fixed length array
// with 1st as number and 2nd as str
const person4: {
    name: string,
    age: number,
    hobbies: string[],
    role: [number, string]
} = {
    name: 'Hello Kitty',
    age: 12,
    hobbies: ['run', 'eat'],
    role: [2, 'mascot']
}

// but is still doable which is not good
person4.role.push('admin')

console.log(person4.role)

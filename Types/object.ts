// This is obj type infer by ts
// not key value pairs there but key type pairs
const person1: object = {
    name: 'Hello Kitty',
    age: 12
}

// ts complain since we access attr that does not exist:
// console.log(person1.nickname)

// we'll also get an error here:
// console.log(person1.name)
// name exist, but what we tell typescript there 
// is that we just have an object where we don't give any
// info to ts

// typescript doesn't support any type of property because 
// we don't tell it anything about the object

// let's add specific type:

// {} is ts notation of specialize obj
// const person2: {
//     name: string,
//     age: number
// } = {
//     name: 'Goodbye Kitty',
//     age: 36
// }

// but just do this is fine:
const person2 = {
    name: 'Goodbye Kitty',
    age: 36
}

console.log(person2.name)

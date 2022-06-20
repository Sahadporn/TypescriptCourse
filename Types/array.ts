const person3 = {
    name: 'Hello Kitty',
    age: 12,
    hobbies: ['run', 'eat']
}

let favActivities: string[]
let arr: Array<string>
favActivities = ['sing', 'dance']

console.log(person3.hobbies)

for (const hobby of person3.hobbies) {
    // ts script does not complain cause it know
    // that this is indeed a str
    console.log(hobby.toUpperCase())
}

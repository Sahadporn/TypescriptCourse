// a structure that defines the contract in your application

// classes that are derived from an interface must follow the structure provided by their interface
// the TypeScript compiler does not convert interface to JavaScript. It uses interface for type checking

interface Person {
    name: string
    age: number
    hobbies: string[]
    getBoD: (date: number) => string
    addHobby(hobby: string): string[]
}

class Bob implements Person {
    name: string
    age: number
    hobbies: string[]

    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }
 
    getBoD(date: number): string {
        return date.toString()
    }

    addHobby(hobby: string): string[] {
        this.hobbies.push(hobby)
        return this.hobbies
    }

}

// Interface in TypeScript can be used to define a type and also to implement it in the class
interface Soup {
    name: string
    ingredients: string[]
}

let soup1: Soup = {name: "good soup", ingredients: ["tomato", "potato"]}
// let soup2: Soup = {name: "bad soup", ingredients: 2}


// TypeScript interface is also used to define a type of a function. This ensures the function signature.
interface Eat {
    (food: string): void
}

function shoutEat(food: string): void {
    console.log("EAT " + food.toUpperCase())
}

let funct: Eat = shoutEat
funct("soup")

// An interface can also define the type of an array where you can define the type of index as well as values
interface NumList {
    [index:number]: number
}
let numArr: NumList = [1,2,3]
// numArr[0] = "hi"

interface IStringList {
    [index:string]:string
}

let strArr : IStringList = {};
strArr["TS"] = "TypeScript";
strArr["JS"] = "JavaScript";

// ? => objects of the interface may or may not define these properties
interface Cat {
    name: string
    age?: number
}

let cat: Cat = {name: "catty"}

// mark a property as read only => once a property is assigned a value, it cannot be changed
interface Citizen {
    name: string;
    readonly SSN: number;
}

// Interfaces can extend one or more interfaces. This makes writing interfaces flexible and reusable.
interface Animal {
    specie: string
    traits: string[]
}

interface Dog extends Animal {
    bark: string
}

let doggo: Dog = {specie: "canine", traits: ["tail"], bark: "BARK"}



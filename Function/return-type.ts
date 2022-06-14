// ts can have return type

function add(n1: number, n2: number): number {
    return n1 + n2
}

// actually you should let ts infer the type
// and not specify the type unlike the above code

// we also have void
function printSomethingExciting(msg: string): void {
    console.log(msg.toUpperCase() + "!!!")
}

printSomethingExciting("hello")

// normally in js it will return undefined
// but here, it is another usable type
let empty: undefined
// so we use void to specifically mean 'not return anything'
// if it is undefined ts would expect you to have a return that is empty

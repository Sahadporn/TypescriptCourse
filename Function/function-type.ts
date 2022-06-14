function add(n1: number, n2: number): number {
    return n1 + n2
}

function printSomethingExciting(msg: string): void {
    console.log(msg.toUpperCase() + "!!!")
}


let combineValues: Function

let combineMoreValues: (a: number, b: number) => number

combineMoreValues = add
// combineMoreValues = printSomethingExciting

// callback function
// we put void as return type for cb so that it will
// ignore any result that it might be returning
// so you can do whatever you want there without consequences
function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
    const result = n1 + n2
    cb(result)
} 

addAndHandle(10, 20, (result) => {
    console.log(result)
})

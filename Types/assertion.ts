// Type assertion allows you to set the type of a value and tell the compiler not to infer it
// similiar to type cast but it is merely a way to let the TypeScript compiler know the type of a variable.

// using <> or as
let code: any = 123
let thisCode = <number> code
console.log(typeof(thisCode)) //Output: number
let str: any = "string"
let anotherStr = str as string

interface Employee { 
    name: string 
    code: number 
} 

let employee = <Employee> {}
employee.name = "John"
employee.code = 123



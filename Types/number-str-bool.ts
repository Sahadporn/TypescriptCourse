function add(n1: number, n2: number, showResult: boolean, phrase: string) {
    console.log(typeof(n1))

    // add before concating since if we do phrase + n1 + n2
    // var will turn into string
    const result = n1 + n2
    // this will not be directly calculated together with a string
    if (showResult) console.log(phrase + result)
    else return n1 + n2
}

// Why don't we have types down here?
// typescript has a built-in feature which is called type inference 
// this means that tile script does its best to understand 
// which type you have in a certain var

// we could do this
// let num1: number = 5
// but it's quite redundant
// However do this:
// let num1: number
// define type to pre-assign var

// for ts all numbers are float by defualt
const num1 = 5 // = 5.0
const num2 = 2.8
const printResult = true
const resultPhrase = "Result is: "

add(num1, num2, printResult, resultPhrase)

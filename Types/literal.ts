// very clear about the exact value it should hold

const n: 2.8 = 2.8

// perform a conversion check type without literal
function combine(n1: number | string, n2: number | string, resultConversion: string) {
    let result: number | string

    if (typeof n1 === "number" && typeof n2 === "number" || resultConversion === "as-number") {
        result = +n1 + +n2
    } else {
        result = n1.toString() + n2.toString()
    }
    return result
}

let combinedNumber = combine(30, 12, "as-number")
console.log(combinedNumber)
let combinedNumberAsStr = combine("30", "22", "as-number")
console.log(combinedNumberAsStr)
let combinedStr = combine("Good", "bye", "as-text")
console.log(combinedStr)


// perform a conversion check type without literal
function combineLiteral(n1: number | string, n2: number | string, resultConversion: "as-number" | "as-text") {
    let result: number | string

    if (typeof n1 === "number" && typeof n2 === "number" || resultConversion === "as-number") {
        result = +n1 + +n2
    } else {
        result = n1.toString() + n2.toString()
    }
    return result
}

combinedNumber = combineLiteral(30, 12, "as-number")
console.log(combinedNumber)
combinedNumberAsStr = combineLiteral("30", "22", "as-number")
console.log(combinedNumberAsStr)
combinedStr = combineLiteral("Good", "bye", "as-text")
console.log(combinedStr)

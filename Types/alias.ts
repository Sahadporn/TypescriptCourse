type Combinable = number | string
type ConversionDescriptor = "as-number" | "as-text"

function combineLiteral(n1: Combinable, n2: Combinable, resultConversion: ConversionDescriptor) {
    let result: Combinable

    if (typeof n1 === "number" && typeof n2 === "number" || resultConversion === "as-number") {
        result = +n1 + +n2
    } else {
        result = n1.toString() + n2.toString()
    }
    return result
}

let combinedNumber = combineLiteral(30, 12, "as-number")
console.log(combinedNumber)
let combinedNumberAsStr = combineLiteral("30", "22", "as-number")
console.log(combinedNumberAsStr)
let combinedStr = combineLiteral("Good", "bye", "as-text")
console.log(combinedStr)
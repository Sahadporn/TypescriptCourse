let userInput: unknown

// we can store anything in here
userInput = 2
userInput = "hi"

// but if we this:
let username: string
// username = userInput
// we get error Type 'unknown' is not assignable to type 'string'
// but we can pass this with any

// with unknown we have to check the type
// that are currently stored in the userInput
// before we can assign it.
if (typeof userInput === "string") username = userInput

// therefore it is better than any

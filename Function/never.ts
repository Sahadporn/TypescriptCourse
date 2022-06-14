// this function return never
// this function never produces a return value
function generateError(msg: string, code: number): never {
    throw {message: msg, errorCode: code}
}

generateError("ERROR!!!", 404)
// use to specify that this function should NEVER return anything

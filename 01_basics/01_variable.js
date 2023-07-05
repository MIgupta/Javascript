const accountId = 133553
let accountEmail = "mithlesh@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState
// If value is not assign to any variable without datatype then it give error
// if we not assign value to a variable the value of variable is undefined
// accountId=10 const not allowed to change

// Prefer Not to use var generally because of issue in block scope and functional scope
console.log(accountId);
accountEmail="gupta@gmail.com"
accountPassword = "45"
accountCity = "Rajsthan"
console.table([accountEmail,accountId,accountPassword,accountState,accountCity])
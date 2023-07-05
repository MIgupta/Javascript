let score = "33"

console.log(typeof(score))


let valueNumber = Number(score)

// "33" -> Number("33") -> number
// "33aaaf" -> Number("33aaaf") ->NaN
// "asf" -> Number("asf") -> NaN
// true -> Number(true) -> 1
// undefined -> Number(undefined) -> NaN

let Logged=" "

let booleanLogged = Boolean(Logged)
console.log(booleanLogged);
  
// 1 -> true; 0 -> false
//  "" -> false
// "mithlesh" ->true
// " "-> true
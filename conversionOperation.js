let score = "33"

console.log(typeof score)
console.log(typeof(score))

let valueInNumber = Number(score)
console.log(typeof valueInNumber)

console.log(valueInNumber)   // gives NaN IF WE GIVE STRING OR SOMETHING TO CONVERT INTO Number(score)

let score2 = null
let value2 = Number(score2)
console.log(typeof score2);

/*
  "33" => 33
  "33abc" => NaN
  true => 1; false => 0
*/


let isLogged = "de"
let  booelanvalue = Boolean(isLogged)
console.log(booelanvalue);
console.log(typeof isLogged);

// 1 => true ; = => false
// " " => false
// "dev" => true

let somenumner = 33

let stringnumner = String(somenumner)

console.log(stringnumner);
console.log(typeof stringnumner);
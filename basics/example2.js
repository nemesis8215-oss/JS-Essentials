"use strict" // use new version of JS,automatically all JS runs in strict mode,good practice

// alert(3+3), does not execute we are running on node.js not browser

// null is an object type
// Types : number,bigint,string,boolean,null,undefined
console.log(typeof null)

let age = ""
console.log(typeof age)

let newage = Boolean(age)
console.log(typeof newage)
console.log(newage)


// string with literals to Number => NaN 
// null to Number => 0
// undefined to Number => NaN

const pass1 = Symbol('123');// bOth are different;
const pass2 = Symbol('123');


//Array
let arr = ['123','red',2]
let obj = {
    newID : 12345,
    name : shyam,
}

const myFunc = function(){
    console.log('12345');
}
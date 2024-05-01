// THERE ARE TWO TYPES OF DATA-TYPES
// 1. PRIMITIVE DATA-TYPE
const number = 90;
const string = "NHuraira"
const boolean = true
const symbol = '123'
const bigInt = 178474719847981n
const nullValue = null;
// let nowhere = undefined;
// // or
// let undefined;

// 2. NON-PRIMITIVE OR REFERENCE DATA-TYPE
const heros = ["superman" , "spiderman" , "batman"] //aray
const objectValue = {           //object
    name: "NHuraira",
    age: 23
}
let myFunction = function(){
    console.log('hello world');
}


//two memory types
//Stack (Primitive)
//Heap (Non-Primitive)

let myGamingname = "NHuraira-Gaming"
let anotherName = "Nhuraira-Gamatrix"

console.log(myGamingname);
console.log(anotherName);

let userOne = {
    name: 'Nhuraira',
    email: 'nhuraira@gmail.com'
}
let userTwo = userOne
let userFour = userTwo
userFour.name = 'Huraira'
userTwo.email = 'Huraira@outlook.com'
console.log(userOne);
console.log(userTwo);
console.log(userFour);

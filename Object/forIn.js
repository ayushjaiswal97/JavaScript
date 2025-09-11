let person = {
    fName: "Ayush",
    lName: "Jaiswal",
    age: 22
}
// Object.keys
let key = Object.keys(person);
console.log(key);

// Object.values
let value = Object.values(person);
console.log(value);

// Object.assign
let assign = Object.assign(person);
console.log(assign);

// Object.entries
const entries = Object.entries(person);
console.log(entries);

// Object.fromEntries
const ent = Object.fromEntries(entries);
console.log(ent);



// for(let key in person){
//     // console.log(key);
//     // for value 
//     console.log(person[key])
// }

var a = Object.getOwnPropertyDescriptors(person);
// console.log(a);

// Object.definePropert()
Object.defineProperty(person,"lName",{
    value:"Kumar",
    enumerable:false
})
var a = Object.getOwnPropertyDescriptors(person);
// console.log(a);

// for(let key in person){
//     console.log(person[key])
// }
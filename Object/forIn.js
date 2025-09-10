let person = {
    fName: "Ayush",
    lName: "Jaiswal",
    age: 22
}
// for(let key in person){
//     // console.log(key);
//     // for value 
//     console.log(person[key])
// }

var a = Object.getOwnPropertyDescriptors(person);
console.log(a);
let person ={
    fName: "Ayush",
    lName: "Jaiswal",
    age: 22,
    sayMyName : function(){
        console.log(this.fName + " " + this.lName);
    },
    sayMyAge : function(){
        console.log(this.age);
    }
}
var { fName, lName, age} = person;
console.log(fName)
console.log(lName)
console.log(age)

var arr = [1,2,3,44,5];
var [a,b,c] = arr;
console.log(a)
console.log(b)
console.log(c)
// var a = 10;
// console.log(this.a);

// this in objects:-
function sayMyAge(){
    console.log(this.age)
}
var person = {
    fName : "Ayush",
    lName : "Jaiswal",
    age : 22,
    // sayMyAge: function(){
    //    console.log(this.age)
    // }
    sayMyAge: sayMyAge
}

var person2 = {
    fName : "Aman",
    lName : "Jaiswal",
    age : 24,
    // sayMyAge: person.sayMyAge
    sayMyAge : sayMyAge
}
person.sayMyAge();
person2.sayMyAge();

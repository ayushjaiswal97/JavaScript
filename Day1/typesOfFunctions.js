// function declaration
function sum(a,b){
    console.log(a+b);
}
sum(2,3)

// function  expression
const subtract = function(a, b){
    console.log(a - b);
}
subtract(10,3);

// Arrow function
const greet = () =>{
    return "Good Morning";
}
console.log(greet());
// Another way 
const greeting = () => "Good Morning";
console.log(greeting());

// 
const add = (a,b) => a + b;
console.log(add(1,2));

// callbacks functions
function hello(){
    console.log("Hello Rahul")
}

function msg(a,b){
    console.log(a);
    b();
}

msg(5, function(){  // anonymous function
    console.log("callbacks");
}) // Higher Order function
hello("Good Morning", hello);

// IIFE - Immediately Invoked function expression
(function(){
    console.log("Hello there!")
})()



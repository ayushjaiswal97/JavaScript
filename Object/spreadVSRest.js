// spread --> 
let obj = {
    name : "Ayush",
    age : 22
}
let obj2 = {
    city : "bhopal",
    height: 5.6,
    ...obj
}
console.log(obj2)

// spread in function
var db = [2,3,4]
function add(a,b,c){
    console.log(a+b+c);
}
add(...db);


// rest
function add(...val){
    console.log(val)
}
add(1,2,3,4,5,6,6,7,8,9,)
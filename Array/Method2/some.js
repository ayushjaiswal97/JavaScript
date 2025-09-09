var arr = [1,2,3,4,5,6,7]
var a = arr.some((item, index)=>{
    return item>8;
});
console.log(a);


let marks = [10,67, 34, 9, 99]
let any = marks.some(function(val){
    return val > 90
});
console.log(any)
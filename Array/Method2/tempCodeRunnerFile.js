var arr = [1,2,3,4,5,6,7]
var a = arr.some((item, index)=>{
    return item>6;
});
console.log(a);
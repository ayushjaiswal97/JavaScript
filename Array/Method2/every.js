var arr = [1,2,3,4,5,6,7]
var a = arr.every((item, index)=>{
    return item>0;
});
console.log(a);
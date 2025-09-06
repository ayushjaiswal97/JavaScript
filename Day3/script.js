var a = 20;
console.log(a);
function sum(a,b){
    var total = a+b;
    function thrice(){
        var three = x + x + x;
        return three;
    }
    var tripal = thrice(4);
    console.log(tripal);
    return total;
}
var add = sum(4,5);
console.log(add);

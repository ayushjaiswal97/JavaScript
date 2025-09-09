// map()
// Imperative way (without map())
var arr1 = [2,3,4,5,6,7];
var arr2 = [];
for(let i = 0; i<arr1.length; i++){
    arr2[i] = arr1[i]*2;
}
console.log(arr2);

// with map()
var arr = [2,3,4,5,6,7];
var doubled = arr.map(function(items, index){
    // console.log(items, index);
    return items*2;
})
console.log(doubled);

// Arrow Function
var dbld = arr.map(x => x*2);
console.log(dbld);

//
var check = arr.map((x) => x>5)
console.log(check);


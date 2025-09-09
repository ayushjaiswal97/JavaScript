let arr = [1,2,3,4,5,6,7];
let ans = arr.find(function(val){
    return val === 1;
});
console.log(ans);


let obj = [
    { id: 1, key: 1},
    { id: 2, key: 2},
    { id: 3, key: 1},
];
let val = obj.find(function(val){
    return val.key === 1;
});
console.log(val);
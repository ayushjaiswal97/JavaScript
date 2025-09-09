let arr = [1,2,3,4,5,6,7]
let arr2 = [...arr];
console.log(arr2);
arr.pop();
console.log(arr2); // [ 1, 2, 3, 4, 5, 6 ]
console.log(arr); // [ 1, 2, 3, 4, 5, 6, 7 ]

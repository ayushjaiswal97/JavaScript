let arr = [1,2,3,4,5];

arr.push(6); // Add to end
console.log(arr);
arr.pop(); // Remove last
console.log(arr);
arr.shift(); // Remove first
console.log(arr);
arr.unshift(0); // Add to start
console.log(arr);
arr.splice(1, 2); // Remove 2 items starting at index 1
console.log(arr);
var arr1 = arr.slice(1, 2); // Remove 2 items starting at index 1
console.log(arr1);
arr.reverse();
console.log(arr);


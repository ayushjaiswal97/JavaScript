var arr = [9,1,45,23,-100.5, 200.5, 2,7,5,3];
arr.sort();
console.log(arr);

// 
arr.sort((a,b)=>{
    // return a-b; // increasing
    return b-a; // decreasing
});
console.log(arr);


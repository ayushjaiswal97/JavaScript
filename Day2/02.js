// function questions

// Reverse-print the multiplication table of 2 (like 2 × 10 = 20 … down to 2 × 1 = 2).
const mul = 2;
for(let i = 10; i >= 1; i--){
    console.log(`${mul} * ${i} = ${mul*i}`);
}

// Find the factorial of a number (for example, 5! = 5 × 4 × 3 × 2 × 1 = 120).
const num = 5;
let factorial = 1;
for(let i = num; i >= 1; i--) {
    factorial *= i;
}
console.log(`Factorial of ${num} is ${factorial}`);

// Print the first 10 numbers of the Fibonacci sequence (0, 1, 1, 2, 3, 5 …).


// Use a loop to print all the characters of your name one by one.
const name = "Ayush";
for(let i = 0; i < name.length; i++){
    console.log(name[i]);
}


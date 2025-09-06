const x = 10; // global scope

function show() {
  console.log(x); // ✅ can access
}
show();
console.log(x); // ✅ can access
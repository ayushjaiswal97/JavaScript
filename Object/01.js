// creating the object
let student = {
    name: "Ravi",
    age: 22,
    isEnrolled: true
};
// accessing the value
console.log(student);
console.log(student.age);

// bracket notation
let nam = "name";
console.log(student[nam])


// nesting and deep access
let user = {
    name: "harsh",
    address:{
        city: "Bhopal",
        pin: 462001,
        location:{
            lat: 23.2,
            lng: 77.4,
        },
    },
};
console.log(user.address.location.lat);
console.log(user.address.location.lng);

// Object destructuing 
let { lat, lng } = user.address.location;
console.log(lat);
console.log(lng);

// for-in loop
let obj1 = {
    name: "Ayush",
    age: 22,
    email: "test@test.com"
};
for(let key in obj1){
    // console.log(key);
    // console.log(obj1.key); // undefined
    console.log(key, ":", obj1[key]);
}

// Object.keys()
console.log(Object.keys(obj1));

// Object.value()
console.log(Object.values(obj1));

// Object.assign()
let newObj = Object.assign({}, obj1)
console.log(newObj);

// Copying Objects
let copy = {...obj1};
console.log(copy);

// Deepcopy
let std = {
    name: "Ayush",
    age: 22,
    email: "ayush@gmail.com",
    address:{
        city: "Bhopal",
    },
};

let nesCopy = JSON.parse(JSON.stringify(std));
console.log(nesCopy);

// Optional Chaining
let users ={
    name: "Akash",
    age: 20,
    email: "akash@gmail.com",
    address:{
        city: "Bokaro",
    },
};
console.log(users?.address?.city);
console.log(users?.addresses?.city);

// computed properties
let role = "Admin";
let usrs ={
    name: "Akash",
    age: 20,
    email: "akash@gmail.com",
    address:{
        city: "Bokaro",
    },
    [role]: "Akash"
};
console.log(usrs);




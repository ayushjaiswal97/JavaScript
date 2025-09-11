let person = {
    fName: "Ayush",
    lName: "Jaiswal",
    age: 22,
    city: {
        name: "Bokaro",
        location: "East",
        pin : 827009,
        state: "Jharkhand",
        places:{
            place1 : "Chas",
            place2 : "Naya More"
        }
    },
    skills : ["HTML", "CSS", "JS"]
};
console.log(person.city.places.place1);
console.log(person.skills[1]);

// Object.assgin()
let user = {
    fName: "Ayush",
    lName: "Jaiswal",
    age: 22
};
var user2 = Object.assign({},user)
console.log(user2);

var user3 = Object.assign({}, {a:1, b:2, c:3, ...person})
console.log(user3);

// Object.freeze
// Object.freeze(user);
// user.fName = "Aman"
// console.log(user);

// Object.seal
Object.seal(user);
user.fName = "Aman";
console.log(user);
delete user.lName;
console.log(user);

//
let prsn = {
    fName: "Ayush",
    lName: "Jaiswal",
    age: 22
};

var n = Object.getOwnPropertyNames(prsn);
console.log(n);

var n = person.propertyIsEnumerable('fName');
console.log(n);

let usr = Object.hasOwn(prsn, "fName")
console.log(usr);
let c = prsn.hasOwnProperty("lName");
console.log(c);

let user = {
    fName: "Ayush",
    lName: "Jaiswal",
    age : 22
}

let user2 = user;
user2.age = 23;
// console.log(user);
// console.log(user2);

let person = {
    fName : "Ayush",
    lName : "Jaiswal",
    age : 22,
    city : {
        name : "Bokaro"
    }
}

// let person2 = {...person};
// person2.city.name = "Bhopal";
// console.log(person); // city.name = "Bhopal";
// console.log(person2); // city.name = "Bhopal";

let newPerson = JSON.parse(JSON.stringify(person));
newPerson.city.name = "Jaipur";
console.log(person);
console.log(newPerson);
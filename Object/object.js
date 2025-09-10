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

// 

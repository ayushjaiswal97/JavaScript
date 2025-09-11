let user = {
    fName: "Ayush",
    lName: "Jaiswal",
    age : 22
}

// phle jo stringify method hai ye js object ko stringify krke json object bnta hai 
let jsonObj = JSON.stringify(user);
console.log(jsonObj)

// or parse json object ko javascript object bana deta hai
let jsonObj2 = JSON.parse(jsonObj);
console.log(jsonObj2);

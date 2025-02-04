//Objects
//Creation
//Method - 1
var ob1 = {name:"Sai",branch:"CSE"}
console.log(ob1);
var ob2 = {
    name : "Sai vardhan",
    company : "Codegnan",
    branch : "Python"
}
console.log(ob2);
//Method - 2
var ob3 = new Object();
ob3.name = "Mallikharjun";
ob3.company = "codegnan";
ob3.branch = "Java";
console.log(ob3);

//Accessing
console.log(ob2.name);
console.log(ob3.name);
console.log(ob2["name"]);
console.log(ob3["name"]);

//Insertion
ob2.salary = 60000;
console.log(ob2);
ob3.salary = 60000;
console.log(ob3);
ob2["gender"] = "Male";
console.log(ob2);
ob3["Gender"] = "Male"
console.log(ob3);

//Modification
ob2.branch = "CSE";
console.log(ob2);
ob3.branch = "ECE";
console.log(ob3);
ob2["company"] = "CDG";
console.log(ob2);
ob3["company"] = "CDG";
console.log(ob3);

//Deletion
delete ob2.salary;
console.log(ob2);
delete ob3.salary;
console.log(ob3);
delete ob2["branch"];
console.log(ob2);
delete ob3["branch"];
console.log(ob3);

//Methods
console.log(Object.keys(ob2));
console.log(Object.keys(ob3));

console.log(Object.values(ob2));
console.log(Object.values(ob3));

console.log(Object.entries(ob2));
console.log(Object.entries(ob3));
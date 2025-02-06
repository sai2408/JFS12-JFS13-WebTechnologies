//Regural Expression
//Method 1 [ Literal Notation ]
/*
var r1 = /j.*t/;
console.log(r1);
console.log(r1.global);
console.log(r1.ignoreCase);
console.log(r1.multiline);
var r1 = /j.*t/g;
console.log(r1.global);
console.log(r1.ignoreCase);
console.log(r1.multiline);
var r1 = /j.*t/ig;
console.log(r1.global);
console.log(r1.ignoreCase);
console.log(r1.multiline);
var r1 = /j.*t/img;
console.log(r1.global);
console.log(r1.ignoreCase);
console.log(r1.multiline);
*/
//Method - 2 [Object Constructor]
/*
var r1 = new RegExp("j.*t");
console.log(r1.global);
console.log(r1.ignoreCase);
console.log(r1.multiline);

var r1 = new RegExp("j.*t","g");
console.log(r1.global);
console.log(r1.ignoreCase);
console.log(r1.multiline);

var r1 = new RegExp("j.*t","i");
console.log(r1.global);
console.log(r1.ignoreCase);
console.log(r1.multiline);

var r1 = new RegExp("j.*t","img");
console.log(r1.global);
console.log(r1.ignoreCase);
console.log(r1.multiline);
*/
//Methods in RegExp
//test()
/*
var r1 = /j.*t/;
console.log(r1.test("JavaScript Javascript Javascript"));
console.log(r1.test("JavaScript javascript Javascript"));
var r1 = /j.*t/i;
console.log(r1.test("JavaScript Javascript Javascript"));
console.log(r1.test("JavaScript javascript Javascript"));
*/
//exec()
/*
var r1 = /j.*t/g;
console.log(r1.exec("JavaScript Javascript Jat"));
var r1 = /j.*t/gi;
console.log(r1.exec("JavaScript Javascript Jat"));
*/
//String & Regexp methods
/*
var s1 = "hellojavascriptworld";
var r1 = /j.*t/;
console.log(s1.match(r1));
console.log(s1.search(r1));
console.log(s1.replace(r1,"abc"));
*/
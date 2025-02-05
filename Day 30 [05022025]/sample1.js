//String Methods
//charAt()
/*
var x = "Hello";
console.log(x.charAt(1));
*/
//charcodeat()
/*
var x = "abcABC";
console.log(x.charCodeAt(0));
console.log(x.charCodeAt(3));
console.log(x.charCodeAt(4));
*/
//concat()
/*
var x1 = "Hello";
var x2 = " ";
var x3 = "World";
console.log(x1.concat(x2,x3));
*/
//endswith()
/*
var x = "Hello World";
console.log(x.endsWith("d"));
console.log(x.endsWith("rld"));
console.log(x.endsWith("abc"));
*/
//startswith()
/*
var x = "Hello world";
console.log(x.startsWith("H"));
console.log(x.startsWith("Hel"));
console.log(x.startsWith("abc"));
*/
//includes()
/*
var x = "abc xyz mno";
console.log(x.includes("abc"));
console.log(x.includes("mno"));
console.log(x.includes("xyz"));
console.log(x.includes("hello"));
*/
//indexof
/*
var x = "codegnan";
console.log(x.indexOf("n"));
console.log(x.indexOf("o"));
console.log(x.indexOf("z"));
*/
//lastindexof
/*
var x = "codegnan";
console.log(x.lastIndexOf("o"));
console.log(x.lastIndexOf("n"));
console.log(x.lastIndexOf("z"));
*/
//repeate
/*
var x = "Codegnan ";
console.log(x.repeat(10));
console.log(x.repeat(1));
console.log(x.repeat(0));
*/
//replace() and replaceall()
/*
var x = "Hello all";
console.log(x.replace("all","codegnan"));
console.log(x.replace("l","t"));
console.log(x.replaceAll("l","t"));
console.log(x.replace("b","a"));
*/
//slice()
/*
var x = "abcdefgh";
console.log(x.slice(3,5));
console.log(x.slice(10,20));
console.log(x.slice(5,3));
*/
//substring()
/*
var x = "abcdefgh";
console.log(x.substring(3,5));
console.log(x.substring(10,20));
console.log(x.substring(5,3));
*/
//split()
/*
var x = "abc mno xyz";
console.log(x.split());
console.log(x.split(""));
console.log(x.split(" "));
var x = "abc,mno,xyz";
console.log(x.split(","));
*/
//tolowercaase()
/*
var x = "Hello World";
console.log(x.toLowerCase());
*/
//touppercase()
/*
var x = "Hello world";
console.log(x.toUpperCase());
*/
//trim()
/*
var x = "hello";
console.log(x.trim());
var y = "    hello    ";
console.log(y.trim());
var z = "       hello         world       ";
console.log(z.trim());
*/
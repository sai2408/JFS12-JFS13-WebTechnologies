//Regular Expressions Patterns
//\d
/*
var p = /\d/g;
var t = "The value is 25 rupees";
var matches = t.match(p);
console.log(matches);
*/
//\D
/*
var p = /\D/g;
var t = "The value is 25 rupees";
var matches = t.match(p);
console.log(matches);
*/
//\s
/*
var p = /\s/g;
var t = "The value is 25 rupees";
var matches = t.match(p);
console.log(matches);

var p = /\s/g;
var t = "The value is 25 rupees";
var matches = t.replace(p,"$");
console.log(matches);
*/
//\S
/*
var p = /\S/g;
var t = "The value is 25 rupees";
var matches = t.match(p);
console.log(matches);
*/
//\w
/*
var p = /\w/g;
var t = "The _value is $25 rupees";
var matches = t.match(p);
console.log(matches);
*/
//\W
/*
var p = /\W/g;
var t = "The _value is $25 rupees";
var matches = t.match(p);
console.log(matches);
*/
//\b
/*
var p = /\bvalue\b/g;
var t = "The value is 25 rupees which is values of 65 rupees value";
var matches = t.match(p);
console.log(matches);
*/
//dot(.)
/*
var p = /a.c/g;
var t = "ac abc acc axc az zc zbz zbc abbc";
var matches = t.match(p);
console.log(matches);
*/
//^
/*
var p = /^the/gi;
var t = "The value is 25 rupees";
var matches = t.match(p);
console.log(matches);
*/
//$
/*
var p = /Rupees$/gi;
var t = "The value is 25 rupees";
var matches = t.match(p);
console.log(matches);
*/
//*
/*
var p = /ab*c/g;
var t = "ac abc abbc zc zbc ax abx abxc";
var matches = t.match(p);
console.log(matches);
*/
//+
/*
var p = /ab+c/g;
var t = "ac abc abbc zc zbc ax abx abxc";
var matches = t.match(p);
console.log(matches);
*/
//?
/*
var p = /worlds?/g;
var t = "hello world";
var matches = t.match(p);
console.log(matches);
*/
//{}
/*
var p = /ab{3}c/g;
var t = "abc abbc abbbc ac";
var matches = t.match(p);
console.log(matches);

var p = /\d{2}:\d{2}/g;
var t = "23:34";
var matches = t.match(p);
console.log(matches);
*/
//[]
/*
var p = /[ab]c/g;
var t = "c  axc bxc ac bc";
var matches = t.match(p);
console.log(matches);
*/
//|
/*
var p = /abc|xyz/g;
var t = "abc ,mdnf alfhnalj xyz asa,mfnfj";
var matches = t.match(p);
console.log(matches);
*/
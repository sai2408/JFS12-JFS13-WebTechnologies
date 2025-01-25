//Data Types
//Primitive
var a = 10;
console.log(a);
console.log(typeof(a));
var b = 12.345;
console.log(b);
console.log(typeof(b));
var c = true;
console.log(typeof(c));
var d = "Hello world";
console.log(typeof(d));
var e = null;
console.log(typeof(e));
var f1 = Symbol("abcd")
console.log(typeof(f1));
var f2 = Symbol(123);
console.log(typeof(f2));
//Reference
var x = {1:1000,"a":"abcd"}
console.log(x);
console.log(typeof(x));
var y = [10,20,30,40];
console.log(y);
console.log(typeof(y));
function abc(){
    console.log("Hello I am function");
}
abc();
//special
var a1 = NaN;
console.log(a1);
console.log(typeof(a1));
var a2 = String.NaN;
console.log(a2);
console.log(typeof(a2));
var b1 = Infinity;
console.log(b1);
console.log(typeof(b1));
var b2 = -Infinity
console.log(b2);
console.log(typeof(b2));
var a = 1234;
console.log(a);
console.log(typeof(a));
var b = BigInt(123456789876543234567890);
console.log(b);
console.log(typeof(b));
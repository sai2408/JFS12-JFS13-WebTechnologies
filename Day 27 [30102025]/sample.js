//Function Declaration
/*
function example1(){
    console.log("Hello 1");
}
example1();
function example2(a,b){
    console.log(a*b);
}
example2(10,2);
*/
//Function Expression
/*
var example3 = function(){
    console.log("Hello World");
}
example3();
var example4 = function(a,b){
    console.log(a+b);
}
example4(10,20);
*/
//Arrow function
/*
var example5 = ()=>{
    console.log("Arrow Function Example");
}
example5();
var example6 = (x,y) => {
    console.log(x/y);
}
example6(20,2);
*/
//IIFE
/*
(function(){
    console.log("IIFE");
})();
(function(a,b){
    console.log(a+b);
})(10,20);
*/
//Named Function Expression
/*
var example8 = function example7(){
    console.log("Hello Codegnan");
}
example8();
var example10 = function example9(a,b){
    console.log(a*b);
}
example10(2,3);
*/
//Problem - 1
//WP-WR
/*
var problem1 = (n) => {
    if (n < 0){
        n = -1 * n;
    }
    res = 0
    while (n>0){
        r = n % 10;
        res = (res*10) + r;
        n = parseInt(n/10);
    }
    return res%10;
}
var n = -3234;
var result = problem1(n);
console.log(result);
*/
//Problem - 2
//WP - WOR
/*
function problem2(x,y){
    if (x<0){
        x = x * -1;
        x = (x*10)+y
        res = 0
        while (x>0){
            r = x%10;
            res = (res*10)+r;
            x = parseInt(x/10);
        }
        res = (res*10)+y;
        res1 = 0;
        while (res>0){
            r = res%10;
            res1 = (res1*10)+r;
            res = parseInt(res/10);
        }
        console.log(res1*-1);
    }else{
        x = (x*10)+y;
        res = 0;
        while (x>0){
            r = x%10;
            res = (res*10)+r;
            x = parseInt(x/10);
        }
        res = (res*10)+y;
        res1 = 0;
        while (res>0){
            r = res%10;
            res1 = (res1*10)+r;
            res = parseInt(res/10);
        }
        console.log(res1);
    }
}
problem2(-143,5);
*/
//WOP- WR
/*
function problem3(){
    return "Hello";
}
var x =  problem3();
console.log(x);
*/
//WOP - WOR
/*
function abc(){
    console.log("Hello");
}
abc();
*/


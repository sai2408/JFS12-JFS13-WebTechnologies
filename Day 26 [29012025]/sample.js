//For Loop
/*
for (var i=1;i<5;i++){
    console.log(i);
}
*/
//For in
/*
var x = {a:10,b:20,c:30,d:40};
for (var k in x){
    console.log(k,x[k]);
}
*/
//For of
/*
var z = [10,20,300,40,50];
for (var k of z){
    console.log(k);
}
*/
//do while
/*
var start = 10;
do{
    console.log(start);
    start = start + 1;
} while (start <= 20);
*/
//While 
/*
var start = 100;
while (start <= 200){
    console.log(start);
    start = start + 1;
}
*/
//Problem - 1
/*
var n = 100;
if (n>=0){
    var res = 0
    while (n > 0){
        r = n%10;
        res = (res*10) + r;
        n = parseInt(n/10);
    }
    console.log(res);
}
else{
    n = -1 * n;
    var res = 0
    while (n > 0){
        r = n%10;
        res = (res*10) + r;
        n = parseInt(n/10);
    }
    res = -1 * res
    console.log(res);
}
*/
//Problem - 2
/*
var fc = 0;
var n = 14;
for(var i=1;i<=n;i++){
    if (n%i==0){
        fc = fc + 1;
    }
}
if (fc==2){
    console.log("Prime Number");
}
else{
    console.log("Composite Number");
}
*/
//Problem - 3
var a = 10;
var b = 20;
var c = 30;
if (a>b && a>c){
    a = 0;
}
else if (b>a && b>c){
    b = 0
}
else{
    c = 0;
}
if (a>b && a>c){
    console.log(a);
}
else if (b>a && b>c){
    console.log(b);
}
else{
    console.log(c);
}


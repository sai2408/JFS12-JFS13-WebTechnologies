//Creation
var arr1 = [10,20,30,40,50];
var arr2 = new Array(100,200,300,400);
console.log(arr1);
console.log(arr2);

//Accessing
console.log(arr1[6]);
console.log(arr2[4]);

//Modification
console.log(arr1);
arr1[2] = 250;
console.log(arr1);
console.log(arr2);
arr2[2] = 250;
console.log(arr2);

//Methods
var a = [10,20,30,40,40,50,60,70,80];
console.log(a);
a.push(90);
console.log(a);
a.pop()
console.log(a);
a.shift()
console.log(a);
a.unshift(100);
console.log(a);
console.log(a.slice(2,3));
var x = [10,20,30];
var y = [40,50,60];
console.log(x.concat(y));
console.log(y.concat(x));
var k = [1,2,3,4,5,6,3,8,9];
console.log(k.join(" $ "));
console.log(k.indexOf(3));
k.forEach(function(n){
    console.log("Number: " + n);
});
var res1 = k.map(function(n){
    return n+10;
})
console.log(res1);
var res2 = k.filter(function(n){
    return n%2==0;
})
console.log(res2);
var k = [1,2,3,4,5];
var res3 = k.reduce(function(a,c){
    return a*c;
},1);
console.log(res3);
function fun1(name){
    console.log("Hello "+name);
}
function fun2(age){
    console.log("I am "+age+" years old");
}
export {fun1 as hello1,fun2 as hello2};
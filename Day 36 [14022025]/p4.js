//promise.all
/*
Promise.all([
    Promise.resolve("Operation 1"),
    new Promise ((resolve) => {
        setTimeout(()=>{
            resolve("Operation 2"),2000
        })
    }),
    Promise.resolve("Operation 3"),
    
])
.then((result)=>{
    console.log(result);
})
.catch((error)=>{
    console.log("Error Occured");
})
*/
//Promise race
/*
Promise.race([
    new Promise((resolve) => setTimeout(() => resolve("Operation 1"),2000)),
    new Promise((resolve) => setTimeout(()=> resolve("Operation 2"),1000))
])
.then((result)=>{
    console.log(result);
})
.catch((roor)=>{
    console.log(roor);
})
*/
//Promise.allSettled()
/*
Promise.allSettled([
    Promise.resolve("Operation 1"),
    Promise.resolve("Operation 2"),
    new Promise((resolve)=> setTimeout(()=> resolve("Operation3"),2000)),
    Promise.reject("Rejected Operation")
])
.then((result)=>{
    console.log(result);
})
*/
//Promise.any()
/*
Promise.any([

    new Promise((resolve)=> setTimeout(()=> resolve("Operation 1"),2000)),
    new Promise((resolve)=> setTimeout(()=> resolve("Operation 2"),1000)),
    Promise.reject("Rejected Operation")
])
.then((result)=>{
    console.log(result);
})
*/

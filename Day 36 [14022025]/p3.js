new Promise((resolve,reject) => {
    setTimeout(()=> resolve(10),2000);
})
.then((res1)=>{
    console.log(res1);
    return res1+10;
})
.then((res2)=>{
    console.log(res2);
    return res2+abc;
})
.then((res3)=>{
    console.log(res3);
})
.catch((error)=>{
    console.log("Error Occured");
})
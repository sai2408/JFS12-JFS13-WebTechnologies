var mypromise = new Promise((resolve,reject)=>{
    let res = true;
    setTimeout(()=>{
        if (res==true){
            resolve("Operation done");
        }
        else{
            reject("Operation Failed")
        }
    },2000);
})

mypromise   
.then((response)=>{
    console.log(response);
})
.catch((error)=>{
    console.log(error);
})
.finally(()=>{
    console.log("Operation completed");
})

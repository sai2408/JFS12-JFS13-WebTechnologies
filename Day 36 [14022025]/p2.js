var mypromise = new Promise((resolve,reject)=>{
    let res = false;
    setTimeout(()=>{
        if (res==true){
            resolve("Operation done");
        }
        else{
            reject("Operation Failed")
        }
    },2000);
})

async function handlepromise(){
    try{
        let result = await mypromise;
        console.log(result);
    }
    catch (error){
        console.log(error);
    }
    finally{
        console.log("Operation Completed");
    }
}
handlepromise();
function register(){
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
console.log("register here");
resolve();
    },6000)
})
}
function login(){
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve();
console.log("login here");
    },6000)
})
}
function getData(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("fetch");
            resolve();
        },3000)
    })
}
function displayData(){
    console.log("display");
}
function waitforinput(delay){
    const ct=Date.now();
    const ms=ct+delay;
    while(Date.now()<ms){}
}
// register().then(()=>{
//     login().then(()=>{
//         getData().then(()=>{
//             displayData();
//         })
//     })
// }).catch((err)=>{
//     console.log("error in login",err)
// });
async function main(){
    try{
        await register();
        await login();
        await getData();
        displayData();
    }catch(err){
        console.log("error in login",err)
    }
}
main();
console.log("call another app")
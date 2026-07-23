function register(cb){
    setTimeout(()=>{
 console.log("register here");
 cb();
    },6000)
   
}
function login(cb){
    console.log("login here");
    cb();
}
function getData(cb){
    setTimeout(()=>{
 console.log("fetch");
 cb()
    },3000)
}
function displayData(){
    console.log("display");
}
function waitforinput(delay){
    const ct=Date.now();
    const ms=ct+delay;
    while(Date.now()<ms){}
}
register(()=>{
    login(()=>{
        getData(()=>{
            displayData();
        })
    })
});
console.log("call another app");

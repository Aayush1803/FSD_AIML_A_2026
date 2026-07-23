function register(){
    setTimeout(()=>{
        console.log("Registration successful");
    }, 2000);
}
function login(){
    setTimeout(()=>{
        console.log("Login successful");
    }, 2000);       
}
function getdata(){
    setTimeout(()=>{
        console.log("Data fetched successfully");
    }, 2000);
}
function display(){
    setTimeout(()=>{
        console.log("Data displayed successfully");
    }, 2000);       
}
function waitforinput(delay){
    const ct=Date.now();
    const ms=ct+delay;
    while(Date.now()<ms){
    }
}
register();
login();
getdata();
display();
console.log("call another app");


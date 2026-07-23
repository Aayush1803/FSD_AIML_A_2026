function register(){
    waitforinput(2000);
    console.log("Registration successful");
}
function login(){
    waitforinput(2000);
    console.log("Login successful");
}
function getdata(){
    waitforinput(2000);
    console.log("Data fetched successfully");
}
function display(){
    waitforinput(2000);
    console.log("Data displayed successfully");
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


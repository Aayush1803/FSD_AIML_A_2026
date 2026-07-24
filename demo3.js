function sum(...num){
    //const total=num.reduce((i,s)=>i+s,0);
    let sum=0;
    
    for(i of num){
        sum+=i;
    }
    return sum;
}
console.log("sum:",sum(1,2,3,4,5));
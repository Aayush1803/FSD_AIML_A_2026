const a=[1,2,3,4,5,6,7,8,9,10];
const b=a.filter((num) => num % 2 === 0);
console.log("Even numbers=", b);    
const c=b.map((num) => num * num);
console.log("Squares of even numbers=", c);
const d=c.reduce((acc, num) => acc + num);
console.log("Sum of squares of even numbers=", d);
const students={
    name:"Aayush",
    Age:20,
    branch:"CSE"
};
const newstudent={...students,
        address:
        {
            state:"uttar pradesh",  
            city:"ghaziabad",
            pincode:201009
        }
    }
console.log("students:",students);
console.log("newstudent:",newstudent);
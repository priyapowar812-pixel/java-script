// 

class Department {
     myName = "Priya";
    constructor(name, year) {
        this.deptName = name;
        this.year = year
    }

    display() {
        console.log(this.year + " " + this.deptName);
        console.log(this.year, this.deptName);
    }

}

// const itDept = {
//     name : "IT",
//     year: 1975
// };

const itDept = new Department("IT", 1975);

console.log("ITdept :",itDept);
itDept.display();

console.log(itDept.myName);


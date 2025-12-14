let itDept = {name : "IT", year : 1985};
let mechDept = {name : "Mechanical", year : 1990};
let civilDept = {name : "Civil", year : 1980};

let priya =  { name : "priya" , interest : "computer"};
let mahesh = {name : "mahesh" , interest : "machines"};
let sangeeta = {name : "sangeeta" , interest : "structures"};
let nisha = {name : "nisha" , interest : "networks"};

let students = [priya, mahesh, sangeeta, nisha];

for (let student of students) {
    switch(student.interest) {
        case "computer" : 
            student.department = itDept;
            break;
         
        case "machines" : 
            student.department = mechDept;
            break;
          
        case "structures" :
            student.department = civilDept;
            break;
            
        case "networks" :
            student.department = itDept;
            break;
            
        default :
            student.department = null;    
    }
}

console.log(students);

// for (let student of students) {
//     console.log(`${student.name} : ${student.department.name}`);

// }


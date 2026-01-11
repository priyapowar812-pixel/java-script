const department = {
    name : "IT Dept",
    year : 1970,
    students : ["nisha" , "seema", "sachin"],

}

let {students} = department;

console.log(students);

const countStudents = ({students}) => {
    console.log(students.length);
}
countStudents(department);
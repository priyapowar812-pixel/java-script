let students = ["priya","sunita","radha","smriti","jemi","harman"];

let marks = [24,28,78,45,27,90,67,55];

let users = [
    {id : 1, name: "piyu", age:26,location : "kolhapur"},
    {id : 2, name: "nidhi", age:30,location : "sangli"},
    {id : 3, name: "krishna", age:28, location : "satara"},
];

//sorting array of strings

let sortedStudents = students.sort((a,b)=>a.localeCompare(b));
console.log("sorted students", sortedStudents);

//sorting array of numbers

let sortedMarks = marks.sort((a,b)=> a-b);
let sortedMarksDes = marks.sort((a,b)=> b-a);
console.log("sorted marks",sortedMarks);
console.log("sorted marks in descending order",sortedMarksDes);

// sorting array of objects based on one attribute.. here its name

let sortedUsers = users.sort((a,b)=> a.age - b.age);
console.log("sorted users");
console.table(sortedUsers);
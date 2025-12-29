// write a class to manage the college admissions for students
// consider each student object like 
// const suyog = { name : "Suyog", marks: 91}
// write methods to add student, remove student, search students, list all students

class College{
    constructor() {
        this.students = [];
    }

    addStudent(student) {
        this.students.push(student);
    }

    removeStudent(student) {
        let index = this.students.indexOf(student);
        if(index >= 0) {
            this.students.splice(index,1);
        }
    }

    search(criteria) {
        let result = [];

        for(let student of this.students) {
            if(criteria(student)) {
                result.push(student);
            }
        }
        return result;
    }

    display() {
        console.log("students : ", this.students);
    }
}

let vivekanand = new College();

vivekanand.addStudent({ name : "Suyog", marks: 91});
vivekanand.addStudent({ name : "Mahesh", marks: 86});
vivekanand.addStudent({ name : "Suresh", marks: 35});
vivekanand.addStudent({ name : "Gopal", marks: 65});
vivekanand.addStudent({ name : "Ganesh", marks: 75});

vivekanand.display();

const distinction = (student) => student.marks > 75;

console.log(vivekanand.search(distinction));

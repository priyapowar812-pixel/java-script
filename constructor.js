
class Student{
    constructor(name ,age) {
       this.name = name;
       this.age = age;
       this.batch = [this.name];
    }
    admission() {
        console.log(`${this.name} has taken admission`);
    }
}

class ArtStudent extends Student{
   constructor(name,age,subject){
     super(name,age); // super keyword passes the parameters to parent class..
     this.subject = subject;
   }

   admissionStream() {
     super.admission();
     console.log(`${this.name} choose ${this.subject} in art stream`);
   }
}

class ScienceStudent extends Student{
    constructor(name,age,subject){
     super(name,age);
     this.subject = subject;
   }
   admissionStream() {
     super.admission();
     console.log(`${this.name} choose ${this.subject} in science stream`);
   }
}

class CommerceStudent extends Student{
    constructor(name,age,subject){
     super(name,age);
     this.subject = subject;
   }
   admissionStream() {
     super.admission();
     console.log(`${this.name} choose ${this.subject} in commerce stream`);
   }
}

const artStudent = new ArtStudent("saraswati", 30 , "history");
const comStudent = new CommerceStudent("maya", 30 , "maths");
const scienceStudent = new ScienceStudent("saraswati", 30 , "science");

console.log(artStudent);
console.log(artStudent.admissionStream());
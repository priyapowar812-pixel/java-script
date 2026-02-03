
class Student{
    constructor(name ,age) {
       this.name = name;
       this.age = age;
       this.batch = [this.name];

       
    }

    // setting and getting name property..
    set name(newName){
         
         if(newName.length >0 && typeof newName === "string"){
          this._name = newName;
        }else{
        console.error("name should be nonempty string");
        }
    }

    get name(){
        return this._name;
    }

    // setting and getting age property

    set age(newAge){
       if(typeof newAge === "number" && newAge > 0){
        this._age = newAge;
       }
       else{
        console.error("enter valid age");
       }
    }
    get age(){
      return this._age;
    }

    admission(){
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

const artStudent = new ArtStudent("saraswati", -24 , "history");
const comStudent = new CommerceStudent("maya", 30 , "maths");
const scienceStudent = new ScienceStudent("saraswati", 30 , "science");

console.log(artStudent.age);
console.log(artStudent.admissionStream());
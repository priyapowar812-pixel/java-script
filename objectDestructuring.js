const department = {
    name : "Computer",
    year : 1970,
    students : ['suyog','nilesh','yogesh'],
    subjects : [
             {
                name : "java script",
                grade : 3,
              },
              {
                name : "html",
                grade : 1,
              },
              {
                name : "css",
                grade : 1,
              }
    ],

    lab : {
         name : "computer Lab",
         year : 1975,
    }
}

const displayStudents = ({students, subjects}) => {
   console.log(students);
   console.log(subjects);
}

displayStudents(department);

const displayLab = ({lab : {name , year, assistant = "powar"}}) => {
    console.log(name , year, assistant);
}

displayLab(department);


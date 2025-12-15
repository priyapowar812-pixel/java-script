// create subject objects. give attribute name, no of students, days.
// write function to get schedule of given day.
// write function to get schedule of a week.
let mon = "mon";
let tue = "tue";
let wed = "wed";
let thr = "thr";
let fri = "fri";

let week = [mon, tue, wed, thr, fri];

let maths = {
    name : "maths",
    noOfStudents : 100,
    days : [mon, tue, wed]
}

let physics = {
    name : "physics",
    noOfStudents : 100,
    days : [tue, fri]
}

let chemistry = {
    name : "chemistry",
    noOfStudents : 150,
    days : [mon, thr, fri]
}

let biology= {
    name : "biology",
    noOfStudents : 150,
    days : [mon, wed, fri]
}

let subjects = [maths, physics, chemistry, biology];

function getDaySchedule(day){
    let schedule = [];
    for(let subject of subjects){
        if(subject.days.includes(day)){
            // let daySchedule = Object.assign({name:subject.name},{noOfStudents:subject.noOfStudents});
            let daySchedule = {
                        name : subject.name,
                        noOfStudents : subject.noOfStudents               
            };
            schedule.push(daySchedule);
        }
    }
    return schedule;
}

// for week

function getWeeklySchedule() {
    let weeklySchedule = {};
    for (let day of week) {
        let schedule = getDaySchedule(day);
        // console.log(`schedule of ${day}:`, schedule);
        weeklySchedule[day]= schedule;
    }
    return weeklySchedule;
}

let weeklySchedule = getWeeklySchedule();
console.log(weeklySchedule);
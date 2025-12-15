//create objects of subjects. attributes - name,  no of students, days
// write a function to display schedule of each day of week.

let mon = "mon";
let tue = "tue";
let wed = "wed";
let thr = "thr";
let fri = "fri";

let week = [mon,tue, wed, thr, fri];

let itDept = { name : "IT", noOfStudents : 100, days : [mon, tue, wed]};
let civilDept = { name : "Civil", noOfStudents : 150, days : [mon, wed, fri]};
let mechDept = { name : "Mech", noOfStudents : 200, days : [wed, thr, fri]};

let depts = [itDept, civilDept, mechDept];

function getWeeklySchedule(){
    for(let day of week){
        let schedule = getSchedule(day);
        console.log(schedule);
    }

    // let schedule = getSchedule("mon");
    // console.log(schedule);
    // schedule = getSchedule("tue");
    // console.log(schedule);
    // schedule = getSchedule("wed");
    // console.log(schedule);
    // schedule = getSchedule("thr");
    // console.log(schedule);
    // schedule = getSchedule("fri");
    // console.log(schedule);
}

function getSchedule(day) {
    let schedule = [];

    for(let dept of depts) {

        let days = dept.days;
        if(days.includes(day)){
            schedule.push(dept.name);
        }
    }
    return schedule;
}

getWeeklySchedule();
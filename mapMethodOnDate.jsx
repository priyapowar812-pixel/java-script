const dates = ["2/1/2019","7/8/2024","9/10/2026","5/3/2015"];

const transformedDates = dates.map(date => {
    let dateArr = date.split("/");
        dateArr = date.replaceAll("/","-");
        return dateArr;   
});

// lets sort the transformedDates array as per year

const sortedDates = transformedDates.sort((a,b) => new Date(a) - new Date(b));

console.log(sortedDates);
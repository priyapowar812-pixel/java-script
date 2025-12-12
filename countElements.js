let countries = ['India', 'USA', 'UK', 'Australia', 'Canada' ,'UK', 'India'];

function getCount(country) {
    let count = 0;
    for(let item of countries) {
        if(item === country){
            count++;
        }
    }
    return count;
}

function getIndexex(country) {
    let indexes = [];

    for(let i =0; i < countries.length; i++) {
        if(countries[i] === country){
            indexes.push(i);
        }
    }
    return indexes;
}

let totalOccurances = getCount('India');

console.log(`Total occurances of given country is ${totalOccurances}`); 

console.log("Occurance of given country at indexex:", getIndexex('India'));
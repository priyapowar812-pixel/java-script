let countries = ['India', 'USA', 'UK', 'Australia', 'Canada'];

function getCountryByIndex(index) {
    if (index< countries.length)
    {
        return countries[index];
    }
    return "Undefined";
}

let country = getCountryByIndex(2);

console.log("country at given index is ", country);  // UK
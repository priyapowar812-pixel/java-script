const brands = [
   { country : "Germany", brand : "BMW" },
   { country : "Germany", brand : "Porche" },
   { country : "Germany", brand : "Mercedes" },
   { country : "India", brand : "Tata" },
   { country : "USA", brand : "Ford" },
   { country : "UK", brand : "Rolls Royce" },
   { country : "Japan", brand : "Honda" },
   { country : "India", brand : "Mahindra" },
   { country : "USA", brand : "Toyota" },
   { country : "Germany", brand : "Audi" },
];

// write a function to group brands by country
function getBrandsByCountry() {
    let countryBrands = {};
    for (let brand of brands) {
        if(!countryBrands.hasOwnProperty(brand.country)){
            countryBrands[brand.country]= [];
        }
        countryBrands[brand.country].push(brand.brand);


    }
    return countryBrands;
}

console.log (getBrandsByCountry());

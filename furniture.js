//create furniture objects with attributes name weight description price
//create array of these furniture objects.
//write a function to get total price for home interior design.
//write a function to categorise each furniture object into low price medium and high price categories.
//write a function to get furniture for given price category.
//write a function to print name , price and description.

let table = {name: "table", description: "four legs solid table" , price : 2000};
let chair = {name: "chair", description : "solid chair for office work" , price : 800};
let sofa = {name: "sofa", description : "solid sofa for quick nap" , price : 25000};
let tvUnit = {name: "tvUnit", description : "TV Unit" , price : 3000};
let cupboard = {name: "cupboard", description : "large size cupboard" , price : 15000};
let coffeeTable = {name: "coffeeTable", description : "big coffee table for living room" , price : 500};
let bed = {name: "bed", description : "king size bed for comfort sleep" , price : 30000};
let cabinet = {name: "cabinet", description : "cabinet for kitchen" , price : 5000};
let shoerack = {name: "shoerack", description : "shoerack outside the home" , price : 1200};

// array of furniture objects..
let furnitures = [table, chair, sofa, tvUnit, cupboard, coffeeTable, bed, cabinet, shoerack];

// function to get total price for home interior design.

function totalPrice() {

     let totalPrice = 0;

     for ( let furniture of furnitures) {

        totalPrice += furniture.price;

     }
   return totalPrice;
}

// function to categorise each furniture object into low price medium and high price categories.

function categoriseFurniture() {

    for (let furniture of furnitures) {

        if(furniture.price <= 5000)
        {
            furniture.category = "Low Price";
            
        }else if (furniture.price > 5000 && furniture.price <= 20000){

            furniture.category = "Medium Price";
        }else {
            furniture.category = "High Price";
        }
    }
}

// function to get furniture for given price category.

function getFurniture(priceCategory) {

    const categoryArray = [];

    for (let furniture of furnitures) {
       
        if(furniture.category === priceCategory){
            categoryArray.push(furniture.name);
        }
    }
     return categoryArray;
}

// function to print name , price and description.

function display() {

    for (let furniture of furnitures){

        console.log("Furniture Name : ", furniture.name , " Price : ", furniture.price , " description : ", furniture.description);
       
    }
}

//testing
let totalHouseFurniturePrice = totalPrice();
console.log("price of total furniture :" , totalHouseFurniturePrice);
// calling function to categorise the furniture.
 categoriseFurniture();
console.log("furniture for given price category" , getFurniture("High Price"));
console.log("name , price and description of furniture : ");
 display();

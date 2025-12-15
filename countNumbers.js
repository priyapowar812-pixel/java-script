let sofa = { name : "sofa", colour : "brown" };
let table = { name : "table", colour : "black" };
let chair = { name : "chair", colour : "black" };
let cupboard = { name : "cupboard", colour : "white" };
let shoeRack = { name : "shoeRack", colour : "brown" };
let kitchenRack = { name : "kitchenRack", colour : "olive" };
let tvSet = { name : "tvSet", colour : "white" };
let lamp = { name : "lamp", colour : "olive" };
let coffeTable = { name : "coffeTable", colour : "brown" };


// create furniture array
let furnitures = [sofa, table, chair, cupboard, shoeRack, kitchenRack, tvSet, lamp, coffeTable];
// write a funtion to group furniture objects by colour
function groupFurnitureByColor() {
    let furnitureGroup = {};

    for (let furniture of furnitures){
        let name = furniture.name;
        let color = furniture.colour;
       
        if(!furnitureGroup.hasOwnProperty(color)){
          furnitureGroup[color]= [name];
        }else{
            furnitureGroup[color].push(name);
        }
        
    }
    return furnitureGroup;
}

let groupOfFurniture = groupFurnitureByColor();
console.log(groupOfFurniture);









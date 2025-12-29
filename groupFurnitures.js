const furnitures = [
    { name : "Table", room : "office"},
    { name : "Sofa", room : "living"},
    { name : "ShoeRack", room : "Poarch"},
    { name : "CoffeeTable", room : "living"},
    { name : "Cupboard", room : "bedroom"},
    { name : "Bed", room : "bedroom"},
    { name : "KitchenCabinet", room : "kitchen"},
    { name : "Stove", room : "kitchen"},
    { name : "chair", room : "kitchen"},
    { name : "TvUnit", room : "living"},
    { name : "BathTub", room : "bathroom"}
];

// write a function to group furniture by room type

function groupByRoom () {

    let roomFurniture = {};

    for( let furniture of furnitures) {
        if(!roomFurniture.hasOwnProperty(furniture.room))
        {
            roomFurniture[furniture.room] = [furniture.name];
        }else{
            roomFurniture[furniture.room].push(furniture.name);
        }
    }
    return roomFurniture;
}

console.log("furniture grouping by room type", groupByRoom ());
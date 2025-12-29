const names = ["Suyog", "Ramchandra", "Powar"];

// write a function to count chars of each name in names

const getCharCount = (names) => {
    let counts = [];
    for(let name of names) {
        counts.push(name.length);
    }
    return counts;
}

console.log("chars of each name are : ", getCharCount(names));

// using array.map()

 let result = names.map(
    (name) => {
      return name.length;  
    }
)



console.log("result after array mapping ", result);

// using array map method , to map name into {name, length}

let nameLengths = names.map(name => {
    return {name,
        length: name.length
    }
});

console.log(nameLengths);

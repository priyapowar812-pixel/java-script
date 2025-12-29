const names = ["Suyog", "Yogesh", "Suresh", "Ram", "Krishnaraj", "Indrajeet"];

// write a function which has a transfoermer function and return transformed result in an array.

const length = (name) => name.length;

function transform( transformer){
    let result = [];
    for(let name of names) {
        result.push(transformer(name));
    }
    return result;
}

console.log("length of each element is", transform(length));

const concatStar = (name) => name + '*';

const containsY = (label) => { 
    if(label.toLowerCase().includes('y')){
        return label;
} else {
    return "";
}
};
console.log("element after concatination is", transform(concatStar));
console.log("uppercase elements", transform(name => name.toUpperCase()));

console.log("result if strings containing y", transform(containsY));

class Animal {
    constructor(type) {
        this.type = type;
    }

    getType() {
        return this.type;
    }
}

class VegAnimal extends Animal {

    constructor(name) {
        super("veg");
        this.name = name;
    }

    getName() {
        return this.name;
    }

}

let horse = new VegAnimal("horse");

console.log("get animal ", horse.getName() , horse.getType());
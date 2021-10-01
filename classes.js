class Animal {
    constructor(name,species,age){
        this.name = name;
        this.species = species;
        this.age = age;
    }
};

let Kevin = new Animal("Kevin", "Cat", 4)
console.log(Kevin)

console.log(new Animal("Kevin", "Cat", 4))

class Animal {
    constructor(name,species) {
        this.name = name;
        this.species = species;
    }

    getNameAndSpecies(){
        let bio = `${this.name} is a ${this.species}`;
        return bio;
    }
}

let Kevin = new Animal("Kevin",'Cat')
console.log("animal we made based on the class above: ", Kevin)

console.log("The animal's name is: ", Kevin.name)
console.log("The species is: ", Kevin.species)

console.log(Kevin.getNameAndSpecies());


//animal 2
let Danny = new Animal("Danny", "Fish", 1)
console.log(Danny)

console.log(new Animal("Danny", "Fish", 1))

let Danny = new Animal("Danny",'Fish')
console.log("animal we made based on the class above: ", Danny)

console.log("The animal's name is: ", Danny.name)
console.log("The species is: ", Danny.species)

console.log(Kevin.getNameAndSpecies());

//animal 3
let Sally = new Animal("Sally", "Penguin", 7)
console.log(Sally)

console.log(new Animal("Sally", "Penguin", 7))

let Sally = new Animal("Sally",'Penguin')
console.log("animal we made based on the class above: ", Sally)

console.log("The animal's name is: ", Sally.name)
console.log("The species is: ", Sally.species)
function createIntructor(firstName, lastName) {
    return {
        firstName,
        lastName
    }
}

let favoriteNumber = "42"
let instructor = {
    firstName: "colt",
    [favoriteNumber]: "That's my favorite!"
}

const intructor = {
    firstName: "Colt",
    sayHi() {
        return "hi!";
    }, 
    sayBye() {
        return this.firstName + "say bye!";
    }
}

function createAnimal(species, verb, noise){
    return {
        species, 
        [verb](){
            return noise;
        }
    }
}

var utils = require("util");

function Animal(name) {
    this.name = name;
}

Animal.prototype.walk = function () {
    console.log("Gulyaet " + this.name)
}

function Cat(n){
    this.name = n;
}

utils.inherits(Cat, Animal);

var murka = new Cat("Murka")

murka.walk();
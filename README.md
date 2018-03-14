# jsPrototype



Multiple inheritance [edit, not proper inheritance of type, but of properties; mixins] in Javascript is pretty straightforward if you use constructed prototypes rather than generic-object ones. Here are two parent classes to inherit from:

function FoodPrototype() {
    this.eat = function () {
        console.log("Eating", this.name);
    };
}
function Food(name) {
    this.name = name;
}
Food.prototype = new FoodPrototype();


function PlantPrototype() {
    this.grow = function () {
        console.log("Growing", this.name);
    };
}
function Plant(name) {
    this.name = name;
}
Plant.prototype = new PlantPrototype();

Note that I have used the same "name" member in each case, which could be a problem if the parents did not agree about how "name" should be handled. But they're compatible (redundant, really) in this case.

Now we just need a class that inherits from both. Inheritance is done by calling the constructor function (without using the new keyword) for the prototypes and the object constructors. First, the prototype has to inherit from the parent prototypes

function FoodPlantPrototype() {
    FoodPrototype.call(this);
    PlantPrototype.call(this);
    // plus a function of its own
    this.harvest = function () {
        console.log("harvest at", this.maturity);
    };
}

And the constructor has to inherit from the parent constructors:

function FoodPlant(name, maturity) {
    Food.call(this, name);
    Plant.call(this, name);
    // plus a property of its own
    this.maturity = maturity;
}

FoodPlant.prototype = new FoodPlantPrototype();

Now you can grow, eat, and harvest different instances:

var fp1 = new FoodPlant('Radish', 28);
var fp2 = new FoodPlant('Corn', 90);

fp1.grow();
fp2.grow();
fp1.harvest();
fp1.eat();
fp2.harvest();
fp2.eat();


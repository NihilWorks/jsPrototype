// document.write('Hello,world!');

// var person = {
//     name:"Default",
//     lastName:"Default",
//     ocuppation:"Default",
//     getFullName: function(){
//         return this.name +" " + this.lastName + " " + this.ocuppation;
//     }
// }

// var john = {
//     name:"John",
//     lastName:"Doe",
//     ocuppation:"mechanic"
//     }
//     var jane = {
//     name:"Jane"
// }
// var mother = {
//     ocuppation:"Mother"
// }

// john.__proto__ = person;
// console.log(john.getFullName());
// jane.__proto__ = john, mother;
// console.log(jane.getFullName());


 function FoodPrototype(){
     this.eat = function(){
         console.log("Eating", this.name);
     };
 }

 function Food(name){
     this.name = name;
 }

 Food.prototype = new FoodPrototype();

 function PlantPrototype(){
     this.grow = function(){
         console.log("Growing", this.name);
     }
 }
 function Plant(name){
     this.name = name;
 }
 Plant.prototype = new PlantPrototype();


 function FoodPlantPrototype(){
     FoodPrototype.call(this);
     PlantPrototype.call(this);

     this.harvest = function (){
         console.log("harvest at ", this.maturity);
     }
 }

 function FoodPlant(name, maturity){
     Food.call(this, name);
     Plant.call(this, name);
     this.maturity = maturity;
     
 }

 FoodPlant.prototype = new FoodPlantPrototype();

 var fp1 = new FoodPlant('Radish' , 28);
 var fp2 = new FoodPlant('Corn', 90);

 fp1.grow();
 fp2.grow();
 fp1.harvest();
 fp1.eat();
 fp2.harvest();
 fp2.eat();


















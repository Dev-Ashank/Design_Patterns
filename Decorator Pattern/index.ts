import { ExtraCheeseDecorator } from "./ExtraCheeseDecorator";
import { ExtraSauceDecorator } from "./ExtraSauceDecorator";
import { ExtraVeggieDecorator } from "./ExtraVeggieDecorator";
import { Food } from "./Food";
import { Pizza } from "./Pizza";

let prepareFood : Food

prepareFood = new Pizza();
console.log(`${prepareFood.description()} price is ${prepareFood.cost()}`);
prepareFood = new ExtraCheeseDecorator(prepareFood);
console.log(`${prepareFood.description()} price is ${prepareFood.cost()}`);
prepareFood = new ExtraVeggieDecorator(prepareFood)
console.log(`${prepareFood.description()} price is ${prepareFood.cost()}`);
prepareFood = new ExtraSauceDecorator(prepareFood);


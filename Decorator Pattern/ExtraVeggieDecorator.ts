import { FoodDecorator } from "./FoodDecorator"

export class ExtraVeggieDecorator extends FoodDecorator {
    cost(): number {
        return super.cost() + 50;
    }
    description(): string {
        return super.description() + ", extra veggies";
    }
}
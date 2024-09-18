import { FoodDecorator } from "./FoodDecorator";

export class ExtraCheeseDecorator extends FoodDecorator{
    cost(): number {
        return super.cost() + 30;
    }
    description(): string {
        return super.description() + ", extra cheese."
    }
}
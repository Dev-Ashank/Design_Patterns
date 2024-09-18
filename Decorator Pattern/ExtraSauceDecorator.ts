import { FoodDecorator } from "./FoodDecorator"

export class ExtraSauceDecorator extends FoodDecorator {
    cost(): number {
        return super.cost() + 10;
    }
    description(): string {
        return super.description() + ", extra sauce";
    }
}
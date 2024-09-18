import { Food } from "./Food";

export class FoodDecorator implements Food {
    protected food : Food;
    constructor(food:Food){
        this.food = food;
    }
    cost(): number {
        return this.food.cost();
    }
    description(): string {
        return this.food.description();
    }
}
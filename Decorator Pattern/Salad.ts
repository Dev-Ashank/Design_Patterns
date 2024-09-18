import { Food } from "./Food";

export class Salad implements Food{
    cost(): number {
        return 250;
    }
    description(): string {
        return "salad";
    }
}
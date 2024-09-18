import { Food } from "./Food"

export class Burger implements Food {
    cost(): number {
        return 100
    }
    description(): string {
        return "Burger"
    }
}
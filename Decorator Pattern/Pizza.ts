import { Food } from "./Food";

export class Pizza implements Food {
    cost(): number {
        return 150;
    }

    description(): string {
        return "Pizza"
    }
}
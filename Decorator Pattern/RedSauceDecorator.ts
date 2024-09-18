import { ExtraSauceDecorator } from "./ExtraSauceDecorator";

export class RedSauceDecorator extends ExtraSauceDecorator {
    description(): string {
        return super.description() + "[ Red sauce ]"
    }
}
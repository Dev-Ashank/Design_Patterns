import { ExtraSauceDecorator } from "./ExtraSauceDecorator";

export class MayoSauceDecorator extends ExtraSauceDecorator {
     description(): string {
         return super.description() + "[ Mayo ]"
     }
}
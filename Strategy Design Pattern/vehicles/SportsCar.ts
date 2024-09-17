import { SportsDriveStrategy } from "../strategies/SportsDrive";
import { Vehicle } from "./Vehicle";

export class SportsCar extends Vehicle {
    constructor(){
        super(new SportsDriveStrategy());
    }
}
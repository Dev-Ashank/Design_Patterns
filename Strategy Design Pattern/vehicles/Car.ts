import { NormalDrive } from "../strategies/NormalDrive";
import { Vehicle } from "./Vehicle";

export class Car extends Vehicle{
    constructor(){
        super(new NormalDrive());
    }
}
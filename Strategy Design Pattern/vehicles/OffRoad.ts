import { OffRoadDrive } from "../strategies/OffRoadDrive";
import { Vehicle } from "./Vehicle";

export class OffRoadVehicle extends Vehicle{
    constructor(){
        super(new OffRoadDrive());
    }
}
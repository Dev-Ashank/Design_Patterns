import { DriveStrategy } from "./DriveStrategy";

export class SportsDriveStrategy implements DriveStrategy{
    drive(): void {
        console.log("Driving in sports mode.........");
        
    }
}
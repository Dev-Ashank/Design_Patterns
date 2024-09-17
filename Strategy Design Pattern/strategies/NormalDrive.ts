import { DriveStrategy } from "./DriveStrategy";

export class NormalDrive implements DriveStrategy {
    drive(): void {
        console.log('Driving normally...');
    }
}
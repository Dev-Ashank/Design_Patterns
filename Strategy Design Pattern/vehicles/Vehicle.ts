import { DriveStrategy } from "../strategies/DriveStrategy";

export class Vehicle {
    private driveStartegy: DriveStrategy;
    constructor(driveStrategy: DriveStrategy) {
        this.driveStartegy = driveStrategy;
    }

    public setDriveStrategy(driveStrategy: DriveStrategy) {
        this.driveStartegy = driveStrategy
    }

    public drive() {
        this.driveStartegy.drive();
    }
}
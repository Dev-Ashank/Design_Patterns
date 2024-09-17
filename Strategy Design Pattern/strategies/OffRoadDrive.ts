import { DriveStrategy } from "./DriveStrategy";

export class OffRoadDrive implements DriveStrategy {
    drive(): void {
      console.log('Driving off-road...');
    }
  }
  
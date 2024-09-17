import { NormalDrive } from "./strategies/NormalDrive";
import { SportsDriveStrategy } from "./strategies/SportsDrive";
import { Car } from "./vehicles/car";
import { OffRoadVehicle } from "./vehicles/OffRoad";
import { SportsCar } from "./vehicles/SportsCar";
import { Vehicle } from "./vehicles/Vehicle";

const car = new Car();
car.drive();
const sportsCar = new SportsCar()
sportsCar.drive();
const offRoadVechile = new OffRoadVehicle();
offRoadVechile.drive();

//Now want to change mode in my vehicle
sportsCar.setDriveStrategy(new NormalDrive());
sportsCar.drive();

offRoadVechile.setDriveStrategy(new SportsDriveStrategy());
offRoadVechile.drive();
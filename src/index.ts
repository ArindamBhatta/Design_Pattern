import { GoodVehicle } from './GoodVehicle';
import { OffRoadVehicle } from './OffRoadVehicle';
import { SportVehicle } from './SportVehicle';
import { NormalDriveStrategy } from './NormalDriveStrategy';
import { SpecialDriveStrategy } from './ SpecialDriveStrategy';

const goodVehicle = new GoodVehicle();
goodVehicle.display();
goodVehicle.drive();
goodVehicle.speed();
goodVehicle.fuel();

const offRoadVehicle = new OffRoadVehicle(new SpecialDriveStrategy());
offRoadVehicle.display();
offRoadVehicle.drive();
offRoadVehicle.speed();
offRoadVehicle.fuel();

const sportVehicle = new SportVehicle(new SpecialDriveStrategy());
sportVehicle.display();
sportVehicle.drive();
sportVehicle.speed();
sportVehicle.fuel();

sportVehicle.setDriveBehavior(new NormalDriveStrategy());
sportVehicle.drive();
sportVehicle.speed();
sportVehicle.fuel();

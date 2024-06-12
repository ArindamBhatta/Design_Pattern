import { DriveInterface } from './DriveInterface';

export abstract class Vehicle {
  protected driveBehavior: DriveInterface;

  constructor(driveBehavior: DriveInterface) {
    this.driveBehavior = driveBehavior;
  }

  abstract display(): void;

  drive(): void {
    this.driveBehavior.drive();
  }

  speed(): void {
    this.driveBehavior.speed();
  }

  fuel(): void {
    this.driveBehavior.fuel();
  }

  setDriveBehavior(driveBehavior: DriveInterface): void {
    this.driveBehavior = driveBehavior;
  }
}

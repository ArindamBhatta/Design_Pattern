import { Vehicle } from './Vehicle';
import { DriveInterface } from './DriveInterface';

export class SportVehicle extends Vehicle {
  constructor(driveBehavior: DriveInterface) {
    super(driveBehavior);
  }

  display(): void {
    console.log('Displaying a sport vehicle.');
  }
}

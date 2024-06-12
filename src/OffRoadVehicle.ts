import { Vehicle } from './Vehicle';
import { DriveInterface } from './DriveInterface';

export class OffRoadVehicle extends Vehicle {
  constructor(driveBehavior: DriveInterface) {
    super(driveBehavior);
  }

  display(): void {
    console.log('Displaying an off-road vehicle.');
  }
}

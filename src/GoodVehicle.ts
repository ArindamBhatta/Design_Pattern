import { Vehicle } from './Vehicle';
import { NormalDriveStrategy } from './NormalDriveStrategy';

export class GoodVehicle extends Vehicle {
  constructor() {
    super(new NormalDriveStrategy());
  }

  display(): void {
    console.log('Displaying a good vehicle.');
  }
}

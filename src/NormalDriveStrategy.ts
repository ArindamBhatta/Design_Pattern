import { DriveInterface } from './DriveInterface';

export class NormalDriveStrategy implements DriveInterface {
  drive(): void {
    console.log('Driving normally on regular roads.');
  }

  speed(): void {
    console.log('The speed of the normal drive vehicle is 100 km/h.');
  }

  fuel(): void {
    console.log('The fuel type of the normal drive vehicle is petrol.');
  }
}

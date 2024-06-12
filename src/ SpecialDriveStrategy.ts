import { DriveInterface } from './DriveInterface';

export class SpecialDriveStrategy implements DriveInterface {
  drive(): void {
    console.log(
      'Driving with special features enabled for off-road or sporty performance.'
    );
  }

  speed(): void {
    console.log('The speed of the special drive vehicle is 200 km/h.');
  }

  fuel(): void {
    console.log('The fuel type of the special drive vehicle is diesel.');
  }
}

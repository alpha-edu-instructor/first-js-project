import { Car } from "./Car.js";

export class ElectricCar extends Car {
  constructor(brand, year, battery) {
    super(brand, year);
    this.battery = battery;
  }

  showBattery() {
    console.log(`У ${this.brand} осталось ${this.battery} зарядки.`);
  }
}

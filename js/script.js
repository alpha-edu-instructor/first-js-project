import Person, { PI } from "./Car.js";
import { ElectricCar } from "./ElectricCar.js";

const mercedes = new Person("Mercedes", 2000);
mercedes.run();
const audi = new Person("Audi", 2020);
audi.run();

const tesla = new ElectricCar("Tesla", 2010, "100kW");
tesla.run();
tesla.showBattery();
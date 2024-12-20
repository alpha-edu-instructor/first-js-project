class Car {
  constructor(brand, year) {
    this.brand = brand;
    this.year = year;
  }

  run() {
    console.log(`Машина бренда ${this.brand} ${this.year} года начала поездку.`);
  }
  
  stop() {
    console.log(`Машина бренда ${this.brand} ${this.year} года закончил поездку.`);
  }
}
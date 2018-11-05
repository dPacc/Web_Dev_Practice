class Car {

  constructor(brand = 'Default Brand', model = 'Default Model', year) {
    this.brand = brand;
    this.model = model;
    this.year = year || 2080;
  }

  displayCarInformation() {
    console.log(this.brand + ' ' + this.model + ' ' + this.year)
  }
}

module.exports = Car;

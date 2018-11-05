const Car = require('./car');

class FancyCar extends Car {
  constructor(brand, model, year) {
    super(brand, model, year);
    this.priority = "High Priority";
  }

  getStatus() {
    console.log("2 hours left to finish repair");
  }

  displayCarInformation() {
    console.log("I am the super fancy car!!");
    super.displayCarInformation();
  }
}

module.exports = FancyCar;

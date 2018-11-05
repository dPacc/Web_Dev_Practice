const car = require("../car");
const Promise = require("../promise");

function forEach(array, callBackFunction) {
  for (let i = 0; i < array.length; i++) {
    const arrayElement = [i];

    callBackFunction(arrayElement);
  }
}

class CarService {
  constructor(name, country) {
    this.name = name;
    this.country = country;

    this.carsToRepair = new Array();
  }

  addCar(car) {

    car.brand === 'ford' ? console.log("Cannot add this car brand") : this.carsToRepair.push(car);
  }

  displayCustomName() {
    console.log("I am the custom name function");
  }

  displayAllCars() {
    forEach(this.carsToRepair, car => {
      this.displayCustomName();
      car.displayCarInformation();
    });
    // this.carsToRepair.forEach(function(car) {
    //   car.displayCarInformation();
    // });
  }

  getAllCars() {
    return this.carsToRepair;
  }

  getSecretDocuments() {

    return new Promise((resolve, reject) => {
      setTimeout(function() {
        let secretDocs = 'Super secret documents, DONT SHARE!';
        resolve(secretDocs);
      }, 2000);
    });
  }
}

module.exports = CarService;

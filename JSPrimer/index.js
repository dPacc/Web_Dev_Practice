const Car = require("./car");
const CarService = require("./services/CarService");
const FancyCar = require("./FancyCar");

const carService = new CarService("Super Car", "India");

carService.getSecretDocuments().then((superSecretDocuments) => {
  console.log(superSecretDocuments);
});



// const car1 = new Car();
// const car2 = new Car("ford", "fiesta", 2020);
// const car3 = new Car("fiat", "punto", 2008);
// const car4 = new Car("ford", "fiago", 2011);
//
// const car5 = new Car("mercedes", "benz", 2018);
// car5.displayCarInformation();



// carService.addCar(car1);
// carService.addCar(car2);
// carService.addCar(car3);
// carService.addCar(car3);
// console.log(carService.getAllCars());

/*Design a type alias named Car to represent a car object.
2. Include a nested object named engine within Car, containing a property named
horsepower (number).
3. Define a function named getHorsepower directly within the Car type alias to retrieve the
engine's horse*/
var car = {
    engine: {
        horsepower: 500,
    },
    getHorsepower: function () { return car.engine.horsepower; }
};
console.log("Car Horsepower:", car.getHorsepower());

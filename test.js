function Car() {
	this.wheels = 4;
	this.rightSideSteering = true;
	this.fuelType = 'petrol';
}

Car.prototype.setWheels = function(wheels) {
	this.wheels = wheels;
};

Car.prototype.setSteeringSide = function(rightSideSteering) {
	this.rightSideSteering = rightSideSteering;
};

Car.prototype.setFuelType = function(type) {
	this.fuelType = type;
};

Car.prototype.getWheels = function() {
	return this.wheels;
};

Car.prototype.getSteeringSide = function() {
	var temp = '';
	switch(this.rightSideSteering) {
		case false:
			temp = 'left side steering';
		break;
		case true:
			temp = 'right side steering';
		break;
		default:
			throw new Error('Unknown side');
		break;
	}
	return temp;
};

Car.prototype.getFuelType = function() {
	return this.fuelType;
};

Car.prototype.measureSpeed = function(xyz) {
	console.log('calling measureSpeed');
	setTimeout(function() {
		xyz(Math.random() * 100);
	}, 10 * 1000);
};

var car = new Car();
console.log(car.getWheels());
console.log(car.getSteeringSide());
console.log(car.getFuelType());

car.setWheels(8);
car.setSteeringSide(false);
car.setFuelType('diesel');

console.log(car.getWheels());
console.log(car.getSteeringSide());
console.log(car.getFuelType());

var car2 = new Car();

car2.setWheels(16);
car2.setSteeringSide(true);
car2.setFuelType('water');

console.log(car2.getWheels());
console.log(car2.getSteeringSide());
console.log(car2.getFuelType());

car.measureSpeed(function(speed) {
	console.log('car:', speed, 'km/h');
});

car2.measureSpeed(function(speed) {
	console.log('car2 is running at:', speed, 'km/h')
});


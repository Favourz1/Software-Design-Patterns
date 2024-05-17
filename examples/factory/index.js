class Car {
    drive() {
        console.log("Driving a car");
    }
}

class Bike {
    ride() {
        console.log("Riding a bike");
    }
}

class VehicleFactory {
    static createVehicle(type) {
        switch (type) {
            case "car":
                return new Car();
            case "bike":
                return new Bike();
            default:
                throw new Error("Unknown vehicle type");
        }
    }
}

const car = VehicleFactory.createVehicle("car");
car.drive(); // Driving a car

const bike = VehicleFactory.createVehicle("bike");
bike.ride(); // Riding a bike

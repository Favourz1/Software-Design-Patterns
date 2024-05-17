class Car:
    def drive(self):
        print("Driving a car")

class Bike:
    def ride(self):
        print("Riding a bike")

class VehicleFactory:
    @staticmethod
    def create_vehicle(vehicle_type):
        if vehicle_type == "car":
            return Car()
        elif vehicle_type == "bike":
            return Bike()
        else:
            raise ValueError("Unknown vehicle type")

car = VehicleFactory.create_vehicle("car")
car.drive()  # Driving a car

bike = VehicleFactory.create_vehicle("bike")
bike.ride()  # Riding a bike

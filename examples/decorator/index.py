class Coffee:
    def get_description(self):
        return "Simple Coffee"

    def cost(self):
        return 5.0

class CoffeeDecorator(Coffee):
    def __init__(self, coffee):
        self._coffee = coffee

    def get_description(self):
        return self._coffee.get_description()

    def cost(self):
        return self._coffee.cost()

class MilkDecorator(CoffeeDecorator):
    def get_description(self):
        return super().get_description() + ", Milk"

    def cost(self):
        return super().cost() + 1.5

class SugarDecorator(CoffeeDecorator):
    def get_description(self):
        return super().get_description() + ", Sugar"

    def cost(self):
        return super().cost() + 0.5

coffee = Coffee()
coffee = MilkDecorator(coffee)
coffee = SugarDecorator(coffee)
print(coffee.get_description())  # Simple Coffee, Milk, Sugar
print(coffee.cost())  # 7.0

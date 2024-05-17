class Coffee {
    getDescription() {
        return "Simple Coffee";
    }

    cost() {
        return 5.0;
    }
}

class CoffeeDecorator {
    constructor(coffee) {
        this.coffee = coffee;
    }

    getDescription() {
        return this.coffee.getDescription();
    }

    cost() {
        return this.coffee.cost();
    }
}

class MilkDecorator extends CoffeeDecorator {
    getDescription() {
        return super.getDescription() + ", Milk";
    }

    cost() {
        return super.cost() + 1.5;
    }
}

class SugarDecorator extends CoffeeDecorator {
    getDescription() {
        return super.getDescription() + ", Sugar";
    }

    cost() {
        return super.cost() + 0.5;
    }
}

let coffee = new Coffee();
coffee = new MilkDecorator(coffee);
coffee = new SugarDecorator(coffee);
console.log(coffee.getDescription()); // Simple Coffee, Milk, Sugar
console.log(coffee.cost()); // 7.0

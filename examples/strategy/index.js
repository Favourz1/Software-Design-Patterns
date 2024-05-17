class PaymentStrategy {
    pay(amount) {
        throw new Error("Method 'pay()' must be implemented");
    }
}

class CreditCardPayment extends PaymentStrategy {
    pay(amount) {
        console.log(`Paid ${amount} using Credit Card`);
    }
}

class PayPalPayment extends PaymentStrategy {
    pay(amount) {
        console.log(`Paid ${amount} using PayPal`);
    }
}

class ShoppingCart {
    setPaymentStrategy(paymentStrategy) {
        this.paymentStrategy = paymentStrategy;
    }

    checkout(amount) {
        this.paymentStrategy.pay(amount);
    }
}

const cart = new ShoppingCart();
cart.setPaymentStrategy(new CreditCardPayment());
cart.checkout(100); // Paid 100 using Credit Card
cart.setPaymentStrategy(new PayPalPayment());
cart.checkout(200); // Paid 200 using PayPal

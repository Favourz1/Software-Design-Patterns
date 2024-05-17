class PaymentStrategy:
    def pay(self, amount):
        raise NotImplementedError("Method 'pay()' must be implemented")

class CreditCardPayment(PaymentStrategy):
    def pay(self, amount):
        print(f"Paid {amount} using Credit Card")

class PayPalPayment(PaymentStrategy):
    def pay(self, amount):
        print(f"Paid {amount} using PayPal")

class ShoppingCart:
    def __init__(self):
        self.payment_strategy = None

    def set_payment_strategy(self, payment_strategy):
        self.payment_strategy = payment_strategy

    def checkout(self, amount):
        self.payment_strategy.pay(amount)

cart = ShoppingCart()
cart.set_payment_strategy(CreditCardPayment())
cart.checkout(100)  # Paid 100 using Credit Card
cart.set_payment_strategy(PayPalPayment())
cart.checkout(200)  # Paid 200 using PayPal

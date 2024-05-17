class Singleton:
    _instance = None

    def __new__(cls):
        if cls._instance is None:
            cls._instance = super(Singleton, cls).__new__(cls)
            cls._instance.data = "Singleton Data"
        return cls._instance

singleton_a = Singleton()
singleton_b = Singleton()
print(singleton_a is singleton_b)  # True

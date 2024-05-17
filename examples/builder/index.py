class House:
    def __init__(self, builder):
        self.foundation = builder.foundation
        self.structure = builder.structure
        self.roof = builder.roof
        self.interior = builder.interior

class HouseBuilder:
    def __init__(self):
        self.foundation = None
        self.structure = None
        self.roof = None
        self.interior = None

    def set_foundation(self, foundation):
        self.foundation = foundation
        return self

    def set_structure(self, structure):
        self.structure = structure
        return self

    def set_roof(self, roof):
        self.roof = roof
        return self

    def set_interior(self, interior):
        self.interior = interior
        return self

    def build(self):
        return House(self)

builder = HouseBuilder()
house = (builder
         .set_foundation("Concrete")
         .set_structure("Wood")
         .set_roof("Tile")
         .set_interior("Modern")
         .build())

print(vars(house))

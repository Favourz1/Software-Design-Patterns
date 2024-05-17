class House {
    constructor(builder) {
        this.foundation = builder.foundation;
        this.structure = builder.structure;
        this.roof = builder.roof;
        this.interior = builder.interior;
    }
}

class HouseBuilder {
    setFoundation(foundation) {
        this.foundation = foundation;
        return this;
    }

    setStructure(structure) {
        this.structure = structure;
        return this;
    }

    setRoof(roof) {
        this.roof = roof;
        return this;
    }

    setInterior(interior) {
        this.interior = interior;
        return this;
    }

    build() {
        return new House(this);
    }
}

const house = new HouseBuilder()
    .setFoundation("Concrete")
    .setStructure("Wood")
    .setRoof("Tile")
    .setInterior("Modern")
    .build();

console.log(house);

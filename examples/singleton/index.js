class Singleton {
    constructor() {
        if (!Singleton.instance) {
            this.data = "Singleton Data";
            Singleton.instance = this;
        }
        return Singleton.instance;
    }
}

const singletonA = new Singleton();
const singletonB = new Singleton();
console.log(singletonA === singletonB); // true

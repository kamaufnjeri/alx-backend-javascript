export default class Car {
    constructor(brand, motor, color) {
        this.brand = brand;
        this.motor = motor;
        this.color = color;
    }

    // getter methods
    get brand() {
        return this._brand;
    }

    get motor() {
        return this._motor;
    }

    get color() {
        return this._color;
    }

    // set methods

    set brand(value) {
        if (typeof value === "string") {
            this._brand = value;
        } else {
            throw new TypeError("Brand must be a string");
        }
    }

    set motor(value) {
        if (typeof value === "string") {
            this._motor = value;
        } else {
            throw new TypeError("Motor must be a string");
        }
    }

    set color(value) {
        if (typeof value === "string") {
            this._color = value;
        } else {
            throw new TypeError("Color must be a string");
        }
    }

     cloneCar() {
    const clonedCar = new this.constructor();
    return clonedCar;
  }
}
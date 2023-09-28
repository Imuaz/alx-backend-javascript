import Car from './10-car';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super();

    this._brand = brand;
    this._motor = motor;
    this._color = color;
    this._range = range;
  }

  get brand() {
    return this._brand;
  }

  set brand(newBrand) {
    if (typeof newBrand === 'string') {
      this._brand = newBrand;
    } else {
      throw new Error('Brand must be a string');
    }
  }

  get motor() {
    return this._motor;
  }

  set motor(newMotor) {
    if (typeof newMotor === 'string') {
      this._motor = newMotor;
    } else {
      throw new Error('Motor must be a string');
    }
  }

  get color() {
    return this._color;
  }

  set color(newColor) {
    if (typeof newColor === 'string') {
      this._color = newColor;
    } else {
      throw new Error('Color must be a string');
    }
  }

  get range() {
    return this._range;
  }

  set range(newRange) {
    if (typeof newRange === 'string') {
      this._range = newRange;
    } else {
      throw new Error('Range must be a string');
    }
  }

  cloneCar() {
    const car = new Car();
    car.name = this.name;
    car.year = this.year;
    return car;
  }
}

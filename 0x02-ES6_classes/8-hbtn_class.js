export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  get size() {
    return this._size;
  }

  get location() {
    return this._location;
  }

  set size(newSize) {
    if (typeof newSize === 'number') {
      this._size = newSize;
    } else {
      throw new Error('Size must be a number');
    }
  }

  set location(newLocation) {
    if (typeof newLocation === 'string') {
      this._location = newLocation;
    } else {
      throw new Error('Location must be a string');
    }
  }

  // Cast to a Number
  valueOf() {
    return this._size;
  }

  // Cast to a String
  toString() {
    return this._location;
  }
}

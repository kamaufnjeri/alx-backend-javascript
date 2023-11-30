export default class HolbertonClass {
  constructor(size, location) {
    this.size = size;
    this.location = location;
  }

  // getter methods

  get size() {
    return this._size;
  }

  get location() {
    return this._location;
  }

  // setter methods
  set size(value) {
    if (typeof value === 'number') {
      this._size = value;
    } else {
      throw new TypeError('Size must be a number');
    }
  }

  set location(value) {
    if (typeof value === 'string') {
      this._location = value;
    } else {
      throw new TypeError('Location must be a string');
    }
  }

  // to strin method overwritten
  toString() {
    return this.location;
  }

  // value of method overwitten
  valueOf() {
    return this.size;
  }
}

export default class Airport {
  constructor(name, code) {
    this.name = name;
    this.code = code;
  }

  // getter methods

  get name() {
    return this._name;
  }

  get code() {
    return this._code;
  }

  // setter methods
  set name(value) {
    if (typeof value === 'string') {
      this._name = value;
    } else {
      throw new TypeError('Name must be a string');
    }
  }

  set code(value) {
    if (typeof value === 'string') {
      this._code = value;
    } else {
      throw new TypeError('Code must be a string');
    }
  }

  get [Symbol.toStringTag]() {
    return this._code;
  }
}

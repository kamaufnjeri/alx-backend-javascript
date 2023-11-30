export default class Currency {
  constructor(code, name) {
    if (typeof name === 'string') {
      this._name = name;
    } else {
      throw new TypeError('Name must be a string');
    }

    if (typeof code === 'string') {
        this._code = code;
      } else {
        throw new TypeError('Code must be a string');
      }
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }

  // getter methods

  get name() {
    return this._name;
  }

  get code() {
    return this._code;
  }

  // setter methods
  set name(name) {
    if (typeof name === 'string') {
      this._name = name;
    } else {
      throw new TypeError('Name must be string');
    }
  }

  set code(code) {
    if (typeof code === 'string') {
      this._code = code;
    } else {
      throw new TypeError('Code must be string');
    }
  }
}

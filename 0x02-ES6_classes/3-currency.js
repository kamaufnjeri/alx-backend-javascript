export default class Currency {
  constructor(code, name) {
    if (typeof code && typeof name === 'string') {
      this._code = code;
      this._name = name;
    } else {
      throw new TypeError('Attributes must be string');
    }
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}

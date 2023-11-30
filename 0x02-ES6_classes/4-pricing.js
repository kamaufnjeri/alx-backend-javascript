import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    if (typeof amount === 'number') {
      this._amount = amount;
    } else {
        throw new TypeError("Amount must be number")
    }
    if (currency instanceof Currency) {
      this._currency = currency;
    } else {
        throw new TypeError("Currency must be of class Currency")
    }
  }

  // getters
  get amount() {
    return this._amount;
  }

  get currency() {
    return this._currency;
  }

  // setters
  set amount(amount) {
    if (typeof amount === 'number') {
      this._amount = amount;
    } else {
        throw new TypeError("Amount must be a number")
    }
  }

  set currency(currency) {
    if (currency instanceof Currency) {
      this._currency = currency;
    } else {
        throw new TypeError("Currency must be of class Currency")
    }
  }

  // method
  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  // static method
  static convertPrice(amount, conversionRate) {
    if (typeof amount && conversionRate === 'number') {
      return amount * conversionRate;
    } else if (typeof amount !== "number") {
        throw new TypeError("Amount must be a number")
    } else if (typeof conversionRate !== "number") {
        throw new TypeError("Conversion Ratio must be a number")
    }
    return null;
  }
}

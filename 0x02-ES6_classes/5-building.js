export default class Building {
  constructor(sqft) {
    if (typeof sqft === 'number') {
      this._sqft = sqft;
    } else {
      throw new TypeError('sqft must be a number');
    }
    if (this.constructor !== Building && this.evacuationWarningMessage !== 'function') {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
  }

  // getter method
  get sqft() {
    return this._sqft;
  }

  // setters
  set sqft(sqft) {
    if (typeof sqft === 'number') {
      this._sqft = sqft;
    } else {
      throw new TypeError('sqft must be a number');
    }
  }
}

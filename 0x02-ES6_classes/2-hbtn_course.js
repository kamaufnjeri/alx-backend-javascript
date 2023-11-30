export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name === 'string') {
      this._name = name;
    } else {
      throw new TypeError('Name must be a string');
    }

    if (typeof length === 'number') {
      this._length = length;
    } else {
      throw new TypeError('Length must be a number');
    }

    if (Array.isArray(students)) {
      let isValid = true;
      students.forEach((student) => {
        if (typeof student !== 'string') {
          isValid = false;
        }
      });
      if (isValid) {
        this._students = students;
      } else {
        throw new TypeError('Students in array must be string');
      }
      this._students = students;
    } else {
      throw new TypeError('Students must be an array');
    }
  }

  // getters
  get name() {
    return this._name;
  }

  get length() {
    return this._length;
  }

  get students() {
    return this._students;
  }

  // setters

  set name(name) {
    if (typeof name === 'string') {
      this._name = name;
    } else {
      throw new TypeError('Name must be a string');
    }
  }

  set length(length) {
    if (typeof length === 'number') {
      this._length = length;
    } else {
      throw new TypeError('Length must be a number');
    }
  }

  set students(students) {
    if (Array.isArray(students)) {
      let isValid = true;
      students.forEach((student) => {
        if (typeof student !== 'string') {
          isValid = false;
        }
      });
      if (isValid) {
        this._students = students;
      } else {
        throw new TypeError('Students in array must be string');
      }
      this._students = students;
    } else {
      throw new TypeError('Students must be an array');
    }
  }
}

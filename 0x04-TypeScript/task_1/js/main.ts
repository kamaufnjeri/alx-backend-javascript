// task_1/js/main.ts

// Task 1
interface Teacher {
  firstName: string;
  lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

// Example usage
const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

console.log(teacher3);

// Task 2
interface Directors extends Teacher {
  numberOfReports: number;
}

// Example usage
const director1: Directors = {
  firstName: 'John',
  fullTimeEmployee: true,
  lastName: 'Doe',
  location: 'London',
  numberOfReports: 17,
};

console.log(director1);

// Task 3
interface PrintTeacherFunction {
  (firstName: string, lastName: string): string;
}

const printTeacher: PrintTeacherFunction = (firstName, lastName) => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

// Example usage
console.log(printTeacher('John', 'Doe')); // J. Doe

// Task 4
interface StudentClassConstructor {
  new (firstName: string, lastName: string): StudentClass;
}

interface StudentClass {
  workOnHomework(): string;
  displayName(): string;
}

const StudentClass: StudentClassConstructor = class StudentClass implements StudentClass {
  constructor(public firstName: string, public lastName: string) {}

  workOnHomework(): string {
    return 'Currently working';
  }

  displayName(): string {
    return this.firstName;
  }
};

// Example usage
const studentInstance: StudentClass = new StudentClass('Alice', 'Smith');
console.log(studentInstance.workOnHomework()); // Currently working
console.log(studentInstance.displayName()); // Alice
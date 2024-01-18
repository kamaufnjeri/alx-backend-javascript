// task_0/js/main.ts

// Interface definition for Student
interface Student {
  givenName: string;
  familyName: string;
  age: number;
  residence: string;
}

// Creating two students
const studentA: Student = {
  givenName: 'Alex',
  familyName: 'Johnson',
  age: 20,
  residence: 'New York',
};

const studentB: Student = {
  givenName: 'Bella',
  familyName: 'Williams',
  age: 22,
  residence: 'Los Angeles',
};

// Creating an array named studentsList containing the two variables
const studentsList: Array<Student> = [studentA, studentB];

// Creating a table using Vanilla JavaScript
const mainTable: HTMLTableElement = document.createElement('table');
const tableBody: HTMLTableSectionElement = document.createElement('tbody');

// Appending table body to table
mainTable.appendChild(tableBody);
// Appending table to the body of the document
document.body.appendChild(mainTable);

// Populating the table with student information
studentsList.forEach((student) => {
  const row: HTMLTableRowElement = document.createElement('tr');
  const givenNameCell: HTMLTableCellElement = document.createElement('td');
  const residenceCell: HTMLTableCellElement = document.createElement('td');

  // Setting the content of table cells
  givenNameCell.textContent = student.givenName;
  residenceCell.textContent = student.residence;

  // Appending cells to the row
  row.appendChild(givenNameCell);
  row.appendChild(residenceCell);

  // Appending row to the table body
  tableBody.appendChild(row);
});

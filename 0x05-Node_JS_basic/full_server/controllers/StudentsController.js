// full_server/controllers/StudentsController.js

import { readDatabase } from '../utils';

export default class StudentsController {
  static async getAllStudents(request, response) {
    try {
      const studentData = await readDatabase('./database.csv');
      const fields = Object.keys(studentData).sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }));

      let output = 'This is the list of our students\n';
      fields.forEach((field) => {
        const students = studentData[field].join(', ');
        output += `Number of students in ${field}: ${studentData[field].length}. List: ${students}\n`;
      });

      response.status(200).send(output);
    } catch (error) {
      response.status(500).send(error.message);
    }
  }

  static async getAllStudentsByMajor(request, response) {
    const { major } = request.params;
    if (major !== 'CS' && major !== 'SWE') {
      return response.status(500).send('Major parameter must be CS or SWE');
    }

    try {
      const studentData = await readDatabase('./database.csv');
      const students = studentData[major] || [];
      const studentsList = students.join(', ');

      return response.status(200).send(`List: ${studentsList}`);
    } catch (error) {
      return response.status(500).send(error.message);
    }
  }
}

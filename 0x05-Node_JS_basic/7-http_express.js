const express = require('express');
const fs = require('fs');

const app = express();

// Function to read the database file and process student data
function countStudents(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      } else {
        try {
          const lines = data.split('\n').filter((line) => line.trim() !== '');
          const studentlist = [];
          const headers = lines[0].replace(/\r/g, '').split(',');
          const studentsData = [];

          lines.slice(1).forEach((line) => {
            const databaseDict = {};
            const lineitems = line.replace(/\r/g, '').split(',');
            lineitems.forEach((item, index) => {
              databaseDict[headers[index]] = item;
            });
            studentlist.push(databaseDict);
          });
          studentsData.push(`Number of students: ${studentlist.length}`);
          const fieldsDict = {};
          studentlist.forEach((student) => {
            const { firstname, field } = student;

            if (!(field in fieldsDict)) {
              fieldsDict[field] = [];
            }
            fieldsDict[field].push(firstname);
          });
          Object.keys(fieldsDict).forEach((field) => {
            const names = fieldsDict[field].join(', ');
            studentsData.push(`Number of students in ${field}: ${fieldsDict[field].length}. List: ${names}`);
          });
          resolve(studentsData); // Resolve the Promise
        } catch (error) {
          console.error(error);
          reject(new Error('Error processing data'));
        }
      }
    });
  });
}

// Route for the root endpoint '/'
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// Route for the '/students' endpoint
app.get('/students', (req, res) => {
  const database = process.argv[2];
  if (!database) {
    res.status(500).send('Database file not provided');
    return;
  }
  countStudents(database)
    .then((studentsData) => {
      res.send(`This is the list of our students\n${studentsData.join('\n')}`);
    })
    .catch((error) => {
      res.status(500).send(error.message);
    });
});

// Start the server
const port = 1245;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

// Export the app for testing purposes
module.exports = app;

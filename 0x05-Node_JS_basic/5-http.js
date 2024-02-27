const http = require('http');
const fs = require('fs');

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

const hostname = '127.0.0.1';
const port = 1245;
const args = process.argv;
const database = args[2];
const app = http.createServer(async (req, res) => {
  const { url } = req;
  res.setHeader('Content-Type', 'text/plain');

  if (url === '/') {
    res.statusCode = 200;
    res.end('Hello Holberton School!');
  } else if (url === '/students') {
    try {
      const student = await countStudents(database);
      res.statusCode = 200;
      res.end(`This is the list of our students\n${student.join('\n')}`);
    } catch (err) {
      res.statusCode = 500;
      res.end(err.message);
    }
  } else {
    res.statusCode = 404;
    res.end('Not Found');
  }
});

app.listen(port, hostname);

module.exports = app;

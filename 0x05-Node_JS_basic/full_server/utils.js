// full_server/utils.js

import fs from 'fs';

export function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      } else {
        try {
          const lines = data.split('\n').filter(line => line.trim() !== '');
          const studentData = {};

          lines.slice(1).forEach(line => {
            const [, firstName, , field] = line.split(',');
            if (!studentData[field]) {
              studentData[field] = [];
            }
            studentData[field].push(firstName);
          });

          resolve(studentData);
        } catch (error) {
          reject(new Error('Error processing data'));
        }
      }
    });
  });
}

const fs = require('fs');

function countStudents(filePath) {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, 'utf-8', (err, data) => {
            if (err) {
                reject(new Error('Cannot load the database'));
            } else {
                try {
                    const lines = data.split('\n').filter(line => line.trim() !== "");
                    const studentlist = [];
                    const headers = lines[0].replace(/\r/g, "").split(",");

                    lines.slice(1).forEach((line) => {
                        const databaseDict = {};
                        const lineitems = line.replace(/\r/g, '').split(",");
                        lineitems.forEach((item, index) => {
                            databaseDict[headers[index]] = item;
                        });
                        studentlist.push(databaseDict);
                    });
                    console.log(`Number of students: ${studentlist.length}`);

                    const fieldsDict = {};
                    studentlist.forEach(student => {
                        const { firstname, field } = student;

                        if (!(field in fieldsDict)) {
                            fieldsDict[field] = [];
                        }
                        fieldsDict[field].push(firstname);
                    });
                    Object.keys(fieldsDict).forEach(field => {
                        const names = fieldsDict[field].join(', ');
                        console.log(`Number of students in ${field}: ${fieldsDict[field].length}. List: ${names}`);
                    });
                    resolve(); // Resolve the Promise
                } catch (error) {
                    console.error(error);
                    reject(new Error('Error processing data'));
                }
            }
        });
    });
}

module.exports = countStudents;

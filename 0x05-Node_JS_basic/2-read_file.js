const fs = require('fs');

const countStudents = (filePath) => {
    try {
        const data = fs.readFileSync(filePath, 'utf-8');

        const lines = data.split('\n').filter(line => line.trim() !== "");
        const studentlist =[];
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
            const {firstname, field} = student;

            if (!(field in fieldsDict)) {
                fieldsDict[field] = [];
            }
            fieldsDict[field].push(firstname);
        });
        Object.keys(fieldsDict).forEach(field => {
            const names = fieldsDict[field];
            console.log(`Number of students in ${field}: ${names.length}. List: ${names}`);
        })
    } catch (err) {
        console.log(err)
        throw new Error('Cannot load the database');
    }
};

module.exports = countStudents;
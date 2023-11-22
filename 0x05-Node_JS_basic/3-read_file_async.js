const fs = require('fs');

function countStudents(filepath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filepath, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      } else {
        const students = data
          .split('\n')
          .map((student) => student.split(','))
          .filter((student) => student.length === 4 && student[0] !== 'firstname')
          .map((student) => ({ name: student[0], field: student[3] }));
        const getStudentsByField = (field) => students
          .filter((student) => student.field === field)
          .map((student) => student.name);
        const numberOfStudents = students.length;
        const csStudents = getStudentsByField('CS');
        const sweStudents = getStudentsByField('SWE');
        console.log(`Number of students: ${numberOfStudents}`);
        console.log(`Number of students in CS: ${csStudents.length}. List: ${csStudents.join(', ')}`);
        console.log(`Number of students in SWE: ${sweStudents.length}. List: ${sweStudents.join(', ')}`);
        resolve();
      }
    });
  });
}

module.exports = countStudents;

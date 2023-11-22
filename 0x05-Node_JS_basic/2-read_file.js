// eslint-disable-next-line max-len
const fs = require('fs');

function countStudents(filepath) {
  try {
    const data = fs.readFileSync(filepath, 'utf-8');
    
    const students = data
      .split('\n')
      .map((student) => student.split(','))
      .filter((student) => student.length === 4 && student[0] !== 'firstname')
      .map((student) => ({ name: student[0], field: student[3] }));

    const getStudentsByField = (field) => students
      .filter((student) => student.field === field)
      .map((student) => student.name);

    const csStudents = getStudentsByField('CS');
    const sweStudents = getStudentsByField('SWE');

    console.log(`Number of students: ${students.length}`);
    console.log(`Number of students in CS: ${csStudents.length}. List: ${csStudents.join(', ')}`);
    console.log(`Number of students in SWE: ${sweStudents.length}. List: ${sweStudents.join(', ')}`);
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;

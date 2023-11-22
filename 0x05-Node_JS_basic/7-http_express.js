const express = require('express');
const fs = require('fs').promises;

const app = express();
const port = 1245;

async function countStudents(filepath) {
  try {
    const data = await fs.readFile(filepath, 'utf-8');
    const students = data
      .split('\n')
      .map((student) => student.split(','))
      .filter((student) => student.length === 4 && student[0] !== 'firstname')
      .map((student) => ({ name: student[0], field: student[3] }));

    const getStudentsByField = (field) => students
      .filter((student) => student.field === field)
      .map((student) => student.name);

    return {
      numberOfStudents: students.length,
      csStudents: getStudentsByField('CS'),
      sweStudents: getStudentsByField('SWE'),
    };
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

app.get('/', (req, res) => {
  res.status(200).send('Hello Holberton School!');
});
app.get('/students', async (req, res) => {
  try {
    const path = process.argv[2];
    console.log('File path:', path); // Log the file path for debugging
    const { numberOfStudents, csStudents, sweStudents } = await countStudents(path);
    const response = `This is the list of our students\nNumber of students: ${numberOfStudents}\nNumber of students in CS: ${csStudents.length}. List: ${csStudents.join(', ')}\nNumber of students in SWE: ${sweStudents.length}. List: ${sweStudents.join(', ')}`;
    res.status(200).send(response);
  } catch (error) {
    console.error(error.message); // Log the error message for debugging
    res.status(404).send('This is the list of our students\nCannot load the database');
  }
});
app.listen(port, 'localhost', () => {
  console.log(`Server is listening on http://localhost:${port}`);
});

module.exports = app;

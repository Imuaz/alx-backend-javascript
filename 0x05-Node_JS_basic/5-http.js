const fs = require('fs').promises;
const http = require('http');

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

const app = http.createServer(async (req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    try {
      const path = process.argv[2];
      console.log('File path:', path); // Log the file path for debugging

      const { numberOfStudents, csStudents, sweStudents } = await countStudents(path);

      res.writeHead(200, { 'Content-Type': 'text/plain' });
      const response = `This is the list of our students\nNumber of students: ${numberOfStudents}\nNumber of students in CS: ${csStudents.length}. List: ${csStudents.join(', ')}\nNumber of students in SWE: ${sweStudents.length}. List: ${sweStudents.join(', ')}`;
      res.end(response);
    } catch (error) {
      console.error(error.message); // Log the error message for debugging
      res.statusCode = 404;
      res.end('This is the list of our students\nCannot load the database');
    }
  }
});

app.listen(1245, 'localhost');

module.exports = app;

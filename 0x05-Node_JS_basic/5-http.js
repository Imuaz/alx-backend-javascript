const http = require('http');
const countStudents = require('./3-read_file_async.js');

const serverHandler = async (req, res) => {
  if (req.url === '/') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain' );
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    try {
      // Read the database path from the command line arguments
      const path = process.argv[2];
      // Call countStudents function asynchronously
      const studentsData = await countStudents(path);
      // Set the response content type and send the data
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      res.end(`This is the list of our students\n${studentsData}`);
    } catch (error) {
	// Handle errors when reading the database file
      res.statusCode = 404;
      res.setHeader('Content-Type', 'text/plain');
      res.end('This is the list of our students\nCannot load the database');
      console.error(error);
    }
  } else {
      // Return a 404 response for other paths
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Not Found');
  }
};

const app = http.createServer(serverHandler);

app.listen(1245, 'localhost');

module.exports = app;

const http = require('http');

// Create the HTTP server
const app = http.createServer((req, res) => {
  // Set the content type to plain text
  res.setHeader('Content-Type', 'text/plain');
  // Send the "Hello Holberton School!" message
  res.end('Hello Holberton School!\n');
});

// Make the server listen on port 1245
const PORT = 1245;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
// Export the app variable
module.exports = app;

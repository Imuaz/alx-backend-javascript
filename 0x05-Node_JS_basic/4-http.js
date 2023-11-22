const http = require('http');

const app = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type', 'text/plain' });
  res.end('Hello Holberton School!\n');
});

// Make the server listen on port 1245
const PORT = 1245;
app.listen(PORT, 'localhost')

module.exports = app;

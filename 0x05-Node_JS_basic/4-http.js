const http = require('http');

const hostname = '127.0.0.1';
const port = 1245;

const serverHandler = (req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello Holberton School!\n');
};

const app = http.createServer(serverHandler);

app.listen(port, hostname, () => {
  console.log(`Server is listening on http://${hostname}:${port}`);
});

module.exports = app;

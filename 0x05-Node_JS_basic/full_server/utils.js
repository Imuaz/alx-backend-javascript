const { readFile } = require('fs').promises;

module.exports = function readDatabase(filePath)
{
  return new Promise((resolve, reject) => {
    readFile(filePath, 'utf-8')
      .then((data) => {
        const lines = data.split('\n').slice(1);
	const students = lines.reduce((acc, line) => {
	  if (line) {
            const [name, , , field] = line.split(',').map((item) => item.trim());

            if (!acc[field]) {
              acc[field] = [name];
            } else {
              acc[field].push(name);
            }
          }
          return acc;
        }, {});
        resolve(students);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

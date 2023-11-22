import readDatabase from '../utils';

class StudentsController {
  static async getAllStudents(request, response) {
    try {
      const databasePath = process.argv[2];
      const res = await readDatabase(databasePath);

      const title = 'This is the list of our students\n';
      const cs = `Number of students in CS: ${res.CS.length}. List: ${res.CS.join(', ')}\n`;
      const swe = `Number of students in SWE: ${res.SWE.length}. List: ${res.SWE.join(', ')}`;
      const resMsg = title + cs + swe;

      response.writeHead(200, { 'Content-Type': 'text/plain' });
      response.end(resMsg);
    } catch (error) {
      response.writeHead(500, { 'Content-Type': 'text/plain' });
      response.end('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(request, response) {
    const major = request.params.major;
    
    try {
      const databasePath = process.argv[2];
      const res = await readDatabase(databasePath);

      if (major === 'CS' || major === 'SWE') {
        const resMsg = `List: ${res[major].join(', ')}`;
        response.writeHead(200, { 'Content-Type': 'text/plain' });
        response.end(resMsg);
      } else {
        response.writeHead(500, { 'Content-Type': 'text/plain' });
        response.end('Major parameter must be CS or SWE');
      }
    } catch (error) {
      response.writeHead(500, { 'Content-Type': 'text/plain' });
      response.end('Cannot load the database');
    }
  }
}

export default StudentsController;

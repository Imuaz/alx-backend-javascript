import { readFile } from 'fs/promises';

const readDatabase = async (path) => {
  try {
    const returnData = await readFile(path, 'utf-8');

    const data = returnData.split('\n');

    const allStudents = data
      .slice(1)
      .filter((v) => v.length !== 0)
      .map((v) => v.split(','));

    const csStudents = allStudents
      .filter((student) => student[3].endsWith('CS'))
      .map((student) => student[0]);

    const sweStudents = allStudents
      .filter((student) => student[3].endsWith('SWE'))
      .map((student) => student[0]);

    return { CS: csStudents, SWE: sweStudents };
  } catch (error) {
    throw new Error('Cannot load the database');
  }
};

export default readDatabase;

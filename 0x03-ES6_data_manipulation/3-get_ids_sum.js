export default function getStudentIdsSum(students) {
  const studentIdsSum = students.reduce((accum, student) => accum + student.id, 0);
  return studentIdsSum;
}

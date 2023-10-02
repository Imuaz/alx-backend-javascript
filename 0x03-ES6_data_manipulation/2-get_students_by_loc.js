export default function getStudentsByLocation(students, city) {
  const studentList = students.filter((student) => student.location === city);
  return studentList;
}

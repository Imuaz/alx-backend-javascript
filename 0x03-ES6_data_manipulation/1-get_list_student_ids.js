export default function getListStudentIds(studentArray) {
  if (Array.isArray(studentArray)) {
    const studentIds = studentArray.map((student) => student.id);

    return studentIds;
  }

  return [];
}

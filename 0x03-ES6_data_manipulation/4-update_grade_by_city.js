export default function updateStudentGradeByCity(students, city, gradeList) {
  if (Array.isArray(students)) {
    return students
      .filter((student) => student.location === city)
      .map((student) => {
        const matchGrade = gradeList.find((gradeObj) => gradeObj.studentId === student.id);
        return {
          ...student,
          grade: matchGrade ? matchGrade.grade : 'N/A',
        };
      });
  }
  return [];
}

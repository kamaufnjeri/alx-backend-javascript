export default function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter((obj) => obj.location === city)
    .map((obj, index) => {
      const matchingGrade = newGrades[index];
      return {
        ...obj,
        grade: matchingGrade ? matchingGrade.grade : 'N/A',
      };
    });
}

aexport default function getStudentIdsSum(students) {
  return students.reduce((agg, obj) => agg + obj.id, 0);
}

export default function iterateThroughObject(reportWithIterator) {
  const employeeNames = [];

  for (const employeeName of reportWithIterator) {
    employeeNames.push(employeeName);
  }
  
  return employeeNames.join(" | ");
}

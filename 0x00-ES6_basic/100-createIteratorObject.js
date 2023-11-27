export default function createIteratorObject(report) {
  const itObject = [];

  for (const value of Object.values(report.allEmployees)) {
    itObject.push(...value);
  }

  return itObject;
}

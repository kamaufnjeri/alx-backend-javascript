export default function appendToEachArrayValue(array, appendString) {
  const myArr = [];
  for (const value of array) {
    myArr.push(appendString + value);
  }

  return myArr;
}

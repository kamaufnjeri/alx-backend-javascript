export default function appendToEachArrayValue(array, appendString) {
  const myArr = [];
  for (let value of array) {
    myArr.push(appendString + value);
  }
  
  return array;
}
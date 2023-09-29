export default function appendToEachArrayValue(array, appendString) {
  let idx = 0;
  const tempArray = [];

  for (const value of array) {
    tempArray[idx] = appendString + value;
    idx += 1;
  }

  return tempArray;
}

export default function cleanSet(inputSet, startString) {
  const filteredSet = [];

  for (const value of inputSet) {
    if (value.startsWith(startString)) {
      filteredSet.push(value.slice(startString.length));
     }
  }

  const filteredValues = filteredSet.join('-');

  return filteredValues;
}

export default function cleanSet(inputSet, startString) {
  if (startString === '' || !(typeof startString === 'string')) return '';
  const filteredValues = [];

  for (const value of inputSet) {
    if (value.startsWith(startString)) {
      filteredValues.push(value.slice(startString.length));
    }
  }

  const resultString = filteredValues.join('-');

  return resultString;
}

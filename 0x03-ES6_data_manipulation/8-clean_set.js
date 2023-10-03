export default function cleanSet(inputSet, startString) {
  if (typeof startString === 'string' || startString.length !== 0) {
    const setArray = Array.from(inputSet);
    const filteredValues = setArray
	  .filter(value => value && value.startsWith(startString))
	  .map(value => value.slice(startString.length));

    const resultString = filteredValues.join('-');
    return resultString;
  }
  return '';  
}

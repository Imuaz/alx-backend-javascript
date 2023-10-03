export default function cleanSet(inputSet, startString) {
    const filteredSet = [];
    const stringLength = startString.length;

  inputSet.forEach((value) => {
    if (value && value.startsWith(startString)) {
      filteredSet.push(value.slice(stringLength));
     }
  });

  return filteredSet.join('-');
}

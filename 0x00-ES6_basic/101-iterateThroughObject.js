export default function iterateThroughObject(reportWithIterator) {
  // Convert the iterator to an array
  const employeeArray = Array.from(reportWithIterator);

  // Join the elements with the delimiter
  return employeeArray.join(' | ');
}

export default function createIteratorObject(report) {
  const employeesArray = [];

  for (const departmentName of Object.keys(report.allEmployees)) {
    employeesArray.push(...report.allEmployees[departmentName]);
  }

  let currentIndex = 0;

  const iterator = {
    next() {
      if (currentIndex < employeesArray.length) {
        const value = employeesArray[currentIndex];
        currentIndex += 1;
        return { done: false, value };
      }
      return { done: true };
    },
    [Symbol.iterator]() {
      return this;
    },
  };

  return iterator;
}

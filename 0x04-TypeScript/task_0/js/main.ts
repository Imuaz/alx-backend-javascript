interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
};
const student1: Student = {
    firstName: 'Julien',
    lastName: 'Barbier',
    age: 35,
    location: 'Holberton School'
};
const student2: Student = {
    firstName: 'Guillaume',
    lastName: 'Salva',
    age: 23,
    location: 'San Francisco'
};

const studentsList: Student[] = [student1, student2];

//creating the table
const table = document.createElement('table');
const thead = document.createElement('thead');
const tbody = document.createElement('tbody');

// Creating table header row and column headers
const headerRow = document.createElement('tr');
const firstNameHeader = document.createElement('th');
const lastNameHeader = document.createElement('th');
const ageHeader = document.createElement('th'); 
const locationHeader = document.createElement('th');

//adding some style to the theader
firstNameHeader.style.border ='1.5px solid black';
lastNameHeader.style.border = '1.5px solid black';
ageHeader.style.border = '1.5px solid black';
locationHeader.style.border = '1.5px solid black';

// Setting the text content for the column headers
firstNameHeader.textContent = 'First Name';
lastNameHeader.textContent = 'Last Name';
ageHeader.textContent = 'Age';
locationHeader.textContent = 'Location';

// Appending column headers to the header row
headerRow.appendChild(firstNameHeader);
headerRow.appendChild(lastNameHeader);
headerRow.appendChild(ageHeader);
headerRow.appendChild(locationHeader);

// Appending the header row to the table header
thead.appendChild(headerRow);

table.appendChild(thead);
table.appendChild(tbody);

studentsList.forEach((student: Student): any => {
  const row = document.createElement('tr');
  const firstNameCell = document.createElement('td');
  const lastNameCell = document.createElement('td');
  const ageCell = document.createElement('td');
  const locationCell = document.createElement('td');

  firstNameCell.textContent = student.firstName;
  lastNameCell.textContent = student.lastName;
  ageCell.textContent = student.age.toString();
  locationCell.textContent = student.location;
  
  //adding some style for more visual of the table
  firstNameCell.style.border = '1px solid black';
  lastNameCell.style.border = '1px solid black';
  ageCell.style.border = '1px solid black';
  locationCell.style.border = '1px solid black';
  
  row.appendChild(firstNameCell);
  row.appendChild(lastNameCell);
  row.appendChild(ageCell);
  row.appendChild(locationCell);
  tbody.appendChild(row);
});

document.body.appendChild(table);
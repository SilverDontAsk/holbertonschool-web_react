interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: 'John',
    lastName: 'Doe',
    age: 32,
    location: 'Michigan'
};

const student2: Student = {
    firstName: 'Joane',
    lastName: 'Arc',
    age: 26,
    location: 'California'
};

const studentList: Student[] = [student1, student2];

const body = document.querySelector('body');
const table = document.createElement('table');
const tbody = document.createElement('tbody');

studentList.forEach((student) => {
  const row = document.createElement('tr');

  const firstNameCell = document.createElement('td');
  firstNameCell.textContent = student.firstName;
  row.appendChild(firstNameCell);

  const locationCell = document.createElement('td');
  locationCell.textContent = student.location;
  row.appendChild(locationCell);

  tbody.appendChild(row);
});

table.appendChild(tbody);
body?.appendChild(table);

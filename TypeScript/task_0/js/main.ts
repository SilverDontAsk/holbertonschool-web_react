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

function renderTable(students: Student[]): void {
    const table = document.createElement('table');

    students.forEach((student) => {
        const row = document.createElement('tr');
        const firstNameCell = document.createElement('td');
        const locationCell = document.createElement('td');

        firstNameCell.textContent = student.firstName;
        locationCell.textContent = student.location;

        row.appendChild(firstNameCell);
        row.appendChild(locationCell);
        table.appendChild(row);
    });
    document.body.appendChild(table);
}

renderTable(studentList);

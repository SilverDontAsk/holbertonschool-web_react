interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [propName: string]: any;
  }

  interface Directors extends Teacher {
    numberOfReports: number;
  }

  const teacher3: Teacher = {
    firstName: 'John',
    lastName: 'Doe',
    fullTimeEmployee: false,
    location: 'London',
    contract: false
  };

  const director1: Directors = {
    firstName: 'The',
    lastName: 'Batman',
    location: 'Gotham',
    fullTimeEmployee: true,
    numberOfReports: 17,
  };


console.log(JSON.stringify(teacher3, null, 2));

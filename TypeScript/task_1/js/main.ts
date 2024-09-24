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

  interface printTeacherFunction {
    (firstName: string, lastName: string): string;
  }

  interface StudentClassConstructor {
    firstName: string;
    lastName : string;
  }

  interface StudentClass {
    workOnHomework(): string;
    displayName(): string;
  }

  class StudentClass implements StudentClass {
    firstName: string;
    lastName: string;

    constructor({ firstName, lastName }: StudentClassConstructor) {
      this.firstName = firstName;
      this.lastName = lastName;
    }

    workOnHomework(): string {
      return 'Currently working';
    }

    displayName(): string {
      return this.firstName;
    }
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



  const printTeacher: printTeacherFunction = (firstName: string, lastName: string): string => {
    return `${firstName.charAt(0)}. ${lastName}`;
  };

console.log(teacher3);
console.log(director1);
console.log(printTeacher("John", "Doe"));

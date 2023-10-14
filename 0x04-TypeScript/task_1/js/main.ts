export interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [propName: string]: any;
};

const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false
};

console.log(teacher3);

//creating a Director interface
interface Directors extends Teacher {
  numberOfReports: number;
}

const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17
};

console.log(director1);

// function that returns name Innitials and it interface
export function printTeacher(firstName: string, lastName:string): string {
  const firstLetter = firstName.charAt(0);
  return `${firstLetter} ${lastName}`;
}

interface priprintTeacherFunction{
  printTeacher(firstName: string, lastName: string): string;
}

// class `StudentClass`
export interface StudentClassInterface {
  displayName(): string;
  workOnHomeWork(): string
};

export interface StudentConstructor {
  new(constructorArgs: {firstName: string, lastName: string}): StudentClassInterface
}

export class StudentClass implements StudentClassInterface {
  firstName: string;
  lastName: string;

  constructor(arg: {firstName: string, lastName: string}) {
    this.firstName = arg.firstName;
    this.lastName = arg.lastName;
  }

  workOnHomeWork(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}

//testing my StudentClass
// const student: StudentConstructor = StudentClass;
// const newStudent = new StudentClass({firstName: 'Julien', lastName: 'Barbier'})
// console.log(newStudent)
// console.log(newStudent.displayName())
// console.log(newStudent.workOnHomeWork())
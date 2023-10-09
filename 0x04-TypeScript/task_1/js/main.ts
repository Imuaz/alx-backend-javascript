export interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience: number;
  location: string;
  [key: string]: any;
};

const teacher3: Teacher = {
  firstname: 'John',
  fulltimeemployee: false,
  lastname: 'Doe',
  location: 'London',
  contract: false
};

console.log(teacher3);

//creating a Director interface
interface Directors extends Teacher {
  numberOfReports: number;
}

const director1: Directors = {
  firstname: 'John',
  lastname: 'Doe',
  location: 'London',
  fulltimeemployee: true,
  numberofreports: 17
};

console.log(director1);
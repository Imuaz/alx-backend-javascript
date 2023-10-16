/// <reference path= 'subjects/Cpp.ts'>
/// <reference path= 'subjects/Teacher.ts'>
/// <reference path= 'subjects/Java.ts'>
/// <reference path= 'subjects/React.ts'>
/// <reference path= 'subjects/Subject.ts'>

export const cpp = new Subjects.Cpp();
export const java = new Subjects.Java();
export const react = new Subjects.Reac();
export const cTeacher: Subjects.Teacher = {
    firstName: 'Guillaume',
    lastName: 'Salva',
    experienceTeachingC: 10
} ;

//for C++ subject
console.log('C++');
cpp.setTeacher(cTeacher);
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

//for Java subject
console.log('Java');
java.setTeacher(cTeacher);
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

//for react subject
console.log('React');
react.setTeacher(cTeacher);
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());
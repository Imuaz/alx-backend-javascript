//creating interface `DirectorInterfece`
export interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
};

//creating interface `TeacherInterface`
export interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
};

//Director class that implements DirectorInterface
export const Director = class Director implements DirectorInterface {

    workFromHome(): string {
        return 'Working from home';
    }

    getCoffeeBreak(): string {
        return 'Getting a coffee break';
    }
    workDirectorTasks(): string {
        return 'Getting to director tasks'
    }
}

//Teacher class that implements TeacherInterface
const Teacher = class Teacher implements TeacherInterface {
    
    workFromHome(): string {
        return 'Cannot work from home';
    }

    getCoffeeBreak(): string {
        return 'Cannot have a break';
    }

    workTeacherTasks(): string {
        return 'Getting to work';
    }
}

export function createEmployee(salary: number | string): DirectorInterface | TeacherInterface {
    if (typeof salary  !== 'string' && salary < 500) {
        return new Teacher;
    }

    return new Director;
}

// console.log(createEmployee(200));
// console.log(createEmployee(1000));
// console.log(createEmployee('$500'));


//creating isDirector function
export function isDirector(employee: DirectorInterface | TeacherInterface): employee is DirectorInterface {
    return (employee as DirectorInterface).workDirectorTasks !== undefined;
}

//creating function `executework`
export function executeWork(employee: DirectorInterface | TeacherInterface): string | null {
    if (isDirector(employee)) {
        return employee.workDirectorTasks();
    } else {
        return employee.workTeacherTasks();
    }
}

console.log(executeWork(createEmployee(200)));
console.log(executeWork(createEmployee(1000)));

// String literal Subject
export type Subjects = 'Math' | 'History';

export function teachClass(todayClass: Subjects): string {
    if (todayClass === 'Math') {
        return 'Teachig Math';
    } else if (todayClass === 'History') {
        return 'Teaching History';
    }
}

console.log(teachClass('Math'));
console.log(teachClass('History'));
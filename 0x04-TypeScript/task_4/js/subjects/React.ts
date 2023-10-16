namespace Subjects {
    export interface Teacher {
        experienceTeachingReact?: number;
    }
};

namespace Subjects {

    export class Reac extends Subject {

        getRequirements():string {
            return 'Here is the list of requirements for React';
        }
        getAvailableTeacher() {
            if(this.teacher && this.teacher.experienceTeachingReact > 0) {
                return 'Available Teacher: ' + this.teacher.firstName;
            } else {
                return 'No available teacher';
            }
        }
    }
}
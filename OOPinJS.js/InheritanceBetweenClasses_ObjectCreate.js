const PersonObj = {
    calcAge() {
        console.log(2037 - this.birthYear)
    },

    init(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    },
};

//Creating a child object with full inheritance of parent object (PersonObj):
const StudentProto = Object.create(PersonObj);

StudentProto.init = function(firstName, birthYear, course) {
    PersonObj.init.call(this, firstName, birthYear, this.course = course); //explicitly listing 'this' as a reference + declaring 'this.course' value
    };

StudentProto.introduce = function() {
        console.log(`Hi, my name is ${this.firstName} and I study ${this.course}.`)
    };

const jay = Object.create(StudentProto);
jay.init('Jay', 2004, 'CompSci');
jay.introduce(); 
jay.calcAge();
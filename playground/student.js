"use strict";
exports.__esModule = true;
var Student = /** @class */ (function () {
    function Student(person) {
        this.fistName = person.firstName;
        this.lastName = person.lastName;
        this.age = person.age;
    }
    Student.prototype.sayHello = function () {
        return "Hello " + this.fistName + " " + this.lastName;
    };
    return Student;
}());
exports.Student = Student;

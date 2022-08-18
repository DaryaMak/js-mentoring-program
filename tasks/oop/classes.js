/**
 * JS Classes: 
 * - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
 * - https://javascript.info/class
 * - https://javascript.info/class-inheritance
 * implement class Person with:
 * 1) properties firstName and lastName
 * 2) constructor that pass firstName and lastName to the object
 * 3) method getFullName
 */
//put your code here

/**
 * implement class Student that extends Person with:
 * 1) property grade
 * 2) constructor that pass grade to the object
 * 3) method getGrade that returns property grade
 */
//put your code here

const person = {
   "firstName": "Mary",
   "lastName": "More",
   "getFullName" : function() {
    return this.firstName + ' ' + this.lastName 
}
}; //create instance of class person
const student extends person {
    constructor(grade, getGrade) {
        this.grade = "3";
        this.getGrade = function() {
          return this.grade;
  }
 }
 } //create instance of class student

module.exports = {
    person,
    student
};
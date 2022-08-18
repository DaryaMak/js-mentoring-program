/**
 * JS Objects: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
 * create object person with firstName and lastName properties
 * implement method getFullName that returns full name
 */
const person = {
	"firstName": "Kasia",
	"lastName": "Gorezcka",
	"getFullName": function() {
		return this.firstName + ' ' + this.lastName 
	}

}; //put you object here

/**
 * create object student that has property grade and method getGrade
 * set person as prototype of student
 */
const student = Object.setPrototypeOf(person); //put you object here
student.grade = "3";
student.getGrade = function() {
	return this.grade
}
/**
 * create new instance of student using Object.create
 */
const student2 = Object.create(student); 

//put you object here

module.exports = {
	person,
	student,
	student2
};

function newFunction() {
	console.log(student2);
}

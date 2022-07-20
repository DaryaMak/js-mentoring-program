/**
 * Learning materials:
 * Function declaration: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function
 * Function expression: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/function
 * Arrow functions: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
 */

/**
 * write function that will do sum for two numbers
 *
 */
function sum(a, b) {
  return a + b;
}
const total = sum(12, 16);
console.log(total);

/**
 * write function that returns firstName and lastName of a given object
 * {
 *    firstName: "John"
 *    lastName: "Dou"
 * }
 */
function getFullName(object) {
 return object.firstName + " " +  object.lastName ;
}
const fullName = getFullName ({
	    firstName: "John",
	    lastName: "Dou",
	 });
console.log(fullName);
/**
 * write fuction that checks if number is odd
 * true if odd, false if even
 */
function isOdd(n) {
 if(n % 2 == 0) {
		console.log("false");
	}
	else {
		console.log("true");
	}
}
 const answer = isOdd(2);
console.log(answer);


/**
 * write function that returns shortest of the words in the given array
 * @example
 * console.log(getShortest(["one", "two", "three"])) // one
 */

function getShortest(wordArray) {
let shortest = '';
    if(wordArray.length > 0){
         for(let i = 0; i < wordArray.length; i++){
           if(typeof wordArray[i] === 'string')
             {
               if(shortest.length == 0) {
                   shortest = wordArray[i]; continue;
               } 
               if(wordArray[i].length < shortest.length){
                   shortest = wordArray[i]; 
               }
            }
          }
         }
          return shortest; 
       }
       
       const output = getShortest(["one", "two", "three"]);
console.log(output);



/**
 * write function that returns word google with given numbers of "o" symbols
 * @example
 * console.log(getGoogle(5)) // gooooogle
 */

 function getGoogle(n) { 
    let str0 = "g"; 
    let str1 = str0.padEnd((n+1),"o") + "gle"; 
    return str1; 
}
const word = getGoogle(3);
console.log(word);
/**
 * write function that returns object based on the given information 
 * (params may be null, so, please use default ones)
 * @example
 * getUser("John", "Dou", 42) should return
 * {
 *    firstName: "John"
 *    lastName: "Dou"
 *    age: 42
 * }
 */

function getUser(firstName = null, lastName = null, age = null) {
  return {
	firstName: firstName,
    lastName: lastName,
	age: age
    };
}
const user = getUser("John", "Dou", 42);
console.log(user);
/**
 * write function that calculates total path traveled.
 * path represented as array of objects with field distance and direction
 * e.g [{direction: "Kiyv - Minsk", distance: 567}, {direction: "Kiyv - Paris", distance: 2402}]
 */

 
const totalPath = [
	{"direction": "Minsk-Belostok", "distance": 347},
	{"direction": "Belostok-Warsaw", "distance": 199},
	{"direction": "Warsaw-Katowice", "distance": 295}
];
function getTotalPath(p) {
		let sumDist = 0;
		let n = p.length;
		for (let i = 0; i < n; i++) {
         sumDist = sumDist + p[i].distance;
		};
        return sumDist
	}
result = getTotalPath(totalPath);



/**
 * write a function that will calculate a discount considering the Amount
 * and the percentage (hint: you need to use the Closure here)
 * JS Closures: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures
 * @param {percentage} num
 * @param {amount} num
 * @example
 * const discount10 = discountFunction(10);
 * console.log(discount10(90)); // 81
 * console.log(discount10(100)); // 90
 */

function discountFunction(percentage) {
    let amount = n;
	let discount = n / percentage * 100;
	let totalSum = n - discount;
	return function () {
	  console.log(totalSum);
	};
}
const payment = discountFunction(50);
console.log(payment);

/**
 * Write the methods inside the given objects that:
 * 1. console logs keys of the given object (please use for..in cycle)
 * 2. returns the string 'My name is John Doe and I am 25 years old. My best friend is Daniel'
 * reffering to the data stored in the object. The string should be constructed using the properties from the object
 */

const myObject = {
	name: 'John',
	lastName: 'Doe',
	age: 25,
	friends: ['Mike', 'Alan', 'Daniel'],
	keys() {
		for (const property in myObject) {
			console.log(`${property}: ${myObject[property]}`);
		  }
	},
	call() {
		     console.log("My name is" + this.name + this.lastName + "and I am " + this.age + "years old. My best friend is " + this.friends[2]);
		}

};

module.exports = {
	sum,
	getFullName,
	isOdd,
	getShortest,
	getGoogle,
	getUser,
	getTotalPath,
	discountFunction,
	myObject
};
/** Task: 1
 * implement factorial algorithm using for, while, do..while operators
 * assign the result to corresponding variable
 * for -> forFactorial: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for
 * while -> whileFactorial: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while
 * do..while -> doFactorial: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/do...while
 */

const n = 10; //10! = 3628800

let forFactorial = 1;
for (let i = 1; i <= n; i++) {
  forFactorial = forFactorial * i;
}
console.log(forFactorial);

let whileFactorial = 1;
let a = 1;
while (a < n) {
  a++;
  whileFactorial = whileFactorial * a;
}
console.log(whileFactorial);

let doFactorial = 1;
let num = 1;
do {
  num = num + 1;
  doFactorial = doFactorial * num;
} while (num < 10);
console.log(doFactorial);

/** Task: 2
 * return the concatenated string from an array of substring
 * assign the result to variable 'str'
 * hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
 */
let str = "";
const substr = ["I", " love", " JS"];
for (let element of substr) {
  str +=  element;
}
console.log(str);
/** Task: 3
 * calculate a total of income of certain person
 * assign the result to the variable 'totalIncome'
 * hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in
 */

let totalIncome;
const personIncomes = {
  salary: 1985,
  rent: -600,
  interestOnDeposit: 250,
  otherExpences: -300
};
for (let key in personIncomes) {
  totalIncome = personIncomes.salary + personIncomes.rent + personIncomes.interestOnDeposit + personIncomes.otherExpences;
}
console.log(totalIncome);

module.exports = {
  forFactorial,
  whileFactorial,
  doFactorial,
  str,
  totalIncome
};
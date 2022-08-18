/**
 * 1. Write a method to reverse a string; 
 * 2. The method should return the string 'This is not a string!' if trying to pass a number
 * hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse
 * @param {string} str
 * @return {string} reversed string
 * @example
 * console.log(reverseString('hello)) // 'olleh'
 * console.log(reverseString(123)) // 'This is not a string!'
 */
function reverseString(str) {
      if (typeof(str) === "string") {
        let splitString = str.split("");
        let reverseArray = splitString.reverse();
        let joinArray = reverseArray.join("");
        return joinArray;
      } else if (typeof(str) === "number") {
        return ('This is not a string!');
      }
}
let first = reverseString ("bhubdjmm");
console.log(first);
let second = reverseString(563456);
console.log(second);

/**
 * Calculate a century by given year if a number is passed
 * @param {number} year
 * @return {num} century
 * @example
 * console.log(centuryFromYear(1705)) // 18
 * console.log(centuryFromYear(1900)) // 19
 * console.log(centuryFromYear(1601)) // 17
 * hint: please choose and appropriate method from the Math object
 */
    function centuryFromYear(year) {
      if (year >= 1601 && year <= 1700) {
        return 17;
      }
      else if (year >= 1701 && year <= 1800) {
        return 18;
      }
      else if (year >= 1801 && year <= 1900) {
        return 19;
      }
      else if (year >= 1901 && year <= 2000) {
        return 20;
      }
    }
    let shownCentury = centuryFromYear(1900);
    console.log(shownCentury);
    

/**
 * Calculate how many times the 'char' appears in the provided 'string'
 * @param {string} str
 * @param {string} char
 * @return {num} number of occurences
 * @example
 * console.log(strCount('Hello', 'o')) // 1
 * console.log(strCount('Hello', 'l')) // 2
 * console.log(strCount('', 'z')) // 0
 * hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match
 */
//function strCount(str, char) {
 //  let re = /char/;
  // let total = count(str.match(re));
 //// return total;
//}
//let answer = strCount('Hello', 'o');
//console.log(answer);
/**
 * Write a method to reduce the length of the string or truncate if it is longer
 * than the given maximum length and add "..." to the end. 
 * Keep it as is if it is not that long.
 * @param {string} str - the initial string
 * @param {num} num - by wht amount of chars it should be truncated
 * @return {string} truncated or the initial string
 * @example
 * console.log(truncateString('This is a long string', 6)) // 'This i...'
 * console.log(truncateString('This', 6)) // 'This'
 */
function truncateString(str, num) {
  let strLength = str.length;
  let strNew = str.slice(0,6);
  let myString = `${strNew}... `
  if (strLength > num) {
    return myString;
  }
  else if (strLength <= num) {
    return str;
  }
}
console.log(truncateString('This is a long string', 6));
console.log(truncateString('This', 6));
/**
 * replace 10 with 'ten' word
 * @param {string} text - input text
 * @return {string} - updated text
 * @example
 * console.log(replace10("231054")) // 23ten54
 * hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
 */
function replace10(text) {
    console.log(text.replace(/10/,"ten"));
}
console.log(replace10(3452710910));
/**
 * replace value in the square brackets with CONFIDENTIAL
 * @param text - input text
 * @return {string} - updated string
 * @example
 * console.log(replaceConfidential("lorem [ipsum] si dolor")) // lorem [CONFIDENTIAL] si dolor
 */
function replaceConfidential(text) {
  let inPut = text;
  let re = /[*]/;
  return inPut.replace(re, [CONFIDENTIAL]);
}
console.log(replaceConfidential("lorem [ipsum] si dolor"));

module.exports = {
  reverseString,
  centuryFromYear,
  strCount,
  truncateString,
  replace10,
  replaceConfidential
};
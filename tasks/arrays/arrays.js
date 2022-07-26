const { forEach } = require("./test/expected_names");

/**
 * return an array of characters names
 * Avoid using forEach() method and for|for..of loops
 * @param {Array} chars
 * @return {Array} - char names
 */
function getCharactersNames(chars) {
	return chars.map(array => array.name);
}
/**
 * print (console.log) names of all characters
 * @param {Array} chars
 */
function printCharacterNames(chars) {
	return chars.forEach(name => console.log(name));
}

/**
 * return an array of non-human (species !== 'human') characters
 * Avoid using forEach() method and for|for..of loops
 * @param {Array} chars
 * @return {Array} - non human characters
 */
function getNonHumanCharacters(chars) {
	if (species !== "Human") {
		return console.log(name);
	}
}

/**
 * return info about character named 'Jerry Smith'
 * Avoid using forEach() method and for|for..of loops
 * @param {Array} chars
 * @return {Object} - Jerry object
 */
function getJerryInfo(chars) {
	if("name" === "Jerry Smith") {
		return console.log(name);
	}
}

/**
 * check if all characters are human (species attribute). return true if all, false if not
 * Avoid using forEach() method and for|for..of loops
 * @param {Array} chars
 * @return {boolean}
 */
function isAllHuman(chars) {}

/**
 * check if there are any 'type == Fish-Person' characters. return true if any, false if not
 * Avoid using forEach() method and for|for..of loops
 * @param {Array} chars
 * @return {boolean}
 */
function isAnyFishPerson(chars) {}

/**
 * 1. Write a method to find an index of minimal item from an array;
 * @param {Array} arr
 * @return {number} - minimum element index
 * @example
 * console.log(minItem([2,5,6,3,1,8])) // 4
 */
function minItem(arr) {
	//PLACE YOUR CODE HERE
}

module.exports = {
	getCharactersNames,
	printCharacterNames,
	getNonHumanCharacters,
	getJerryInfo,
	isAllHuman,
	isAnyFishPerson,
	minItem
};
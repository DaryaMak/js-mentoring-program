/**
 * 1. You need to write a parser, which takes the "./test.json" file
 * and will create a new JSON file with the name "./parsed.json" with the structure:
 * [
 *  {
 *    "docId": "http://doc.epam.com/077b1523-56f0-492a-b954-1269e3acc191"
 *  },
 *  {
 *    "docId": "http://doc.epam.com/077d3a4c-a2fe-4ab9-9046-89c0ce5c5b38"
 *  }
 *  .....
 * ]
 * where 077b1523-56f0-492a-b954-1269e3acc191 - is the value of the name attribute from the "./test.json" file
 * Please NOTE, that you should omit the ".html" extension
 *
 * Use the callback version of FS module.
 * DOCS:
 * 		Callback example: https://nodejs.org/dist/latest-v14.x/docs/api/fs.html#fs_callback_example
 * 		fs.readFile: https://nodejs.org/dist/latest-v14.x/docs/api/fs.html#fs_fs_readfile_path_options_callback
 * 		fs.writeFile: https://nodejs.org/dist/latest-v14.x/docs/api/fs.html#fs_fs_writefile_file_data_options_callback
 *
 * 2. Check yourself by running "npm run test:nodejs"
 */
const { constants } = require('buffer');
const fs = require('fs');

const jsonParser = () => {
	let newDoc;
	const result = fs.readFile('./tasks/nodeJs/parser/test.json', 'utf-8')
	.then(result => {
		const data = JSON.parse(result);
		const entries = data.list.entries;
		const names = entries.map(object => object.entry.name);
		newDoc = names.map(name => name.replace('.html', ''));
		const outputArray = [];
		for (let i = 0; i < newDoc.length; i++) {
			const obj = {};
			obj.docId = newDoc[i];
			outputArray.push(obj);
		}
		fs.writeFile('./tasks/nodeJs/parser/parsed.json', JSON.stringify(outputArray, null, 2), err => {
			if (err) console.log(err);
			console.log('Success');
		})
	})
};

module.exports = {
	jsonParser
};


const fs = require('fs');
const path = require('path');

const css = path.join(__dirname, '../dist/css/main.css');

fs.readFile(css, (err, buffer) => {
	const contents = buffer.toString();
	const replaced = contents.replace(/(\.\.\/)+images/gm, '../images');
	fs.writeFile(css, replaced, err => {
		err ? console.log('Could not write CSS again') : console.log('Successfully replaced image paths in CSS');
	});
});

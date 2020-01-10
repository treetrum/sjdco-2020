const Twig = require('twig');
const fs = require('fs');
const path = require('path');
const md5File = require('md5-file');

const MAIN_TWIG_FILE = path.join(__dirname, '../src/views/index.twig');
const OUTPUT_FILE = path.join(__dirname, '../dist/index.html');

const packageJson = JSON.parse(fs.readFileSync(path.join(__dirname, '../package.json')));
const jsBundleHash = md5File.sync(path.join(__dirname, '../dist/js/bundle.js'));
const stylesheetHash = md5File.sync(path.join(__dirname, '../dist/css/main.css'));

const twigVariables = {
	jsBundleHash,
	stylesheetHash,
	version: packageJson.version
};

Twig.renderFile(MAIN_TWIG_FILE, twigVariables, (err, html) => {
	if (err) {
		console.error('Could not compile twig file');
	}

	// Transform HTML
	// Replace image paths
	const transformedHTML = html.replace(/(\.\.\/)+images/gm, 'images');

	fs.writeFile(OUTPUT_FILE, transformedHTML, err => {
		err ? console.log('Could not write the twig/html file to disk') : console.log(`Sucessfully compiled ${MAIN_TWIG_FILE}`);
	});
});

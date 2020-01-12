const path = require("path");
const fs = require("fs");
const webfontsGenerator = require("webfonts-generator");
const getFilesFromDir = require("./getFilesFromDir");

const svgDirectory = path.join(__dirname, "../src/icons");
const outputFontDir = path.join(__dirname, "../src/fonts");
const outputSassPath = path.join(__dirname, "../src/scss/core/iconfont.scss");

const buildIconfont = async () => {
    const svgFilePaths = await getFilesFromDir(svgDirectory, ".svg");

    const fontOptions = {
        fontName: "iconfont",
        files: svgFilePaths,
        normalize: true,
        fontHeight: 1001,
        writeFiles: false, // don't write files by default as sass will be generated with base64 encoding below
        dest: outputFontDir,
    };

    webfontsGenerator(fontOptions, (error, result) => {
        if (error) {
            console.error("Iconfont build error: ", error);
        } else {
            const generatedCSS = result.generateCss();

            // Removes the font face rule so we can add it in ourselves
            const removedFontFace =
                generatedCSS.slice(0, generatedCSS.indexOf("@font-face")) +
                generatedCSS.slice(generatedCSS.indexOf("}") + 1);

            // Generate base64 encoded version of fonts
            const base64Woff = Buffer.from(result.woff).toString("base64");
            const outputFont = [
                `@font-face {`,
                `   font-family: '${"iconfont"}';`,
                `   src: url(data:application/font-woff;charset=utf-8;base64,${base64Woff}) format("woff");`,
                `   font-weight: normal;`,
                `   font-style: normal;`,
                `}`,
                `${removedFontFace}`,
            ].join("\n");

            // Write the sass file
            fs.writeFile(outputSassPath, outputFont, err => {
                if (err) {
                    return console.log(`❌ Iconfont write error: ${err}`);
                }
                console.log("Iconfont was compiled.");
            });
        }
    });
};

// watch kit directory for file changes and compile
if (process.argv.includes("-w")) {
    fs.watch(svgDirectory, { recursive: false }, buildIconfont);
    console.log(`Now watching ${svgDirectory} for .svg files.`);
}

buildIconfont();

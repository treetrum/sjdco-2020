const path = require("path");
const fs = require("fs");

const lstatPromise = filePath => {
    return new Promise((resolve, reject) => {
        fs.lstat(filePath, (err, stats) => {
            if (err) {
                reject(err);
            } else {
                resolve(stats);
            }
        });
    });
};

const readdirPromise = filePath => {
    return new Promise((resolve, reject) => {
        fs.readdir(filePath, (err, files) => {
            if (err) {
                reject(err);
            } else {
                resolve(files);
            }
        });
    });
};

const getFilesFromDir = async (startPath, filter, recursive = false) => {
    // No start path given, error out
    if (!fs.existsSync(startPath)) {
        console.log("no dir ", startPath);
        return [];
    }

    const files = await readdirPromise(startPath);
    const filteredFiles = [];

    for (const file of files) {
        const filepath = path.join(startPath, file);
        const stat = await lstatPromise(filepath);

        if (recursive && stat.isDirectory()) {
            const recursiveFiles = await getFilesFromDir(
                filepath,
                filter,
                recursive
            );
            filteredFiles.push(...recursiveFiles);
        } else if (filter) {
            if (filepath.includes(filter)) {
                filteredFiles.push(filepath);
            }
        } else {
            filteredFiles.push(filepath);
        }
    }

    return filteredFiles;
};

module.exports = getFilesFromDir;

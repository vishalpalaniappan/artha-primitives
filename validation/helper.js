const fsPromises = require("fs/promises");
const fs = require("fs");

/**
 * Remove folder if it exists and create the directory.
 * @param {String} dir 
 */
const createDir = async (dir) => {
    if (fs.existsSync(dir)) {
        await fsPromises.rm(dir, { recursive: true, force: true });
    }
    await fsPromises.mkdir(dir, { recursive: true });
}

module.exports = createDir;
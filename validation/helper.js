const fsPromises = require("fs/promises");
const fs = require("fs");

/**
 * Remove folder if it exists and create the directory.
 * @param {String} dir 
 */
const createDir = async (dir) => {
    try {
        if (fs.existsSync(dir)) {
            await fsPromises.rm(dir, { recursive: true, force: true });
        }
        await fsPromises.mkdir(dir, { recursive: true });
    } catch (err) {
        console.error("Error creating directory:", err);
    }
}

module.exports = createDir;
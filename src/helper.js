import fs from 'node:fs';
import fsPromises from 'node:fs/promises';
import path from "node:path";

/**
 * Remove folder if it exists and create the directory.
 * @param {String} dir 
 */
export const createDir = async (dir) => {
    if (fs.existsSync(dir)) {
        await fsPromises.rm(dir, { recursive: true, force: true });
    }
    await fsPromises.mkdir(dir, { recursive: true });
}

/**
 * Gets all the JSON files in the provided folder by recursively
 * visiting the folders.
 * 
 * @param {String} dir 
 * @param {Array} fileList 
 * @returns 
 */
export const getAllJsonFilesInFolder = (dir, fileList = []) => {
    const files = fs.readdirSync(dir);

    for (const file of files) {
        const filePath = path.join(dir, file);

        const stat = fs.statSync(filePath);

        if (stat.isDirectory()) {
            getAllJsonFilesInFolder(filePath, fileList);
        } else if (path.extname(file) === ".json") {
            fileList.push(filePath);
        }
    }

    return fileList;
};
import fs from 'node:fs';
import fsPromises from 'node:fs/promises';

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

const fs = require("fs");
const fsPromises = require("fs/promises");
const path = require("path");
const Ajv = require("ajv/dist/2020");
const validatePrimitiveType = require("./validatePrimitiveType")

/**
 * Creates the directory if it doesn't exist.
 * @param {String} dir 
 */
const createDir = async(dir) => {
    try {
        await fsPromises.mkdir(dir, { recursive: true });
    } catch (err) {
        console.error("Error creating directory:", err);
    }
}

/**
 * Generates the documentation, validates the primitives and produces
 * a report with validation results. The generated data is written to
 * the docusaurus docs folder and is presented through the site.
 */
const validateAndGenerateDocs = async () => {
    const VALIDATION_REPORT_DIR = path.join(process.cwd(), "docs", "docs", "validation");
    const MANIFEST_PATH = path.join(process.cwd(), "manifest.json");

    await createDir(VALIDATION_REPORT_DIR);
    
    const ajv = new Ajv({ allErrors: true, strict: true });

    const primitiveTypes = JSON.parse(
        fs.readFileSync(MANIFEST_PATH, "utf8")
    ).primitiveTypes;

    primitiveTypes.forEach((primitiveType) => {
        validatePrimitiveType(ajv, primitiveType);
    })
}

module.exports = validateAndGenerateDocs;


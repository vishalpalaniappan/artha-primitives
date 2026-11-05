
const fs = require("fs");
const fsPromises = require("fs/promises");
const path = require("path");
const Ajv = require("ajv/dist/2020");
const validatePrimitiveType = require("./validatePrimitiveType")
const generateStaticDocs = require("./generateStaticDocs")

/**
 * Generates the documentation, validates the primitives and produces
 * a report with validation results.
 */
const validateAndGenerateDocs = async () => {

    await generateStaticDocs();


    const VALIDATION_REPORT_DIR = path.join(process.cwd(), "docs", "docs", "validation");

    // Create validation directory in docs folder if it doesn't already exist.
    try {
        await fsPromises.mkdir(VALIDATION_REPORT_DIR, { recursive: true });
    } catch (err) {
        console.error("Error creating directory:", err);
    }

    const ajv = new Ajv({ allErrors: true, strict: true });

    // Validate all the primitives for each type
    const primitiveTypes = JSON.parse(
        fs.readFileSync("./manifest.json", "utf8")
    ).primitiveTypes;

    primitiveTypes.forEach((primitiveType) => {
        validatePrimitiveType(ajv, primitiveType);
    })
}

module.exports = validateAndGenerateDocs;


const fs = require("fs");
const path = require("path");
const Ajv = require("ajv/dist/2020");
const ValidationReport = require("./ValidationReport");

const registeredNames = new Set();

/**
 * Given the primitive type, this method validates all the primitives
 * in the folder using the relevant schema and produces a report in MD
 * format that is written to the documentation folder.
 * 
 * @param {Ajv} validator 
 * @param {String} primitiveType 
 */
const validatePrimitiveType = (validator, primitiveType) => {
    const SCHEMA_PATH = path.join(process.cwd(), "schemas", `${primitiveType}.schema.json`);
    const PRIMITIVE_FOLDER_PATH = path.join(process.cwd(), "primitives", `${primitiveType}`);

    // Compile schema
    const schema = JSON.parse(fs.readFileSync(SCHEMA_PATH, "utf8"));
    const validate = validator.compile(schema);

    // Read all JSON files from primitive folder
    const files = fs
        .readdirSync(PRIMITIVE_FOLDER_PATH)
        .filter((f) => f.endsWith(".json"));

    // Start report markdown content
    const report = new ValidationReport(primitiveType, files.length);

    // Validate each primitive
    files.forEach((file) => {
        report.clearErrors();
        
        const PRIMITIVE_FILE_PATH = path.join(PRIMITIVE_FOLDER_PATH, file);

        let parsedJSON;
        try {
            parsedJSON = JSON.parse(fs.readFileSync(PRIMITIVE_FILE_PATH, "utf8"));
        } catch (err) {
            report.addParseError(file);
            return;
        }

        // Validate the JSON file
        const isValidJSON = validate(parsedJSON);
        if (!isValidJSON) {
            report.addFail(validate);
        }

        // Check if the name is unique
        let isUnique = true;
        if ("name" in parsedJSON && registeredNames.has(parsedJSON.name)) {
            isUnique = false;
            report.addUniquenessError(parsedJSON.name);
        } else if ("name" in parsedJSON) {
            registeredNames.add(parsedJSON.name);
        }

        // Write error or success message
        if (!isValidJSON || !isUnique) {
            report.generateErrorMessage(file);
        } else {
            report.addSuccess(file);
        }

    });
    
    // Write content to file
    const DOCS_PATH = path.join( process.cwd(), "docs", "docs");
    const VALIDATION_REPORT_PATH = path.join( DOCS_PATH, "validation", `${primitiveType}-validation-report.md`);
    fs.writeFileSync(VALIDATION_REPORT_PATH, report.getContent(), "utf8");

    console.log(`Validation complete! Report written to ${primitiveType}-validation-report.md`);
};


module.exports = validatePrimitiveType;
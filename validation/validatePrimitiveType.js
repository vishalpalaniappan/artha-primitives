const fs = require("fs");
const path = require("path");
const Ajv = require("ajv/dist/2020");

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
    let validationReportContent = `# ${primitiveType} Validation Report\n\n`;
    validationReportContent += `* **Generated At:** ${new Date().toLocaleString()}\n`;
    validationReportContent += `* **Total Files Checked:** ${files.length}\n\n`;

    validationReportContent += `| File Name | Status | Error Summary |\n`;
    validationReportContent += `| :--- | :---: | :--- |\n`;

    files.forEach((file) => {
        try {
            const PRIMITIVE_FILE_PATH = path.join(PRIMITIVE_FOLDER_PATH, file);
            const isValid = validate(
                JSON.parse(fs.readFileSync(PRIMITIVE_FILE_PATH, "utf8")),
            );

            if (isValid) {
                validationReportContent += `| \`${file}\` | ✅ Passed | None |\n`;
            } else {
                const errorSummary = validate.errors
                    .map((err) => `\`${err.instancePath || "root"}\`: ${err.message}`)
                    .join('<br/>');
                validationReportContent += `| \`${file}\` | ❌ Failed | ${errorSummary} |\n`;
            }
        } catch (err) {
            validationReportContent += `| \`${file}\` | ⚠️ Parse Error | ${err.message} |\n`;
        }
    });
    
    const DOCS_PATH = path.join( process.cwd(), "docs", "docs");
    const VALIDATION_REPORT_PATH = path.join( DOCS_PATH, "validation", `${primitiveType}-validation-report.md`);

    // Write report to file
    fs.writeFileSync(VALIDATION_REPORT_PATH,
        validationReportContent,
        "utf8",
    );
    console.log(
        `Validation complete! Report written to ${primitiveType}-validation-report.md`,
    );
};


module.exports = validatePrimitiveType;
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
    const SCHEMA_PATH = path.join(
        process.cwd(),
        "schemas",
        `${primitiveType}.schema.json`,
    );
    const PRIMITIVE_FOLDER_PATH = path.join(
        process.cwd(),
        "primitives",
        `${primitiveType}`,
    );

    // Compile schema
    const schema = JSON.parse(fs.readFileSync(SCHEMA_PATH, "utf8"));
    const validate = validator.compile(schema);

    // Read all JSON files from primitive folder
    const files = fs
        .readdirSync(PRIMITIVE_FOLDER_PATH)
        .filter((f) => f.endsWith(".json"));

    // Start markdown content
    let markdownContent = `# ${primitiveType} Validation Report\n\n`;
    markdownContent += `* **Generated At:** ${new Date().toLocaleString()}\n`;
    markdownContent += `* **Total Files Checked:** ${files.length}\n\n`;

    markdownContent += `| File Name | Status | Error Summary |\n`;
    markdownContent += `| :--- | :---: | :--- |\n`;

    files.forEach((file) => {
        try {
            const PRIMITIVE_FILE_PATH = path.join(PRIMITIVE_FOLDER_PATH, file);
            const isValid = validate(
                JSON.parse(fs.readFileSync(PRIMITIVE_FILE_PATH, "utf8")),
            );

            if (isValid) {
                markdownContent += `| \`${file}\` | ✅ Passed | None |\n`;
            } else {
                const errorSummary = validate.errors
                    .map((err) => `\`${err.instancePath || "root"}\`: ${err.message}`)
                    .join('<br/>');
                markdownContent += `| \`${file}\` | ❌ Failed | ${errorSummary} |\n`;
            }
        } catch (err) {
            markdownContent += `| \`${file}\` | ⚠️ Parse Error | ${err.message} |\n`;
        }
    });


    
    const VALIDATION_REPORT_PATH = path.join(
        process.cwd(),
        "docs",
        "docs",
        "validation",
        `${primitiveType}-validation-report.md`,
    );

    // Write report to file
    fs.writeFileSync(VALIDATION_REPORT_PATH,
        markdownContent,
        "utf8",
    );
    console.log(
        `Validation complete! Report written to ${primitiveType}-validation-report.md`,
    );
};


module.exports = validatePrimitiveType;
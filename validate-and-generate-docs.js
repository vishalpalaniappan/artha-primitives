const JsonSchemaStaticDocs = require("json-schema-static-docs");
const fs = require("fs");
const fsPromises = require("fs/promises");
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
        __dirname,
        "schemas",
        `${primitiveType}.schema.json`,
    );
    const PRIMITIVE_FOLDER_PATH = path.join(
        __dirname,
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

    // Write report to file
    fs.writeFileSync(
        `./docs/docs/validation/${primitiveType}-validation-report.md`,
        markdownContent,
        "utf8",
    );
    console.log(
        `Validation complete! Report written to ${primitiveType}-validation-report.md`,
    );
};

(async () => {
    // Generate Static Documentation for each Schema
    let jsonSchemaStaticDocs = new JsonSchemaStaticDocs({
        inputPath: "./schemas",
        outputPath: "./docs/docs/schemas",
        jsonSchemaVersion: "https://json-schema.org/draft/2020-12/schema",
        ajvOptions: {
          allowUnionTypes: true,
        },
        addFrontMatter: true,
        createIndex: true,
        displaySchema: true,
    });

    await jsonSchemaStaticDocs.generate();
    console.log("HTML documentation generated successfully.");

    // Create validation directory in docs folder if it doesn't already exist.
    try {
        await fsPromises.mkdir("./docs/docs/validation", { recursive: true });
    } catch (err) {
        console.error("Error creating directory:", err);
    }

    const ajv = new Ajv({ allErrors: true, strict: true });

    // Validate all the primitives for each type
    const primitiveTypes = JSON.parse(fs.readFileSync("./manifest.json", "utf8")).primitiveTypes;
    primitiveTypes.forEach((primitiveType) => {
        validatePrimitiveType(ajv, primitiveType);
    })
    
})();

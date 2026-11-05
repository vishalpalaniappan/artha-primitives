const JsonSchemaStaticDocs = require("json-schema-static-docs");
const path = require("path");

/**
 * Generates static documentation from the schemas.
 */
const generateStaticDocs = async () => {
    const SCHEMAS_PATH = path.join(process.cwd(), "schemas");
    const SCHEMAS_OUTPUT_PATH = path.join(process.cwd(), "docs", "docs", "schemas");

    // Generate Static Documentation for each Schema
    let jsonSchemaStaticDocs = new JsonSchemaStaticDocs({
        inputPath: SCHEMAS_PATH,
        outputPath: SCHEMAS_OUTPUT_PATH,
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
};


module.exports = generateStaticDocs;
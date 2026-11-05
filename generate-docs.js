const JsonSchemaStaticDocs = require("json-schema-static-docs");
const fs = require("fs");
const path = require("path");
const Ajv = require("ajv/dist/2020");

(async () => {
    // Generate documentation
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

    // Testing validation of single file using schema
    const ajv = new Ajv({ allErrors: true, strict: true });
    const SCHEMA_PATH = path.join(
        __dirname,
        "schemas",
        "meta-primitive.schema.json",
    );
    const PRIMITIVE_PATH = path.join(
        __dirname,
        "primitives",
        "meta-primitive",
        "import.json",
    );

    // Compile schema
    const schema = JSON.parse(fs.readFileSync(SCHEMA_PATH, "utf8"));
    const validate = ajv.compile(schema);

    // Try to validate
    try {
        const isValid = validate(
            JSON.parse(fs.readFileSync(PRIMITIVE_PATH, "utf8")),
        );

        if (isValid) {
            console.log("Validated JSON successfully.");
        } else {
            const errorList = validate.errors
                .map((e) => `\`${e.instancePath || "root"}\` ${e.message}`)
                .join("<br>");
            console.log(validate.errors);
        }
    } catch (parseError) {
        // Error parsing the JSON
    }
})();

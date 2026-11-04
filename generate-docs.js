const JsonSchemaStaticDocs = require("json-schema-static-docs");

(async () => {
    let jsonSchemaStaticDocs = new JsonSchemaStaticDocs({
        inputPath: "./schemas",
        outputPath: "./docs/docs",
        jsonSchemaVersion: "https://json-schema.org/draft/2020-12/schema",
        ajvOptions: {
            allowUnionTypes: true,
        },
        addFrontMatter: true,
        createIndex: true,
        displaySchema: true
    });

    await jsonSchemaStaticDocs.generate();
    console.log("HTML documentation generated successfully.");
})();
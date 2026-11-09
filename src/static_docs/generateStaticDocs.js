const createDir = require("../helper")
const fs = require("fs");
const fsPromises = require("fs/promises");
const JsonSchemaStaticDocs = require("json-schema-static-docs");
const path = require("path");

/**
 * Generate the documentation for the primitives. Currently, this involves copying
 * the JSON file to the docs folder and creating a MD file which loads the JSON file.
 * 
 * TODO: Current page is very basic, I will look into alternatives for a more effective
 * way to present the JSON structure.
 */
const generatePrimitivesDocs = async () => {
    const MANIFEST_PATH = path.join(process.cwd(), "manifest.json");
    const PRIMITIVES_PATH = path.join(process.cwd(), "primitives");
    const PRIMITIVES_DOCS_PATH = path.join(process.cwd(), "docs", "docs", "Primitives");
    
    await createDir(PRIMITIVES_DOCS_PATH);

    const primitiveTypes = JSON.parse(fs.readFileSync(MANIFEST_PATH, "utf8")).primitiveTypes;

    for (const primitiveType of primitiveTypes) {
        const PRIMITIVE_FOLDER_PATH = path.join(PRIMITIVES_PATH, primitiveType);
        const PRIMITIVE_DOCS_PATH = path.join(PRIMITIVES_DOCS_PATH, primitiveType);
        await createDir(PRIMITIVE_DOCS_PATH);

        const files = fs
            .readdirSync(PRIMITIVE_FOLDER_PATH)
            .filter((f) => f.endsWith(".json"));

        for (const file of files) {
            const PRIMITIVE_SRC_PATH = path.join(PRIMITIVE_FOLDER_PATH, file);
            const PRIMITIVE_TARGET_PATH = path.join(PRIMITIVE_DOCS_PATH, file);
            await fsPromises.copyFile(PRIMITIVE_SRC_PATH, PRIMITIVE_TARGET_PATH);

            let src = `---\n`;
            src += `id: ${file}\n`;
            src += `title: ${file}\n`
            src += `---\n`;
            src += `\n`;
            src += `import CodeBlock from '@theme/CodeBlock';\n`;
            src += `import myData from './${file}';\n`;
            src += `\n`;
            src += `<CodeBlock language="json">\n`;
            src += `  {JSON.stringify(myData, null, 2)}\n`;
            src += `</CodeBlock>`;

            const PRIMITIVE_MD_TARGET_PATH = path.join(PRIMITIVE_DOCS_PATH, path.basename(file, ".json") + ".md");
            fs.writeFileSync(PRIMITIVE_MD_TARGET_PATH, src, "utf8");
        };
    };
}

/**
 * Generate static docs for the schema. This outputs MD files that are rendered
 * by the docusaurus site.
 * 
 * @param {String} SCHEMAS_PATH Path to the schemas folder
 * 
 * TODO: The generated MD file doesn't cleanly show conditional properties. I have
 * experimented with a schema viewer that does include this information. I will replace
 * the static text based docs with the JSON schema viewer in a later PR.
 */
const generateSchemaStaticDocs = async (SCHEMA_TYPE) => {    
    const SCHEMAS_PATH = path.join(process.cwd(), "schemas", `${SCHEMA_TYPE}-schema`)
    const SCHEMAS_OUTPUT_PATH = path.join(process.cwd(), "docs", "docs", "Schema", SCHEMA_TYPE);

    let jsonSchemaStaticDocs = new JsonSchemaStaticDocs({
        inputPath: SCHEMAS_PATH,
        outputPath: SCHEMAS_OUTPUT_PATH,
        jsonSchemaVersion: "https://json-schema.org/draft/2020-12/schema",
        ajvOptions: {
          allowUnionTypes: true,
        },
        addFrontMatter: true,
        createIndex: false,
        displaySchema: true,
    });

    await jsonSchemaStaticDocs.generate();
    console.log("HTML documentation generated successfully.");
}

/**
 * Generates static documentation from the schemas and primitives.
 */
const generateStaticDocs = async () => {
    await createDir(path.join(process.cwd(), "docs", "docs", "Schema", "primitive"));
    await generateSchemaStaticDocs("primitive");
    
    await createDir(path.join(process.cwd(), "docs", "docs", "Schema", "structural"));
    await generateSchemaStaticDocs("structural");

    await generatePrimitivesDocs();
};


module.exports = generateStaticDocs;
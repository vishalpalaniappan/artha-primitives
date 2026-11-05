const JsonSchemaStaticDocs = require("json-schema-static-docs");
const path = require("path");
const fs = require("fs");
const fsPromises = require("fs/promises");
const createDir = require("./helper")

const generatePrimitivesDocs = async () => {
    const MANIFEST_PATH = path.join(process.cwd(), "manifest.json");
    const PRIMITIVES_PATH = path.join(process.cwd(), "primitives");
    const PRIMITIVE_DOCS_PATH = path.join(process.cwd(), "docs", "docs", "primitives");
    
    await createDir(PRIMITIVE_DOCS_PATH);

    const primitiveTypes = JSON.parse(
        fs.readFileSync(MANIFEST_PATH, "utf8")
    ).primitiveTypes;

    primitiveTypes.forEach(async (primitiveType) => {
        const PRIMITIVE_FOLDER_PATH = path.join(PRIMITIVES_PATH, primitiveType);
        const PRIMITIVE_TARGET_DOCS_PATH = path.join(PRIMITIVE_DOCS_PATH, primitiveType);
        await createDir(PRIMITIVE_TARGET_DOCS_PATH);

        const files = fs
            .readdirSync(PRIMITIVE_FOLDER_PATH)
            .filter((f) => f.endsWith(".json"));

        files.forEach(async (file) => {
            const PRIMITIVE_SRC_PATH = path.join(PRIMITIVE_FOLDER_PATH, file);
            const PRIMITIVE_TARGET_PATH = path.join(PRIMITIVE_TARGET_DOCS_PATH, file);
            await fsPromises.copyFile(PRIMITIVE_SRC_PATH, PRIMITIVE_TARGET_PATH);

            let src = `---`;
            src += `id: ${file}`;
            src += `title: ${file}`
            src += `---`;
            src += `import CodeBlock from '@theme/CodeBlock';`;
            src += `import myData from './${file}';`;
            src += `<CodeBlock language="json">`;
            src += `  {JSON.stringify(myData, null, 2)}`;
            src += `</CodeBlock>`;

            const PRIMITIVE_VIEWER_TARGET_PATH = path.join(PRIMITIVE_TARGET_DOCS_PATH, path.basename(file, ".json") + ".mdx");
            fs.writeFileSync(PRIMITIVE_VIEWER_TARGET_PATH, src, "utf8");

        });
    })
}

const generateSchemaStaticDocs = async () => {
    const SCHEMAS_PATH = path.join(process.cwd(), "schemas");
    const SCHEMAS_OUTPUT_PATH = path.join(process.cwd(), "docs", "docs", "schemas");

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
}

/**
 * Generates static documentation from the schemas.
 */
const generateStaticDocs = async () => {
    generateSchemaStaticDocs();
    generatePrimitivesDocs();
};


module.exports = generateStaticDocs;
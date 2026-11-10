import path from "node:path";
import fs from "node:fs";
import { getAllJsonFilesInFolder } from "../helper.js";

const generatePrimitiveSchema = (primitive) => {
    const argsKey =
        primitive.type === "meta-primitive" ? "attributes" : "participants";
    const args = primitive[argsKey].filter((item) => item.required);

    const schema = {
        $schema: "https://json-schema.org/draft/2020-12/schema",
        $id: `https://example.com/${primitive.name}-structure.schema.json`,
        title: `${primitive.name}-primitive-structure-schema`,
        description: `Structural schema for ${primitive.name} primitive.`,
        type: "object",
        additionalProperties: false,
        properties: {
            $schema: {
                type: "string",
                description: "URI reference to the JSON schema.",
            },
            name: {
                type: "string",
                description: "Name of the primitive.",
            },
        },
    };

    const required = ["name"];
    for (const arg of args) {
        if (arg.required) {
            schema.properties[arg.name] = {};
            required.push(arg.name);
        }
    }

    schema.required = required;

    const GENERATED_PATH = path.join(
        process.cwd(),
        "generated_schemas",
        `${primitive.name}-primitive-structure.schema.json`,
    );
    fs.writeFileSync(GENERATED_PATH, JSON.stringify(schema, null, 4), "utf8");
};


export const generatePrimitiveSchemas = () => {
    // Generate schemas for each of the primitives
    const PRIMITIVES_DIR = path.join(process.cwd(), "primitives");
    const files = getAllJsonFilesInFolder(PRIMITIVES_DIR);
    for (const primitiveFile of files) {
        const primitive = JSON.parse(fs.readFileSync(primitiveFile, "utf8"));
        generatePrimitiveSchema(primitive);
    }
}

import path from "node:path";
import fs from "node:fs";
import { createDir, getAllJsonFilesInFolder } from "../helper.js";

const generatePrimitiveSchema = (primitive) => {
    const argsKey = (primitive.type) === "meta-primitive" ? "attributes" : "participants";
    const args = primitive[argsKey].filter((item) => item.required);

    const schema = {
        $schema: "https://json-schema.org/draft/2020-12/schema",
        $id: `https://example.com/${primitive.name}-structure.schema.json`,
        title: `${primitive.name}-primitive-structure-schema`,
        description: `Structural schema for ${primitive.name} primitive.`,
        primitiveType: `${primitive.type}`,
        type: "object",
        name: `${primitive.name}`,
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
        "primitives",
        `${primitive.name}.schema.json`,
    );
    fs.writeFileSync(GENERATED_PATH, JSON.stringify(schema, null, 4), "utf8");
};

export const generatePrimitiveSchemas = async () => {
    const PRIMITIVES_DIR = path.join(process.cwd(), "primitives");
    const files = getAllJsonFilesInFolder(PRIMITIVES_DIR);

    const GENERATED_PRIMITIVE_SCHEMAS_PATH = path.join(
        process.cwd(),
        "generated_schemas",
        "primitives",
    );
    await createDir(GENERATED_PRIMITIVE_SCHEMAS_PATH);

    const sharedSchema = {
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "$id": "./shared-primitive-schema.json",
        "$defs": {}
    }
    
    // Generate schemas for each of the primitives
    for (const primitiveFile of files) {
        const primitive = JSON.parse(fs.readFileSync(primitiveFile, "utf8"));
        generatePrimitiveSchema(primitive);

        sharedSchema.$defs[primitive.name] = {
            "allOf": [
                { "$ref": `./primitives/${primitive.name}.schema.json` },
                {
                    "type": "object",
                    "properties": {
                        "name": { "const": `${primitive.name}`}
                    },
                    "required": ["name"]
                }
            ]
        }
    }
    const SHARED_SCHEMA_PATH = path.join(
        process.cwd(),
        "generated_schemas",
        `shared-primitive.schema.json`,
    );
    fs.writeFileSync(SHARED_SCHEMA_PATH, JSON.stringify(sharedSchema, null, 4), "utf8");
};

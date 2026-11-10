import path from "node:path";
import fs from "node:fs";
import { createDir, getAllJsonFilesInFolder } from "../helper.js";

/**
 * Generates the primitive schema given the primitive definition.
 * 
 * @param {String} primitive 
 */
const generatePrimitiveSchema = (primitive) => {
    const argsKey = (primitive.type) === "meta-primitive" ? "attributes" : "participants";
    const args = primitive[argsKey].filter((item) => item.required);

    // Schema base object
    const schema = {
        $schema: "https://json-schema.org/draft/2020-12/schema",
        $id: `./${primitive.name}-structure.schema.json`,
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
    
    // Add all the required arguments to the list and also
    // add the entry to the properties key
    schema.required = ["name"];
    for (const arg of args) {
        if (arg.required) {
            schema.properties[arg.name] = {};
            schema.required.push(arg.name);
        }
    }

    const GENERATED_PATH = path.join(
        process.cwd(),
        "generated_schemas",
        "primitives",
        `${primitive.name}.schema.json`,
    );
    fs.writeFileSync(GENERATED_PATH, JSON.stringify(schema, null, 4), "utf8");
};

/**
 * This method reads all the primitives, generates the schemas for the primitive
 * usage and adds it to the shared schema.
 */
export const generatePrimitiveSchemas = async () => {
    const PRIMITIVES_DIR = path.join(process.cwd(), "primitives");
    const files = getAllJsonFilesInFolder(PRIMITIVES_DIR);

    const sharedSchema = {
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "$id": "./shared-primitive-schema.json",
        "$defs": {}
    }
    
    // Generate schema for primitive and create shared schema that references it
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

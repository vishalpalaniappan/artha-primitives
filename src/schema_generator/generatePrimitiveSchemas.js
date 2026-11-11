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
    const args = primitive[argsKey];

    // Schema base object
    const schema = {
        $schema: "https://json-schema.org/draft/2020-12/schema",
        $id: `./${primitive.name}-structure.schema.json`,
        title: `${primitive.name}`,
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
                const: `${primitive.name}`
            }, 
            primitiveType: {
                type: "string",
                description: "Type of the primitive.",
                const: `${primitive.type}`
            }
        }
    };

    if ("invariants" in primitive && primitive.invariants.length > 0) {
        schema.properties.name["x-invariant-metadata"] = primitive.invariants;
    }
    
    // Add all the required arguments to the list and also
    // add the entry to the properties key
    schema.required = ["name"];
    for (const arg of args) {
        schema.properties[arg.name] = {};
        if (arg.required) {
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

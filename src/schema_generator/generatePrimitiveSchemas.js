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
            id: {
                type: "string"
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

    // Add body as a required attribute for functional primitives
    if (primitive.type === "functional-primitive") {
        schema.required.push("body");
        schema.properties["body"] = {
            type: "array"
        }
    }

    const GENERATED_PATH = path.join(
        process.cwd(),
        "generated_schemas",
        "primitives",
        `${primitive.name}.schema.json`,
    );
    fs.writeFileSync(GENERATED_PATH, JSON.stringify(schema, null, 4), "utf8");

    return {
        "if": {
            "properties": {
                "name": {
                    "const": `${primitive.name}`
                }
            },
            "required": [
                "name"
            ]
        },
        "then": {
            "$ref": `./primitives/${primitive.name}.schema.json`
        }
    }
}

/**
 * This method reads all the primitives, generates the schemas for the primitive
 * usage and adds it to the shared schema.
 */
export const generatePrimitiveSchemas = async () => {
    const PRIMITIVES_DIR = path.join(process.cwd(), "primitives");
    const files = getAllJsonFilesInFolder(PRIMITIVES_DIR);

    return files.map((primitiveSrc) => {
        return generatePrimitiveSchema(
            JSON.parse(fs.readFileSync(primitiveSrc, "utf8"))
        );
    });
};

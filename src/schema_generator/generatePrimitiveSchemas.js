import path from "node:path";
import fs from "node:fs";
import { getAllJsonFilesInFolder } from "../helper.js";

/**
 * Generates the primitive schema given the primitive definition.
 * 
 * @param {String} primitive 
 */
const generatePrimitiveSchema = (primitive) => {
    const args = primitive["attributes"].args;

    // Schema base object
    const schema = {
        $schema: "https://json-schema.org/draft/2020-12/schema",
        $id: `./${primitive.name}.schema.json`,
        title: `${primitive.name}`,
        description: `Structural schema for ${primitive.name} primitive.`,
        type: "object",
        additionalProperties: false,
        required: ["name", "args"],
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
            },
            args: {
                type: "array",
                minItems: 0,
                maxItems: 0,
                prefixItems: []
            }
        }
    };

    if ("alias" in primitive.attributes) {
        schema.properties.alias = {
            type: "object",
            additionalProperties: false,
            required: ["aliasName"],
            properties: {
                aliasName: {
                    type: "string"
                },
                aliasStructuralType: {
                    type: "string",
                    const: primitive.attributes.alias.aliasStructuralType
                },
                introduce: {
                    type: "boolean",
                    default: false
                },
                persist: {
                    type: "boolean",
                    default: false
                }
            }
        }
    }

    if ("invariants" in primitive && primitive.invariants.length > 0) {
        schema.invariants = primitive.invariants;
    }

    if ("modifies" in primitive) {
        schema.modifies = primitive.modifies;
    }

    if ("impulse" in primitive) {
        schema.impulse = primitive.impulse;
    }


    // Add all the required arguments to the list and also
    // add the entry to the properties key
    const optionalItems = [];
    const existenceCheck = [];
    for (const arg of args) {
        const item = {
            type: "object",
            properties: {
                argName: { 
                    type: "string",
                    const: arg.name
                },
                argType: {
                    type: "string",
                    description: "Type of arg value (name or const).",
                    enum: ["name", "const"]
                },
                value: {
                    type: arg.attributeStructuralType
                }
            },
            required: ["argName", "value", "argType"],
            additionalProperties: false
        }

        if (arg.checkExistence) {
           existenceCheck.push(arg.name);
        }

        if (arg.required) {
            schema.properties.args.prefixItems.push(item);
            schema.properties.args.minItems++;
        } else {
            optionalItems.push(item);
        }
        schema.properties.args.maxItems++;
    }

    if (existenceCheck.length > 0) {
        // Add the args for which existence should be checked
        schema.properties.args.$exists = existenceCheck;
    }

    // Add the optional items after the prefixed items
    schema.properties.args.prefixItems = [
        ...schema.properties.args.prefixItems,
        ...optionalItems
    ]

    // prefix items must have at least one item
    if (schema.properties.args.prefixItems.length === 0) {
        delete schema.properties.args.prefixItems;
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

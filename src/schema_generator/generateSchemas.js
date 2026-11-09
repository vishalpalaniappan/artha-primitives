import path from 'node:path';
import fs from 'node:fs';
import $RefParser from '@apidevtools/json-schema-ref-parser';
import { createDir } from '../helper.js';

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

/**
 * Builds the schema from the narrative schema.
 * 
 * I will be adding all the generated schemas to the generated_schema folder and then building
 * the schema with the fully generated schema. Right now, I am just testing the bundling.
 */
const buildSchema = async () => {
    try {
        const fullSchema = await $RefParser.dereference(
            "./schemas/narrative.schema.json",
        );

        const DIST_PATH = path.join(
            process.cwd(),
            "dist"
        );

        await createDir(DIST_PATH);

        const GENERATED_PATH = path.join(
            process.cwd(),
            "dist",
            "artha.schema.json",
        );

        await fs.writeFileSync(GENERATED_PATH, JSON.stringify(fullSchema, null, 2));
        console.log("Successfully created single schema!");
    } catch (err) {
        console.error("Error parsing schemas:", err);
    }
};

const generateSchema = async () => {        
    const GENERATED_SCHEMAS_DIR = path.join(process.cwd(), "generated_schemas");
    await createDir(GENERATED_SCHEMAS_DIR);
    
    await buildSchema();
};

generateSchema();

export default generateSchema;

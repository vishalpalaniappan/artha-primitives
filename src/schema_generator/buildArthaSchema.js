import {generatePrimitiveSchemas} from "./generatePrimitiveSchemas.js"
import fs from 'node:fs';
import fsPromises from 'node:fs/promises';
import path from 'node:path';
import { createDir } from "../helper.js";

/**
 * This method builds the Artha schema by doing the following:
 * - Generates the invocation schemas for all the primitives
 * - Copies the narrative schema into the generated_schema folder
 * - Reads the manifest
 * - Reads each of the structural-schema
 *      - Adds the relevant primitive into body of structural-schema using manifest
 * - Writes updated structural schema into generated_schema folder
 */
export const buildArthaSchema = async () => {
    generatePrimitiveSchemas();
    
    // Read the manifest
    const MANIFEST_PATH = path.join(process.cwd(), "manifest.json");
    const manifest = JSON.parse(fs.readFileSync(MANIFEST_PATH, "utf8"));

    // Copy the narrative schema to generated schema folder
    const NARRATIVE_SCHEMA_PATH_SRC = path.join(process.cwd(), "schemas", "narrative.schema.json");
    const NARRATIVE_SCHEMA_PATH_DEST = path.join(process.cwd(), "generated_schemas", "narrative.schema.json");
    
    // Add references to the structural schemas in generated folder so it can be dereferenced
    const narrative_schema = JSON.parse(fs.readFileSync(NARRATIVE_SCHEMA_PATH_SRC, "utf8"));
    for (const schemaName of manifest.structuralTypes) {
        narrative_schema.definitions[schemaName] = {
            "properties": {
                "type": {
                    "const": schemaName
                },
                "$ref": `./${schemaName}.schema.json`
            }
        }
    }
    fs.writeFileSync(
        NARRATIVE_SCHEMA_PATH_DEST, 
        JSON.stringify(narrative_schema, null , 4),
        "utf8"
    );
    

    // Populate the body of the structural schemas (if it contains a body)
    for (const schemaName of manifest.structuralTypes) {
        const SCHEMA_PATH_SRC = path.join(
            process.cwd(), "schemas", "structural-schema", `${schemaName}.schema.json`
        );
        const schema = JSON.parse(
            fs.readFileSync(SCHEMA_PATH_SRC, "utf8")
        );

        const structure = manifest.structure[schemaName];
        if ("contains" in structure) {
            for (const primitiveType of Object.keys(structure)) {
                // Add the references to the types allowed in body of schema here
            }
        }

        // Write generated structural schema to generated_schema folder
        const SCHEMA_PATH_DEST = path.join(
            process.cwd(), 
            "generated_schemas", 
            `${schemaName}.schema.json`
        );
        fs.writeFileSync(
            SCHEMA_PATH_DEST, 
            JSON.stringify(schema, null , 4),
            "utf8"
        );
    }
}
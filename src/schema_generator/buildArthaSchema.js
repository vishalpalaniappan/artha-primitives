import { generatePrimitiveSchemas } from "./generatePrimitiveSchemas.js"
import fs from 'node:fs';
import fsPromises from 'node:fs/promises';
import path from 'node:path';
import { createDir, getAllJsonFilesInFolder } from "../helper.js";

/**
 * 
 * @param primitiveType {String} Type of primitive to allow.
 * @param excludes {Array} The primitives to not allow for this type.
 */
const loadPrimitiveTypes = async (primitiveType, excludes) => {
    const GENERATED_SCHEMAS_PATH = path.join(
        process.cwd(),
        "generated_schemas",
        "primitives"
    );

    const files = getAllJsonFilesInFolder(GENERATED_SCHEMAS_PATH);


    const allowedPrimitives = [];
    for (const file of files) {
        const parsedPrimitive = JSON.parse(fs.readFileSync(file, "utf8"));
        if (parsedPrimitive.properties.primitiveType.const !== primitiveType) continue;
        if (excludes.includes(parsedPrimitive.properties.name.const)) continue;
        allowedPrimitives.push({ "$ref": `../shared-primitive.schema.json#/$defs/${parsedPrimitive.properties.name.const}`});
    }

    return allowedPrimitives;
}

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
    const primitiveRefs = await generatePrimitiveSchemas();

    // Read the manifest
    const MANIFEST_PATH = path.join(process.cwd(), "manifest.json");
    const manifest = JSON.parse(fs.readFileSync(MANIFEST_PATH, "utf8"));

    // Copy the narrative schema to generated schema folder
    const NARRATIVE_SCHEMA_PATH_SRC = path.join(process.cwd(), "schemas", "narrative.schema.json");
    const NARRATIVE_SCHEMA_PATH_DEST = path.join(process.cwd(), "generated_schemas", "narrative.schema.json");

    
    // Add references to the structural schemas in generated folder so it can be dereferenced
    const narrative_schema = JSON.parse(fs.readFileSync(NARRATIVE_SCHEMA_PATH_SRC, "utf8"));

    narrative_schema["$defs"]["recursiveObjectCheck"]["anyOf"][0]["allOf"] = [
        ...narrative_schema["$defs"]["recursiveObjectCheck"]["anyOf"][0]["allOf"],
        ...primitiveRefs
    ];

    narrative_schema["manifest"] = manifest;

    fs.writeFileSync(
        NARRATIVE_SCHEMA_PATH_DEST,
        JSON.stringify(narrative_schema, null, 4),
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
        
        // Write generated structural schema to generated_schema folder
        const SCHEMA_PATH_DEST = path.join(
            process.cwd(),
            "generated_schemas",
            "structural-schema",
            `${schemaName}.schema.json`
        );
        fs.writeFileSync(
            SCHEMA_PATH_DEST,
            JSON.stringify(schema, null, 4),
            "utf8"
        );
    }
}
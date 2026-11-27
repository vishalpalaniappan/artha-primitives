import path from "node:path";
import fs from "node:fs";
import $RefParser from "@apidevtools/json-schema-ref-parser";
import { createDir } from "../helper.js";

/**
 * Builds the schema from the narrative schema.
 * - Write schema to dist folder
 * - Write schema to docs static image folder
 */
export const bundleGeneratedSchema = async () => {
    // Bundle schema 
    const schemaPath = path.join(process.cwd(), "generated_schemas", "narrative.schema.json");
    const fullSchema = await $RefParser.bundle(schemaPath);

    // Write bundled schema to dist folder
    await createDir(path.join(process.cwd(), "dist"));
    const GENERATED_PATH = path.join(
        process.cwd(),
        "dist",
        "artha.schema.json",
    );
    fs.writeFileSync(GENERATED_PATH, JSON.stringify(fullSchema, null, 2));
    
    // Write bundled schema to doc folder
    const DOC_SCHEMA_PATH = path.join(
        process.cwd(),
        "docs",
        "static",
        "img",
        "artha.schema.json"
    );
    fs.writeFileSync(DOC_SCHEMA_PATH, JSON.stringify(fullSchema, null, 2));

    console.log("Successfully created single schema!");
};
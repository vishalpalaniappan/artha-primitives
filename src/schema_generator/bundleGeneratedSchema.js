import path from "node:path";
import fs from "node:fs";
import $RefParser from "@apidevtools/json-schema-ref-parser";
import { createDir } from "../helper.js";

/**
 * Builds the schema from the narrative schema.
 */
export const bundleGeneratedSchema = async () => {
    const schemaPath = path.join(process.cwd(), "generated_schemas", "narrative.schema.json");
    const fullSchema = await $RefParser.bundle(schemaPath);

    await createDir(path.join(process.cwd(), "dist"));

    const GENERATED_PATH = path.join(
        process.cwd(),
        "dist",
        "artha.schema.json",
    );
    fs.writeFileSync(GENERATED_PATH, JSON.stringify(fullSchema, null, 2));
    
    const DOC_SCHEMA_FOLDER = path.join(
        process.cwd(),
        "docs",
        "static",
        "img"
    );

    const DOC_SCHEMA_PATH = path.join(DOC_SCHEMA_FOLDER,"artha.schema.json");
    fs.writeFileSync(DOC_SCHEMA_PATH, JSON.stringify(fullSchema, null, 2));

    console.log("Successfully created single schema!");
};
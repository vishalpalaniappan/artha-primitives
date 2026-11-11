import path from "node:path";
import fs from "node:fs";
import $RefParser from "@apidevtools/json-schema-ref-parser";
import { createDir, getAllJsonFilesInFolder } from "../helper.js";

/**
 * Builds the schema from the narrative schema.
 */
export const dereferenceGeneratedSchema = async () => {
    const schemaPath = path.join(process.cwd(), "generated_schemas", "narrative.schema.json");
    const fullSchema = await $RefParser.bundle(schemaPath);

    await createDir(path.join(process.cwd(), "dist"));

    const GENERATED_PATH = path.join(
        process.cwd(),
        "dist",
        "artha.schema.json",
    );

    fs.writeFileSync(GENERATED_PATH, JSON.stringify(fullSchema, null, 2));
    console.log("Successfully created single schema!");
};
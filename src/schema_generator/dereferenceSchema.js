import path from "node:path";
import fs from "node:fs";
import $RefParser from "@apidevtools/json-schema-ref-parser";
import { createDir, getAllJsonFilesInFolder } from "../helper.js";

/**
 * Builds the schema from the narrative schema.
 *
 * I will be adding all the generated schemas to the generated_schema folder and then building
 * the schema with the fully generated schema. Right now, I am just testing the bundling.
 */
export const dereferenceGeneratedSchema = async () => {
    try {
        const fullSchema = await $RefParser.dereference(
            "./generated_schemas/narrative.schema.json",
        );

        const DIST_PATH = path.join(process.cwd(), "dist");

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
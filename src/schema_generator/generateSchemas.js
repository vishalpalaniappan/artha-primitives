import path from "node:path";
import { createDir } from "../helper.js";
import {dereferenceGeneratedSchema} from "./dereferenceSchema.js"

const generateSchema = async () => {
    const GENERATED_SCHEMAS_DIR = path.join(process.cwd(), "generated_schemas");
    await createDir(GENERATED_SCHEMAS_DIR);

    buildArthaSchema();
    await dereferenceGeneratedSchema();
};

await generateSchema();
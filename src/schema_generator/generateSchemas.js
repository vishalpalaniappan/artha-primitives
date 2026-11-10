import path from "node:path";
import { createDir } from "../helper.js";
import {dereferenceGeneratedSchema} from "./dereferenceSchema.js"
import {buildArthaSchema} from "./buildArthaSchema.js"

const generateSchema = async () => {
    await createDir(path.join(process.cwd(), "generated_schemas"));
    await createDir(path.join(process.cwd(), "generated_schemas", "structural-schema"));

    await buildArthaSchema();
    await dereferenceGeneratedSchema();
};

await generateSchema();
import path from "node:path";
import { createDir } from "../helper.js";
import {bundleGeneratedSchema} from "./bundleGeneratedSchema.js"
import {buildArthaSchema} from "./buildArthaSchema.js"

const generateSchema = async () => {
    await createDir(path.join(process.cwd(), "generated_schemas"));
    await createDir(path.join(process.cwd(), "generated_schemas", "primitives"));
    await createDir(path.join(process.cwd(), "generated_schemas", "structural-schema"));

    await buildArthaSchema();
    await bundleGeneratedSchema();
};

await generateSchema();
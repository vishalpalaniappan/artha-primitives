import {generatePrimitiveSchemas} from "./generatePrimitiveSchemas.js"

/**
 * This method builds the Artha schema by doing the following:
 * - Generates the invocation schemas for all the primitives
 * - Copies the narrative schema into the generated_schema folder
 * - Reads the manifest
 * - Reads each of the structural-schema
 *      - Adds the relevant primitive into body of structural-schema using manifest
 * - Writes updated structural schema into generated_schema folder
 */
export const buildArthaSchema = () => {
    generatePrimitiveSchemas();
}
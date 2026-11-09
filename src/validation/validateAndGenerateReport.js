import fs from 'node:fs';
import path from 'node:path';
import Ajv from 'ajv/dist/2020.js';
import validatePrimitiveType from './validatePrimitiveType.js';
import {createDir} from '../helper.js';
/**
 * Generates the documentation, validates the primitives and produces
 * a report with validation results. The generated data is written to
 * the docusaurus docs folder and is presented through the site.
 */
const validateAndGenerateReport = async () => {
    const VALIDATION_REPORT_DIR = path.join(process.cwd(), "docs", "docs", "Validation");
    await createDir(VALIDATION_REPORT_DIR);
    
    const GENERATED_SCHEMAS_DIR = path.join(process.cwd(), "generated_schemas");
    await createDir(GENERATED_SCHEMAS_DIR);

    const MANIFEST_PATH = path.join(process.cwd(), "manifest.json");    
    const primitiveTypes = JSON.parse(
        fs.readFileSync(MANIFEST_PATH, "utf8")
    ).primitiveTypes;

    const ajv = new Ajv({ allErrors: true, strict: true });
    primitiveTypes.forEach((primitiveType) => {
        validatePrimitiveType(ajv, primitiveType);
    })
}

export default validateAndGenerateReport;
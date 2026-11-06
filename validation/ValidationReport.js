/**
 * Class used to construct validation report.
 */
class ValidationReport {
    constructor(type, numFiles) {
        this.type = type;
        this.numFiles = numFiles;
        this.reportContent = "";
        this.errors = "";
        this.createHeader();
    }

    /**
     * Create a header for the report with the provided metadata.
     */
    createHeader() {
        this.reportContent += `# ${this.type} Validation Report\n\n`;
        this.reportContent += `* **Generated At:** ${new Date().toLocaleString()}\n`;
        this.reportContent += `* **Total Files Checked:** ${this.numFiles}\n\n`;
    
        this.reportContent += `| File Name | Status | Error Summary |\n`;
        this.reportContent += `| :--- | :---: | :--- |\n`;
    }

    /**
     * Add success message to the validation report.
     * @param {String} file 
     */
    addSuccess(file) {
        this.reportContent += `| \`${file}\` | ✅ Passed | None |\n`;
    }

    /**
     * Map the validation report errors to create a list of errors that
     * can be displayed in the validation report.
     *
     * @param {Object} validationInfo 
     */
    addFail(validationInfo) {
        const errorSummary = validationInfo.errors
            .map((err) => `• \`${err.instancePath || "root"}\`: ${err.message}`)
            .join('<br/>');
        this.errors += errorSummary;
    }

    /**
     * Add parser error to the validation report. The process failed at the parser
     * stage and the validation was never initiated.
     * 
     * @param {String} file 
     * @param {String} msg 
     */
    addParseError(file, msg) {
        this.reportContent += `| \`${file}\` | ⚠️ Parse Error | ${msg} |\n`;
    }

    /**
     * Indicate that the primitive name is not unique.
     * 
     * @param {String} name 
     */
    addUniquenessError(name) {
        this.errors += "<br/>" + `• Primitive named ${name} is not unique` + "<br/>";
    }

    /**
     * Generate an error message from the collected errors.
     * 
     * @param {String} file 
     */
    generateErrorMessage(file) {
        this.reportContent += `| \`${file}\` | ❌ Failed | ${this.errors} |\n`;
    }

    /**
     * Get the report content for writing to file.
     * 
     * @returns {String}
     */
    getContent() {
        return this.reportContent;
    }

}

module.exports = ValidationReport;
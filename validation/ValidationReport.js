/**
 * Class used to construct validation report.
 */
class ValidationReport {
    constructor(type, numFiles) {
        this.type = type;
        this.numFiles = numFiles;
        this.reportContent = "";
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

    addSuccess(file) {
        this.reportContent += `| \`${file}\` | ✅ Passed | None |\n`;
    }

    addFail(file, validationInfo) {
        const errorSummary = validationInfo.errors
            .map((err) => `\`${err.instancePath || "root"}\`: ${err.message}`)
            .join('<br/>');
        this.reportContent += `| \`${file}\` | ❌ Failed | ${errorSummary} |\n`;
    }

    addParseError(file, msg) {
        this.reportContent += `| \`${file}\` | ⚠️ Parse Error | ${msg} |\n`;
    }

    getContent() {
        return this.reportContent;
    }

}

module.exports = ValidationReport;
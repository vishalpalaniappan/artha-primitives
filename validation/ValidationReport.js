class ValidationReport {
    constructor(type, numFiles) {
        this.type = type;
        this.numFiles = numFiles;
        this.reportContent = this.createHeader()
    }

    createHeader() {
        let validationReportContent = `# ${this.type} Validation Report\n\n`;
        validationReportContent += `* **Generated At:** ${new Date().toLocaleString()}\n`;
        validationReportContent += `* **Total Files Checked:** ${this.numFiles}\n\n`;
    
        validationReportContent += `| File Name | Status | Error Summary |\n`;
        validationReportContent += `| :--- | :---: | :--- |\n`;

        return validationReportContent;
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
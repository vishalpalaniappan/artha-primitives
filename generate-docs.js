const validateAndGenerateReport = require("./src/validateAndGenerateReport");
const generateStaticDocs = require("./src/generateStaticDocs");

(async () => {
    await generateStaticDocs();
    await validateAndGenerateReport();
})();

const validateAndGenerateReport = require("./src/validation/validateAndGenerateReport");
const generateStaticDocs = require("./src/static_docs/generateStaticDocs");

(async () => {
    await generateStaticDocs();
    await validateAndGenerateReport();
})();

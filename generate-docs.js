const validateAndGenerateReport = require("./validation/validateAndGenerateReport");
const generateStaticDocs = require("./validation/generateStaticDocs");

(async () => {
    await generateStaticDocs();
    await validateAndGenerateReport();
})();

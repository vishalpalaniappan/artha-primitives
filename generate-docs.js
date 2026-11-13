import validateAndGenerateReport from "./src/validation/validateAndGenerateReport.js";
import generateStaticDocs from "./src/static_docs/generateStaticDocs.js";

(async () => {
    await generateStaticDocs();
    await validateAndGenerateReport();
})();

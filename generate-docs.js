const validateAndGenerateDocs = require("./validation/validateAndGenerateDocs");
const generateStaticDocs = require("./validation/generateStaticDocs");

(async () => {
    await generateStaticDocs();
    await validateAndGenerateDocs();
})();

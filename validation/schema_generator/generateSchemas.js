const generateSchema = (primitive) => {
    const argsKey = (primitive.type === "meta-primitive")?"attributes":"participants";
    const args = primitive[argsKey].filter((item) => item.required);

    const schema = {
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "$id": `https://example.com/${primitive.name}.schema.json`,
        "title": `${primitive.name}-structure-schema`,
        "description": `Structural schema for ${primitive.name}`,
        "type": "object",
        "additionalProperties": false,
        "properties": {
            "$schema": {
                "type": "string",
                "description": "URI reference to the JSON schema."
            }
        }
    };

    for (const arg of args) {
        if (arg.required) {
        }
    }
}

module.exports = generateSchema;
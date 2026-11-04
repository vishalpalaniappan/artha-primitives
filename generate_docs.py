import json
import jsonschema2md

# Initialize the parser
parser = jsonschema2md.Parser(
    show_examples="all",
)

# Load your meta-primitive schema file
with open("schemas/meta-primitive.schema.json", "r") as schema_file:
    schema_content = json.load(schema_file)

# Parse the schema into markdown lines
md_lines = parser.parse_schema(schema_content)

# Write the output to a documentation file
with open("docs/schemas/meta-primitive-docs.md", "w") as md_file:
    md_file.writelines(md_lines)

print("Documentation generated successfully as 'meta-primitive-docs.md'!")
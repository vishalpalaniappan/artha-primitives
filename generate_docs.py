import json
import jsonschema2md
import sys

def documentSchema(parser, primitive):
    with open(f"schemas/{primitive}.schema.json", "r") as schema_file:
        schema_content = json.load(schema_file)

    md_lines = parser.parse_schema(schema_content)

    with open(f"docs/schemas/{primitive}.md", "w") as md_file:
        md_file.writelines(md_lines)

    print(f"Documentation generated successfully as '{primitive}-docs.md'!")

def main(argv):
    parser = jsonschema2md.Parser(
        show_examples="all",
    )

    # Currently testing meta-primitive, will extend for all schemas.
    documentSchema(parser, "meta-primitive")
    

if __name__ == "__main__":
    sys.exit(main(sys.argv))
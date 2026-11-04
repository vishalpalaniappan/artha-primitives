from pathlib import Path
import json
from jsonschema import validate, ValidationError, SchemaError
import sys

def validate_json_file(schema_path, json_path):
    '''
        Validates the JSON file with the schema.
    '''
    try:
        with open(schema_path, "r", encoding="utf-8") as schema_file:
            schema = json.load(schema_file)

        with open(json_path, "r", encoding="utf-8") as json_file:
            instance = json.load(json_file)

        validate(instance=instance, schema=schema)
        print(f" Success: '{json_path}' is valid according to '{schema_path}'!")
        return True

    except ValidationError as e:
        print(f" Validation Failed for '{json_path}':")
        print(f"   Reason: {e.message}")
        print(f"   Path to error: {' -> '.join(str(p) for p in e.path)}")
        return False
        
    except SchemaError as e:
        print(f" Error: Your JSON Schema itself is invalid!")
        print(f"   Reason: {e.message}")
        return False

    except FileNotFoundError as e:
        print(f" File not found error: {e}")
        return False

def main(argv):
    primitiveTypes = ["meta-primitive"]

    for primitiveType in primitiveTypes:
        schemaPath = f"schemas/{primitiveType}.schema.json"
        primitiveFolderPath = Path(f"./primitives/{primitiveType}")

        for primitive in list(primitiveFolderPath.glob("*.json")):
            validate_json_file(schemaPath, primitive)


if __name__ == "__main__":
    sys.exit(main(sys.argv))
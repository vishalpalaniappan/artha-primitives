import json
from jsonschema import validate, ValidationError, SchemaError

def validate_json_file(schema_path, json_path):
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

if __name__ == "__main__":
    validate_json_file(
        "schemas/meta-primitive.schema.json", 
        "primitives/meta_primitives/import.json"
    )
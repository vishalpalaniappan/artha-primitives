import json
from jsonschema import validate, ValidationError, SchemaError
from pathlib import Path
import logging
import sys

logging.basicConfig(
    filename='validation.log', 
    filemode='w',               
    level=logging.DEBUG, 
    format='%(levelname)s %(message)s'
)

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
        logging.info(f" Success: '{json_path}' is valid according to '{schema_path}'!")
        return True

    except ValidationError as e:
        logging.error(f" Validation Failed for '{json_path}':")
        logging.error(f"   Reason: {e.message}")
        logging.error(f"   Path to error: {' -> '.join(str(p) for p in e.path)}")
        return False
        
    except SchemaError as e:
        logging.error(f" Error: Your JSON Schema itself is invalid!")
        logging.error(f"   Reason: {e.message}")
        return False

    except FileNotFoundError as e:
        prilogging.error(f" File not found error: {e}")
        return False

def main(argv):
    primitiveTypes = ["meta-primitive"]

    for primitiveType in primitiveTypes:

        logging.info("")
        logging.info(f"Processing Primitive Type: {primitiveType}")

        schemaPath = f"schemas/{primitiveType}.schema.json"
        primitiveFolderPath = Path(f"./primitives/{primitiveType}")

        for primitive in list(primitiveFolderPath.glob("*.json")):
            logging.info(f"Processing Primitive Name: {primitive.name}")
            validate_json_file(schemaPath, primitive)


if __name__ == "__main__":
    sys.exit(main(sys.argv))
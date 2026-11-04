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

def validate_primitive(schema_path, primitive_path):
    '''
        Validates the primitive with the schema.

        Args:
            schema_path(string): Path to the schema JSON file.
            json_path(string): Path to the primitive JSON file.

        Returns:
            None
    '''
    try:
        with open(schema_path, "r", encoding="utf-8") as schema_file:
            schema = json.load(schema_file)

        with open(primitive_path, "r", encoding="utf-8") as json_file:
            instance = json.load(json_file)

        validate(instance=instance, schema=schema)
        logging.info(f" Success: '{primitive_path}' is valid according to '{schema_path}'.")
        return True

    except ValidationError as e:
        logging.error(f" Validation Failed for '{primitive_path}':")
        logging.error(f"   Reason: {e.message}")
        logging.error(f"   Path to error: {' -> '.join(str(p) for p in e.path)}")
        return False
        
    except SchemaError as e:
        logging.error(f" Error: JSON Schema is invalid.")
        logging.error(f"   Reason: {e.message}")
        return False

    except FileNotFoundError as e:
        logging.error(f" File not found error: {e}")
        return False

def main(argv):
    '''
        Main method to validate primitives.

        Args:
            argv(dict): Command line arguments.

        Returns:
            None
    '''
    primitiveTypes = ["meta-primitive"]

    for primitiveType in primitiveTypes:

        logging.info("")
        logging.info(f"Processing Primitive Type: {primitiveType}")

        schemaPath = f"schemas/{primitiveType}.schema.json"
        primitiveFolderPath = Path(f"./primitives/{primitiveType}")

        for primitive in list(primitiveFolderPath.glob("*.json")):
            logging.info(f"Processing Primitive Name: {primitive.name}")
            validate_primitive(schemaPath, primitive)


if __name__ == "__main__":
    sys.exit(main(sys.argv))
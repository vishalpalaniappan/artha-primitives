# MetaPrimitive

*A schema definition for meta-primitive files.*

## Properties

- **`name`** *(string)*: The unique identifier name of the meta-primitive.
- **`type`** *(string)*: The primitive type. Must be one of: `["meta-primitive", "functional-primitive", "computable-primitive", "legacy-primitive"]`.
- **`version`** *(string)*: Semantic version string (e.g., 1.0.0).
- **`syntax`** *(string)*: The syntax of the primitive.
- **`description`** *(string)*: The description of the primitie.
- **`attributes`** *(array)*: The attributes for this primitive. Cannot contain additional properties.
  - **Items** *(object)*
    - **`name`** *(string)*: The name of the parameter.
    - **`required`** *(boolean)*: Indicates if this attribute is required for the primitive. Default: `false`.

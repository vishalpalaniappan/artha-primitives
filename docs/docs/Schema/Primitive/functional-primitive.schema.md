---
title: FunctionalPrimitiveSchema
description: A schema definition for functional-primitive files.

---


# FunctionalPrimitiveSchema

<p>A schema definition for functional-primitive files.</p>

<table>
<tbody>
<tr><th>$id</th><td>https://example.com/functional-primitive.schema.json</td></tr>
<tr><th>$schema</th><td>https://json-schema.org/draft/2020-12/schema</td></tr>
</tbody>
</table>

## Properties

<table class="jssd-properties-table"><thead><tr><th colspan="2">Name</th><th>Type</th></tr></thead><tbody><tr><td colspan="2"><a href="#$schema">$schema</a></td><td>String</td></tr><tr><td colspan="2"><a href="#name">name</a></td><td>String</td></tr><tr><td colspan="2"><a href="#type">type</a></td><td>String</td></tr><tr><td colspan="2"><a href="#version">version</a></td><td>String</td></tr><tr><td colspan="2"><a href="#description">description</a></td><td>String</td></tr><tr><td colspan="2"><a href="#alias">alias</a></td><td>Object</td></tr><tr><td colspan="2"><a href="#participants">participants</a></td><td>Array</td></tr><tr><td colspan="2"><a href="#invariants">invariants</a></td><td>Array</td></tr><tr><td colspan="2"><a href="#_note">_note</a></td><td>String</td></tr></tbody></table>



<hr />


## $schema


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">URI reference to the JSON schema.</td>
    </tr>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    <tr>
      <th>Required</th>
      <td colspan="2">No</td>
    </tr>
    
  </tbody>
</table>




## name


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">The unique identifier name of the functional-primitive and is also the syntax used to invoke the primitive.</td>
    </tr>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    <tr>
      <th>Required</th>
      <td colspan="2">Yes</td>
    </tr>
    
  </tbody>
</table>




## type


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">The primitive type.</td>
    </tr>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    <tr>
      <th>Required</th>
      <td colspan="2">Yes</td>
    </tr>
    <tr>
      <th>Enum</th>
      <td colspan="2"><ul><li>functional-primitive</li></ul></td>
    </tr>
  </tbody>
</table>




## version


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">Semantic version string (e.g., 1.0.0).</td>
    </tr>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    <tr>
      <th>Required</th>
      <td colspan="2">Yes</td>
    </tr>
    <tr>
      <th>Pattern</th>
      <td colspan="2">^\d+\.\d+\.\d+$</td>
    </tr>
  </tbody>
</table>




## description


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">The description of the primitive.</td>
    </tr>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    <tr>
      <th>Required</th>
      <td colspan="2">Yes</td>
    </tr>
    
  </tbody>
</table>




## alias


<table class="jssd-property-table">
  <tbody>
    <tr><th>Type</th><td colspan="2">Object</td></tr>
    <tr>
      <th>Required</th>
      <td colspan="2">No</td>
    </tr>
    
  </tbody>
</table>

### Properties
  <table class="jssd-properties-table"><thead><tr><th colspan="2">Name</th><th>Type</th></tr></thead><tbody><tr><td colspan="2"><a href="#aliasname">name</a></td><td>String</td></tr></tbody></table>


### alias.name


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">The name of the parameter.</td>
    </tr>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    <tr>
      <th>Required</th>
      <td colspan="2">Yes</td>
    </tr>
    
  </tbody>
</table>





## participants


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">The participants for this primitive</td>
    </tr>
    <tr><th>Type</th><td colspan="2">Array</td></tr>
    <tr>
      <th>Required</th>
      <td colspan="2">Yes</td>
    </tr>
    
  </tbody>
</table>



### participants.name


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">The name of the parameter.</td>
    </tr>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    
  </tbody>
</table>




### participants.aliasStructuralType


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">Structural type of the alias.</td>
    </tr>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    
  </tbody>
</table>




### participants.attributeStructuralType


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">Structural type of the attribute.</td>
    </tr>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    
  </tbody>
</table>




### participants.required


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">Indicates if this attribute is required for the primitive.</td>
    </tr>
    <tr><th>Type</th><td colspan="2">Boolean</td></tr>
    
  </tbody>
</table>





## invariants


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">The invariants for this primitive</td>
    </tr>
    <tr><th>Type</th><td colspan="2">Array</td></tr>
    <tr>
      <th>Required</th>
      <td colspan="2">Yes</td>
    </tr>
    
  </tbody>
</table>



### invariants.id


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">Unique id for the invariant</td>
    </tr>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    
  </tbody>
</table>




### invariants.participants


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">The participants in this invariant.</td>
    </tr>
    <tr><th>Type</th><td colspan="2">Array</td></tr>
    
  </tbody>
</table>




### invariants.property


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">The properties involved in this invariant.</td>
    </tr>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    
  </tbody>
</table>




### invariants.condition


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">The participants in this invariant.</td>
    </tr>
    <tr><th>Type</th><td colspan="2">Array</td></tr>
    
  </tbody>
</table>




### invariants.description


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">The description of the invariant.</td>
    </tr>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    
  </tbody>
</table>




### invariants.invalidValues


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">Invalid values used to test this invariant.</td>
    </tr>
    <tr><th>Type</th><td colspan="2">Array</td></tr>
    
  </tbody>
</table>



### invariants.invalidValues.value


<table class="jssd-property-table">
  <tbody>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    
  </tbody>
</table>




### invariants.invalidValues.description


<table class="jssd-property-table">
  <tbody>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    
  </tbody>
</table>






## _note


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">Add optional note for primitive.</td>
    </tr>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    <tr>
      <th>Required</th>
      <td colspan="2">No</td>
    </tr>
    
  </tbody>
</table>









<hr />

## Schema
```
{
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "$id": "https://example.com/functional-primitive.schema.json",
    "title": "FunctionalPrimitiveSchema",
    "description": "A schema definition for functional-primitive files.",
    "type": "object",
    "properties": {
        "$schema": {
            "type": "string",
            "description": "URI reference to the JSON schema."
        },
        "name": {
            "type": "string",
            "description": "The unique identifier name of the functional-primitive and is also the syntax used to invoke the primitive."
        },
        "type": {
            "type": "string",
            "enum": [
                "functional-primitive"
            ],
            "description": "The primitive type."
        },
        "version": {
            "type": "string",
            "pattern": "^\\d+\\.\\d+\\.\\d+$",
            "description": "Semantic version string (e.g., 1.0.0)."
        },
        "description": {
            "type": "string",
            "description": "The description of the primitive."
        },
        "alias": {
            "type": "object",
            "properties": {
                "name": {
                    "type": "string",
                    "description": "The name of the parameter."
                }
            },
            "required": [
                "name"
            ],
            "additionalProperties": false
        },
        "participants": {
            "type": "array",
            "description": "The participants for this primitive",
            "items": {
                "type": "object",
                "properties": {
                    "name": {
                        "type": "string",
                        "description": "The name of the parameter."
                    },
                    "aliasStructuralType": {
                        "type": "string",
                        "description": "Structural type of the alias."
                    },
                    "attributeStructuralType": {
                        "type": "string",
                        "description": "Structural type of the attribute."
                    },
                    "required": {
                        "type": "boolean",
                        "description": "Indicates if this attribute is required for the primitive.",
                        "default": false
                    }
                },
                "if": {
                    "properties": {
                        "name": {
                            "const": "alias"
                        }
                    },
                    "required": [
                        "name"
                    ]
                },
                "then": {
                    "properties": {
                        "aliasStructuralType": {
                            "type": "string"
                        }
                    },
                    "required": [
                        "aliasStructuralType"
                    ]
                },
                "required": [
                    "attributeStructuralType",
                    "name",
                    "required"
                ],
                "additionalProperties": false
            }
        },
        "invariants": {
            "type": "array",
            "description": "The invariants for this primitive",
            "items": {
                "type": "object",
                "properties": {
                    "id": {
                        "type": "string",
                        "description": "Unique id for the invariant"
                    },
                    "participants": {
                        "type": "array",
                        "description": "The participants in this invariant.",
                        "items": {
                            "type": "string"
                        }
                    },
                    "property": {
                        "type": "string",
                        "description": "The properties involved in this invariant."
                    },
                    "condition": {
                        "type": "array",
                        "description": "The participants in this invariant.",
                        "items": {
                            "type": "string"
                        }
                    },
                    "description": {
                        "type": "string",
                        "description": "The description of the invariant."
                    },
                    "invalidValues": {
                        "type": "array",
                        "description": "Invalid values used to test this invariant.",
                        "items": {
                            "type": "object",
                            "properties": {
                                "value": {
                                    "type": "string"
                                },
                                "description": {
                                    "type": "string"
                                }
                            },
                            "required": [
                                "value",
                                "description"
                            ]
                        }
                    }
                },
                "required": [
                    "id",
                    "participants",
                    "property",
                    "condition",
                    "description",
                    "invalidValues"
                ]
            }
        },
        "_note": {
            "type": "string",
            "description": "Add optional note for primitive."
        }
    },
    "required": [
        "name",
        "type",
        "version",
        "description",
        "participants",
        "invariants"
    ],
    "additionalProperties": false
}
```



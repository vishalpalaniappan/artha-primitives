---
title: MetaPrimitive
description: A schema definition for meta-primitive files.

---


# MetaPrimitive

<p>A schema definition for meta-primitive files.</p>

<table>
<tbody>
<tr><th>$id</th><td>https://example.com/meta-primitive.schema.json</td></tr>
<tr><th>$schema</th><td>https://json-schema.org/draft/2020-12/schema</td></tr>
</tbody>
</table>

## Properties

<table class="jssd-properties-table"><thead><tr><th colspan="2">Name</th><th>Type</th></tr></thead><tbody><tr><td colspan="2"><a href="#$schema">$schema</a></td><td>String</td></tr><tr><td colspan="2"><a href="#name">name</a></td><td>String</td></tr><tr><td colspan="2"><a href="#type">type</a></td><td>String</td></tr><tr><td colspan="2"><a href="#version">version</a></td><td>String</td></tr><tr><td colspan="2"><a href="#syntax">syntax</a></td><td>String</td></tr><tr><td colspan="2"><a href="#description">description</a></td><td>String</td></tr><tr><td colspan="2"><a href="#alias">alias</a></td><td>Object</td></tr><tr><td colspan="2"><a href="#attributes">attributes</a></td><td>Array</td></tr><tr><td colspan="2"><a href="#_note">_note</a></td><td>String</td></tr></tbody></table>



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
      <td colspan="2">The unique identifier name of the meta-primitive.</td>
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
      <td colspan="2"><ul><li>meta-primitive</li></ul></td>
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




## syntax


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">The syntax of the primitive.</td>
    </tr>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    <tr>
      <th>Required</th>
      <td colspan="2">Yes</td>
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





## attributes


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">The attributes for this primitive</td>
    </tr>
    <tr><th>Type</th><td colspan="2">Array</td></tr>
    <tr>
      <th>Required</th>
      <td colspan="2">Yes</td>
    </tr>
    
  </tbody>
</table>



### attributes.name


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">The name of the parameter.</td>
    </tr>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    
  </tbody>
</table>




### attributes.aliasStructuralType


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">Structural type of the alias.</td>
    </tr>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    
  </tbody>
</table>




### attributes.attributeStructuralType


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">Structural type of the attribute.</td>
    </tr>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    
  </tbody>
</table>




### attributes.required


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">Indicates if this attribute is required for the primitive.</td>
    </tr>
    <tr><th>Type</th><td colspan="2">Boolean</td></tr>
    
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
    "$id": "https://example.com/meta-primitive.schema.json",
    "title": "MetaPrimitive",
    "description": "A schema definition for meta-primitive files.",
    "type": "object",
    "properties": {
        "$schema": {
            "type": "string",
            "description": "URI reference to the JSON schema."
        },
        "name": {
            "type": "string",
            "description": "The unique identifier name of the meta-primitive."
        },
        "type": {
            "type": "string",
            "enum": [
                "meta-primitive"
            ],
            "description": "The primitive type."
        },
        "version": {
            "type": "string",
            "pattern": "^\\d+\\.\\d+\\.\\d+$",
            "description": "Semantic version string (e.g., 1.0.0)."
        },
        "syntax": {
            "type": "string",
            "description": "The syntax of the primitive."
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
        "attributes": {
            "type": "array",
            "description": "The attributes for this primitive",
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
                    "required": [
                        "aliasStructuralType"
                    ]
                }
            },
            "required": [
                "attributeStructuralType",
                "name",
                "required"
            ],
            "additionalProperties": false
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
        "syntax",
        "description",
        "attributes"
    ],
    "additionalProperties": false
}
```



---
title: MetaPrimitiveSchema
description: A schema definition for meta-primitive files.

---


# MetaPrimitiveSchema

<p>A schema definition for meta-primitive files.</p>

<table>
<tbody>
<tr><th>$id</th><td>https://example.com/meta-primitive.schema.json</td></tr>
<tr><th>$schema</th><td>https://json-schema.org/draft/2020-12/schema</td></tr>
</tbody>
</table>

## Properties

<table class="jssd-properties-table"><thead><tr><th colspan="2">Name</th><th>Type</th></tr></thead><tbody><tr><td colspan="2"><a href="#$schema">$schema</a></td><td>String</td></tr><tr><td colspan="2"><a href="#name">name</a></td><td>String</td></tr><tr><td colspan="2"><a href="#type">type</a></td><td>String</td></tr><tr><td colspan="2"><a href="#version">version</a></td><td>String</td></tr><tr><td colspan="2"><a href="#description">description</a></td><td>String</td></tr><tr><td colspan="2"><a href="#attributes">attributes</a></td><td>Object</td></tr><tr><td colspan="2"><a href="#_note">_note</a></td><td>String</td></tr></tbody></table>



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
      <td colspan="2">The unique identifier name of the meta-primitive and is also the syntax used to invoke the primitive.</td>
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




## attributes


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">The attributes in this primitive</td>
    </tr>
    <tr><th>Type</th><td colspan="2">Object</td></tr>
    <tr>
      <th>Required</th>
      <td colspan="2">Yes</td>
    </tr>
    
  </tbody>
</table>

### Properties
  <table class="jssd-properties-table"><thead><tr><th colspan="2">Name</th><th>Type</th></tr></thead><tbody><tr><td colspan="2"><a href="#attributesalias">alias</a></td><td>Object</td></tr><tr><td colspan="2"><a href="#attributesargs">args</a></td><td>Array</td></tr></tbody></table>


### attributes.alias


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">The optional alias for the primitive.</td>
    </tr>
    <tr><th>Type</th><td colspan="2">Object</td></tr>
    <tr>
      <th>Required</th>
      <td colspan="2">No</td>
    </tr>
    
  </tbody>
</table>



### attributes.alias.aliasStructuralType


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">Structural type of the alias.</td>
    </tr>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    <tr>
      <th>Required</th>
      <td colspan="2">Yes</td>
    </tr>
    
  </tbody>
</table>





### attributes.args


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">The args in this primitive</td>
    </tr>
    <tr><th>Type</th><td colspan="2">Array</td></tr>
    <tr>
      <th>Required</th>
      <td colspan="2">Yes</td>
    </tr>
    
  </tbody>
</table>



### attributes.args.name


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">The name of the parameter.</td>
    </tr>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    
  </tbody>
</table>




### attributes.args.attributeStructuralType


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">Structural type of the attribute.</td>
    </tr>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    
  </tbody>
</table>




### attributes.args.description


<table class="jssd-property-table">
  <tbody>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    
  </tbody>
</table>




### attributes.args.required


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
    "title": "MetaPrimitiveSchema",
    "description": "A schema definition for meta-primitive files.",
    "type": "object",
    "additionalProperties": false,
    "properties": {
        "$schema": {
            "type": "string",
            "description": "URI reference to the JSON schema."
        },
        "name": {
            "type": "string",
            "description": "The unique identifier name of the meta-primitive and is also the syntax used to invoke the primitive."
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
        "description": {
            "type": "string",
            "description": "The description of the primitive."
        },
        "attributes": {
            "type": "object",
            "description": "The attributes in this primitive",
            "properties": {
                "alias": {
                    "type": "object",
                    "description": "The optional alias for the primitive.",
                    "properties": {
                        "aliasStructuralType": {
                            "type": "string",
                            "description": "Structural type of the alias."
                        }
                    },
                    "required": [
                        "aliasStructuralType"
                    ]
                },
                "args": {
                    "type": "array",
                    "description": "The args in this primitive",
                    "items": {
                        "type": "object",
                        "additionalProperties": false,
                        "properties": {
                            "name": {
                                "type": "string",
                                "description": "The name of the parameter."
                            },
                            "attributeStructuralType": {
                                "type": "string",
                                "description": "Structural type of the attribute."
                            },
                            "description": {
                                "type": "string"
                            },
                            "required": {
                                "type": "boolean",
                                "description": "Indicates if this attribute is required for the primitive.",
                                "default": false
                            }
                        }
                    }
                }
            },
            "required": [
                "args"
            ]
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
        "attributes"
    ]
}
```



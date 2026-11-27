---
title: ManifestSchema
description: A schema for repo manifest.

---


# ManifestSchema

<p>A schema for repo manifest.</p>

<table>
<tbody>
<tr><th>$id</th><td>https://example.com/manifest.schema.json</td></tr>
<tr><th>$schema</th><td>https://json-schema.org/draft/2020-12/schema</td></tr>
</tbody>
</table>

## Properties

<table class="jssd-properties-table"><thead><tr><th colspan="2">Name</th><th>Type</th></tr></thead><tbody><tr><td colspan="2"><a href="#primitivetypes">primitiveTypes</a></td><td>Array</td></tr><tr><td colspan="2"><a href="#structuraltypes">structuralTypes</a></td><td>Array</td></tr><tr><td colspan="2"><a href="#structure">structure</a></td><td>Object</td></tr></tbody></table>



<hr />


## primitiveTypes


<table class="jssd-property-table">
  <tbody>
    <tr><th>Type</th><td colspan="2">Array</td></tr>
    <tr>
      <th>Required</th>
      <td colspan="2">Yes</td>
    </tr>
    
  </tbody>
</table>




## structuralTypes


<table class="jssd-property-table">
  <tbody>
    <tr><th>Type</th><td colspan="2">Array</td></tr>
    <tr>
      <th>Required</th>
      <td colspan="2">Yes</td>
    </tr>
    
  </tbody>
</table>




## structure


<table class="jssd-property-table">
  <tbody>
    <tr><th>Type</th><td colspan="2">Object</td></tr>
    <tr>
      <th>Required</th>
      <td colspan="2">Yes</td>
    </tr>
    
  </tbody>
</table>

### Properties
  <table class="jssd-properties-table"><thead><tr><th colspan="2">Name</th><th>Type</th></tr></thead><tbody><tr><td colspan="2"><a href="#structurebehavior">behavior</a></td><td>Object</td></tr><tr><td colspan="2"><a href="#structureparticipant">participant</a></td><td>Object</td></tr><tr><td colspan="2"><a href="#structureimport">import</a></td><td></td></tr></tbody></table>


### structure.behavior


<table class="jssd-property-table">
  <tbody>
    <tr><th>Type</th><td colspan="2">Object</td></tr>
    <tr>
      <th>Required</th>
      <td colspan="2">Yes</td>
    </tr>
    
  </tbody>
</table>



### structure.behavior.contains


<table class="jssd-property-table">
  <tbody>
    <tr><th>Type</th><td colspan="2">Object</td></tr>
    <tr>
      <th>Required</th>
      <td colspan="2">No</td>
    </tr>
    
  </tbody>
</table>





### structure.participant


<table class="jssd-property-table">
  <tbody>
    <tr><th>Type</th><td colspan="2">Object</td></tr>
    <tr>
      <th>Required</th>
      <td colspan="2">Yes</td>
    </tr>
    
  </tbody>
</table>



### structure.participant.contains


<table class="jssd-property-table">
  <tbody>
    <tr><th>Type</th><td colspan="2">Object</td></tr>
    <tr>
      <th>Required</th>
      <td colspan="2">No</td>
    </tr>
    
  </tbody>
</table>




### structure.participant.types


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">Based on structural type, certain primitives are required in the participant body.</td>
    </tr>
    <tr><th>Type</th><td colspan="2">Object</td></tr>
    <tr>
      <th>Required</th>
      <td colspan="2">No</td>
    </tr>
    
  </tbody>
</table>





### structure.import


<table class="jssd-property-table">
  <tbody>
    
    <tr>
      <th>Required</th>
      <td colspan="2">Yes</td>
    </tr>
    
  </tbody>
</table>










<hr />

## Schema
```
{
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "$id": "https://example.com/manifest.schema.json",
    "title": "ManifestSchema",
    "description": "A schema for repo manifest.",
    "type": "object",
    "properties": {
        "primitiveTypes": {
            "type": "array",
            "items": {
                "type": "string"
            }
        },
        "structuralTypes": {
            "type": "array",
            "items": {
                "type": "string"
            }
        },
        "structure": {
            "type": "object",
            "properties": {
                "behavior": {
                    "type": "object",
                    "properties": {
                        "contains": {
                            "type": "object",
                            "patternProperties": {
                                "^.+$": {
                                    "type": "object",
                                    "required": [
                                        "excludes"
                                    ],
                                    "properties": {
                                        "excludes": {
                                            "type": "array"
                                        }
                                    },
                                    "additionalProperties": true
                                }
                            }
                        }
                    }
                },
                "participant": {
                    "type": "object",
                    "additionalProperties": false,
                    "properties": {
                        "contains": {
                            "type": "object",
                            "patternProperties": {
                                "^.+$": {
                                    "type": "object",
                                    "required": [
                                        "excludes"
                                    ],
                                    "properties": {
                                        "excludes": {
                                            "type": "array"
                                        }
                                    },
                                    "additionalProperties": true
                                }
                            }
                        },
                        "types": {
                            "type": "object",
                            "description": "Based on structural type, certain primitives are required in the participant body.",
                            "patternProperties": {
                                "^.+$": {
                                    "type": "array"
                                }
                            }
                        }
                    }
                },
                "import": {}
            },
            "required": [
                "behavior",
                "participant",
                "import"
            ],
            "additionalProperties": false
        }
    },
    "required": [
        "primitiveTypes",
        "structuralTypes",
        "structure"
    ]
}
```



---
title: InvokeSchema
description: A schema for invoking custom meaning.

---


# InvokeSchema

<p>A schema for invoking custom meaning.</p>

<table>
<tbody>
<tr><th>$id</th><td>./invoke.schema.json</td></tr>
<tr><th>$schema</th><td>https://json-schema.org/draft/2020-12/schema</td></tr>
</tbody>
</table>

## Properties

<table class="jssd-properties-table"><thead><tr><th colspan="2">Name</th><th>Type</th></tr></thead><tbody><tr><td colspan="2"><a href="#name">name</a></td><td>String=invoke</td></tr><tr><td colspan="2"><a href="#behaviorname">behaviorName</a></td><td>String</td></tr><tr><td colspan="2"><a href="#id">id</a></td><td>String</td></tr><tr><td colspan="2"><a href="#alias">alias</a></td><td>Object</td></tr><tr><td colspan="2"><a href="#args">args</a></td><td>Array</td></tr></tbody></table>



<hr />


## name


<table class="jssd-property-table">
  <tbody>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    <tr>
      <th>Required</th>
      <td colspan="2">Yes</td>
    </tr>
    <tr>
      <th>Const</th>
      <td colspan="2">invoke</td>
    </tr>
  </tbody>
</table>




## behaviorName


<table class="jssd-property-table">
  <tbody>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    <tr>
      <th>Required</th>
      <td colspan="2">Yes</td>
    </tr>
    
  </tbody>
</table>




## id


<table class="jssd-property-table">
  <tbody>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    <tr>
      <th>Required</th>
      <td colspan="2">No</td>
    </tr>
    
  </tbody>
</table>




## alias


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

### Properties
  <table class="jssd-properties-table"><thead><tr><th colspan="2">Name</th><th>Type</th></tr></thead><tbody><tr><td colspan="2"><a href="#aliasaliasstructuraltype">aliasStructuralType</a></td><td>String</td></tr></tbody></table>


### alias.aliasStructuralType


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





## args


<table class="jssd-property-table">
  <tbody>
    <tr><th>Type</th><td colspan="2">Array</td></tr>
    <tr>
      <th>Required</th>
      <td colspan="2">Yes</td>
    </tr>
    
  </tbody>
</table>



### args.argName


<table class="jssd-property-table">
  <tbody>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    
  </tbody>
</table>




### args.argType


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">Type of arg value (name or const).</td>
    </tr>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    
  </tbody>
</table>




### args.value


<table class="jssd-property-table">
  <tbody>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    
  </tbody>
</table>










<hr />

## Schema
```
{
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "$id": "./invoke.schema.json",
    "title": "InvokeSchema",
    "description": "A schema for invoking custom meaning.",
    "type": "object",
    "additionalProperties": false,
    "properties": {
        "name": {
            "type": "string",
            "const": "invoke"
        },
        "behaviorName": {
            "type": "string"
        },
        "id": {
            "type": "string"
        },
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
            "items": {
                "type": "object",
                "required": [
                    "argName",
                    "value",
                    "argType"
                ],
                "properties": {
                    "argName": {
                        "type": "string"
                    },
                    "argType": {
                        "type": "string",
                        "description": "Type of arg value (name or const)."
                    },
                    "value": {
                        "type": "string"
                    }
                }
            }
        }
    },
    "required": [
        "behaviorName",
        "name",
        "args"
    ]
}
```



---
title: BehaviorSchema
description: A schema for a behavior in a narrative.

---


# BehaviorSchema

<p>A schema for a behavior in a narrative.</p>

<table>
<tbody>
<tr><th>$id</th><td>./behavior.schema.json</td></tr>
<tr><th>$schema</th><td>https://json-schema.org/draft/2020-12/schema</td></tr>
</tbody>
</table>

## Properties

<table class="jssd-properties-table"><thead><tr><th colspan="2">Name</th><th>Type</th></tr></thead><tbody><tr><td colspan="2"><a href="#name">name</a></td><td>String=behavior</td></tr><tr><td colspan="2"><a href="#behaviorname">behaviorName</a></td><td>String</td></tr><tr><td colspan="2"><a href="#body">body</a></td><td>Array</td></tr><tr><td colspan="2"><a href="#id">id</a></td><td>String</td></tr><tr><td colspan="2"><a href="#attributes">attributes</a></td><td>Array</td></tr></tbody></table>



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
      <td colspan="2">behavior</td>
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




## body


<table class="jssd-property-table">
  <tbody>
    <tr><th>Type</th><td colspan="2">Array</td></tr>
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




## attributes


<table class="jssd-property-table">
  <tbody>
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
    <tr><th>Type</th><td colspan="2">String</td></tr>
    
  </tbody>
</table>




### attributes.value


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
    "$id": "./behavior.schema.json",
    "title": "BehaviorSchema",
    "description": "A schema for a behavior in a narrative.",
    "type": "object",
    "additionalProperties": false,
    "properties": {
        "name": {
            "type": "string",
            "const": "behavior"
        },
        "behaviorName": {
            "type": "string"
        },
        "body": {
            "type": "array"
        },
        "id": {
            "type": "string"
        },
        "attributes": {
            "type": "array",
            "items": {
                "type": "object",
                "required": [
                    "name",
                    "value"
                ],
                "properties": {
                    "name": {
                        "type": "string"
                    },
                    "value": {
                        "type": "string"
                    }
                }
            }
        }
    },
    "required": [
        "attributes",
        "body",
        "name",
        "behaviorName"
    ]
}
```



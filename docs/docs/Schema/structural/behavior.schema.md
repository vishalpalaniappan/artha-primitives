---
title: behavior-schema
description: A schema for a behavior in a narrative.

---


# behavior-schema

<p>A schema for a behavior in a narrative.</p>

<table>
<tbody>
<tr><th>$id</th><td>https://example.com/behavior.schema.json</td></tr>
<tr><th>$schema</th><td>https://json-schema.org/draft/2020-12/schema</td></tr>
</tbody>
</table>

## Properties

<table class="jssd-properties-table"><thead><tr><th colspan="2">Name</th><th>Type</th></tr></thead><tbody><tr><td colspan="2"><a href="#type">type</a></td><td>String=behavior</td></tr><tr><td colspan="2"><a href="#name">name</a></td><td>String</td></tr><tr><td colspan="2"><a href="#body">body</a></td><td>Array</td></tr><tr><td colspan="2"><a href="#attributes">attributes</a></td><td>Array</td></tr></tbody></table>



<hr />


## type


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




## name


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
    "$id": "https://example.com/behavior.schema.json",
    "title": "behavior-schema",
    "description": "A schema for a behavior in a narrative.",
    "type": "object",
    "properties": {
        "type": {
            "type": "string",
            "const": "behavior"
        },
        "name": {
            "type": "string"
        },
        "body": {
            "type": "array"
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
                },
                "additionalProperties": false
            }
        }
    },
    "required": [
        "attributes",
        "body",
        "name",
        "type"
    ]
}
```



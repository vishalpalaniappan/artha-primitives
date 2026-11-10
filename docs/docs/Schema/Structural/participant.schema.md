---
title: ParticipantSchema
description: A schema for a participant in a narrative.

---


# ParticipantSchema

<p>A schema for a participant in a narrative.</p>

<table>
<tbody>
<tr><th>$id</th><td>./participant.schema.json</td></tr>
<tr><th>$schema</th><td>https://json-schema.org/draft/2020-12/schema</td></tr>
</tbody>
</table>

## Properties

<table class="jssd-properties-table"><thead><tr><th colspan="2">Name</th><th>Type</th></tr></thead><tbody><tr><td colspan="2"><a href="#body">body</a></td><td>Array</td></tr><tr><td colspan="2"><a href="#name">name</a></td><td>String=participant</td></tr></tbody></table>



<hr />


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
      <td colspan="2">participant</td>
    </tr>
  </tbody>
</table>









<hr />

## Schema
```
{
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "$id": "./participant.schema.json",
    "title": "ParticipantSchema",
    "description": "A schema for a participant in a narrative.",
    "type": "object",
    "additionalProperties": false,
    "properties": {
        "body": {
            "type": "array"
        },
        "name": {
            "type": "string",
            "const": "participant"
        }
    },
    "required": [
        "body",
        "name"
    ]
}
```



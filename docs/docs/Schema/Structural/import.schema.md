---
title: ImportSchema
description: A schema definition for import meaning.

---


# ImportSchema

<p>A schema definition for import meaning.</p>

<table>
<tbody>
<tr><th>$id</th><td>./import.schema.json</td></tr>
<tr><th>$schema</th><td>https://json-schema.org/draft/2020-12/schema</td></tr>
</tbody>
</table>

## Properties

<table class="jssd-properties-table"><thead><tr><th colspan="2">Name</th><th>Type</th></tr></thead><tbody><tr><td colspan="2"><a href="#name">name</a></td><td>String=import</td></tr><tr><td colspan="2"><a href="#file">file</a></td><td>String</td></tr><tr><td colspan="2"><a href="#alias">alias</a></td><td>String</td></tr></tbody></table>



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
      <td colspan="2">import</td>
    </tr>
  </tbody>
</table>




## file


<table class="jssd-property-table">
  <tbody>
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
    <tr><th>Type</th><td colspan="2">String</td></tr>
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
    "$id": "./import.schema.json",
    "title": "ImportSchema",
    "description": "A schema definition for import meaning.",
    "type": "object",
    "additionalProperties": false,
    "properties": {
        "name": {
            "type": "string",
            "const": "import"
        },
        "file": {
            "type": "string"
        },
        "alias": {
            "type": "string"
        }
    },
    "required": [
        "name",
        "file",
        "alias"
    ]
}
```



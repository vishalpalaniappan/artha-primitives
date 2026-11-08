---
title: narrative-base
description: A schema for the base of the narrative built using the primitives.

---


# narrative-base

<p>A schema for the base of the narrative built using the primitives.</p>

<table>
<tbody>
<tr><th>$id</th><td>https://example.com/narrative-base.schema.json</td></tr>
<tr><th>$schema</th><td>https://json-schema.org/draft/2020-12/schema</td></tr>
</tbody>
</table>




<hr />




<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>$id</th>
      <td colspan="2">https://example.com/narrative-base.schema.json</td>
    </tr>
    <tr>
      <th>Title</th>
      <td colspan="2">narrative-base</td>
    </tr>
    <tr>
      <th>Description</th>
      <td colspan="2">A schema for the base of the narrative built using the primitives.</td>
    </tr>
    <tr><th>Type</th><td colspan="2">Array</td></tr>
    
  </tbody>
</table>



## name


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">The name of the primitive contained in the body of the narrative JSON file</td>
    </tr>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    <tr>
      <th>Enum</th>
      <td colspan="2"><ul><li>import</li><li>participant</li><li>behavior</li></ul></td>
    </tr>
  </tbody>
</table>










<hr />

## Schema
```
{
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "$id": "https://example.com/narrative-base.schema.json",
    "title": "narrative-base",
    "description": "A schema for the base of the narrative built using the primitives.",
    "type": "array",
    "items": {
        "type": "object",
        "required": [
            "name"
        ],
        "properties": {
            "name": {
                "type": "string",
                "description": "The name of the primitive contained in the body of the narrative JSON file",
                "enum": [
                    "import",
                    "participant",
                    "behavior"
                ]
            }
        },
        "additionalProperties": true
    }
}
```



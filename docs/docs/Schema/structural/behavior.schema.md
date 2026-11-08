---
title: Behavior
description: A schema for a behavior in a narrative.

---


# Behavior

<p>A schema for a behavior in a narrative.</p>

<table>
<tbody>
<tr><th>$id</th><td>https://example.com/behavior.schema.json</td></tr>
<tr><th>$schema</th><td>https://json-schema.org/draft/2020-12/schema</td></tr>
</tbody>
</table>




<hr />




<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>$id</th>
      <td colspan="2">https://example.com/behavior.schema.json</td>
    </tr>
    <tr>
      <th>Title</th>
      <td colspan="2">Behavior</td>
    </tr>
    <tr>
      <th>Description</th>
      <td colspan="2">A schema for a behavior in a narrative.</td>
    </tr>
    <tr><th>Type</th><td colspan="2">Array</td></tr>
    
  </tbody>
</table>



## name


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">The name of the behavior. It must be unique in the narrative</td>
    </tr>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    
  </tbody>
</table>




## args


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">Array of arguments. TODO: Describe the args (needs name, and value)</td>
    </tr>
    <tr><th>Type</th><td colspan="2">Array</td></tr>
    
  </tbody>
</table>




## body


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">Array of primitives contained in the body. TODO: Establish the types of primitives that are allowed.</td>
    </tr>
    <tr><th>Type</th><td colspan="2">Array</td></tr>
    
  </tbody>
</table>










<hr />

## Schema
```
{
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "$id": "https://example.com/behavior.schema.json",
    "title": "Behavior",
    "description": "A schema for a behavior in a narrative.",
    "type": "array",
    "items": {
        "type": "object",
        "required": [
            "name",
            "args"
        ],
        "properties": {
            "name": {
                "type": "string",
                "description": "The name of the behavior. It must be unique in the narrative"
            },
            "args": {
                "type": "array",
                "description": "Array of arguments. TODO: Describe the args (needs name, and value)"
            },
            "body": {
                "type": "array",
                "description": "Array of primitives contained in the body. TODO: Establish the types of primitives that are allowed."
            }
        },
        "additionalProperties": true
    }
}
```



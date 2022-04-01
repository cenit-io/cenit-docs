---
sidebar_position: 2

---

# Document Types

The [Basic Integration](basic_integration.md) section explains how  you can achieve a basic integration in Cenit. In order to get data from an API A and send it to another API B the process or flows should be executed. The import flow gets the information of a Data Type A from the API A. The converter flow transforms that info from a Data Type A to a Data Type B. And finally the export flow sends the info of Data Type B to the API B. In order to implement those flows and the translators they use, you need to properly define some Data Types in accordance with the information handled.

The Document Type submenu allows to define new Data Types as well as managing the records of a previously defined data type.

## Add a New Data Type

For creating a new Data Type, click the New button (+) in the [Generic Menu](generic/generic_menu_options_.md) and fill every input field.

![Adding document type](https://user-images.githubusercontent.com/99367633/160850550-178dbe58-a573-47df-8764-01af1c7b309a.png)

Defining a Data Type is as simple as setting its schema, which is usually a JSON Schema, although an XML schema is also supported. You can know more about JSON Schema Specification in http://json-schema.org.

![Data type in json](https://user-images.githubusercontent.com/99367633/160851004-fb2bffd8-7262-4334-9c85-0217e1a7760c.png)

For creating a new Data Type you must set the namespace it belong to, a name for the data type and its schema, for instance:

```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string"
    },
    "name": {
      "type": "string"
    },
    "created": {
      "type": "integer"
    },
    "creator": {
      "type": "string"
    },
    "is_member": {
      "type": "boolean"
    },
    "num_members": {
      "type": "integer"
    }
  }
}
```

An snipped related to the schema will be implicitly created. See more about snippets in the [Snippets](compute/snippets.md) section.  

![Snippets in datatypes](https://user-images.githubusercontent.com/99367633/160851634-69338726-35ca-492d-a812-285427428f6b.png)

Discard additional properties should be set as true in order to force records to discards all those properties which were not declared in the schema. Title and Slug are optionals. They take the name of the data type as a default value. 

Finally, if you would like to change the default behavior of the data type you can associate some [Snippets](compute/snippets.md) to it:

Before save callbacks:

- Allow to define algorithms that will be executed before saving a record of this data type in Cenit.

After save callbacks:

- Allow to define algorithms that will be executed after saving a record of this data type in Cenit.

Records methods:

- The user could define algorithms linked to some attributes of the data type. They are like  methods related to a specific record, which could be executed in a code at any flow of your integration.

Data type methods:

- The user could define algorithms linked to the data type. They are like methods not related to a specific record, but to the data type itself, which could be executed in a code at any flow of your integration.

## List of Data Types

After pressing the save button you can see the new data type on the list of data types.

![List of data types](https://user-images.githubusercontent.com/99367633/160852366-fc4d5f02-52da-4fe4-b092-2e8325d47342.png)

## Managing a Data Type

You can manage a Data Type by selecting it and pressing one of the buttons in the  [Generic Menu](generic/generic_menu_options_.md)

![Managing a data type](https://user-images.githubusercontent.com/99367633/160853166-2a83ba28-8bd8-4e1a-bb36-3078d6d1df43.png)

So, you can show the details of an specific Data Type:

![Details of data type](https://user-images.githubusercontent.com/99367633/160853756-dc718d95-25ae-4d58-8478-79f42820fb4e.png)

![Schema](https://user-images.githubusercontent.com/99367633/160854356-a993c604-288e-4f05-af26-34f0d21a2c64.png)

In the show view you can press the edit button or you can select edit from the list of data types view, so you can edit any field of your data type.

## Managing Records of a Data Type

From the list of Data Types you can manage not only a Data Type definition but also records for an specific Data Type. For managing its records you should select a Data Type and then press the Records button:

![Records of data type](https://user-images.githubusercontent.com/99367633/160858821-b289a8be-751a-4bb2-9af9-88e672dd5de2.png)

Once inside the records view, you can create a new record by pressing the same button New (+) from the [Generic Menu](generic/generic_menu_options_.md):

![New record](https://user-images.githubusercontent.com/99367633/160859615-319e5a3b-1371-4504-a453-408356e7508d.png)

As the preview image shows, Cenit generates a complete user interface on the fly for creating records of a data type and after pressing the save button you can see the new record on the records list.

Note that by selecting a record, you can manage every record, as well as you can manage a data type.
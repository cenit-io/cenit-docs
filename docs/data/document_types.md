---

sidebar_position: 2

---



# Document Types

The [Basic Integration](basic_integration.md) section explains how  you can achieve a basic integration in Cenit. In order to get data from an API A and send it to another API B the process or flows should be executed. The import flow gets the information of a Data Type A from the API A. The converter flow transforms that info from a Data Type A to a Data Type B. And finally the export flow sends the info of Data Type B to the API B. In order to implement those flows and the translators they use, you need to properly define some Data Types in accordance with the information handled.

The Document Type submenu allows to define new Data Types as well as managing the records of a previously defined data type.

#### Add New

For creating a new Data Type, click the New button (+) in the [Generic Menu](generic/generic_menu_options_.md) and fill every input field.

![new button](https://user-images.githubusercontent.com/54523080/149007817-65482f65-7687-47ed-a8c0-2760fddfee64.png)

Defining a Data Type is as simple as setting its schema, which is usually a JSON Schema, although an XML schema is also supported. You can know more about JSON Schema Specification in http://json-schema.org.

![new doc type 1](https://user-images.githubusercontent.com/54523080/149026526-d935a03e-cd42-4b26-930f-13a9669118f5.png)

For creating a new Data Type you must set the namespace it belong to, a name for the data type and its schema, for instance:

```
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

![new doc type 2](https://user-images.githubusercontent.com/54523080/149033218-e0f3c9d6-15e5-47d3-a65b-f7270367e86d.png)

Discard additional properties should be set as true in order to force records to discards all those properties which were not declared in the schema. Title and Slug are optionals. They take the name of the data type as a default value. 

![new doc type 3](https://user-images.githubusercontent.com/54523080/149034473-6a125bf9-2687-4492-b3a6-5deb4e8a620c.png)

Finally, if you would like to change the default behavior of the data type you can associate some [Snippets](compute/snippets.md) to it:

Before save callbacks:

- Allow to define algorithms that will be executed before saving a record of this data type in Cenit.

After save callbacks:

- Allow to define algorithms that will be executed after saving a record of this data type in Cenit.

Records methods:

- The user could define algorithms linked to some attributes of the data type. They are like  methods related to a specific record, which could be executed in a code at any flow of your integration.

Data type methods:

- The user could define algorithms linked to the data type. They are like methods not related to a specific record, but to the data type itself, which could be executed in a code at any flow of your integration.

#### List of Data Types

After pressing the save button you can see the new data type on the list of data types.

![list of types](https://user-images.githubusercontent.com/54523080/149055499-d616da04-d91c-4a61-be86-c748a11214f4.png)

#### Managing a Data Type

You can manage a Data Type by selecting it and pressing one of the buttons in the  [Generic Menu](generic/generic_menu_options_.md)

![data type managing](https://user-images.githubusercontent.com/54523080/149058497-bd5a3f7d-4645-4462-a3ba-5c3f4eca743b.png)

So, you can show the details of an specific Data Type

![data type show](https://user-images.githubusercontent.com/54523080/149058202-c841a1a3-881d-4048-af73-41073f4f1311.png)

![data type show result](https://user-images.githubusercontent.com/54523080/149059245-f8a8c099-9106-4ae4-9106-da131c68a151.png)

In the show view you can press the edit button or you can select edit from the list of data types view, so you can edit any field of your data type.

![data type edit](https://user-images.githubusercontent.com/54523080/149059540-2d76e9e3-dfac-47f5-986d-d8e56df31774.png)

![data type edit result](https://user-images.githubusercontent.com/54523080/149059880-1651ac62-105d-4393-a18c-462c808eec83.png)

#### Managing Records of a Data Type

From the list of Data Types you can manage not only a Data Type definition but also records for an specific Data Type. For managing its records you should select a Data Type and then press the Records button.

![data type records](https://user-images.githubusercontent.com/54523080/149060304-d5a9f0c4-ddcf-4684-b855-94c2e08827dc.png)

![data type records view](https://user-images.githubusercontent.com/54523080/149066255-eb6dbae9-beb5-4ba0-b421-7790f2efb8af.png)

Once inside the records view, you can create a new record by pressing the same button New (+) from the [Generic Menu](generic/generic_menu_options_.md)

![data type record new](https://user-images.githubusercontent.com/54523080/149066711-f70f2091-9449-4929-adf6-6f56c7967b8c.png)

As the preview image shows, Cenit generates a complete user interface on the fly for creating records of a data type and after pressing the save button you can see the new record on the records list.

![data type record managing](https://user-images.githubusercontent.com/54523080/149067252-88deccaf-4470-46c5-bada-01f648248da8.png)

Note that by selecting a record you can manage every record as well as you can manage a data type.
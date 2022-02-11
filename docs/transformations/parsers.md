---
sidebar_position: 2

---

# Parsers

When implementing a basic integration, we usually need to Import outside data into Cenit. Parser translators create data type records in Cenit from outside data. It deals with only one data type, the type of the data to be created, which is referred in the parser as target data type.

#### Add New

The submenu Transformations/Parsers allow to create a new parser translator by clicking the New button (+) in the [Generic Menu](generic/generic_menu_options_.md) and selecting Ruby Parser, which refers to a parser written in a DSL based on the Ruby Programming Language, so the logic of the parser translator is described in ruby style.

![Parser Selecting ruby parser](https://user-images.githubusercontent.com/54523080/150883137-886eeeaf-a5fd-459f-9794-dbdb2e3a1251.png)

After selecting the kind of parser you can start filling every field.

![Parser new](https://user-images.githubusercontent.com/54523080/150883324-45853be8-9638-4c70-bb1e-11c7d86db1b8.png)

- Target Data Type:
  
  It defines the type of the records to be created. You can select a data type previously defined or define one by pressing the + button. If no target data type is defined, then the translator is supposed to be able to import data into any data type.

- Discard Events:
  
  Set discards events false in order to make the translator available to be executed when an event triggers a flow execution. When it is set true all the events are ignored and it could be executed only by processing the flow manually.

- Code:
  
  Define the algorithm to receive the requested data and store it in Cenit. It is written in a DSL based on the Ruby Programming Language. The code of a parser is  handled by Cenit as a [Snippet](compute/snippets.md). It doesn't mean you are forced to create or edit a snippet when coding, you may just modify the code field and Cenit implicitly updates the linked snippet.

The main goal of a transformation is to manipulate data. The objective of a parser translator is to import outside data into Cenit. In order to facilitate the data management, some pre-defined variables are available to access data from the translator code. The most important pre-defined variables are described in the table below.

##### Pre-defined variables

| Variable         | Semantics                                                                                                                                                                                                                                                                                                         | Pre-conditions to use it                             |
| ---------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| data             | The data obtained from a request is stored in the variable "data", in other words, after getting the response from the API, Cenit implicitly fill the variable data with the response content and make it available in the parser translator. It should be transformed to Json:  `parsed_data = JSON.parse(data)` | None                                                 |
| target_data_type | This variable allows to access to the type of the records to be created in a easy way. So, if we set the field Target Data Type of the parser as Test\|Conversation, in the code we can refers to it as:   `target_data_type` instead of:  `Cenit.namespace('Test').data_type('Conversation')`                    | The field target data type was set in the translator |

A simple JSON importer can be defined by the line of code below:

`target_data_type.create_from_json!(data)`

The method create_from_json! persists a new record of the target data type by using a  a parameter of type json. You should notice this line of code creates a record of the target data type by taking every property value from the data obtained from the request and possibly discarding the remaining ones. So they need to share a similar structure in order to get the right result.

Actually, there are several methods available on the target data type object that can be invoked to create records. They all have the following pattern:

`(create|new)_from_(json|xml|edi)[!]`

Examples: create_from_xml, new_from_edi, create_from_xml!

The new methods do not persist the created record, so a further invocation of
a save method is needed.

The create methods attempt to persist the records, halting on error only if the method name ends with the exclamation symbol.

Sometimes we get from the API not a single record, but several ones. Those cases require a little more of transformation code to parse the outside data to create multiple records:

```
parsed_data = JSON.parse(data)
parsed_data.each do |item|
  target_data_type.create_from_json!(item)
end
```

The reality is even more complex. When requesting data from an API we need to understand in detail the response data structure. For example, when requesting to the endpoint ` https://slack.com/api/conversations.list ` we can not simply iterate over the variable data because in that case the response data is not an array of conversations but a json with a property channels that contains the array. So the code is a little bit different:

```
parsed_data = JSON.parse(data)
conversations = parsed_data["channels"]
conversations.each do |conversation|
  target_data_type.create_from_json(conversation, primary_field: "id")
end
```

![Parser save](https://user-images.githubusercontent.com/54523080/150907805-c15e6d46-ee7d-4276-b690-fcf9a989ee52.png)

After completing the parser declaration and pressing the save button, you can see the new parser translator on the list of parsers and you can manage it as well as you can do with other elements in Cenit.

![Parser list](https://user-images.githubusercontent.com/54523080/150908171-43e3feaa-930e-4e2a-b131-f7a7847bc1aa.png)
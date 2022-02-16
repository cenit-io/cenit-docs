---
sidebar_position: 5

---

# Updaters

When implementing a basic integration, we usually handle outside data being imported into Cenit, transformed data which are  also stored inside Cenit and formatted data exported outside Cenit. Sometimes might be necessary to update one or more records. Updater translators update data type records inside Cenit. It deals with only one data type, the type of the data to be updated, which is referred in the updater as target data type.

#### Add New

The submenu Transformations/Updaters allow to create a new parser translator by clicking the New button (+) in the [Generic Menu](generic/generic_menu_options_.md) and selecting Ruby Parser, which refers to a parser written in a DSL based on the Ruby Programming Language, so the logic of the updater translator is described in ruby style.

![Updater selecting ruby](https://user-images.githubusercontent.com/54523080/151648268-8566602e-2e3a-4abb-bcd1-cdacd54e486e.png)

After selecting the kind of parser you can start filling every field.

![Updater new](https://user-images.githubusercontent.com/54523080/151648332-1c8e4fc3-1095-4feb-b27e-7f384adb4f05.png)

- Target Data Type:
  
  It defines the type of the records to be updated. You can select a data type previously defined or define one by pressing the + button. If no target data type is defined, then the translator is supposed to be able to update data of any data type.

- Discard Events:
  
  Set discards events false in order to make the translator available to be executed when an event triggers a flow execution. When it is set true all the events are ignored and it could be executed only by processing the flow manually.

- Source Handler:
  
  Set source handler true in order to enable the processing of multiple records. When it is false the updater is able to handle only one record.

- Code:
  
  Define the algorithm to update the data stored it in Cenit. It is written in a DSL based on the Ruby Programming Language. The code of a parser is handled by Cenit as a [Snippet](compute/snippets.md). It doesn't mean you are forced to create or edit a snippet when coding, you may just modify the code field and Cenit implicitly updates the linked snippet.

The main goal of a transformation is to manipulate data. The objective of an updater translator is to update one or more data type records. In order to facilitate the data management, some pre-defined variables are available to access data from the translator code. The most important pre-defined variables are described in the table below.

##### Pre-defined variables

| Variable         | Semantics                                                                                                                                                                                                                                                                                                                                                                                                                     | Pre-conditions to use it          |
| ---------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------- |
| target           | If the field Source Handler is false and the updater is able to handle only one record, this variable allows to directly modify the record to be updated, that means you don't need to explicitly use a statement of type create_from_json to update a record for the target data type, by setting the properties to the object "target", Cenit implicitly updates the record.                                                | The field Source Handler is false |
| targets          | If the field Source Handler is true, the variable "targets" contains the enumeration of records to be updated, in other words, before executing the updater translator, Cenit implicitly fill the variable "targets" with an array which contain all the records sent to the updater flow and make it available in the translator, so by iterating over the variable "targets" we can update every record in the enumeration. | The field Source Handler is true  |
| target_data_type | This variable allows to access to the type of the records to be updated, in an easy way. So, if we set the field Target Data Type of the converter as Test\|SlackMessage, in the code we can refers to it as `target_data_type` instead of `Cenit.namespace('Test').data_type('SlackMessage')`                                                                                                                                | The target data type was set      |

When Source Handler is false the updater is able to handle only one record. In this case, the pre-defined variable target is available and allow to update the record in an easy way. You just need to access from target to every property to be updated and that's it. For example, if we want to update the property text of a SlackMessage record, the code is as simple as:

```
target.text =  "You got a message: #{target.text}"
```

You should notice when processing is finished, the record is updated from the target variable and no explicit statement is necessary to execute the update.

When Source Handler is true the updater is enabled to process multiple records. In this case, the pre-defined variable targets is available and allow to update an enumeration of records. Now a few more logic is needed. For example, if we want to update several SlackMessage records, the code would be:

```ruby
targets.each do |target|

  target.text =  "You got a message: #{target.text}"
  target_data_type.create_from_json(target.to_json, primary_field: "id")    

end
```

You should notice the pre-defined variable targets is used instead of target. The pre-defined variable target is not available, so you must not mislead the variable target in the example (a loop variable) with the pre-defined one. Unlike the previous example where a single record is created automatically from target, in case of iterating, you need to explicitly update the record by using a statement of type create_from_json. The parameter primary_field is optional. That means you are going to get the same result by calling the create_from_json method this way:

`target_data_type.create_from_json(target.to_json)`

However, It's better if you get used to specify it every time you call the method. You need to keep in mind the primary_field is indispensable when updating.

![Updater save](https://user-images.githubusercontent.com/54523080/151652432-d18933ec-8df5-4d82-890f-a7e5d058e312.png)

After completing the updater declaration and pressing the save button, you can see the new updater translator on the list of updaters and you can manage it as well as you can do with other elements in Cenit.

![Update list](https://user-images.githubusercontent.com/54523080/151652438-5a0b941f-a5d5-43ef-909b-b6fcdba6d897.png)

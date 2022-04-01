```yaml
sidebar_position: 3
```

# Import Flow

The Import Flow generally works this way:

- This flow is usually triggered by a [Scheduler Event](workflows/schedulers.md).
- If it's defined, a piece of code referred as Before Submit is executed before sending the request.
- Cenit requests the data to a System A via API by using a connection and a resource.
- After getting the response, a [Parser Translator](transformations/parsers.md) stores the data obtained from API A into Cenit. A Cenit [Data Type](data/document_types.md) should be defined and associated with the translator as target data type.
- If it is defined, a piece of code referred as After Process Callback is executed when all the process in the flow execution have been completed.

#### Add New Import Flow

The submenu Flows allow to create a new flow by clicking the New button (+) in the [Generic Menu](generic/generic_menu_options_.md).

![New flow](https://user-images.githubusercontent.com/99367633/161176143-bca9e47f-3038-49f6-b8be-89121d95a204.png)

After pressing the new button you can start filling those fields which are common to every kind of flow.

Event:

- It defines the event which trigger the execution of the flow. You can select an event previously created or create one by pressing the + button. The Import Flow is usually triggered by a [Scheduler Event](workflows/schedulers.md).

- Translator:
  
  Defines the [Transformation](transformations/transformations.md) you're going to use to process data. An Import Flow uses a [Parser Translator](transformations/parsers.md) so you must select a parser previously created or create one by pressing the + button. Since there is not a field to select what kind of flow you're creating, by selecting a parser you're implicitly saying it is an Import Flow.

- Active:
  
  Set active true in order to enable the flow to be triggered by events or via code. When active is false the flow can't be executed not even manually.

- Auto Retry:
  
  By selecting manually or automatic you can choose how the flow will execute next time.

- After Process Callbacks:
  
  Define algorithms which are going to be executed after the flow processing.

After selecting the parser translator, new fields appear in order to set the parameters which depend on what kind of flow we're creating. By selecting a parser translator, you may fill those fields closely related to an import flow.

![flow import fields](https://user-images.githubusercontent.com/54523080/150427276-705f9c82-1a30-4653-9992-287796e67508.png)

- Webhook:
  
  It defines the [Resource Path](gateway/resource_paths.md)  the flow is going to use to send the request. You can select a resource previously created or create one by pressing the + button. When defining the webhook you should review the API Specification meticulously in order to guarantee the request could be sent properly later.

- Authorization:
  
  It defines the [Authorization](security/authorization_definition.md) the flow is going to use when sending the request. You can select an authorization previously created or create one by pressing the + button. This field is optional.
  
  - When you leave it blank, the flow will take the configuration established in the [Connection](gateway/connection.md). The connection defines not only the headers and parameters needed for the petition, but also the authorization and the way to use its token.
  
  - When you set the authorization in the flow, you need to know the flow will use the authorization object as you defined it in Cenit, based on the API you need  to connect with. It means Cenit will send in the petition the structure the Authorization has. So if the petition requires a specific way to send the token that the Authorization object doesn't supply, you should notice that in this case you'll need to take it off from the flow structure, leave the Authorization Field blank, and use the Connection configuration instead (with the correct way to send the Authorization token).

- Connection Role:
  
  It is used to relate the connection with the webhook (resource/operation) in order to make up the whole URL. In Cenit you can use more than one connection in the same namespace or even use a connection from another namespace. Those cases force you to use a connection role, that allows to associate a connection with the resources/operation to combine them for obtaining the URL. This field is optional, but you should consider using it as a way to clarify what connection and webhook are used to make up the URL
  
  Since there is no field for setting the connection individually, a question might arise: How does the flow know which connection to use?
  
  - When no connection role is set and the Namespace contains only one Connection, that connection is used.
  
  - When no connection role is set and the Namespace contains more than one Connection, the first connection defined in the namespace is used.
  
  - When the connection role is set, the connection and webhook defined in the connection role are used.

- Before submit: It is used to define an algorithm that must be executed before the flow starts. 

#### Processing the flow

From the list of flows you can run (or process) the flow by selecting it and pressing the Process button. You must press the save button on the next screen to confirm the flow execution.

If everything goes well you can see a screen like the below one when completed.

![Process completed](https://user-images.githubusercontent.com/99367633/161176654-2d4ac003-2da6-4235-9cf1-b37d5d5f76d8.png)

You can check the flow execution results by accessing the menu [System Notifications](monitors/system_notifications.md) or just by clicking the bell on the top bar

The system notifications allow to get feedback about the petition and the response related to every execution of the flow.

After executing the flow you may also manage the records of the data type that was set as target data type when the [Parser Translator](transformations/parsers.md) was defined. For example, if our translator set Conversation as target data type we can manage data in [Document Types](data/document_types.md) menu and explore Conversation's records.

If the Import flow stored data successfully in Cenit we can see the records for the Conversation Data Type.

Of course we need to be sure those records were not there before running the flow, or we can check the date and time of both flow execution and record creation.

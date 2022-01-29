# Flows

Flows define how data is routed between endpoints and all integrations in order to automate your operations. The [Basic Integration](tutorials/basic_integration.md) section explains an integration is generally compose of three flows: the [Import Flow](workflows/flows.md?id=import-flow), the [Converter Flow](workflows/flows.md?id=converter-flow) and the [Export Flow](workflows/flows.md?id=export-flow). 

Every kind of flow has a different role in the integration, which is implemented on its translator. The Import Flow gets data from an API and store it in Cenit by using a [Parser Translator](transformations/parsers.md). The Converter Flow  converts data of a type A, previously stored in Cenit, to data of a type B and store the new data also in Cenit. A [Converter Translator](transformations/converters.md) is in charge of conducted that mapping process. And finally the Export Flow sends data to an API by using a [Template Translator](transformations/templates.md). The flows should be triggered by events that could be of type [Observers](workflows/observers.md), related to changes in data or [Schedulers](workflows/schedulers.md), which could be programmed to trigger at intervals.

#### Add New

The submenu Flows allow to create a new flow by clicking the New button (+) in the [Generic Menu](generic/generic_menu_options.md).

![flow new](https://user-images.githubusercontent.com/54523080/150281097-57cfa00c-8721-41fd-b225-a681b0450de9.png)

Every flow in Cenit is created by using the same new action under the submenu Flows regardless its kind. The kind of flow we're creating depends on the translator selected in a view like the one shown in the picture below. So, if we are intended to create an Import Flow, we need to select a Parser Translator. If we want to create a Converter Flow then we must select a Converter Translator and when we are creating an Export Flow we select a Template Translator.

![flow new fields](https://user-images.githubusercontent.com/54523080/150282080-11cd033b-282c-4975-a256-8091dba0085b.png)

The input fields may vary depending on the selected translator and consequently the kind of flow to be created. For example, both an import and an export flow need a connection and a resource to send the request. However, the converter flow doesn't need a connection since this process is executed internally inside Cenit. So, let's go deep into every kind of flow and how to create the [Import Flow](workflows/flows.md?id=import-flow), the [Converter Flow](workflows/flows.md?id=converter-flow) and the [Export Flow](workflows/flows.md?id=export-flow).

## Import Flow

The  Import Flow generally works this way:

- This flow is usually triggered by a [Scheduler Event](workflows/schedulers.md).
- If it is defined, a piece of code referred as Before Submit is executed before sending the request. 
- Cenit requests the data to a System A via API by using a connection and a resource.
- After getting the response, a [Parser Translator](transformations/parsers.md) stores the data obtained from API A into Cenit. A Cenit [Data Type](data/document_types.md) should be defined and associated with the translator as target data type.
- If it is defined, a piece of code referred as After Process Callback is executed when all the process in the flow execution have been completed.

#### Add New

The submenu Flows allow to create a new flow by clicking the New button (+) in the [Generic Menu](generic/generic_menu_options.md).

![flow new](https://user-images.githubusercontent.com/54523080/150281097-57cfa00c-8721-41fd-b225-a681b0450de9.png)

After pressing the new button you can start filling  those fields which are common to every kind of flow.

![flow common fields](https://user-images.githubusercontent.com/54523080/150420608-0bab2fcc-d12e-4d01-9f0d-79df225b2881.png)

- Event:
  
  It defines the event which trigger the execution of the flow. You can select an event previously created or create one by pressing the + button. The Import Flow is usually triggered by a [Scheduler Event](workflows/schedulers.md).

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
  
  It defines the [Resource](gateway/resources.md) and operation the flow is going to use to send the request. You can select a resource previously created or create one by pressing the + button. When defining the webhook  you should review the API Specification meticulously in order to guarantee the request could be sent properly later.

- Authorization:
  
  It defines the [Authorization](security/authorization_definition.md) the flow is going to use when sending the request. You can select an authorization previously created or create one by pressing the + button. This field is optional. 
  
  - When you leave it blank, the flow will take the configuration established in the [Connection](gateway/connection.md). The connection defines not only the headers and parameters needed for the petition, but also the authorization and the way to use its token.
  
  - When you set the authorization in the flow, you need to know the flow will use the authorization object as you defined it in Cenit, based on the API you need  to connect with. It means Cenit will send in the petition the structure the Authorization has. So if the petition requires a specific way to send the token that the Authorization object doesn't supply, you should notice that in this case you'll need to take it off from the flow structure, leave the Authorization Field blank, and use the Connection configuration instead (with the correct way to send the Authorization token).

- Connection Role:
  
  It is used to relate the connection with the webhook (resource/operation)  in order to make up the whole URL. In Cenit you can use more than one connection in the same namespace or even use a connection from another namespace. Those cases force you to use a connection role, that allows to associate a connection with the resources/operation to combine them for obtaining the URL. This field is optional, but you should consider using it as a way to clarify what connection and webhook are used to make up the URL
  
  Since there is no field for setting the connection individually, a question might arise:  How does the flow know which connection to use?
  
  - When no connection role is set and the Namespace contains only one Connection, that connection is used.
  
  - When no connection role is set and the Namespace contains more than one Connection, the first connection defined in the namespace is used.
  
  - When the connection role is set, the connection and webhook defined in the connection role are used.

- Before submit:

![flow list import](https://user-images.githubusercontent.com/54523080/150431856-33045fa3-3678-4c9e-8ff1-49c25c2b4901.png)

#### Processing the flow

From the list of flows you can run (or process) the flow by selecting it and pressing the Process button. You must press the save button on the next screen to confirm the flow execution.

![flow import run](https://user-images.githubusercontent.com/54523080/150432890-6858fa1d-0900-402a-a095-0ae85c3fd302.png)

![flow import run save](https://user-images.githubusercontent.com/54523080/150432953-e01f1016-ed8e-4d3f-a01a-bea781d01706.png)

If everything goes well you can see a screen like the below one when completed.

![flow import run completed](https://user-images.githubusercontent.com/54523080/150433194-289a5ea3-387c-4e11-b032-4114cf0addd1.png)

You can check the flow execution results by accessing the menu [System Notifications](monitors/system_notifications.md) or just by clicking the bell on the top bar

![flow import run notifications](https://user-images.githubusercontent.com/54523080/150434628-6c0ef756-2b37-42cd-b3ac-b61d7fe7faa9.png)

The system notifications allow to get feedback about the petition and the response related to every execution of the flow.

![flow import run notifications results](https://user-images.githubusercontent.com/54523080/150435053-b1c7ce9c-449d-4efd-8eff-e1df69613b18.png)

After executing the flow you may also manage the records of the data type that was set as target data type when the [Parser Translator](transformations/parsers.md) was defined. For example, if our translator set Conversation as target data type we can manage data in [Document Types](data/document_types.md) menu and explore Conversation's records.

![data types manage](https://user-images.githubusercontent.com/54523080/150452870-f089a60e-cea4-4cdd-a2f8-428add98902e.png)

If the Import flow stored data successfully in Cenit  we can see the records for the Conversation Data Type (Of course we need to be sure those records were not there before running the flow or we can check the date and time of both flow execution and record creation)

![data types records](https://user-images.githubusercontent.com/54523080/150453604-9daa499a-2cd6-44be-b3cd-7da29727e7c9.png)

## Converter Flow

The Converter Flow generally works this way:

- This flow is usually triggered by an [Observer Event](workflows/observers.md), so when a new record of type A is created or updated in Cenit, the flow will be executed. The type A should be set as the event's data type parameter.
- When the event triggers the flow, the data stored in Cenit by the previous flow is converted from a data type A to a data type B. The data type B defines the structure expected by the API B. This mapping process is done by a [Converter Translator](transformations/converters.md).
- Two Cenit [Data Types](data/document_types.md) should be defined and associated with the translator as source data type (previously called A) and target data type(previously called B). The records of the target data type will be also stored in Cenit by the translator.
- If it is defined, a piece of code referred as After Process Callback is executed before sending the request.
- Since this process is executed internally inside Cenit, neither a connection nor a webhook is needed.

#### Add New

The submenu Flows allow to create a new flow by clicking the New button (+) in the [Generic Menu](generic/generic_menu_options.md). After pressing the new button you can start filling those fields which are common to every kind of flow.

![flow common fields](https://user-images.githubusercontent.com/54523080/150420608-0bab2fcc-d12e-4d01-9f0d-79df225b2881.png)

- Event:

After selecting the converter translator, only a new field appears in order to set one more parameter  related to a converter flow. As mentioned before, since this process is executed internally inside Cenit, neither a connection nor a webhook is needed.

![flow converter fields](https://user-images.githubusercontent.com/54523080/150462743-17f03750-01b4-4dfd-a585-cfe931f02090.png)

- Source scope:
  
  By selecting All we specify the mapping process embrace all the records created. Alternatively, we can filter the records to be processed.

After completing the flow declaration and pressing the save button, you can see the new flow on the list of flows and you can manage it as well as you can do with other elements in Cenit.

 ![flow list converter](https://user-images.githubusercontent.com/54523080/150463561-d2e03a40-97d3-4ea6-a159-083711418e26.png)

#### Processing the flow

From the list of flows you can run (or process) the converter flow by selecting it and pressing the Process button. However, you can try another way, which involves one or more records instead of processing all the records at once. You can use this way if you just want to test the flow execution, if it works for one record, probably it works for all.

By accessing the Document Types submenu, we can list the records of any Data Type. For example, we need to pick up one record of type Conversation, which is the source data type in the sample of converter we're using to illustrate the process. Then we press the button Sent to flow.

![flow converter send record to flow](https://user-images.githubusercontent.com/54523080/150464912-e781a4a2-ec5a-40ab-8575-4d5a7d906865.png)

Then we select the converter flow we're intended to test and press the button save

![flow converter send to flow](https://user-images.githubusercontent.com/54523080/150465655-2594f083-c947-4e57-a092-5dc2da81cb8c.png)

If everything goes well you can see a screen like the below one when completed.

![flow converter run completed](https://user-images.githubusercontent.com/54523080/150465786-70ea5b2d-5730-4178-a5a1-bc254cba36ca.png)

And you can check if the record of the target data type was successfully created. In our example that would be an  Slack Message record.

![message record](https://user-images.githubusercontent.com/54523080/150466283-fbdc88be-5e4d-4af5-8fbd-f3fee1f4377b.png)

## Export Flow

The Export Flow generally works this way:

- This flow is usually triggered by a [Observer Event](workflows/observers.md), so when a new record of type B is created or updated in Cenit, the flow will be executed. The type B should be set as the event's data type parameter and it refers to the records to be sent to an API.
- A [Template Translator](transformations/templates.md) sends the new record of type B to the API. A Cenit [Data Type](data/document_types.md) should be defined and associated with the translator as source data type.
- Cenit sends the data to the API by sending a request, using a connection and a resource. 
- If it is defined, a Response Translator, which is a parser translator, is executed in order to process the response to the petition.
- If it is defined, a piece of code referred as After Process Callback is executed when all the process in the flow execution have been completed.

#### Add New

The submenu Flows allow to create a new flow by clicking the New button (+) in the [Generic Menu](generic/generic_menu_options.md). After pressing the new button you can start filling those fields which are common to every kind of flow.

![flow common fields](https://user-images.githubusercontent.com/54523080/150420608-0bab2fcc-d12e-4d01-9f0d-79df225b2881.png)

- Event:
  
  It defines the event which triggers the execution of the flow. You can select an event previously created or create one by pressing the + button. The Export Flow is usually triggered by an [Observer Event](workflows/observers.md).

- Translator:
  
  Defines the [Transformation](transformations/transformations.md) you're going to use to process data. An Export Flow uses a [Template Translator](transformations/templates.md) so you must select a template previously created or create one by pressing the + button. Since there is not a field to select what kind of flow you're creating, by selecting a template translator you're implicitly saying it is an Export Flow.

- Active:
  
  Set active true in order to enable the flow to be triggered by events or via code. When active is false the flow can't be executed not even manually.

- Auto Retry:
  
  By selecting manually or automatic you can choose how the flow will execute next time.

- After Process Callbacks:
  
  Define algorithms which are going to be executed after the flow processing.

After selecting the parser translator, new fields appear in order to set the parameters which depend on what kind of flow we're creating. By selecting a parser translator, you may fill those fields closely related to an import flow.

![flow export fields](https://user-images.githubusercontent.com/54523080/150473432-ea5bb35c-338e-47d5-82ec-d989c1552582.png)

- Source scope:
  
  By selecting All we specify the export process embrace all the records created. Alternatively, we can filter the records to be processed.

- Webhook:
  
  It defines the [Resource](gateway/resources.md) and operation the flow is going to use to send the request. You can select a resource previously created or create one by pressing the + button. When defining the webhook you should review the API Specification meticulously in order to guarantee the request could be sent properly later.

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

- Response Translator:
  
  Defines an optional [Transformation](transformations/transformations.md) you can use to process data sending back from the API in the response. It is a  [Parser Translator](transformations/parsers.md) so you must select a parser previously created or create one by pressing the + button. 

- Notify Request:
  
  Set Notify Request true in order to enable that the flow notification of the request be stored in the system notification list.

- Notify Response:
  
  Set Notify Response true in order to enable that the flow notification of the response be stored in the system notification list.

After completing the flow declaration and pressing the save button, you can see the new flow on the list of flows and you can manage it as well as you can do with other elements in Cenit.

![flow list export](https://user-images.githubusercontent.com/54523080/150473998-9913d1a0-65f6-4f8f-b7cc-718808cb9f22.png)

#### Processing the flow

From the list of flows you can run (or process) the export flow by selecting it and pressing the Process button or you can pick up a record and send it to the export flow.

![export sent record to flow](https://user-images.githubusercontent.com/54523080/150474998-444f191a-fd89-47e7-bdd6-fc609816cabf.png)

Then we select the export flow we're intended to test and press the button save

![export sent to flow](https://user-images.githubusercontent.com/54523080/150475235-34063797-6d17-4934-800a-138cd071bd33.png)

If everything goes well you can see a screen like the below one when completed.

![flow export run completed](https://user-images.githubusercontent.com/54523080/150475328-59bd24cf-e3da-42c7-87e1-d1eebc5fbe8d.png)

And you can check in the notifications if the record of the source data type was successfully sent. In our example, that would be a Slack Message record.

![export completed notification](https://user-images.githubusercontent.com/54523080/150475839-98edbb46-8619-462a-abd9-0bf1d67f80d7.png)

In practice, you can check if the message was successfully exported if you look into the slack channel where it was sent

![message slack](https://user-images.githubusercontent.com/54523080/150476157-03fd36ae-17b8-4eed-a2db-2595d6890a8b.png)

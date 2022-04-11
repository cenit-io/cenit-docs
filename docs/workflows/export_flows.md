---
sidebar_position: 5
---

# Export Flow

The Export Flow generally works this way:

- This flow is usually triggered by a [Data Event](workflows/data_events.md), so when a new record of type B is created or updated in Cenit, the flow will be executed. The type B should be set as the event's data type parameter and it refers to the records to be sent to an API.
- A [Template Translator](transformations/templates.md) sends the new record of type B to the API. A Cenit [Data Type](data/document_types.md) should be defined and associated with the translator as source data type.
- Cenit sends the data to the API by sending a request, using a connection and a resource.
- If it is defined, a Response Translator, which is a parser translator, is executed in order to process the response to the petition.
- If it is defined, a piece of code referred as After Process Callback is executed when all the process in the flow execution have been completed.

#### Add New

The submenu Flows allow to create a new flow by clicking the New button (+) in the [Generic Menu](generic/generic_menu_options_.md). After pressing the new button you can start filling those fields which are common to every kind of flow.

![flow common fields](https://user-images.githubusercontent.com/54523080/150420608-0bab2fcc-d12e-4d01-9f0d-79df225b2881.png)

- Event:
  
  It defines the event which triggers the execution of the flow. You can select an event previously created or create one by pressing the + button. The Export Flow is usually triggered by a [data event](workflows/data_events.md).

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
  
  It defines the [Resource](gateway/resource_paths.md) and operation the flow is going to use to send the request. You can select a resource previously created or create one by pressing the + button. When defining the webhook you should review the API Specification meticulously in order to guarantee the request could be sent properly later.

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
  
  Defines an optional [Transformation](transformations/transformations.md) you can use to process data sending back from the API in the response. It is a [Parser Translator](transformations/parsers.md) so you must select a parser previously created or create one by pressing the + button.

- Notify Request:
  
  Set Notify Request true in order to enable that the flow notification of the request be stored in the system notification list.

- Notify Response:
  
  Set Notify Response true in order to enable that the flow notification of the response be stored in the system notification list.

After completing the flow declaration and pressing the save button, you can see the new flow on the list of flows and you can manage it as well as you can do with other elements in Cenit.

#### Processing the flow

From the list of flows you can run (or process) the export flow by selecting it and pressing the Process button or you can pick up a record and send it to the export flow.

![Flow export to process](https://user-images.githubusercontent.com/99367633/161173918-55597f62-fcec-42a1-8e05-a33630f65565.png)Then we select the export flow we're intended to test and press the button save.

If everything goes well you can see a screen like the below one when completed.

![Flow export completed](https://user-images.githubusercontent.com/99367633/161174037-f7b838ce-d5c6-44bb-936b-2e71ca282b2d.png)

You can check in the system notifications if the record of the source data type was successfully sent. 

![Contacts exported](https://user-images.githubusercontent.com/99367633/161174782-031ffdd8-4ae3-4f44-9245-cde153a45ffe.png)

In practice, you can check if the contacts was successfully exported if you look into the Zoho' app. 
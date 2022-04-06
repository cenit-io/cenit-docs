---
sidebar_position: 2
---

# Flows

Flows define how data is routed between endpoints in order to automate your operations. 

The [Basic Integration](basic_integration.md) section explains an integration is generally composed of three flows: [Import Flow](workflows/import_flows.md),  [Converter Flow](workflows/converter_flows.md) and  [Export Flow](workflows/export_flows.md). 

An Import Flow gets data from an API A and stores it in Cenit in a data type adecuated for this object in A, by using a [Parser Translator](transformations/parsers.md). 

A Converter Flow  converts the data stored in Cenit from A, to a datatype adecuated for an API B,  storing the new data also in Cenit. This  mapping process is conducted by a [Converter Translator](transformations/converters.md).

And finally, the Export Flow sends data stored in Cenit to an external API, by using a [Template Translator](transformations/templates.md). 

The flows should be triggered by events that could be of type [Data Events](workflows/data_events.md), related to changes in data, or [Schedulers](workflows/schedulers.md), which could be programmed to execute at intervals.

#### Add New Flow

The submenu Flows allow to create a new flow by clicking the New button (+) in the [Generic Menu](generic/generic_menu_options_.md).

![New flow](https://user-images.githubusercontent.com/99367633/161121860-f59b0519-7f10-4ae1-8340-e65ded28a2c1.png)

Every flow in Cenit is created by using the same new action under the submenu Flows regardless its kind. 

The kind of flow we're creating depends on the translator assigned, in a view like the one shown in the picture below. So, if we are intended to execute an Import Flow, we need to use or create a Parser Translator. If we want to execute a Converter Flow, then we must create or use a Converter Translator and when we are intending to execute an Export Flow, we must use or create a Template Translator.

![Selecting a translator](https://user-images.githubusercontent.com/99367633/161095063-1668949c-7750-48b1-b77c-04f5ad17ba8c.png)

All translators are Ruby code. You can learn about translators in [Transformations](transformations/transformations.md) section. Translators can be developed before in [Snippets section](compute/snippets.md).

The input fields may vary depending on the translator, and consequently, the kind of flow to be created. For example, both an import and an export flow need a [connection](gateway/connection.md) and a [resource path](gateway/resource_paths.md) to send the request. However, a converter flow doesn't need a connection since this process is executed internally inside Cenit. Export flows need a connection of course, to connect with a destination API. 

After completing the flow declaration and pressing the save button, you can see the new flow on the list of flows and you can manage it as well as you can do with other elements in Cenit.

The figure bellow shows a new added flow to the list of flows in a tenant. 

## ![New flow added](https://user-images.githubusercontent.com/99367633/161105195-191ade85-09a3-40a2-8510-447501c058cb.png)

## Processing a flow

From the list of flows, you can select a flow and run (or process) this by pressing the Process button:

![Process a flow](https://user-images.githubusercontent.com/99367633/161106351-98b8d114-0b67-4fe6-b154-b2eea984352e.png)

A run symbol appears on the screen. Press it and wait to end the process.

The figure bellow shows a flow in pending status.

![Processing a flow](https://user-images.githubusercontent.com/99367633/161106867-ccd5d7bb-726a-4ef7-8b51-9284456f29d2.png)

Status of flows can observed in [System Notifications](monitors/system_notifications.md) as well.

You can test some flow is picking a record of the datatype you want to process (go to Data/Object types and list the records of this datatype), and select the button "send to flow". 

![Send to flow](https://user-images.githubusercontent.com/99367633/161110529-1f2f106b-cd2c-4bf0-9e5d-0d4e58b57328.png)

Then, you select the flow you're intended to test and press the same the button that is located in the bar above or in the lower right corner:

![Send a record to a flow](https://user-images.githubusercontent.com/99367633/161111135-7da2c517-effb-4218-a8d2-765448f55cb6.png)

If everything goes well you can see a screen like the below one when completed.

![Process completed](https://user-images.githubusercontent.com/99367633/161118677-9c686571-75e4-485e-b8c4-41fdba7b8b60.png)

Another way to see the status of a flow is searching notifications in [System Notifications](monitors/system_notifications.md):

![Flows executed](https://user-images.githubusercontent.com/99367633/161116995-c9f4eb16-487f-43d0-b87e-b1514772139f.png)

And you can check if the record of the data type was successfully stored or send going to the menu [Data](data/data.md).
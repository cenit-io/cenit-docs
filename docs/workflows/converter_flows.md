```yaml
sidebar_position: 4
```

# Converter Flow

The Converter Flow generally works this way:

- This flow is usually triggered by a [Data Event](workflows/data_events.md), so when a new record of type A is created or updated in Cenit, the flow will be executed. The type A should be set as the event's data type parameter.
- When the data event triggers the flow, the data stored in Cenit by the previous flow is converted from a data type A to a data type B. The data type B defines the structure expected by the API B. This mapping process is done by a [Converter Translator](transformations/converters.md).
- Two Cenit [Data Types](data/document_types.md) should be defined and associated with the translator as source data type (previously called A) and target data type(previously called B). The records of the target data type will be also stored in Cenit by the translator.
- If it is defined, a piece of code referred as After Process Callback is executed when all the process in the flow execution have been completed.
- Since this process is executed internally inside Cenit, neither a connection nor a webhook is needed.

#### Add New

The submenu Flows allow to create a new flow by clicking the New button (+) in the [Generic Menu](generic/generic_menu_options_.md). After pressing the new button you can start filling those fields which are common to every kind of flow.

![flow common fields](https://user-images.githubusercontent.com/54523080/150420608-0bab2fcc-d12e-4d01-9f0d-79df225b2881.png)

- Event:

After selecting the converter translator, only a new field appears in order to set one more parameter related to a converter flow. As mentioned before, since this process is executed internally inside Cenit, neither a connection nor a webhook is needed.

![flow converter fields](https://user-images.githubusercontent.com/54523080/150462743-17f03750-01b4-4dfd-a585-cfe931f02090.png)

- Source scope:
  
  By selecting All we specify the mapping process embrace all the records created. Alternatively, we can filter the records to be processed.

After completing the flow declaration and pressing the save button, you can see the new flow on the list of flows and you can manage it as well as you can do with other elements in Cenit.

#### Processing the flow

From the list of flows you can run (or process) the converter flow by selecting it and pressing the Process button.

![Converter to process](https://user-images.githubusercontent.com/99367633/161177888-81f1ba27-9569-40b0-bac5-4ded26fe83b2.png)However, you can try another way, which involves one or more records instead of processing all the records at once. You can use this way if you just want to test the flow execution, if it works for one record, probably it works for all.

By accessing the Document Types submenu, we can list the records of any Data Type. For example, we need to pick up one record of type Conversation, which is the source data type in the sample of converter we're using to illustrate the process. Then we press the button Sent to flow.

Then we select the converter flow we're intended to test and press the button "send", in the bar above or in the lower right corner.

![Send to flow a conversation](https://user-images.githubusercontent.com/99367633/161178640-d331ecf3-a263-41a2-9186-2e6bd1e88921.png)If everything goes well you can see a screen like the below one when completed.

And you can check if the record of the target data type was successfully created, by searching it in the list of record of that data type.

In our example that would be an Slack Message record.

---
sidebar_position: 4

---

# Connector Factory

A connector is a special kind of [collection](integrations/collections.md) which provides all the resources (authorization, connection, webhooks, data types, events and algorithms) to handle the import and the export process of a set of records. By using one or more connector you can gain productivity by reducing time and effort when you create an integration.

The connector factory is an embedded app which allows to create a connector by using a simple interface. For creating a connector through the connector factory you just have to enter a  few information related to the API you want to access and the records to be handled and a complete set of resources will be generated. Then you probably need to do a few changes in the code and you connector will be ready to be used.

## Access the Connector Factory

In the side bar where the Cenit IO main menu is shown, scroll down and you will find the list of embedded apps, then choose Connector Factory.

![01 Connector Factory in Side Bar](https://user-images.githubusercontent.com/54523080/168844790-29f00e79-717b-416e-85fc-87f4001f297c.png)

Once inside the connector factory, you can create a new connector as well as managing the existing ones. The picture below shows the conector factory's main view.

![02 Connector Factory Main View](https://user-images.githubusercontent.com/54523080/168854530-f944fc80-f5c2-4162-8e3a-e7463714b1c3.png)

## Create a new Connector

For creating a new connector, press the Add button as shown below

![03 Connector Factory Add Button](https://user-images.githubusercontent.com/54523080/168856674-6edcebac-6c14-416c-aecb-7a5eacf4f81e.png)

After pressing the Add button the edit view is shown and you can start entering the connector information.

![04 Connector Factory Start Editing](https://user-images.githubusercontent.com/54523080/168858093-7108558b-0dca-45a6-92d8-baa934f74399.png)

### Input data to create the Connector

For creating a connector you need to enter some information about the remote platform you want to access. So the UI will guide you to enter:

- The connector name: a lowecase identifier
- Authorization type: the type of authorization.
- Authorization data: the parameters needed in the authorization process depending on the kind of authorization
- Connection data: the connection base URL and the connection parmeters and headers
- Resource Data: For every type of record you want to handle you must enter its name, its primary key and the kind of process you want to conduct: import, export or both.
- Import Process Data: For every type of record you want to import, you need to enter the webhooks for importing one record and all the records.
- Export Process Data: For every tyoe of record you want to export, you need to enter the webhooks for creating one new record and updating an existing record.

Let's see in detail how to create the connector.

At first you need to enter the connector name, so a namespace will be generated from that name. Then you need to select the authorization type, and enter the authorization parameters according to the selected type. For example, in case of a basic authorization, you need to enter username and password as shown below

![05 Connector Factory Basic Authorization](https://user-images.githubusercontent.com/54523080/168915456-53d50eec-b773-4383-8711-9347db0ecda7.png)

If you select an Oauth2 Authorization you must enter the header prefix to be used with the access token, the authorization endpoint, the access token endpoint, the client ID, the client secret and the list of comma-separated scopes. The picture below shows the authorization data of a connector for accessing the Zoho CRM API.

![05 Connector Factory Oauth2 Authorization](https://user-images.githubusercontent.com/54523080/168915537-af5e6b7a-8ae4-46ee-8eaa-697f6fc87800.png)

Then you need to set the connection data. You need to enter the base URL for accessing the API resources and pairs name/value to be used as parameters or headers, if they are needed. The picture below shows the connection data of a connector for accessing the Zoho CRM API.

![06 Connector Factory Connection](https://user-images.githubusercontent.com/54523080/168916955-6d8ac83c-e14e-4470-a8d5-58dbdc07cb5a.png)

After setting the authorization and connection, you must start editing the resources information, so you need to press the Add button in the Resources/Flows section

![07 Connector Factory Add Resource Button](https://user-images.githubusercontent.com/54523080/168917939-40e43e7c-5146-4fcd-be40-9bbc3ab0da4d.png)

For every type of record you want to manage, you need to enter the resources information. For example, in the connector for accessing the Zoho CRM API, we want to manage records of type Contact and Lead. Let's see how to enter that information. After pressing the Add button, a view like the one below is shown and you must enter the data associated to one type of record, then press the Save button and you can repeat the process for every resource you need to add to the connector.

![07a Connector Factory Resource View](https://user-images.githubusercontent.com/54523080/168921046-a8b98075-763d-4d35-8798-5b2135c859b5.png)

At first you need to enter the resource name, the primary key name and the kind of process you want to conduct with that type of record: Import-Flow, Export-Flow or both. As you can see in the example below, a Data Type name will be generated.

![08 Connector Factory New Resource Name](https://user-images.githubusercontent.com/54523080/168922541-266b7c6c-bc70-49ad-b3c0-943bc9c34e98.png)

Then you need to enter the webhook's details for the import and export process. In case of the import process (if it was selected in the kind of processes) you must set the http method (usually GET) and the resource path for requesting a single record and the http method and resource path for requesting multiple records. The resource path doesn't start nor end with the slash symbol, as shown below

![09 Connector Factory New Resource Import Process](https://user-images.githubusercontent.com/54523080/168922543-d90b8410-cb94-428c-afb1-664f320a1570.png)

In case of the export process (if it was selected in the kind of processes) you must set the http method (usually POST) and the resource path for exporting a new record and the http method (usually PUT) and resource path for exporting an existing record to be updated. The resorce path doesn't start nor end with the slash symbol, as shown below

![10 Connector Factory New Resource Export Process](https://user-images.githubusercontent.com/54523080/168922544-dcc2bd99-d189-4f28-a9ab-1adb45153d94.png)

The picture above shows the Save button you need to press for finishing editing the resource data. After saving the resource data for the record of type Contact you can see it in the list as shown in the picture below.

![11 Connector Factory Add Resource Button](https://user-images.githubusercontent.com/54523080/168922545-0a504c32-583c-43d9-8834-47738896a267.png)

Then you can repeat the process for adding new resources, por example Lead. After the Add button you can enter the resource name, its identifier and the import process details

![12 Connector Factory New Resource Import Process](https://user-images.githubusercontent.com/54523080/168922548-a83d10be-3f4a-4de2-8dfe-935543588adc.png)

And if it was selected in the kind of processes, you must enter the details of the export process and press Save.

![13 Connector Factory New Resource Export Process and save](https://user-images.githubusercontent.com/54523080/168922549-cf76283c-5b1a-44bd-946d-5047da6fe742.png)

After completing the resource data input, you can press the Save button in order to create the Connector as shown below.

![13 Connector Factory Save Connector](https://user-images.githubusercontent.com/54523080/168926930-b503d436-a714-477a-b645-cfd30605add7.png)

When the creation process completes, you will be notified in a view like the one in the picture below

![14 Connector Factory Completed Notification](https://user-images.githubusercontent.com/54523080/168927047-f1983a24-345b-4689-b4f0-d36a98b810ac.png) 

Then you can press the Back button

![15 Connector Factory Back Button](https://user-images.githubusercontent.com/54523080/168927118-d3570589-2f08-4cb7-9715-361de90cb173.png)

And you will see the connector in the list

![16 Connector Factory list](https://user-images.githubusercontent.com/54523080/168927174-9d8794d3-60e3-4d9b-9b01-409b66de9e98.png) 

### Explore the Connector

Once a connector is created you can explore its content in the Connector Factory by selecting the connector and pressing the Details button.

![17 Connector Factory Details Button](https://user-images.githubusercontent.com/54523080/168940982-d1ae9da5-e07f-46d5-bf4d-665aaf65be94.png)

After pressing the Details button a list of elements is shown. That list contains all the elements generated implicitly by the Connector Factory when the connector was created.

![18 Connector Factory Connector List of Elements](https://user-images.githubusercontent.com/54523080/168941095-7f5b6337-7a56-4b00-a733-ffce300a5862.png) 

When you explore the list of connector elements in the Conector Factory, you are able to select one element and see its details.

![19 Connector Factory Connector Element Details Button](https://user-images.githubusercontent.com/54523080/168941102-7e0cf364-af0d-4d1d-9b48-d3fbd22affa3.png)

That action redirects the user to the show view in Cenit, so, the user will be able to manage that element the same way he can do with any other one in Cenit.

![20 Connector Factory Connector Element Details](https://user-images.githubusercontent.com/54523080/168941103-35b81431-3383-4fa6-89c3-42c1f4d93ce3.png)

Since a Connector is a special kind of collection, a connector can be manage not only from the Connector Factory main view but also from the Collections Menu in Cenit.

![21 Connector Factory Collection Created](https://user-images.githubusercontent.com/54523080/168944753-7cd07dfb-261d-4730-86ea-dafd8affd236.png)

As you can see in the picture above, a collection have been created in the current tenant and you can manage it as any other collection in Cenit. So, if you select the collection and press the Show button, you can explore its elements directly in the Cenit UI, for example, the webhooks.

![22 Connector Factory Collection Details](https://user-images.githubusercontent.com/54523080/168944757-5cfb11c9-7c8c-49a3-b4cf-1146f3a93a3c.png)

You get the same result by accessing the menu Gateway/Resource Paths and list the elements en the corresponding namespace.

![23 Connector Factory  Resources Paths List in Cenit](https://user-images.githubusercontent.com/54523080/168944758-ea6f6fef-554e-4f05-837f-96d37f2c7bdf.png)

As mentioned before, when a Connector is created in Connector Factory, a complete set of resources is generated in order to enable the import and export processes of a group of records. The table below contains all the elements implictly generated in the Connector of the Zoho CRM API that we used as an example.

| Element Kind           | Elements in the Connector                                                                                                                                                                                                                   | Observation                                                                                                           |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| Security               | default_authorization, default_client, default_provider                                                                                                                                                                                 | The authorization, the authorization client and the authorization provider for getting access to the remote platform. |
| Connection             | default_connection                                                                                                                                                                                                                          | The connection to the remote platform                                                                                 |
| Data Types             | Contact, Lead                                                                                                                                                                                                                             | One data type for every resource which was added to the connector.                                                    |
| Resources for Contact  | get_contact, get_contacts, create_contact, update_contact                                                                                                                                                                             | The webhooks for importing and exporting records of type Contact                                                      |
| Resources for Lead     | get_lead, get_leads, create_lead, update_lead                                                                                                                                                                                         | The webhooks for importing and exporting records of type Lead                                                         |
| Algorithms for Contact | do_import_contact, do_import_contacts, do_get_contacts, do_get_contact, parse_from_api_response_contact, trigger_for_change_contact, do_export_contact, do_create_contact, do_update_contact, parse_2_api_request_contact | The algorithms for importing and exporting records of type Contact                                                    |
| Algorithms for Lead    | do_import_lead, do_import_leads, do_get_leads, do_get_lead, parse_from_api_response_lead, trigger_for_change_lead, do_export_lead, do_create_lead, do_update_lead, parse_2_api_request_lead                               | The algorithms for importing and exporting records of type Lead                                                       |
| Algorithms             | do_check_error_response                                                                                                                                                                                                                     | The algorithm for processing errors in the responses.                                                                 |
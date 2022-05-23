---
sidebar_position: 4

---

# Connector Factory

A connector is a special kind of [collection](integrations/collections.md) which provides all the resources (authorization, connection, webhooks, data types, events and algorithms) to handle the import and the export process of a set of records. By using one or more connector you can gain productivity by reducing time and effort when you create an integration.

The connector factory is an embedded app which allows to create a connector by using a simple interface. For creating a connector through the connector factory you just have to enter a  few information related to the API you want to access and the records to be handled and a complete set of resources will be generated. Then you probably need to make a few changes in the code and you connector will be ready to be used.

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

- The connector name: a lower-case identifier
- Authorization type: the type of authorization.
- Authorization data: the parameters needed in the authorization process depending on the kind of authorization
- Connection data: the connection base URL and the connection parameters and headers
- Resource Data: For every type of record you want to handle you must enter its name, its primary key and the kind of process you want to conduct: import, export or both.
- Import Process Data: For every type of record you want to import, you need to enter the webhooks for importing one record and all the records.
- Export Process Data: For every type of record you want to export, you need to enter the webhooks for creating one new record and updating an existing record.

Let's see, in detail, how to create the connector.

At first you need to enter the connector name, so a namespace will be generated from that name. Then you need to select the authorization type, and enter the authorization parameters according to the selected type. For example, in case of a basic authorization, you need to enter username and password as shown below

![05 Connector Factory Basic Authorization](https://user-images.githubusercontent.com/54523080/168915456-53d50eec-b773-4383-8711-9347db0ecda7.png)

If you select an Oauth2 Authorization you must enter the header prefix to be used with the access token, the authorization endpoint, the access token endpoint, the client ID, the client secret and the list of comma-separated scopes. The picture below shows the authorization data of a connector for accessing the Zoho CRM API.

![05 Connector Factory Oauth2 Authorization](https://user-images.githubusercontent.com/54523080/168915537-af5e6b7a-8ae4-46ee-8eaa-697f6fc87800.png)

Then you need to set the connection data. You need to enter the base URL for accessing the API resources and pairs name/value to be used as parameters or headers, if they are needed. The picture below shows the connection data of a connector for accessing the Zoho CRM API.

![06 Connector Factory Connection](https://user-images.githubusercontent.com/54523080/168916955-6d8ac83c-e14e-4470-a8d5-58dbdc07cb5a.png)

After setting the authorization and connection, you must start editing the resources information, so you need to press the Add button in the Resources/Flows section

![07 Connector Factory Add Resource Button](https://user-images.githubusercontent.com/54523080/168917939-40e43e7c-5146-4fcd-be40-9bbc3ab0da4d.png)

For every type of record you want to manage, you need to enter the resources information. For example, in the connector for accessing the Zoho CRM API, we want to manage records of type Contact and Lead. Let's see how to enter that information. After pressing the Add button, a view like the one below is shown and you must enter the data associated with one type of record, then press the Save button and you can repeat the process for every resource you need to add to the connector.

![07a Connector Factory Resource View](https://user-images.githubusercontent.com/54523080/168921046-a8b98075-763d-4d35-8798-5b2135c859b5.png)

At first you need to enter the resource name, the primary key name and the kind of process you want to conduct with that type of record: Import-Flow, Export-Flow or both. As you can see in the example below, a Data Type name will be generated according to the resource name.

![08 Connector Factory New Resource Name](https://user-images.githubusercontent.com/54523080/168922541-266b7c6c-bc70-49ad-b3c0-943bc9c34e98.png)

Then you need to enter the webhook's details for the import and export process. In case of the import process (if it was selected in the kind of processes) you must set the http method (usually GET) and the resource path for requesting a single record and the http method and resource path for requesting multiple records. The resource path doesn't start nor end with the slash symbol, as shown below

![09 Connector Factory New Resource Import Process](https://user-images.githubusercontent.com/54523080/168922543-d90b8410-cb94-428c-afb1-664f320a1570.png)

In case of the export process (if it was selected in the kind of processes) you must set the http method (usually POST) and the resource path for exporting a new record and the http method (usually PUT) and resource path for exporting an existing record to be updated. The resource path doesn't start nor end with the slash symbol, as shown below

![10 Connector Factory New Resource Export Process](https://user-images.githubusercontent.com/54523080/168922544-dcc2bd99-d189-4f28-a9ab-1adb45153d94.png)

The picture above shows the Save button you need to press for finishing editing the resource data. After saving the resource data for the record of type Contact you can see it in the list as shown in the picture below.

![11 Connector Factory Add Resource Button](https://user-images.githubusercontent.com/54523080/168922545-0a504c32-583c-43d9-8834-47738896a267.png)

Then you can repeat the process for adding new resources, for example Lead. After the Add button you can enter the resource name, its identifier, and the import process details

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

Since a Connector is a special kind of collection, a connector can be managed not only from the Connector Factory main view but also from the Collections Menu in Cenit.

![21 Connector Factory Collection Created](https://user-images.githubusercontent.com/54523080/168944753-7cd07dfb-261d-4730-86ea-dafd8affd236.png)

As you can see in the picture above, a collection has been created in the current tenant and you can manage it as any other collection in Cenit. So, if you select the collection and press the Show button, you can explore its elements directly in the Cenit UI, for example, the webhooks.

![22 Connector Factory Collection Details](https://user-images.githubusercontent.com/54523080/168944757-5cfb11c9-7c8c-49a3-b4cf-1146f3a93a3c.png)

You get the same result by accessing the menu Gateway/Resource Paths and list the elements en the corresponding namespace.

![23 Connector Factory  Resources Paths List in Cenit](https://user-images.githubusercontent.com/54523080/168944758-ea6f6fef-554e-4f05-837f-96d37f2c7bdf.png)

As mentioned before, when a Connector is created in Connector Factory, a complete set of resources is generated in order to enable the import and export processes of a group of records. The table below contains all the elements implicitly generated in the Connector of the Zoho CRM API that we used as an example.

| Element Kind           | Elements in the Connector                                                                                                                                                                                                 | Observation                                                                                                           |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| Security               | default_authorization, default_client, default_provider                                                                                                                                                                   | The authorization, the authorization client and the authorization provider for getting access to the remote platform. |
| Connection             | default_connection                                                                                                                                                                                                        | The connection to the remote platform                                                                                 |
| Data Types             | Contact, Lead                                                                                                                                                                                                             | One data type for every resource which was added to the connector.                                                    |
| Resources for Contact  | get_contact, get_contacts, create_contact, update_contact                                                                                                                                                                 | The webhooks for importing and exporting records of type Contact                                                      |
| Resources for Lead     | get_lead, get_leads, create_lead, update_lead                                                                                                                                                                             | The webhooks for importing and exporting records of type Lead                                                         |
| Algorithms for Contact | do_import_contact, do_import_contacts, do_get_contacts, do_get_contact, parse_from_api_response_contact, trigger_for_change_contact, do_export_contact, do_create_contact, do_update_contact, parse_2_api_request_contact | The algorithms for importing and exporting records of type Contact                                                    |
| Algorithms for Lead    | do_import_lead, do_import_leads, do_get_leads, do_get_lead, parse_from_api_response_lead, trigger_for_change_lead, do_export_lead, do_create_lead, do_update_lead, parse_2_api_request_lead                               | The algorithms for importing and exporting records of type Lead                                                       |
| Algorithms             | do_check_error_response                                                                                                                                                                                                   | The algorithm for processing errors in the responses.                                                                 |

## Edit the Connector Elements

After creating the connector, some elements might need a few changes to fit particular requirements according to the API. The other ones don't require any modification; however, it's important to understand all the elements in the collection regardless you need to modify them or not. So, this section explains every element in the connector and some examples of modifications they may need. You should notice all the elements refers to the example of connector to the Zoho CRM API we have seen in the previous sections.

**Security**

In most of cases, you don't need to make any change in the authorization provider, the authorization client or the authorization. However, in the case of the example, we need to set some parameters in the authorization in order to guarantee the refresh-token is gotten sucessfully. So, at first you need to review the provider to check the Refresh Token Strategy is set to the value "default". You don't need to change it because that's the strategy used by Zoho CRM to refresh the access_token.

![24a Connector Factory  Checking the Provider](https://user-images.githubusercontent.com/54523080/169728326-b258bb49-5ee6-4333-86d4-b21617fca342.png)

In the case of the autorization we need to add two parameters in order to enable to recovery of the refresh_token in the authorization process: access_type: "offline" and prompt: "consent".

![24 Connector Factory  Editing the authorization](https://user-images.githubusercontent.com/54523080/169158227-edb37c14-b198-4cf6-9c36-61d8dbb62df5.png)

**Connection**

We don't need to make any change in the connection, but it's important to understand that default_connection contains the authorization as you can see in the picture below. So, when the connection is used in the algorithms it's not necessary to use explicitly the authorization.

![27 Connector Factory  Checking the connnection contains the authorization](https://user-images.githubusercontent.com/54523080/169159418-19e7fbbf-8ff8-473d-8a9e-89c950f509a8.png)

As mentioned before, we don't need to edit the connection in this case. However, some APIs require you to handle the authorization in the connection and introduce a different token prefix in the Authorization header. In those cases you can edit the connection as shown below (in the case of the Zoho CRM API it is optional, we're just showing what you can do in those cases it would be mandatory)

![28a Connector Factory  Editing the connnection to add the header Authorization](https://user-images.githubusercontent.com/54523080/169160839-8d2cfea4-2b68-4073-bc68-139bdcc17343.png) 

**Resources**

The resources don't need to be modified. However, we need to add some parameters and headers in the case of the resources for getting all the contacts and all the leads. Both resources get_contacts and get_leads could be modified to add two parameters page and per_page and one header If-Modified-Since as the picture below shows; nevertheless, that's optional because the parameters can be added via code as you will see in the algorithms described further.

![28b Connector Factory  Editing the resources get_contacts y get_leads](https://user-images.githubusercontent.com/54523080/169162414-39d6f2aa-201f-4da0-aa23-018a62241b36.png) 

**Data Types**

Two data types Contact and Lead were generated.

![25 Connector Factory  Data Type List](https://user-images.githubusercontent.com/54523080/169163345-3c112926-3e85-49d2-a064-de59a70f5c0f.png)

The data type schema in both cases Contact and Lead is similar and we don't need to change it. It is shown below.

```
{
  "type": "object",
  "properties": {
    "remote_id": {
      "type": "string"
    },
    "hmac": {
      "type": "string"
    },
    "last_source": {
      "type": "string"
    },
    "imported_at": {
      "type": "string",
      "format": "date-time"
    },
    "rawData": {
      "type": "object",
      "visible": false
    }
  }
}
```

The properties included in the data type schema are:

- remote_id: the id of the object in the remote platform
- hmac: it's used to determine whether the record in Cenit change or not.
- last_source: it's used to determine is the record came from the remote platform or other source
- imported_at: the date time when the record was imported from the remote API
- rawData: it contains the entire record with the same structure it  brought from the API

**Algorithm do_import_contact**

This algorithm imports one record of type Contact into Cenit. It takes two parameters:

- options: A JSON object with some options needed in the import process. This object must contain a property remote_id with the record id in the remote platform.

- task: the task of type algorithm execution, which Cenit implicitly adds to the parameter list when the algorithm is called asynchronous.

It calls two algorithms:

- do_get_contact:  makes the request to the remote platform and get the record from the API response

- parse_from_api_response_contacts: transforms the record to the structure of the Cenit data type and stores it in Cenit.

The algorithm's code generated by the Connector Factory  is shown below. It gets the record from the API by calling the algorithm do_get_contact then passes the record as a parameter to the algorithm parse_from_api_response_contacts which stores it in Cenit.

```
# Get dependencies
ns = Cenit.namespace(:Zohocrm)
parse_from_api_response = ns.algorithm(:parse_from_api_response_contacts)
action = ns.algorithm(:do_get_contact)

# Get item from api response
item = action.run([options])

# Mapping of the item to the corresponding data-type
parse_options = { items: [item] }
parse_from_api_response.run([parse_options])

nil
```

You don't need to make any changes to the algorithm's code.

**Algorithm do_import_contacts**

This algorithm imports multiple records of type Contact into Cenit. It takes two parameters:

- options: A JSON object with some options needed in the import process. This object could contain a property start_date to indicate to import only the records which were updated in the remote platform after that date.

- task: the task of type algorithm execution, which Cenit implicitly adds to the parameter list when the algorithm is called asynchronous.

It calls two algorithms:

- do_get_contacts: makes the request to the remote platform and get the records from the API response

- parse_from_api_response_contacts: transforms the records to the structure of the Cenit data type and stores them in Cenit.

The algorithm's code generated by the Connector Factory is shown below. It gets a lot (a set) of records from the API by calling the algorithm do_get_contacts then passes the records as a parameter to the algorithm parse_from_api_response_contacts which stores them in Cenit. Then it determines if there are more records to be imported, so it repeats the process by running again the task associated with its execution. The variable task.state[:import_next_block] must be updated by the algorithm do_get_contacts, which receives as a parameter not only the options object, but also the task associated with the execution of the algorithm do_import_contacts.  So the offset property in the option parameter is used by do_get_contacts to determine which lot of records must be requested as well as the task is used to tell do_import_contacts to run itself again.

```
# Get dependencies
ns = Cenit.namespace(:Zohocrm)
parse_from_api_response = ns.algorithm(:parse_from_api_response_contacts)
action = ns.algorithm(:do_get_contacts)

# Get the time interval to filter the request
options[:end_date] = task.state[:end_date] ||= DateTime.try(:now)
options[:start_date] ||= task.state[:start_date] ||= options[:end_date] - 180.days
options[:start_date] = DateTime.parse(options[:start_date].to_s) unless options[:start_date].is_a?(DateTime)

# Initialization of the paging offset
options[:offset] = task.state[:offset] ||= ""
is_first_block = options[:offset].blank? || options[:offset] == 0

if is_first_block
  interval = "'#{options[:start_date].strftime('%F %T %Z')}' and '#{options[:end_date].strftime('%F %T %Z')}'"
  Tenant.notify(message: "Importing contacts updated between #{interval}.", :type => :info)
end

# Get the items from api response
items = action.run([options, task])
count = items.count

# Verify that the items was obtained
if count != 0
  Tenant.notify(message: "Importing package of #{count} #{'contact'.pluralize(count)}.", :type => :info)

  # Mapping of the items to the corresponding data-type
  parse_options = { items: items }
  parse_from_api_response.run([parse_options])

elsif is_first_block
  Tenant.notify(message: "Not found 'contacts' to be imported.", :type => :warning)
end

# Check existence of next page and initiate next page request
if task.state[:import_next_block] == true
  task.state[:import_next_block] = false
  task.run_again
end

nil
```

You don't need to make any changes to the algorithm's code.

**Algorithm do_get_contact**

This algorithm gets one record of type Contact from the API. It takes one parameter:

- options: A JSON object with some options needed in the import process. This object must contain a property remote_id with the record id in the remote platform.

It calls one algorithm:

- do_check_error_response: checks the possible errors obtained in the response from the remote API

The algorithm's code generated by the Connector Factory is shown below. It creates a JSON object with the submit options. Then it makes the request to the API and passes the response as a parameter to the algorithm do_check_error_response to process any possible error in the response. If no error occurs, the record must be obtained from the response to be returned as a result of the algorithm execution.

```
# Get dependencies
ns = Cenit.namespace(:Zohocrm)
connection = ns.connection(:default_connection)
webhook = ns.webhook(:get_contact)
check_error_response = ns.algorithm(:do_check_error_response)

item = begin
  # Setting options to the webhook submit
  submit_options = {
    headers: {},
    parameters: {
      'id' => options[:remote_id],
    },
    template_parameters: {},
    body: {}
  }

  # Webhook submit and check errors to the response
  response = webhook.with(connection).submit(submit_options)
  response = JSON.parse(response, symbolize_names: true)
  check_error_response.run([response, :get_contact])

  response[:contact]
end

item
```

In this case, the algorithm's code needs to be modified to fit particular requirements related to the API, such as:

- The template parameter contact_id is set instead of the parameter id in the default code.

- The record is obtained from the response by accessing the property data, which is of type array, so we need to access the first and unique element in the array. 

After those modifications, the algorithm's code looks like the one below.

```
# Get dependencies
ns = Cenit.namespace(:Zohocrm)
connection = ns.connection(:default_connection)
webhook = ns.webhook(:get_contact)
check_error_response = ns.algorithm(:do_check_error_response)

item = begin
  # Setting options to the webhook submit
  submit_options = {
    headers: {},
    parameters: {},
    template_parameters: {
      'contact_id' => options[:remote_id],
    },
    body: {}
  }

  # Webhook submit and check errors to the response
  response = webhook.with(connection).submit(submit_options)
  response = JSON.parse(response, symbolize_names: true)
  check_error_response.run([response, :get_contact])

  response[:data].first
end

item
```

**Algorithm do_get_contacts**

This algorithm gets multiple records of type Contact from the API. It takes one parameter:

- options: A JSON object with some options needed in the import process. This object could contain a property start_date to indicate to import only the records which were updated in the remote platform after that date.

It calls one algorithm:

- do_check_error_response: checks the possible errors obtained in the response from the remote API

The algorithm's code generated by the Connector Factory is shown below. It creates a JSON object with the submit options. Then it makes the request to the API and passes the response as a parameter to the algorithm do_check_error_response to process any possible error in the response. If no error occurs, the records must be obtained from the response to be returned as a result of the algorithm execution. Since the records are requested by lots, parameters and headers must be set prior to send the request to indicate to the API which lot  of records is being requested. That parameters depends of every API.  So you probably need to change that in the algorithm's code. When the response is received, the algorithm must determine if there are more records to be imported and update the task variable task.state[:import_next_block] depending of specific response data, so you probably need to modify that piece of code too. Finally the algorithm must return the array of records received from the API.

```
# Get dependencies
ns = Cenit.namespace(:Zohocrm)
connection = ns.connection(:default_connection)
webhook = ns.webhook(:get_contacts)
check_error_response = ns.algorithm(:do_check_error_response)

items, more = begin
  # Setting options to the webhook submit
  submit_options = {
    headers: {},
    parameters: {
      'offset' => options[:offset],
      'limit' => options[:limit] ||= 200,
      # 'start_date' => options[:start_date],
   },
    template_parameters: {},
    body: {}
  }

  # Webhook submit and check errors to the response
  response = webhook.with(connection).submit(submit_options)
  response = JSON.parse(response, symbolize_names: true)
  check_error_response.run([response, :get_contacts])

  # Here you must obtain the values of the variables 'items' and 'more' from the response of the api
  items = response[:contacts]
  more = items.count == options[:limit]

  [items, more]
end

# Preparing the request of the next page
if (more)
  task.state[:offset] = task.state[:offset].to_i + options[:limit]
  task.state[:import_next_block] = true
end

items
```

The algorithm code contains several details which require to be modified to fit particular requirements related to the API, such as:

```
# Get dependencies
ns = Cenit.namespace(:Zohocrm)
connection = ns.connection(:default_connection)
webhook = ns.webhook(:get_contacts)
check_error_response = ns.algorithm(:do_check_error_response)

items, info = begin
  # Setting options to the webhook submit
  submit_options = {
    headers: {'If-Modified-Since' => options[:start_date]},
    parameters: {
      'page' => options[:offset],
      'per_page' => options[:limit] ||= 100,
      # 'start_date' => options[:start_date],
   },
    template_parameters: {},
    body: {}
  }

  # Webhook submit and check errors to the response
  response = webhook.with(connection).submit(submit_options)
  response = JSON.parse(response, symbolize_names: true)
  check_error_response.run([response, :get_contacts])

  # Here you must obtain the values of the variables 'items' and 'more' from the response of the api
  items = response[:data]
  info = response[:info]

  [items, info]
end

# Preparing the request of the next page
if (info[:more_records])
  task.state[:offset] = info[:page] + 1
  task.state[:import_next_block] = true
end

items
```

**Algorithm parse_from_api_response_contacts**

This algorithm transforms a set of records to the structure of the Cenit data type and stores them in Cenit. It takes one parameter:

- options: A JSON object with some options needed in the parsing process. This object must contain a property items with the array of records to be parsed into Cenit. The array contains the records with their structure in the remote platform.

The algorithm's code generated by the Connector Factory is shown below. It iterates over the parameter items to transform every record to the structure of the Cenit data type and store it in Cenit. The property id in the remote platform is set as remote_id in the Cenit record structure. The string  'MAPPING_FROM_API_RESPONSE' is assigned to the property last_source to indicate that record came from the remote platform. The property imported_at takes the current time and the property rawData stores the record just like it came from the remote platform.

```
# Get dependencies
ns = Cenit.namespace(:Zohocrm)
target_data_type = ns.data_type(:Contact)
current_time = DateTime.try(:now).iso8601

# Mapping and save each item to a record in Cenit
options[:items].each do |item|
  target = {
    remote_id: item[:id],
    last_source: 'MAPPING_FROM_API_RESPONSE',
    imported_at: current_time,
    rawData: item
  }

  target_data_type.create_from_json!(target, primary_field: [:remote_id])
end
```

You rarely need to modify this algorithm's code unless you add to your data type definition more properties which values must be taken from the original record like we do with the id set as remote_id. That's is not our case in the example of Contact in Zoho CRM API. Nevertheless, we are forced to modify some property names in order to skip  $ symbols so they can be stored in Cenit. The algorithm's code below shows that transformation in the item to be assigned to the rawData property.

```
# Get dependencies
ns = Cenit.namespace(:Zohocrm)
target_data_type = ns.data_type(:Contact)
current_time = DateTime.try(:now).iso8601

# Mapping and save each item to a record in Cenit
options[:items].each do |item|

  target = {
    remote_id: item[:id],
    last_source: 'MAPPING_FROM_API_RESPONSE',
    imported_at: current_time,
    rawData:  begin 
                # Removing $ symbols from property names to store the raw data in Cenit
                new_item = {}
                item.each do |key,value|
                  new_item[key.to_s.delete('$')] = value                  
                end
                new_item
              end 
  }


  target_data_type.create_from_json!(target, primary_field: [:remote_id])
end
```
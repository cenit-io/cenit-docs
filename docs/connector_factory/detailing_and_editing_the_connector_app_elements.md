---
sidebar_position: 4

---

# Detailing and Editing the Connector App Elements

Since some elements might need to be customized for fitting particular requirements according to the API, this section explains which resources need to be customized and which ones may remain just like they were generated, as well as the details about every element in the connector app.

**Security** 

In most of cases, you don't need to make any change in the authorization provider, the authorization client or the authorization. However, in the case of the example, we need to set some parameters in the authorization in order to guarantee the refresh-token is gotten sucessfully. So, at first you need to review the provider to check the Refresh Token Strategy is set to the value "default". You don't need to change it because that's the strategy used by Zoho CRM to refresh the access_token.

![24a Connector Factory  Checking the Provider](https://user-images.githubusercontent.com/54523080/169728326-b258bb49-5ee6-4333-86d4-b21617fca342.png)

In the case of the autorization we need to add two parameters in order to enable to recovery of the refresh_token in the authorization process: access_type: "offline" and prompt: "consent".

![24 Connector Factory  Editing the authorization](https://user-images.githubusercontent.com/54523080/169158227-edb37c14-b198-4cf6-9c36-61d8dbb62df5.png)

**Connection**

We don't need to make any change in the connection, but it's important to understand that default_connection contains the authorization as you can see in the picture below. So, when the connection is used in the algorithms it's not necessary to explicitly use the authorization.

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

```json
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

**Data Events**

Two data events for records of type Contact and Lead were generated. They both contains a Trigger Evaluator which determines if a record have been created or updated. You don't need to make any change to the Data Events nor the Trigger Evaluators.

![25a Connector Factory  Data Event List](https://user-images.githubusercontent.com/54523080/170397681-ec620de3-c0a4-493f-b445-8d5340080965.png)

**Algorithms**

Next, we will explain the main algorithms generated by the Connector Factory and  the modifications we need to make in the code of some of them. Since the example of connector app for the Zoho CRM API contains two data types: Contact and Lead, similar algorithms were generated to handle both kinds of records. So, you should notice we are explaining the details about the algorithms related to the data type Contact, but you also need to modify the algorithms related to the data type Lead.

**Algorithm do_import_contact**

This algorithm imports one record of type Contact into Cenit. It takes two parameters:

- options: A JSON object with some options needed in the import process. This object must contain a property remote_id with the record id in the remote platform.

- task: the task of type algorithm execution, which Cenit implicitly adds to the parameter list when the algorithm is called asynchronous.

It calls two algorithms:

- do_get_contact:  makes the request to the remote platform and get the record from the API response

- parse_from_api_response_contacts: transforms the record to the structure of the Cenit data type and stores it in Cenit.

The algorithm's code generated by the Connector Factory  is shown below. It gets the record from the API by calling the algorithm do_get_contact then passes the record as a parameter to the algorithm parse_from_api_response_contacts which stores it in Cenit.

```ruby
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

The algorithm's code generated by the Connector Factory is shown below. It gets a lot (a set) of records from the API by calling the algorithm do_get_contacts then passes the records as a parameter to the algorithm parse_from_api_response_contacts which stores them in Cenit. Then it determines if there are more records to be imported, so it repeats the process by running again the task associated with its execution. The variable task.state[:import_next_block] must be updated by the algorithm do_get_contacts, which receives as a parameter not only the options object, but also the task associated with the execution of the algorithm do_import_contacts.  So the offset property in the options parameter is used by do_get_contacts to determine which lot of records must be requested as well as the task is used to tell do_import_contacts to run itself again.

```ruby
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

This algorithm gets one record of type Contact from the API and return it as a result of the algorithm execution. It takes one parameter:

- options: A JSON object with some options needed in the import process. This object must contain a property remote_id with the record id in the remote platform.

It calls one algorithm:

- do_check_error_response: checks the possible errors obtained in the response from the remote API

The algorithm's code generated by the Connector Factory is shown below. It creates a JSON object with the submit options. Then it makes the request to the API and passes the response as a parameter to the algorithm do_check_error_response to process any possible error in the response. If no error occurs, the record must be obtained from the response to be returned as a result of the algorithm execution.

```ruby
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

- In the case of the example, the API response is empty when no record  with that id is found in the remote platform, so we create a response which contains the error report, so it can be used in the algorithm do_check_error_response.

- The record is obtained from the response by accessing the property data, which is of type array, so we need to access the first and unique element in the array and return  it. 

After those modifications, the algorithm's code looks like the one below.

```ruby
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
  response = response != nil ? response : '{"status":"error", "message": "Record not found"}'
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

```ruby
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

- An additional variable page is used together with the variables items and more

- The header If-Modified-Since is introduced in the submit options hash

- The parameters page and per_page are used instead of offset and limit

- In the case of the example, the API response is empty when no records that match the request conditions are found in the remote platform, so we create a  response which contains an empty array in the property data, so after processing the response, the algorithm will return the empty array.

- The values of the variables items, more and page were obtained from the response

- The variable task.state[:offset] takes the value of the current page (stored in the  variable page) increased in 1.

After those modifications, the algorithm's code looks like the one below.

```ruby
# Get dependencies
ns = Cenit.namespace(:Zohocrm)
connection = ns.connection(:default_connection)
webhook = ns.webhook(:get_contacts)
check_error_response = ns.algorithm(:do_check_error_response)

items, more, page = begin
  # Setting options to the webhook submit
  submit_options = {
    headers: {'If-Modified-Since' => options[:start_date]},
    parameters: {
      'page' => options[:offset],
      'per_page' => options[:limit] ||= 100,
   },
    template_parameters: {},
    body: {}
  }

  # Webhook submit and check errors to the response
  response = webhook.with(connection).submit(submit_options)
  response = response != nil ? response : '{"data":[]}'
  response = JSON.parse(response, symbolize_names: true)
  check_error_response.run([response, :get_contacts])

  # Here you must obtain the values of the variables 'items', 'more' and page from the response of the api
  items = response[:data]
  more = response[:info].present? ? response[:info][:more_records] : false
  page = response[:info].present? ? response[:info][:page] : 0
  [items, more, page]
end

# Preparing the request of the next page
if (more)
  task.state[:offset] = page + 1
  task.state[:import_next_block] = true
end

items
```

**Algorithm parse_from_api_response_contacts**

This algorithm transforms a set of records to the structure of the Cenit data type and stores them in Cenit. It takes one parameter:

- options: A JSON object with some options needed in the parsing process. This object must contain a property items with the array of records to be parsed into Cenit. The array contains the records with their structure in the remote platform.

The algorithm's code generated by the Connector Factory is shown below. It iterates over the parameter items to transform every record to the structure of the Cenit data type and store it in Cenit. The property id in the remote platform is set as remote_id in the Cenit record structure. The string  'MAPPING_FROM_API_RESPONSE' is assigned to the property last_source to indicate that record came from the remote platform. The property imported_at takes the current time and the property rawData stores the record just like it came from the remote platform.

```ruby
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

```ruby
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

**Algorithm do_export_contact**

This algorithm exports one record of type Contact to the remote platform. It takes two parameters:

- options: A JSON object with some options needed in the export process. This object must contain a property id with the record id in the Cenit Data Type.

- task: the task of type algorithm execution, which Cenit implicitly adds to the parameter list when the algorithm is called asynchronous.

It calls three algorithms:

- parse_2_api_request_contact: transforms a record stored in Cenit to the structure expected by the remote platform.

- do_create_contact or do_update_contact: depending of whether a new record was created or an existing record was updated in Cenit, on of these two algorithms is called to make the request for creating or updating a record in the remote platform and get the record created or updated from the API.

- parse_from_api_response_contacts: transforms the record obtained from the API to the structure of the Cenit data type and updates it in Cenit.

The algorithm's code generated by the Connector Factory is shown below. It recovers the record from the Cenit Data Type by using its id. The object in the rawData property is stored in the variable item to be exported later. If the record property remote_id starts with the string "PENDING-PUBLISH-FROM", the algorithm do_create_contact is choosen to be called later for creating a new record in the remote platform. In other case the algorithm do_update_contact is choosen to be called later for updating an existing record in the remote platform.  The item recovered from the Cenit Data Type is passed as a parameter to the method parse_2_api_request_contact together with a boolean variable is_new_target to indicate is the record will be created or updated in the remote platform. The algorithm parse_2_api_request_contact return the data in the format expected by the API. The algorithm previously choosen (do_create_contact or do_update_contact) is called to export the data and return the record created or updated in the API. That record is passsed as a parameter to the algorithm parse_from_api_response_contacts which updates it in Cenit.

```ruby
# Get dependencies
ns = Cenit.namespace(:Zohocrm)
parse_2_api_request = ns.algorithm(:parse_2_api_request_contact)
parse_from_api_response = ns.algorithm(:parse_from_api_response_contacts)

resource = ns.data_type(:Contact).where({ id: options[:id] }).first
item = resource.rawData ? resource.rawData.deep_dup.deep_symbolize_keys : {}

if resource.remote_id =~ /^PENDING-PUBLISH-FROM/
  do_export_action_name = :do_create_contact
else
  do_export_action_name = :do_update_contact
end

response_data = begin
  is_new_target = do_export_action_name == :do_create_contact
  export_data = parse_2_api_request.run([{source: item, is_new_target: is_new_target}])
  action = ns.algorithm(do_export_action_name)
  action.run([{ data: export_data }])
end

if resource.remote_id =~ /^PENDING-PUBLISH-FROM/
  resource.remote_id = response_data[:id]
  resource.save(discard_events: true)
end
items = parse_from_api_response.run([{items: [response_data.deep_dup.deep_symbolize_keys]}])

if items
  Tenant.notify(message: "Successfully action #{do_export_action_name}-#{resource.remote_id} on the remote platform.", :type =>:info)
else
  Cenit.fail("Failed action #{do_export_action_name}-#{resource.id} on the remote platform.")
end

nil
```

You don't need to make any changes to the algorithm's code.

**Algorithm do_create_contact**

This algorithm creates one record of type Contact in the remote platform, gets the created record from the API and returns it as a result of the algorithm execution. It takes one parameter:

- options: A JSON object with some options needed in the import process. This object must contain a property data with the record to be exported to the remote platform. The record in the property data must match the structure expected by the API in the request body.

It calls one algorithm:

- do_check_error_response: checks the possible errors obtained in the response from the remote API

The algorithm's code generated by the Connector Factory is shown below. It creates a JSON object with the submit options. Then it makes the request to the API and passes the response as a parameter to the algorithm do_check_error_response to process any possible error in the response. If no error occurs, the record must be obtained from the response to be returned as a result of the algorithm execution. Sometimes the API doesn't include the entire created record in the response, so, in those cases  a new request must be made for getting the created record.

```ruby
# Get dependencies
ns = Cenit.namespace(:Zohocrm)
connection = ns.connection(:default_connection)
webhook = ns.webhook(:create_contact)
check_error_response = ns.algorithm(:do_check_error_response)

item = begin
# Setting options to the webhook submit
  submit_options = {
    headers: {},
    parameters: {},
    template_parameters: {},
    body: options[:data]
  }

# Webhook submit and check errors to the response
  response = webhook.with(connection).submit(submit_options)
  response = JSON.parse(response, symbolize_names: true)
  check_error_response.run([response, :create_contact])

  response[:contact]
end
item
```

In this case, the algorithm's code needs to be modified to fit particular requirements related to the API, such as:

- options[:data] is converted to json before including the data in the request body.

- The response data is obtained from the response by accessing the property data, which is of type array, so we need to access the first and unique element in the array. The response data doesn't include the entire record, so we need to obtain the record id and call the algorithm do_get_contact for getting the created record from the API and return it as a result of the algorithm do_create_contact.

After those modifications, the algorithm's code looks like the one below.

```ruby
# Get dependencies
ns = Cenit.namespace(:Zohocrm)
connection = ns.connection(:default_connection)
webhook = ns.webhook(:create_contact)
check_error_response = ns.algorithm(:do_check_error_response)

item = begin
# Setting options to the webhook submit
  submit_options = {
    headers: {},
    parameters: {},
    template_parameters: {},
    body: options[:data].to_json
  }

# Webhook submit and check errors to the response
  response = webhook.with(connection).submit(submit_options)
  response = JSON.parse(response, symbolize_names: true)
  check_error_response.run([response, :create_contact])

  response_data = response[:data].first
  remote_id = response_data[:details][:id]
  do_get_contact = ns.algorithm(:do_get_contact)
  do_get_contact.run([{remote_id: remote_id}])
end

item
```

**Algorithm do_update_contact**

This algorithm updates one record of type Contact in the remote platform, gets the updated record from the API and returns it as a result of the algorithm execution. It takes one parameter:

- options: A JSON object with some options needed in the import process. This object must contain a property data with the record to be updated in the remote platform. The record in the property data must match the structure expected by the API in the request body.

It calls one algorithm:

- do_check_error_response: checks the possible errors obtained in the response from the remote API

The algorithm's code generated by the Connector Factory is shown below. It creates a JSON object with the submit options. Then it makes the request to the API and passes the response as a parameter to the algorithm do_check_error_response to process any possible error in the response. If no error occurs, the record must be obtained from the response to be returned as a result of the algorithm execution. Sometimes the API doesn't include the entire created record in the response, so, in those cases a new request must be made for getting the updated record.

```ruby
# Get dependencies
ns = Cenit.namespace(:Zohocrm)
connection = ns.connection(:default_connection)
webhook = ns.webhook(:update_contact)
check_error_response = ns.algorithm(:do_check_error_response)

item = begin
# Setting options to the webhook submit
  submit_options = {
    headers: {},
    parameters: {},
    template_parameters: {},
    body: {
      'id' => options[:data][:id]
    }
  }

# Webhook submit and check errors to the response
  response = webhook.with(connection).submit(submit_options)
  response = JSON.parse(response, symbolize_names: true)
  check_error_response.run([response, :update_contact])

  response[:contact]
end
item
```

In this case, the algorithm's code needs to be modified to fit particular requirements related to the API, such as:

- options[:data] is converted to json before including the data in the request body.

- A template parameter contact_id is included in the submit_options json. The id in the remote platform must be obtained from the structure stored in options[:data]

- The response data is obtained from the response by accessing the property data, which is of type array, so we need to access the first and unique element in the array. The response data doesn't include the entire record, so we need to obtain the record id and call the algorithm do_get_contact for getting the updated record from the API and return it as a result of the algorithm do_update_contact.

After those modifications, the algorithm's code looks like the one below.

```ruby
# Get dependencies
ns = Cenit.namespace(:Zohocrm)
connection = ns.connection(:default_connection)
webhook = ns.webhook(:update_contact)
check_error_response = ns.algorithm(:do_check_error_response)

item = begin
# Setting options to the webhook submit
  submit_options = {
    headers: {},
    parameters: {},
    template_parameters: {
     'contact_id' => options[:data][:data].first[:id]                   
    },
    body: options[:data].to_json
  }

# Webhook submit and check errors to the response
  response = webhook.with(connection).submit(submit_options)
  response = JSON.parse(response, symbolize_names: true)
  check_error_response.run([response, :update_contact])

  response_data = response[:data].first
  remote_id = response_data[:details][:id]
  do_get_contact = ns.algorithm(:do_get_contact)
  do_get_contact.run([{remote_id: remote_id}])
end

item
```

**Algorithm parse_2_api_request_contact**

This algorithm transforms a record to the structure expected by the remote platform and returns it as a result of the algorithm execution. It takes one parameter:

- options: A JSON object with some options needed in the parsing process. This object must contain a property source with the record to be formatted and a boolean property is_new_target, to indicate whether record is going to be created or updated in the remote platform

The algorithm's code generated by the Connector Factory is shown below. It access the parameter options and converts the record in the property source to hash. Then it creates a new data according to the structure expected by the API and returns it. Since the structure may vary depending of what we're going to do with that record: creates a new one in the remote platform or updates an existing record, the property is_new_target can be used to decide wht kind of structure must be returned.

```ruby
# Get dependencies
item = options[:source].to_hash.deep_symbolize_keys

# Get target contact
target = begin
  if options[:is_new_target]
    {
      #create the structure to request a new record.
    }
  else
    #create the structure to request the update a record.
  end
end
target
```

In this case, the algorithm's code needs to be modified to fit particular requirements related to the API, however the code is quite simple. We don't need to use options[:is_new_target] because in the case of creating and updating contacts in the Zoho CRM API the structure in the body is the same for both cases: a json with a property data which contains an array with the element to be created or updated. So the record is obtained from the parameter options, the structure is created and stored in the variable target and then it is returned.

```ruby
# Get dependencies
item = options[:source].to_hash.deep_symbolize_keys

# Get target contact
target = begin
  {
    data: [
            item
          ]
  }
end

target
```

**Algorithm trigger_for_change_contact**

This algorithm is used by the Data Event handle_contact to determine if a record of type Contact have been created or updated in Cenit. It takes two parameter which are  implicitly passed by Cenit when a record is created or updated in the Data Type Contact:

- current_record: the current version of a record after being updated or a new record which was created.
- previous_record: the previous version of a record before being updated or nil in those cases the algorithm is called because a new record was created.

It calls two algorithms:

- do_generate_hmac: generates the hmac of the record passed by parameter
- do_export_contact: exports the record with the id received as a parameter.

The algorithm's code generated by the Connector Factory is shown below. It generates a new hmac for the current record and compares it with the hmac in the property hmac of the current record in order to determine if the current record has changed. If the current record changed, its hmac is updated with the new hmac and it is exported depending on its property last_source as explained below. If the record hadn't changed, a notification announcing it was ignored is created.

If the record had changed it could be exported or not, please consider these details:

- If its property last_source is equal to 'MAPPING_FROM_API_RESPONSE' than means the record changed due to it was imported from the remote platform so it must not be exported.

- If its property last_source is not equal to 'MAPPING_FROM_API_RESPONSE' the record id will be passed by parameter to the algorithm do_export_contact, which will recover the record with that id from the Data Type for exporting it to the remote platform.

- If a record is updated in Cenit and you want it to be updated in the remote platform, you should guarantee its property last_source change its value from 'MAPPING_FROM_API_RESPONSE' to anyone else, if last_source remains as 'MAPPING_FROM_API_RESPONSE' the updated record will be ignored since it supposedly came from the API.

- If a record is created in Cenit and you want it to be created in the remote platform, you should guarantee its property remote_id starts with the string "PENDING-PUBLISH-FROM", that's the way the algorithm do_export_contact decides to create it as a new record in the remote platform. If you miss that detail, the algorithm do_export_contact will try to update in the remote platform a record which actually doesn't exist there.

```ruby
# Get dependencies
ns = Cenit.namespace(:Zohocrm)
do_generate_hmac = ns.algorithm(:do_generate_hmac)

identify = current_record.rawData.try(:name) || current_record.remote_id

current_hmac = do_generate_hmac.run([current_record])

has_changed = current_record.hmac != current_hmac

if has_changed
  current_record.hmac = current_hmac
  current_record.save!(discard_events: true)

  if current_record.last_source != 'MAPPING_FROM_API_RESPONSE' then
    action = ns.algorithm(:do_export_contact)
    action.run_asynchronous([{ id: current_record.id }])
  end
else
  Tenant.notify(message: "Skip events after stored #{identify} identical contact.", :type => :warning)
end

false
```

You don't need to make any changes to the algorithm's code.

**Algorithm do_check_error_response**

This algorithm checks the errors obtained in the response from the remote platform. It takes two parameters:

- response: the response from the remote platform.
- action_identify: the algorithm which is processing the response from the API.

The algorithm's code generated by the Connector Factory is shown below. It's a simple example to show you need to seek for errors in the response body and proceed according to the error found. The parameter action_identify can be used not only for reporting the action algorithm where the error ocurred but also to know how to process the response for finding the error details, which may vary depending on the action.

```ruby
# Here you must check and process the possible errors returned by the api
error = response[:error]

if error
  Tenant.notify(message: "Failed the execution of action #{action_identify}.")
  Cenit.fail("error processing remote resource lead.")
end
```

In this case, the algorithm's code needs to be modified to fit particular requirements related to the API responses. In the responses from the Zoho CRM API, errors may appear in two different structures, for example:

```json
{

"code": "INVALID_TOKEN",

"details": {},

"message": "invalid oauth token",

"status": "error"

}
```

```json
{
    "data": [
        {
            "code": "MANDATORY_NOT_FOUND",
            "details": {
                "api_name": "Last_Name",
                "json_path": "$.data[0].Last_Name"
            },
            "message": "required field not found",
            "status": "error"
        }
    ]
}
```

Or even the API may return an empty response when we request  a record  which doesn't exist, but in this case we create a response object which structure matches the first one above.

So according to that, the algorithm was designed to process both kinds of structures and it looks like the one below.

```ruby
# Here you must check and process the possible errors returned by the api
if response[:status].present? 
  status = response[:status]
  if status == "error"
    Tenant.notify(message: "Failed the execution of action #{action_identify}.")
    Cenit.fail("Error processing remote resource: #{response[:message]}") 
  end  
elsif response[:data] != [] and response[:data].first[:status].present? 
  status = response[:data].first[:status]
  if status == "error"
    response_msg = response[:data].first[:message]
    Tenant.notify(message: "Failed the execution of action #{action_identify}.")
    Cenit.fail("Error processing remote resource: #{response_msg}") 
  end  
end  
```
```yaml
sidebar_position: 2
```

# Algorithms

The [Basic Integration](basic_integration.md) section explains how you can achieve a basic integration in Cenit. In order to get data from an API A and send it to another API B the process or flows should be executed. The [Flows](workflows/flows.md) define how data is routed between endpoints and all integrations in order to automate your operations. Every kind of flow has a different role in the integration, which is implemented on its translator also known as transformation. A Transformation is an algorithm with a specific purpose: it defines a logic for data manipulation. However, you may define other pieces of code which can be used for general purposes. Cenit refers to them as Algorithms.

You can perform operations on algorithms using the Cenit IO API V2. To do this, see the specification of this API regarding [algorithms](https://cenit-io.github.io/api-v2-specs/#tag/Algorithms).

The Compute/Algorithms submenu allows to define new Algorithms as well as managing the algorithms previously defined.

#### Add New

For creating a new Algorithm, click the New button (+) in the [Generic Menu](generic/generic_menu_options_.md) and fill every input field. ![algorithm new](https://user-images.githubusercontent.com/54523080/153494251-d64b96c0-4743-43a6-b4f6-4133dc7bd5b0.png) After pressing the "new" button you can start filling every input field the same way you define any other element in Cenit, however, when naming algorithms some restrictions apply, so read carefully the field's description below. ![algorithm name](https://user-images.githubusercontent.com/54523080/153620451-991cecee-9d0a-4d0a-b64d-140a84317199.png)

- Name:
  
  It defines the algorithm name. By naming elements in Cenit, you're able to link elements each other. Unlike other element names in Cenit, an algorithm name can be used for calling it from another snippet, so that name needs to be a valid identifier in the DSL. Therefore, the algorithm name must fulfill some rules:
  
  - It only contains lowercase letters, digits or underscores (_)
  
  - The first symbol can't be digit neither underscore, so the name starts with a lowercase letter.

Examples of invalid names and valid alternatives:

| Invalid name | Reason for being invalid                                                      | Valid alternative       |
| ------------ | ----------------------------------------------------------------------------- | ----------------------- |
| Get Orders   | Contains uppercase letters and space                                          | get_orders              |
| GetOrders    | Contains uppercase letters. You may not use Camel Case Style                  | get_orders              |
| get-orders   | Contains a hyphen. Only lowercase letters, digits or underscores are accepted | get_orders              |
| _get_orders  | Starts with underscore                                                        | get_orders              |
| 1st_request  | Starts with digit                                                             | first_request request_1 |

- Description:
  
  It allows to describe the algorithm, its goal, the input and output data, etc.

- Parameters:
  
  Sometimes algorithms need some input data which can't be obtained inside the algorithm's code. Those cases require you pass the data to the algorithm in the moment you call it by using parameters. When defining an algorithm you can specify none, one or more parameters. Every parameter is defined by using 4 properties.
  
  *Parameter Properties*
  
  - Name
    
    The parameter name, it must be a valid variable name.
    
    The name contains only letters, digits or underscore and start with letter or underscore. Camel Case Notation is OK for parameters name.
  
  - Type
    
    The type of the parameter. It's optional, when it's not specified, the parameter accept any type.
    
    You can leave it blank or select a type from the pull down menu:
    
    - integer, for integer numbers
    
    - number, for floating point precision numbers
    
    - boolean, for booolean true or false values
    
    - string, for string of characters
    
    - object, for json objects or hash dictionary-like objects.
  
  - Many
    
    Set Many true to indicate the parameter is an array rather than a singular object
  
  - Required
    
    Set Required true to indicate a value must be provided for that parameter. When it's false the parameter takes zero or empty as a default value
    
    If the list of parameters contains both required and optional parameters you are forced to place the required parameters preceding the optional ones. That means a required parameter must not be placed after an optional one in the list.
    
    For example, these lists are OK (the names don't need to contain optional or required, it's just for clarifying purposes):
    
    - optional_a, optional_b, optional_c
    
    - required_a, required_b
    
    - required_a, required_b, optional_a

```
And these lists are NOT OK:

- optional_a, optional_b, required_a, required_b

- required_a, optional_a, required_b
```

- Language:
  
  You may set the language used in the code: Ruby or JavaScript

- Code:
  
  Define the algorithm code. It is written in a DSL based on the Ruby Programming Language. The code is handled by Cenit as a [Snippet](compute/snippets.md). It doesn't mean you are forced to create or edit a snippet when coding, you may just modify the code field and Cenit implicitly updates the linked snippet.

##### How to add parameters

If you want to define one or more parameters, you need to press the + button once: ![parameters](https://user-images.githubusercontent.com/54523080/153798785-e3e5b3d3-9990-40c0-9c4b-81c1bc94ade1.png) Then press repeatedly the other + button ![parameters add more](https://user-images.githubusercontent.com/54523080/153805041-171db7f6-7a58-4e53-a8ad-1a4f6ec153bf.png) After completing the algorithm declaration and pressing the save button, you can see the new algorithm in the list of algorithms and you can manage it as well as you can do with other elements in Cenit. ![algorithm list](https://user-images.githubusercontent.com/54523080/153807270-8420d07f-c80d-4a0b-b8b5-75424624d75e.png)

#### How to execute algorithms

An algorithm can be executed in these ways:

- Run Algorithm option.

- Algorithm execution via Code, from another algorithm.

- Algorithm execution as a scheduled Task .

- Algorithm execution as an application action.

##### Run Algorithm option

From the list of algorithms you can select an algorithm an execute it by using the Run button:

![algorithm run 1](https://user-images.githubusercontent.com/54523080/153808930-f257932a-3286-4b5b-ba58-f7b40811d4e6.png)

If the algorithm has no parameters, you just need to press the save button on the next screen:

![algorithm run 2](https://user-images.githubusercontent.com/54523080/153808933-dd17c9ba-37d9-4932-9478-a73831ad65fc.png)

In those cases the algorithm expects for the parameter's values, after pressing the Run Button:

![algorithm run 3](https://user-images.githubusercontent.com/54523080/153808935-f9d888df-4689-4534-99dc-0ab7079bd838.png)

you need to enter the parameter's values and then press save, for example:

![algorithm run 4](https://user-images.githubusercontent.com/54523080/153808936-b0eeea37-f083-48b5-8030-e4e88894d32f.png)

##### Algorithm execution via Code, from another algorithm

An algorithm can be called from another algorithm or from a transformation or snippet.

When the algorithm called and the algorithm making the call, belong to the same namespace, calling an algorithm is as simple as using its name followed by empty parenthesis, when it not expects parameters, for example:

`algorithm_r()`

![algorithm call 1](https://user-images.githubusercontent.com/54523080/153811242-79d99f70-8736-4cfb-8338-5bb49461f9de.png)

When the algorithms expect the parameter's values, then you need to specify the list of values among parenthesis, for example

`processing_data(5.8, "abc", "Joel", 43, [1,2,3], objJson)`

![algorithm call 2](https://user-images.githubusercontent.com/54523080/153811246-6e03d5d9-98d9-4ab0-a892-9d479a3db2cb.png)

When the algorithms to be called and the algorithm which makes the call belong to different namespaces, then you need to make the call in an explicit way, for example:

`Cenit.namespace('Test').algorithm('algorithm_r').run()`

`Cenit.namespace('Test').algorithm('processing_data').run([5.8, "abc", "Joel", 43, [1,2,3], objJson])`

You should notice in case of passing parameters, the run method receives an array containing the list of the parameter's values.

##### Algorithm execution as a scheduled Task

After executing an algorithm, a [Task](monitors/tasks.md) linked to that algorithm is created. If you associate a scheduler to that task, the algorithm will be executed every time the event occurs. If you want to know how to schedule a task, click here: [Task Scheduling](monitors/tasks.md#task-scheduling)

##### Algorithm execution as an application action

To know how to execute and algorithm as an application action visit [Applications](compute/applications.md)

#### Algorithm's outputs

As a result of an algorithm execution, some data can be created, so the algorithm provides output data by using different ways, such as:

- Returning a value

- Storaging data type records in Cenit

- Sending data to an API

##### Returning a value

Algorithms optionally return a value, so they can be used as functions. If you want to return a value, you don't need to specify an explicit return statement since Ruby automatically returns the last evaluated expression. So, for example, the code below return a json object:

```
   data = {                
             "text": "You got a message from Cenit",
             "channel": "C02S4LXKFL3"
          } 
   data.to_json
```

An explicit return statement can be used in order to stop the algorithm execution in any line of code and return the argument expression. Good Ruby style would generally use an explicit return for an early return only, however the code below is also OK.

```
   data = {                
             "text": "You got a message from Cenit",
             "channel": "C02S4LXKFL3"
          } 
   return data.to_json
```

Besides, by returning nil, you may use the return statement to explicitly make clear the algorithm is not intended to return any value, as shown in the example below:

```
data = {                
         "text": "You got a message from Cenit",
         "channel": "C02S4LXKFL3"
      } 
Cenit.namespace('Test').data_type('SlackMessage').create_from_json(data.to_json)
return nil 
```

##### Storaging data type records in Cenit

If the algorithm is not intended to be reused, it doesn't need to return the output data, it can store the output data directly as a datatype record instead, as shown in the example below:

```
data = {                
         "text": "You got a message from Cenit",
         "channel": "C02S4LXKFL3"
      } 
Cenit.namespace('Test').data_type('SlackMessage').create_from_json(data.to_json)
```

##### Sending data to an API

If the algorithm is not intended to be reused, it doesn't need to return the output data, it can send data directly to an API instead, as shown in the example below:

```
data = {                
         "text": "You got a message from Cenit",
         "channel": "C02S4LXKFL3"
      } 
connection = Cenit.namespace("Test").connection('Slack')
Cenit.namespace("Test").resource("Post Message").with(connection).post(body: data.to_json)
```

#### Algorithm samples

##### Algorithms for importing data

A [Parser Translator](transformations/parsers.md) creates data type records in Cenit from outside data. It deals with only one data type, the type of the data to be created, which is referred in the parser as target data type. Since a Parser Translator is called by an [Import Flow](workflows/import_flows.md), some predefined variables help to simplify its code. However, sometimes is useful to implement the import process from scratch by using an algorithm in order to break the bounderies the flow sets.

The algorithm below makes a request to an endpoint in the Slack API for getting users and stores the user records in Cenit IO.

```
# preparing the connection
connection = Cenit.namespace("Slack").connection('Slack Connection')
webhook = Cenit.namespace("Slack").webhook("Get Users").with(connection)

#sending the request
response = webhook.submit()

#processing the response
data = JSON.parse(response)
if data["members"].present?
  users = data["members"]
  target_data_type = Cenit.namespace('Slack').data_type('Slack User')
  users.each do |user|
    target_data_type.create_from_json(user, primary_field: "id")
  end  
end  
```

There are some details to consider about the previous algorithm, such as:

- The connection named 'Slack Connection' contains the authorization, therefore no authorization is explicitly used in the code.

- A Resource Path named 'Get Users' is selected by using the method webhook and the method with associates it with the connection previously selected.

- Unlike a Parser Translator which no need to send a request because the Import Flow execute the translator after making the request, the algorith needs to send the request itself. The method submit sends the request to the endpoint and returns the API response.

- The algorithms creates records for the data type named 'Slack User' in the namespace 'Slack'.

The algorithm below shows another example of parsing records into a Cenit data type. It makes a request to an endpoint in the Zoho CRM API for getting contacts and stores the contact records in Cenit IO.

```
# preparing the connection
authorization = Cenit.namespace("Zoho").authorization('Zoho Authorization')
connection = Cenit.namespace("Zoho").connection('Zoho Connection').with(authorization)
webhook = Cenit.namespace("Zoho").webhook("Get Contacts").with(connection)


#sending the request
response = webhook.submit()

#processing the response
response = JSON.parse(response)
if response["data"].present?
  remote_contacts = response["data"]
  remote_contacts.each do |remote_contact|  
    remote_contact["zoho_id"] =  remote_contact["id"]
    target_data_type = Cenit.namespace('Zoho').data_type('Zoho Contact')
    target_data_type.create_from_json(remote_contact.to_json, primary_field: "zoho_id")
  end
end     
```

There are some details to consider about the previous algorithm, such as:

- Unlike the other algorithm where no authorization is explicitly used in the code, an authorization named 'Zoho Authorization' is now referenced.

- The connection named 'Zoho Connection' is associated with the authorization by using the method with

- A Resource Path named 'Get Contacts' is selected by using the method webhook and the method with associates it with the connection previously selected.

- The method submit sends the request to the endpoint and returns the API response.

- The algorithms creates records for the data type named 'Zoho Contact' in the namespace 'Zoho'.

The algorithm for parsing Zoho Contacts can be improved in order to request the contacts to the Zoho CRM API in groups of size N instead of the whole list of contacts all at once. It could be important when the amount of records is greater than the maximum allowed to be recovered in one request. Every API set those limits, for example, in the case of Zoho CRM we can request a maximum of 200 contacts in one petition. If we want to parse all the contacts into Cenit IO, we need to make several petitions, requesting 200 every time. The best way to do that in Cenit is by using [Tasks](%5Bmonitors/tasks.md).

When an algorithm is executed, it generates a Task which can be associated to an [Scheduler](workflows/schedulers.md) in order to executed periodically. However, a Task can be used to make different petitions to an API by combining the method parameters and the Task property "state".

The algorithm below shows another example of making requests to an endpoint in the Zoho CRM API for getting contacts in groups of size 200 by using tasks.

```
if task != nil

  # preparing the connection
  authorization = Cenit.namespace("Zoho").authorization('Zoho Authorization')
  connection = Cenit.namespace("Zoho").connection('Zoho Connection').with(authorization)
  webhook = Cenit.namespace("Zoho").webhook("Get Contacts").with(connection)

  per_page = 200
  page = task.state[:page] ||= 1

  tpl = {
    "per_page" => per_page,
    "page" => page
  }

  #sending the request
  response = webhook.submit(template_parameters: tpl)

  #processing the response

  if response != nil
    response = JSON.parse(response)
    if response["data"].present?
      remote_contacts = response["data"]
      remote_contacts.each do |remote_contact|  
        remote_contact["zoho_id"] =  remote_contact["id"]
        target_data_type = Cenit.namespace('Zoho').data_type('Zoho Contact')
        target_data_type.create_from_json(remote_contact.to_json, primary_field: "zoho_id")
      end

      info = response["info"]
      Tenant.notify(message: "#{info['count']} contacts imported successfully!", type: "notice")

      if info["more_records"]
        task.state["page"] = info["page"] + 1
        task.run_again
      end

    end  
  end     

end

true
```

There are some details to consider about the previous algorithm, such as:

- The connection named 'Zoho Connection' is associated with the authorization by using the method with.

- A Resource Path named 'Get Contacts' is selected by using the method webhook and the method with associates it with the connection previously selected. This resource contains parameters page and per_page which can be set via tamplate parameters in order to specify the current page and the amount of records per page to be requested.

- The method submit sends the request to the endpoint and returns the API response.

- The algorithms creates records for the data type named 'Zoho Contact' in the namespace 'Zoho'.

- The algorithm receives a parameter task which is passed by Cenit implicitly when the algorithm is called in an asynchronous way. The property state of the task allows to set some parameters associated to the algorithm execution, for example the page to be requested. So after every execution, if more records need to be imported, the parameter page in the property state is increased in 1, and the task is executed again.

- The algorithm's name is load_zoho_contacts and it should be executed in an asynchronous way in order to generate the task associated to its execution. That call can be made from another algorithm init_integration:
  
  ```
  #loading all the contacts
  
  alg_load_contacts = Cenit.namespace('Zoho').algorithm('load_zoho_contacts')
  alg_load_contacts.run_asynchronous()
  ```
  
  

After the initial load of the contacts, we can schedule another task in order to recover new contacts periodically, for example, every 20 minutes. In order to get only the records which were modified after the last request, we need to use a header in the petition and modify the previous algorithm a little bit.

The algorithm below shows another example of making requests to an endpoint in the Zoho CRM API for getting contacts in groups of size 200 and requesting only those records modified after the last request.

```
if task != nil

  #preparing the connection

  authorization = Cenit.namespace("Zoho").authorization('Zoho Authorization')
  connection = Cenit.namespace("Zoho").connection('Zoho Connection').with(authorization)
  webhook = Cenit.namespace("Zoho").webhook("Get Contacts").with(connection)

  per_page = 10
  page = task.state[:page] ||= 1

  config_data_type = Cenit.namespace('Zoho').data_type('Integration Config')
  last_import  = config_data_type.where(name: "Zoho").first

  tpl = {
    "last_import_date" => last_import['last_import_date'],
    "per_page" => per_page,
    "page" => page
  }

  #sending the request
  response = webhook.submit(template_parameters: tpl)

  #processing the response

  if response != nil
    response = JSON.parse(response)
    if response["data"].present?
      remote_contacts = response["data"]

      remote_contacts.each do |remote_contact|  
        remote_contact["zoho_id"] =  remote_contact["id"]
        target_data_type = Cenit.namespace('Zoho').data_type('Zoho Contact')
        target_data_type.create_from_json(remote_contact.to_json, primary_field: "zoho_id")
      end


      info = response["info"]
      Tenant.notify(message: "#{info['count']} contacts imported successfully!", type: "notice")

      if info["more_records"]
        task.state["page"] = info["page"] + 1
        task.run_again
      else
        # updating the config record with last_import_date equals to "now"
        config = {
          "name" => "Zoho",
          "last_import_date" => Time.now 
        }
       config_data_type = Cenit.namespace('Zoho').data_type('Integration Config')
       config_data_type.create_from_json!(config.to_json, primary_field: "name") 
      end

    end  

  end     

end

true
```

There are some details to consider about the previous algorithm, such as:

- The connection named 'Zoho Connection' is associated with the authorization by using the method with.

- A Resource Path named 'Get Contacts' is selected by using the method webhook and the method with associates it with the connection previously selected. This resource contains parameters page and per_page which can be set via tamplate parameters in order to specify the current page and the amount of records per page to be requested. The header If-Modified-Since and the template parameter last_import_date must be set to specify the last import date and recover only the records modified after that date.

- The method submit sends the request to the endpoint and returns the API response.

- The algorithms creates records for the data type named 'Zoho Contact' in the namespace 'Zoho'.

- The algorithm receives a parameter task which is passed by Cenit implicitly when the algorithm is called in an asynchronous way. The property state of the task allows to set some parameters associated to the algorithm execution, for example the page to be requested. So after every execution, if more records need to be imported, the parameter page in the property state is increased in 1, and the task is executed again.

- When no more records need to be requested, we must update the last_import_date property in a config record in order to use it the next time the algorithm is executed.

- The algorithm's name is import_zoho_contacts and it should be executed in an asynchronous way in order to generate the task associated to its execution. That call can be made from another algorithm init_integration, which also schedule it to be executed according to a scheduler associated to the task:
  
  ```
  #creating the config record with last_import_date empty
  
  config = {
    "name" => "Zoho",
     "last_import_date" => ""
  }
  
  config_data_type = Cenit.namespace('Zoho').data_type('Integration Config')
  config_data_type.create_from_json!(config.to_json, primary_field: "name")
  
  #loading all the contacts
  
  alg_load_contacts = Cenit.namespace('Zoho').algorithm('load_zoho_contacts')
  alg_load_contacts.run_asynchronous()
  
  #updating the config record with last_import_date equals to "now"
  config = {
    "name" => "Zoho",
    "last_import_date" => Time.now 
  }
  config_data_type.create_from_json!(config.to_json, primary_field: "name") 
  
  #scheduling the import contacts task
  
  alg_import_contacts = Cenit.namespace('Zoho').algorithm('import_zoho_contacts')
  scheduler =  Cenit.namespace("Zoho").event("Contacts Every 20 minutes")
  alg_import_contacts.run_asynchronous(scheduler: scheduler)
  
  true
  ```
  
  

- ```
  #creating the config record with last_import_date empty
  
  config = {
    "name" => "Zoho",
     "last_import_date" => ""
  }
  
  config_data_type = Cenit.namespace('Zoho').data_type('Integration Config')
  config_data_type.create_from_json!(config.to_json, primary_field: "name")
  
  #loading all the contacts
  
  alg_load_contacts = Cenit.namespace('Zoho').algorithm('load_zoho_contacts')
  alg_load_contacts.run_asynchronous()
  
  #updating the config record with last_import_date equals to "now"
  config = {
    "name" => "Zoho",
    "last_import_date" => Time.now 
  }
  config_data_type.create_from_json!(config.to_json, primary_field: "name") 
  
  #scheduling the import contacts task
  
  alg_import_contacts = Cenit.namespace('Zoho').algorithm('import_zoho_contacts')
  scheduler =  Cenit.namespace("Zoho").event("Contacts Every 20 minutes")
  alg_import_contacts.run_asynchronous(scheduler: scheduler)
  
  true
  ```

##### Algorithms for mapping data

A [Converter Translator](transformations/converters.md) creates records of a data type B inside Cenit from records of a data type A which were already stored in Cenit. So, It deals with two data types, the type A, which is referred in the converter as source data type, and the data type B, also known as target data type. Since a Converter Translator is called by a [Converter Flow](workflows/converter_flows.md), some predefined variables help to simplify its code, such as source for accesing the record to be mapped and target_data_type which refers to data type of the new record to be created. In case of using an algorithm to implement the mapping process, the source record is received as a parameter and the target data type must be recovered manually.

The algorithm below converts a Slack User record to a Zoho Contact record.

```
  if slack_user.is_email_confirmed
    contact = {
      "Email" => slack_user.profile["email"],
      "Last_Name" => slack_user.profile["last_name"].present? ? slack_user.profile["last_name"] : "-",
      "First_Name" => slack_user.profile["first_name"],
      "Full_Name" => slack_user.profile["real_name"],
      "Skype_ID" => slack_user.profile["skype"],
      "Phone" => slack_user.profile["phone"]
    }
    target_data_type = Cenit.namespace('Zoho').data_type('Zoho Contact')
    target_data_type.create_from_json(contact.to_json, primary_field: "Email")
  end 
```

There are some details to consider about the previous algorithm, such as:

- The algorithm receives the Slack User record in a parameter named slack_user.

- The record is converted to a Zoho Contact record only if its property is_email_confirmed is true.

- Unlike a Converter Translator where target_data_type is a predefined variable populated by the flow before executing the translator, the algorithm must recover the Zoho Contact data type manually.

##### Algorithms for exporting data

A [Template Translator](transformations/templates.md) formats data type records stored in Cenit to data which be sent outside. It deals with only one data type, the type of the data to be formatted and sent, which is referred in the template as source data type. Since a Template Translator is called by a [Export Flow](workflows/export_flows.md), some predefined variables help to simplify its code, such as source for accesing the record to be formatted and exported. In case of using an algorithm to implement the export process, the source record is received as a parameter.

The algorithm below exports a Zoho Contact record to the Zoho CRM API.

```
#preparing the connection
authorization = Cenit.namespace("Zoho").authorization('Zoho Authorization')
connection = Cenit.namespace("Zoho").connection('Zoho Connection').with(authorization)
webhook = Cenit.namespace("Zoho").webhook("Insert Contact").with(connection)


#preparing the request

tpl = {
 "version" => "v2" 
}

headers = {
 "Content-Type" => "application/json" 
}

data = {
  "data" => [
             zoho_contact
            ]
}

#sending the request
response = webhook.submit(headers: headers, template_parameters: tpl, body: data.to_json)

#processing the response
response = JSON.parse(response)
resp_item = response["data"].first
id =  resp_item['details']['id'].present? ? resp_item['details']['id'] : nil
if id.nil?
  notification = "Error! No record added. #{resp_item['code']}"
else  
  notification = "#{resp_item['code']} #{resp_item['message']} id: #{id}"
end  
Tenant.notify(message: notification, type: "notice")
```

There are some details to consider about the previous algorithm, such as:

- The algorithm receives the Zoho Contact record in a parameter named zoho_contact. You should note this record is already stored in Cenit IO.
- The resource "Insert Contact", the connection "Zoho Connection" and the authorization "Zoho Authorization" are used, so they must be defined in the namespace Zoho.
- The resource "Insert Contact" contains a template parameter named version which allows to modify the version path in the URL.
- The method submit is called with some parameters in order to set the request header, the template parameters and the request body.

The algorithm for exporting a Zoho Contact can be improved in order to process the response after inserting the record in the Zoho CRM platform. It allows to update the record in Cenit with the exact data inserted in Zoho CRM. Some properties such as zoho_id, Full_Name, Created_Time, can be modified when inserting in the platform, so it's important to to update the record in Cenit after the insertion is completed.

The algorithm below exports a Zoho Contact record to the Zoho CRM API and update the record in Cenit after inserting in the remote platform.

```
#preparing the connection
authorization = Cenit.namespace("Zoho").authorization('Zoho Authorization')
connection = Cenit.namespace("Zoho").connection('Zoho Connection').with(authorization)
webhook = Cenit.namespace("Zoho").webhook("Insert Contact").with(connection)


#preparing the request

tpl = {
 "version" => "v2" 
}

headers = {
 "Content-Type" => "application/json" 
}

data = {
  "data" => [
             zoho_contact
            ]
}

#sending the request
response = webhook.submit(headers: headers, template_parameters: tpl, body: data.to_json)

#processing the response
response = JSON.parse(response)
resp_item = response["data"].first
id =  resp_item['details']['id'].present? ? resp_item['details']['id'] : nil
if id.nil?
  notification = "Error! No record added. #{resp_item['code']}"
else # the new record id was received and we need to request the record in the platform
     # to update the record in Cenit IO

  notification = "#{resp_item['code']} #{resp_item['message']} id: #{id}"

  # preparing the connection
   webhook = Cenit.namespace("Zoho").webhook("Get Contact").with(connection)

  #preparing the request
  tpl = {
   "contact_id" => id
  }

  #sending the request
  response = webhook.submit(template_parameters: tpl)

  #processing the response
  response = JSON.parse(response)
  if response["data"].present?
    remote_contact = response["data"].first
    contact_data_type = Cenit.namespace("Zoho").data_type("Zoho Contact")
    zoho_contact = contact_data_type.where(id: zoho_contact["id"]).first

    zoho_contact["zoho_id"] = remote_contact["id"]
    zoho_contact["Last_Name"] = remote_contact["Last_Name"]
    zoho_contact["First_Name"] = remote_contact["First_Name"]
    zoho_contact["Full_Name"] = remote_contact["Full_Name"]
    zoho_contact["Owner"] = remote_contact["Owner"]
    zoho_contact["Created_Time"] = remote_contact["Created_Time"]
    zoho_contact["Created_By"] = remote_contact["Created_By"]
    zoho_contact["Modified_By"] = remote_contact["Modified_By"]
    zoho_contact["Modified_Time"] = remote_contact["Modified_Time"]  

    zoho_contact.save(discard_events: true)

    notification = "#{notification} -- Cenit Record Updated with the Remote One"
  end      

end  
Tenant.notify(message: notification, type: "notice")
true
```

There are some details to consider about the previous algorithm, such as:

- The algorithm receives the Zoho Contact record in a parameter named zoho_contact. You should note this record is already stored in Cenit IO.
- The resource "Insert Contact", the connection "Zoho Connection" and the authorization "Zoho Authorization" are used, so they must be defined in the namespace Zoho.
- The resource "Insert Contact" contains a template parameter named version which allows to modify the version path in the URL.
- The method submit is called with some parameters in order to set the request header, the template parameters and the request body.
- If the response contains a record_id meaning the insertion was successful, a new request must be done to recover the entire record from the remote platform.
- The resource named "Get Contact" is used, so it must be defined and it contains a template parameter named "contact_id" which is used to complete the URL with the id received after the insertion.
- When the entire record is received, the record in Cenit IO es recovered by using the id propety in the parameter zoho_contact and that record is updated with the record which came in the response.
- The method save receives a parameter discard_events with value true in order to avoid this update can be consider an update from another source.

##### Algorithms used as trigger evaluators in a Data Event

Both algorithms for mapping and exporting could be associated to a data event in order to be executed when a new record is created in Cenit IO. Actually, only flows can be associated with a data event. However, we can use an especial kind of algorithm to make that possible.

![image](https://user-images.githubusercontent.com/54523080/164339242-5b90da8d-e0ca-4154-b73c-a8526fed0f88.png)

A trigger evaluator is an special kind of algorithm which can be associated to a Data Event. It is executed every time a record of the event Data Type is created or updated. Its objective is determine whether the event ocurrs or not. It receives to parameters: current and previous (in that order), where current refers to the current record created or updated and previous refers to the same record before being updated or it can be nil if the record was created and wasn't present previously. The algorithm returns true if we want to specify the event ocurred or false in other case.

So, a trigger evaluator which determines if a new record have been created is as simple as the one below

```
if previous.nil?
  true
else
  false
end  
```

The event associated with that trigger evaluator ocurrs any time a new record of its Data Type is created. So, you can define a flow to be activated when that event ocurrs. In the case of an algorithm, there is no field "event" in the algorithm definition, so it can't be associated to a data event as we can do with a flow. Nevertheless, there is trick that allows to do that. It's as simple as executing the algorithm directly in the code of the trigger evaluator. As an example you can see the algorithm below

```
if previous.nil?
  if current["zoho_id"].nil?
    alg_export_contact = Cenit.namespace('Zoho').algorithm('export_zoho_contact')
    alg_export_contact.run([current])
  end
end
```

The algorithm export_zoho_contact will be executed by the trigger evaluator every time a new Zoho Contact record is created and its property zoho_id is nil.
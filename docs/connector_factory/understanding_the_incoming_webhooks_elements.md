---
sidebar_position: 6

---

# Understanding the Incoming webhooks elements

As you can see in the section [Creating_a_new_connector_app](connector_factory/creating_a_new_connector_app.md), once a connector app is created, a set of resources is available for implementing the import and the export process of a set of records. The table below shows the elements in the connector app closely related to the implementation of the incoming webhook. This elements are described further and they are related to other elements in the connector app, so you probably need to review the details about other elements in the section [Understanding_the_connector_app_elements](connector_factory/understanding_the_connector_app_elements.md). We are using as an example a connector app to ZohoCRM API that contains an incoming webhook for processing notifications (events) from the Zoho CRM API, so when a new contact is created or an existing one is updated in the remote platform, a request is sent to Cenit IO.

| Element Kind | Elements in the Connector App  | Observation                                                                                             |
| ------------ | ------------------------------ | ------------------------------------------------------------------------------------------------------- |
| Applications | default_app                    | An application where the incoming webhooks can be defined. Its details are explained in this section    |
| Algorithms   | action_hook, action_check_hook | The action algorithms to be used in the incoming webhooks. Their details are explained in this section. |

The [Application](compute/applications.md) default_app allows to set the incoming webhooks, so, it contains the URLs where the API will send the request when an event ocurrs and the algorithms to process that request.

### Application base URL

In the Connector component list you can find the application base URL as the picture below shows. 

![image](https://user-images.githubusercontent.com/54523080/180260873-b25e04eb-31ef-4315-a994-6db0f7ed5982.png)

- **base_url:** *https://server.cenit.io/app/:identifier*

- **identifier:**  An identifier associated to the application, for example: *62d6fe5231cf563*

The identifier is also accesible if you edit the application, as shown below:

![image](https://user-images.githubusercontent.com/54523080/180272322-2990f223-4263-4138-b6d9-8a02a7e4f280.png)

So, in the case of the example, the base URL is *https://server.cenit.io/app/62d6fe5231cf563*

### Application actions

The application contains two actions that refer to the endpoints where the requests can be sent. Every action defines the path and the action algorithm that is called when a request is sent to that endpoint.

![image](https://user-images.githubusercontent.com/54523080/180268281-63b752fa-1c96-43bf-8b0d-3728272ec6ba.png)

One action is defined as:

- path: /hook/:resource_type/:action_type 
  
  where 
  
  :resource_type is the type of the record that was sent  
  
  :action_type is save or import depending of the data sent by the API, as we will explain later

- algorithm: action_hook

![image](https://user-images.githubusercontent.com/54523080/180269859-5dab6dbb-1cf4-45f6-85af-f53559bdfaf1.png)

The other action is defined as:

- path: /hook/:action_type
  
  where
  
  :action_type is save or import depending of the data sent by the API, as we will explain later

- algorithm: action_hook

![image](https://user-images.githubusercontent.com/54523080/180270023-58e52e62-4844-41c9-b279-cffbd15e96cd.png)

So, when we put together the base URL and the actions defined, the endpoints where the requests can be sent when an event ocurr in the case of the example, are:

- *https://server.cenit.io/app/62d6fe5231cf563/hook/contact/import*

- *https://server.cenit.io/app/62d6fe5231cf563/hook/import*

The algorithm action_hook is in charge of processing the request. So there is a close relationship between the algorithm code, the data sent by the remote platform and the parameters :resource_type and :action_type in the URL. We will explain the algorithm code details later, let's see some details about the URL parameters first.

### Application actions URL parameters

The URL parameter **:resource_type** is used to identify the type of record that is sent. As shown above, there are two possible URLs where the API can sent the information about the event. One of them contains the URL parameter :resource_type, "contact" in the case of the example, but the other one doesn't contain the URL parameter  :resource_type. So, a doubt might arise: is it necessary or not? You should understand the algoritm: action_hook always needs the type of the resource that comes in the request since the algorithm is going to create or update a record of that type in Cenit IO. However, You should try to set different URLs for every type of record so you can include the :resource_type parameter in the URL, on the contrary, if the API doesn't allow to set different URLs, the :resource_type will not be included in the URL. So, the algorithm action_hook can recover the type of record from the URL parameter :resource_type or from the data sent by the API. Both approaches have pros and cons which are explained in the table below.

| Approach                                              | Pros                                                                                                                                                                                                                             | Cons                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ----------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| The URL contains the parameter :resource_type         | The algorith action_hook can recover the type of resource easily by accessing the parameter params: params[:resource_type], so the action algorithm doesn't need to execute extra processing of the data.                        | When you handle events related to several resources, you need to configure a different URL in the API for every resource for manually include the value of the :resource_type parameter in the URL.                                                                                                                                                                                                                                                  |
| The URL doesn't contain the parameter  :resource_type | When you handle events related to several resources but the API doesn't allow to set different URLs for each type of record, you are forced to  configure only one URL in the API that is used for every event that is triggered | The algorith action_hook must recover the type of resource by accesing the data obtained from the remote platform and it varies from one API to another. For example, in the case of the Zoho CRM API: resource_type= data[:module].singularize.downcase and in the case of the Slack API: resource_type= data[:event][:type].split('_').first. You should use this approach only when the API doesn't allow to set a different URL for every event. |

The URL parameter **:action_type** takes as a value save or import and it's used to command the algorithm action_hook to save the record just like it comes in the request from the API or to import the record obtained from the response to a new  request from Cenit IO to the API. The value of this parameter depends on the data that the API sends when an event ocurr. As explained in the previous section in some remote platforms, like the Slack API, when an event is triggered, the request sent to Cenit IO contains the entire record that was created or updated in the remote platform, so it can be stored in Cenit IO directly. So, in cases like this one, we can set the URL parameter :action_type with value "save".

![Slack event support](https://user-images.githubusercontent.com/54523080/180131061-38605ef1-1fc5-4111-be92-8be502146454.jpg)

However, in other remote platforms, like Zoho CRM API, when a notification (event) is triggered, the request sent to Cenit IO contains only the id of the record that was created or updated in the remote platform, so Cenit IO needs to use that id to request the entire record in a new petition and recover it from the response. In cases like this one, we must set the URL parameter :action_type with value "import". You should use the same approach when the data contains not only the record_id but only a few properties are included. So, in this case you also need to get the entire record in a new petition.

![Zoho CRM notification support](https://user-images.githubusercontent.com/54523080/180131064-7313101f-e9c1-4996-9b9a-ec962a5f28a2.jpg)

The table below explains the pros and cons of both approaches.

| Approach                         | Pros                                                                                                             | Cons                                                                                                                                                                                                      |
| -------------------------------- | ---------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| :action_type with value "save"   | The algorith action_hook can save the record directly when the event occurs and the request is sent to Cenit IO. | This approach can be used only in those cases the API sends the request with the entire record when the event occurs. It can't be used when only a few properties are sent in the request.                |
| :action_type with value "import" | This approach can be used regardless the API because every API sends the request with at least the record id.    | The algorith action_hook needs to process the request from the remote platform, take the record id, then send a new request to the API , get the entire record from the response and save it in Cenit IO. |

So, you need to meticulously review the API documentation in order to make up the URL you need to set in the event configuration following the rules previously discussed and summarized in the table below.

![image](https://user-images.githubusercontent.com/54523080/180476846-8635b86d-6f7d-4310-8ec7-bd8d562dc02e.png)

### Application parameters

The application parameters allows the action algorithms to get information about the request and format the response. They are accessible in the algorithm code since Cenit implicitly creates them and passes its values as parameters when calling the action algorithm.

![image](https://user-images.githubusercontent.com/54523080/180315418-c5c2b31e-c49c-4304-b48c-a5490c34494d.png)

Their details are described in the table below

| Parameter | Semantics                                                                                                                                                            | Observation                                                           |
| --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------- |
| control   | This object provides different methods to complete commonly used functions while reduces interactions with other Cenit elements.                                     | It's only available in the algorithms linked to an application action |
| params    | It's a hash object which contains pairs name=>value for every parameter sent in the pettition, regardless it is an URL parameter or a parameter in the request body. | It's only available in the algorithms linked to an application action |

### Action algorithms

As mentioned before, the algorithm **action_hook** is in charge of processing the request in the both actions defined in the application default_application. When the incoming webhook is created together with the other components in the connector app, the algorithm action_hook is automatically defined.

![image](https://user-images.githubusercontent.com/54523080/180352556-896e4839-8012-4e36-8027-e3f09c4e2fc2.png)

When an event occurs in the remote platform and a request is sent to the URL defined in the application default_application, Cenit IO executes the algorithm action_hook and implicitly fills and passes the two parameters mentioned before when the application was described. The parameter control allows to access the request body as well as facilitates the access to other components in Cenit IO. On the other hand, the parameter params contains the values of the request parameters, for example the ones in the URL.

The default code of the algorithm action_hook is the one below

```ruby
begin
  control.algorithm(:action_check_hook).run([control, params])

  data = begin
    control.action.body.rewind
    JSON.parse(control.action.body.read).with_indifferent_access
  end

  resource_type = params[:resource_type] || begin
    # TODO: Get resource_type from payload data.
    # data[:resource_type]
  end

  item = begin
    # TODO: Get resource item from payload data.
    # data[:item]
  end

  # TODO: Customize all the action_type you need and the actions to execute for each case.
  if (params[:action_type] == 'save')
    action_name = "parse_from_api_response_#{resource_type.pluralize}"
    action_params = { items: [item] }
  elsif (params[:action_type] == 'import')
    action_name = "do_import_#{resource_type}"
    action_params = { remote_id: item[:id] }
  else
    Cenit.fail("The '#{params[:action_type]}' path param is not an available action_type.")
  end

  desc = 'Processing the hook notification element.'
  action = Cenit.namespace(:Zohocrm).algorithm(action_name)
  action.run_asynchronous(input: [action_params], description: desc)

rescue StandardError => ex
  Tenant.notify(message: "HOOK (Zohocrm::#{resource_type}::#{params[:action_type]}): #{ex.message}", type: :error)
end

control.render :body => nil, :status => 200
```

The data that comes from the remote platform in the request body varies from one API to another. So, you need to customize the algorithm code in order to process the data according to its structure. The process conducted by the algorithm is explained below:

- The algorithm action_check_hook is called to verify the incoming data to the action hook.

- The data is obtained from the request body by using the parameter control

- The resource_type is obtained from the URL parameter or it must be obtained from the data in the request body.

- The resource data must be obtained from the info in the variable data. You should notice that  it can contain the entire record or just the record_id depending on the API.

- If the URL parameter :action_type is "save" that means the entire record comes in the resource data, so the action_name variable is filled with the name of the algorithm used to parse the record into Cenit IO. On the contrary, if the URL parameter :action_type is "import" that means only the record_id comes in the resource data, so the action_name variable is filled with the name of the algorithm used to import a record into Cenit IO by making a get request using its id. The variable action_params is filled with the entire record or the record id, respectively.

- The algorithm whose name was set in the variable action_name is executed for processing the data, that means either store the entire record directly or use the record id for requesting the entire record and then store it in Cenit IO.

For customizing the algorithm code you need to consider all the details explained before. So, for example, in the case of the ZohoCRM API, when a notification is triggered and the request is sent to Cenit IO, the payload data contains info like the one below.

```json
{
    "query_params":{}, 
    "module":"Contacts", 
    "resource_uri":"https://www.zohoapis.com/crm/v2/Contacts", 
    "ids":["5221590000000951001"], 
    "affected_fields":[], 
    "operation":"insert", 
    "channel_id":"5221590000000358640", 
    "token":"TOKEN_CENIT_IO"
}
```

And the code for the action_hook algorithm  in the case of the ZohoCRM API is like the one below

```ruby
begin
  control.algorithm(:action_check_hook).run([control, params])

  data = begin
    control.action.body.rewind
    JSON.parse(control.action.body.read).with_indifferent_access
  end

  resource_type = params[:resource_type] || begin
    data[:module].singularize.downcase
  end

  item = begin
    data[:ids].first
  end

  # TODO: Customize all the action_type you need and the actions to execute for each case.
  if (params[:action_type] == 'import')
    action_name = "do_import_#{resource_type}"
    action_params = { remote_id: item }
  else
    Cenit.fail("The '#{params[:action_type]}' path param is not an available action_type.")
  end

  desc = 'Processing the hook notification element.'
  action = Cenit.namespace(:Zohocrm).algorithm(action_name)
  action.run_asynchronous(input: [action_params], description: desc)

rescue StandardError => ex
  Tenant.notify(message: "HOOK (Zohocrm::#{resource_type}::#{params[:action_type]}): #{ex.message}", type: :error)
end

control.render :body => nil, :status => 200
```

- The algorithm action_check_hook is called to verify the incoming data to the action hook.

- The data is obtained from the request body by using the parameter control

- The resource_type is obtained from the URL parameter. If it didn't come in the URL parameter, then it's obtained from the data in the request body by accesing the property :module which contains the Zoho module where the event took place. This word must be converted to lowercase and must be converted from plural to singular in order to be used in the algorithm name. So you should notice it's better if you configure the event in the API to include the :resource_type parameter, for example "contact", in the URL.

- The resource data is obtained from the info in the variable data. In the case of the ZohoCRM API it contains only the record_id  which is stored in the property :ids which is an array so we need to access to its first element.

- Since the entire record never comes in the body, in the case of the ZohoCRM API the action_type parameter in the URL must be "import" or it would be wrong. So the algorithm do_import_contact (for example) is selected and it is called later passing the record id as a parameter. This algorithm request the entire record and parse it into Cenit IO.

Let's see another example of code for the action_hook algorithm.  In the case of the Slack API, when an event is triggered  and the request is sent to Cenit IO, the payload data contains info like the one below.

```json
{
    "token":"QFwJaMWNyMPmAMif", 
    "team_id":"T02RXV0", 
    "api_app_id":"A02S4M91", 
    "event":{
        "user":{
            "id":"U03Q6C", 
            "team_id":"T02RXV", 
            "name":"ana22", 
            "deleted":false, "color":"684b6c", 
            "real_name":"Ana Smith", 
            "tz":"America/New_York", 
            "tz_label":"Eastern Daylight Time", 
            "tz_offset":-14400, 
            "profile":{
                "title":"", 
                "phone":"", 
                "skype":"", 
                "real_name":"Ana Smith", 
                "real_name_normalized":"Ana Smith", 
                "display_name":"Ana Smith", 
                "display_name_normalized":"Ana Smith", 
                "fields":{}, 
                "status_text":"", 
                "status_emoji":"", 
                "status_emoji_display_info":[], 
                "status_expiration":0, 
                "avatar_hash":"914713f", 
                "image_original":"https://avatars.slack-edge.com/2022-07-19/3843759117459f450_original.jpg", 
                "is_custom_image":true, 
                "email":"ana22@gmail.com", 
                "first_name":"Ana", 
                "last_name":"Smith", 
                "image_24":"https://avatars.slack-edge.com/2022-07-19/384375f5d59f450_24.jpg",
                "image_32":"https://avatars.slack-edge.com/2022-07-19/384375a3f5d59f450_32.jpg", 
                "image_48":"https://avatars.slack-edge.com/2022-07-19/384323a3f5d59f450_48.jpg", 
                "status_text_canonical":"", 
                "team":"T02RXVW"
            }, 
            "is_admin":false, 
            "is_owner":false, 
            "is_primary_owner":false, 
            "is_restricted":false, 
            "is_ultra_restricted":false, 
            "is_bot":false, 
            "is_app_user":false, 
            "updated":1658247603, 
            "is_email_confirmed":true, 
            "who_can_share_contact_card":"EVERYONE", 
            "locale":"en-US"
        }, 
        "cache_ts":1658247603, 
        "type":"user_profile_changed", 
        "event_ts":"1658247603.002000"
    }, 
    "type":"event_callback", 
    "event_id":"Ev03PPC6F3N3", 
    "event_time":1658247603, 
    "authorizations":[
        {
            "enterprise_id":nil, 
            "team_id":"T02RXV", 
            "user_id":"U02S6U", 
            "is_bot":false, 
            "is_enterprise_install":false
        }
    ], 
    "is_ext_shared_channel":false
}
```

The code for the action_hook algorithm in the case of the Slack API is like the one below

```ruby
begin
  control.algorithm(:action_check_hook).run([control, params])

  data = begin
    control.action.body.rewind
    JSON.parse(control.action.body.read).with_indifferent_access
  end

  return control.render json: { challenge: data[:challenge] }, status => 200 if data[:type] ==     'url_verification'

  resource_type = params[:resource_type] || begin
    data[:event][:type].split('_').first
  end

  item = begin
    data[:event][resource_type]
  end

  # TODO: Customize all the action_type you need and the actions to execute for each case.
  if (params[:action_type] == 'save')
    action_name = "parse_from_api_response_#{resource_type.pluralize}"
    action_params = { items: [item] }
  elsif (params[:action_type] == 'import')
    action_name = "do_import_#{resource_type}"
    action_params = { remote_id: item[:id] }
  else
    Cenit.fail("The '#{params[:action_type]}' path param is not an available action_type.")
  end

  desc = 'Processing the hook notification element.'
  action = Cenit.namespace(:Slack).algorithm(action_name)
  action.run_asynchronous(input: [action_params], description: desc)

rescue StandardError => ex
  Tenant.notify(message: "HOOK (Slack::#{resource_type}::#{params[:action_type]}): #{ex.message}", type: :error)
end

control.render :body => nil, :status => 200
```

- The algorithm action_check_hook is called to verify the incoming data to the action hook.

- if data[:type] == 'url_verification' the algorithm is finished and a response is sent to the API with body { challenge: data[:challenge] }. That line was included because Slack uses that mecanism for validating that the event data will be send to the right platform.

- The resource_type is obtained from the URL parameter. If it didn't come in the URL parameter, then it's obtained from the data in the request body by accesing the property :event and inside the event info we must access the property :type. Then we need to take the first word before an underscore.

- The resource data is obtained from the info in the variable data. In the case of the Slack API it contains the entire record which is stored in the property :event and inside the event info we must access the property with the same name of the resource_type which is an array so we need to access to its first element.

- Since the request contains the entire record, the URL parameter :action_type can be configured to "save" (recommended) or to "import". If the URL parameter :action_type is "save" the action_name variable is filled with the name of the algorithm used to parse the record into Cenit IO. On the contrary, if the URL parameter :action_type is "import"  the action_name variable is filled with the name of the algorithm used to import a record into Cenit IO by making a get request using its id. The variable action_params is filled with the entire record or the record id, respectively.

- The algorithm whose name was set in the variable action_name is executed for processing the data, that means either store the entire record directly or use the record id for requesting the entire record and then store it in Cenit IO.

The algorithm **action_check_hook** allows to verify the incoming data to the action hook. Its default code is shown below

```ruby
# TODO: Implement here the control of access to the service.

Cenit.fail("
  This service is not yet accessible.
  Service access control has not yet been implemented.
  Please implement service access control in Zohocrm::action_check_hook algorithm.
")
```

So, the first time and event occurs and the request is sent to Cenit IO, the algorithm action_hook calls the algorithm action_check_hook and the execution is stopped to anounce the process isn't customized yet. After customizing the code in the algorithm action_hook you must change the code in the algorithm action_check_hook to let the process executes succesfully. 

If you are not sure about how to control the access to the service you can just leave the code of the algorithm action_check_hook blank but we recommend to write some code here in order to do some verification. So, depending on the info sent by the API you can check if you want the process to be executed or rejected. You need to find the way of verifying the origin and authenticity of the data. Let's see an example of code of the algorithm action_check_hook for the Zoho CRM API:

```ruby
# TODO: Implement here the control of access to the service.

data = begin
  control.action.body.rewind
  JSON.parse(control.action.body.read).with_indifferent_access
end

if data[:token] != 'TOKEN_CENIT_IO'
  Cenit.fail("A request to the incoming webhook contains a wrong token and it was banned")
end
```

When you configure the event managing in the ZohoCRM API you can set a token that will be send in the request anytime an event occurs. So the algorithm action_check_hook can check if the request contains the right token to let the process continues or make it fail. Of course, the token must be a random secret string in order to prevent requests from other platforms to be accepted. The token string 'TOKEN_CENIT_IO' was used just for instructive purposes.

### Important advice

In order to guarantee the process works the right way, you need to ensure the event managing was enabled and configured on the remote platform. You also must pay attention to the code in the algorithms in order to handle the request data properly.

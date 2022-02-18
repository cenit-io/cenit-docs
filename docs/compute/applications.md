---
sidebar_position: 4

---

# Applications

An application provides a way for accessing Cenit IO from outside by defining a set of actions. Each action in the application associates an URL, usually like https://server.cenit.io/app/{app_path}/{action_path}, to a Cenit algorithm which will be executed when a petition to that URL is done. This feature lets the user create his own applications with customized interfaces and use Cenit IO in the background as well as enabling the interaction with a third party application.

The Compute/Applications submenu allows to define new Applications as well as managing the applications previously defined.

![applications menu](https://user-images.githubusercontent.com/54523080/154362706-83fef0f1-3992-4c61-ae0d-0f14a61d259c.png)

#### Add New

For creating a new Application, click the New button (+) in the [Generic Menu](generic/generic_menu_options_.md) and fill every input field.

![application new](https://user-images.githubusercontent.com/54523080/154362712-1db5d174-88d3-40b1-a200-0323bb615a10.png)

The application can be created like  every other element in Cenit

![applications fields](https://user-images.githubusercontent.com/54523080/154366227-39c0a2a2-065c-4719-b491-0c587cccf752.png)

After entering its namespace, its name and slug you can press the save button and you can see the application in the list of applications. You should note we are using the application name "Messages" as an example, in order to facilitate the explanation you are going to read next.

![application unregistered](https://user-images.githubusercontent.com/54523080/154370080-66e91f15-9cae-437a-af1f-708feb59a79e.png)

In the picture above, you can see the application "Messages" recently created is marked as unregistered. **The field "Registered" field must be set true in order to enable the application to be accessible from outside Cenit**. 

If you make a request to the https://server.cenit.io/app/{app_path}, in the case of our example  https://server.cenit.io/app/messages, the response is "App not found". The slug "messages" have been used as {app_path} but an unregistered application is not accessible from outside as you can see in the picture below. For simplicity, we are using a browser for making the request, but you should consider using the Postman client instead.

![application not found](https://user-images.githubusercontent.com/54523080/154370088-01ba3bbc-1ccb-4d79-ac02-8c486259fb55.png)

For registering the application you can use the Register button as shown below

![application register button](https://user-images.githubusercontent.com/54523080/154370102-6b5cac99-cbba-4323-8f98-fbbf8f647c65.png)

In the next window, you must enter the Slug and  the Oauth Name, which is used in the authorization process. You should consider the Slug you set in the Register Window is the one to be used as the app_path in the URL  https://server.cenit.io/app/{app_path}

![application register window](https://user-images.githubusercontent.com/54523080/154370108-334ae818-c46e-4291-823d-c985e3800182.png)

After pressing the Save button, you can check if the registering was completed successfuly, as shown below

![application registered](https://user-images.githubusercontent.com/54523080/154370112-055cd86a-41ad-4603-b0bd-5224b1657de8.png)

At this point, we can make the request again, as shown in the picture below

![application invalid authentication](https://user-images.githubusercontent.com/54523080/154370125-efad58d2-7bf6-472d-aebc-b3e40bf3b593.png) 

As you can see in the example above, the response is not the same. Now the app has been found, but the authentication failed. For solving that issue, you need to configure the application by pressing the Configure button.

![application configure button](https://user-images.githubusercontent.com/54523080/154370137-f847205e-3d93-42ff-a0ee-77e4fcee2bd1.png)

When configuring the app, you should select one of the two possible values for the authentication method:

- Application ID
  
  It means the user can access freely and Cenit does not request for authentication.

- User Credentials
  
  In this case, when you access the app, Cenit requests for authentication.

In Cenit the redirect URI has the default value  "https://server.cenit.io/oauth/callback"

![application configure window](https://user-images.githubusercontent.com/54523080/154370145-4e370af6-d598-48f4-a187-7910cd4beadb.png)

After selecting Application ID as Authentication Method and saving the configuration, we can repeat the request.

![application bad path](https://user-images.githubusercontent.com/54523080/154370164-c8885d6f-2367-45f8-a2b9-cc1f4169099e.png)

You should note there is no authentication error anymore, the response is just notifying the path doesn't exist. As mentioned before, a correct path has the format https://server.cenit.io/app/{app_path}/{action_path}, so https://server.cenit.io/app/messages is not a valid endpoint and we need to define at least one action in order to enable the access to the URL https://server.cenit.io/app/messages/getMessage

#### Add Action

The URL https://server.cenit.io/app/messages/getMessage we tried to access in the example above is intended to get a Message record from Cenit. If we follow that idea, we would desire an URL https://server.cenit.io/app/messages/getMessages to get all the records of that Data Type or even an URL to store a Message in Cenit, like https://server.cenit.io/app/messages/postMessage. So we want to access Cenit thru the Messages application for sending GET petitions to the paths /getMessage and /getMessages and also sending a POST petition to the path /postMessage. In order to process that requests, we are going to need an algorithm to handle each request. The table below summarizes this scenario.

![application example URLs](https://user-images.githubusercontent.com/54523080/154397700-05195be4-5fd0-4b35-a62d-8f1de9a86c7b.png)

As mentioned before, the slug we set when registering the application determines the application path. An Action allows to associate a path and an HTTP method with the algorithm to be executed when that URL receives a request. So, in the example, we need to add three actions to the application. The Actions field allows to add actions to the Application.

![application example Actions](https://user-images.githubusercontent.com/54523080/154401241-1c7326d7-151a-40f7-93ba-cd7423bd6c45.png)

For adding the actions, in the edit window press the button (+)

![Application edit window](https://user-images.githubusercontent.com/54523080/154404184-3070d5ff-0250-4d5d-bacd-fbabf12a0489.png)

Then press repeadtly the other button (+) to add every Action

![Application add action](https://user-images.githubusercontent.com/54523080/154404194-991fe675-c437-4b66-86fa-7aa2dccc6a1b.png)

Every Action is defined by three fields:

- Method
  
  The HTTP method to be used in the petition (GET, POST, PUT, etc.). If you make a request  to the correct URL and a different HTTP Method is used, Cenit sends a response with  status 400  Bad Request. 

- Path
  
  The action path in https://server.cenit.io/app/{app_path}/{action_path}. The app base URL and the action path make up the endpoint where the petition is sent.

- Algorithm
  
  The algorithm which handles the petition. It's just an algorithm as the ones explained in the  [Algorithms](compute/algorithms.md) section with some advantages detailed further on in this section.

Now, let's going deeper into the actions.

![action getMessage](https://user-images.githubusercontent.com/54523080/154408160-d9355864-6238-48da-a409-4dbfa7d87916.png)

A first approach to the algorithm get_message could be the one below

![get_message_1](https://user-images.githubusercontent.com/54523080/154408176-bdc1b24e-7252-4420-85ab-253e04a19c05.png)

As you can see in the picture above, the algorithm just builds a json object and return it.

Let's use a Postman client to check Cenit responses when the app is accessed from outside. At first, we did a POST request. As you can see, the URL is OK if we check both the application slug and the action path, however Cenit doesn't recognize the path because POST was used  as HTTP method and the action  was defined to accept petitions with method GET. You can see the details in the picture below.

![bad request](https://user-images.githubusercontent.com/54523080/154409031-db0575e0-f461-4357-af91-e32932d053c8.png)

If we change the method to GET, it works. However, there are some issues to care about: the response contains the json object we built into the method and that's fine, but could be better if we can recover the desired record by providing its id in the petition. Moreover, the response header Content-Type wasn't set to application/json. You can see the details in the picture below.

![getMessage Response OK 1](https://user-images.githubusercontent.com/54523080/154408186-2bf3bbce-6488-4b7e-b4ba-57379f10f142.png)

The algorithm you associate to the action can be improved by defining two parameters: control and params. You don't need to specify a type, nor anything else for those two parameters, you just should be careful about defining the parameters control and params in this order. For example, now the algorithm get_message is using  those parameters.

![algorithm params](https://user-images.githubusercontent.com/54523080/154412557-12e86536-6638-4c2e-9c1b-bea06e7241e0.png)

This algorithm's  parameters "control" and "params", are accessible in the algorithm code since Cenit implicitly creates them and passes its values when calling the action algorithm. Their details are described in the table below

| Parameter | Semantics                                                                                                                                                            | Observation                                                           |
| --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------- |
| control   | This object provides different methods to complete commonly used functions while reduces interactions with other Cenit elements.                                     | It's only available in the algorithms linked to an application action |
| params    | It's a hash object which contains pairs name=>value for every parameter sent in the pettition, regardless it is an URL parameter or a parameter in the request body. | It's only available in the algorithms linked to an application action |

**Examples for "params" parameter**:

If a GET request was made and a parameter id was sent in the petition, like:

https://server.cenit.io/app/messages/getMessage?id=C02S4LXKFL3

then params['id'] contains the value "C02S4LXKFL3", so you can assign that value to the variable id:

```
id = params['id']
```

**Details and examples for "control" parameter**:

`control.algorithm` allow to access to a defined algorithm so it can be executed from the action algorithm

For example, if an algorithm get_msg_by_id is defined and it accepts a parameter of type string, it can be called by using the control objetc.

```
msg = control.algorithm(:get_msg_by_id).run(["C02S4LXKFL3"])
```

`control.data_type` allow to access a data type.

For example, if a data type SlackMessage is defined in the namespace Test, we can access to that data type and recover all its records.

```
messages = control.data_type('Test::SlackMessage').all
```

`control.fail` interrupts the algorithm execution and provide a response status 500 with the message specified as a parameter.

```
 control.fail('Server error. Try later') 

 # request processing here is never executed since fail breaks the algorithm execution
```

`control.render` Allows to render the response by defining the content type, the response body and the status.

```
 control.render json: message, status: 200
```

By using the possibilities these parameters bring, we can modify the get_message algorithm to  improve the getMessage action. 

![getMessage New](https://user-images.githubusercontent.com/54523080/154425695-c618cb68-8919-4f65-ab3f-697edc54767a.png)

By using the parameter params we can access to the GET parameter id, then we can use the control objet to access the SlackMessage data type and recover the record with that id:

```
 id = params['id']
 message = control.data_type('Test::SlackMessage').where('id' => id).first
 control.render json: message.to_json, status: 200
```

If we send a new petition, we are now getting the record with the id sent as a get parameter. You should note the response Content-Type is application/json thanks to the control.render method. You can see the details in the picture below.

![getMessage result](https://user-images.githubusercontent.com/54523080/154427336-149b0649-7bb1-4aef-b1e6-f247f61da864.png)

As another example, the action getMessages must recover all the records of the SlackMessage data type.

![getAllMEssages](https://user-images.githubusercontent.com/54523080/154427872-8c98eab2-d556-4846-a626-81a3fff8414e.png)

The algorithm get_all_messages is similar to the action algorithm get_message

![getAll Algorithm](https://user-images.githubusercontent.com/54523080/154427891-5977f58f-5d47-42a3-8555-98a62f5bf67b.png)

The algorithm get_all_messages doesn't use the parameter params since no get parameter is needed. It just recover all the records for the SlackMessage data type.

```
messages = control.data_type('Test::SlackMessage').all
control.render json: messages, status: 200
```

If we make the request in Postman, we are now getting all the records in the response as shown below

![get messages response](https://user-images.githubusercontent.com/54523080/154429137-3b3900d4-f11f-4bef-b34f-df7703faf5d7.png)

In our example, we planned to add a third action: postMessage, which allow to accept a POST request which contains a parameter message and store a new record in Cenit.

![action postMessage](https://user-images.githubusercontent.com/54523080/154587369-2405c6cd-3d27-42fe-964c-dd45956b119b.png)

The algorithm post_message is in charge of receiving the post parameter message and store it in Cenit by using its two parameters control and params.

![postMessage algorithm](https://user-images.githubusercontent.com/54523080/154587384-07dccb5a-a5ee-4701-941e-5e25c19e29d6.png)

The algorithm code is shown below. As you can see, the algorithm uses params to access the json object sent in the request body as a POST parameter named message. On the other hand, the parameter control is used to store the json object as a new record for the SlackMessage data type. 

```
message = params['message']

control.data_type('Test::SlackMessage').create_from_json(message, primary_field: "id")
```

When using this action to send the post request, there are some details we need to care about. At first, it's important to understand the data type json schema in order to format the data properly, in the case of the example, we need to check whether the message instance can be validated against the SlackMessage schema. Then we need to know the correct data structure to be sent in the request body. As mentioned before, the action algorithm is waiting for a json object associated to a key "message". So, the request body must be created accordingly. You can see the details in the picture below.

![Request details](https://user-images.githubusercontent.com/54523080/154590628-cb4d1716-e98a-47f5-88f7-f21c0fb29764.png)

The picture below shows the detail of the request made in Postman.

![posMEssage Response 1](https://user-images.githubusercontent.com/54523080/154607604-e48d0f54-a0de-40fd-a65a-d2fb1e1a6875.png)

You should note the response status is 200 and we got a response body with the default value "Message {message-id}". By rendering a response in the action algorithm, we can easily customize the response body to show the status and a copy of the message sent.

```
message = params['message']

control.data_type('Test::SlackMessage').create_from_json(message, primary_field: "id")

response = {
               "status": "OK",
               "message": message
           }

control.render json: response, status: 200
```

After modifing the post_message algorithm with the code above, we get a response body as shown below

![posMEssage Response 2](https://user-images.githubusercontent.com/54523080/154607617-0106ab6b-a277-4431-a0c4-a6cbd5762ba2.png)
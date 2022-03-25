---
sidebar_position: 2

---

# Connection

The Import Flow gets information from an API as well as the Export Flow sends data to another API. For communicating with those APIs, Cenit needs to know where to send the request. The APIs generally provide a collection of methods with the same base URL, something like:

`https://<baseURL>/<method>`

The API URL  `https://<baseURL>`  and the method's path  `<method>`  make up the endpoint, the whole URL where the request is sent. That means the same base URL can be combined with every method in one API to get multiple endpoints. Therefore, when dealing with an API in Cenit, the base URL should be defined as a Connection, only once, and you should define a resource in [Resource Paths](gateway/resource_paths.md)  for every method used; that way we separate in Cenit the base URL and the methods.

Sending requests to an API is not as simple as accessing an URL in a web browser. Sometimes you need to consider http headers and some parameters in order to send the petition properly. So, a connection consists of an URL and a set of headers, parameters, and template parameters.

## Connection example

Let's use as an example a connection to the Slack API:

The Slack API is a collection of methods, all of them with URLs in the form `https://slack.com/api/METHOD_FAMILY.method`.

The **conversations.list** method lists all channels in a Slack team. It takes only one required parameter: the access token, which is passed as an Authorization Header, and may take other optional parameters, for instance, limit: the maximum number of items to return.

So, a request could be something like this:

```
get https://slack.com/api/conversations.list?limit=10

and the header below should be provided:

Authorization: Bearer {access token here}
```

As mentioned before, the connection contains only the base URL, which is https://slack.com/api/ in this case, and the method conversations.list with its parameter limit, must be defined as a resource in [Resource Paths ](gateway/resource_paths.md). Since the access token is a required parameter for every method, we're are going to include it in the definition of the connection, so it will be available to every resource.

#### Add New

For creating a new Connection, click the New button (+) in the [Generic Menu](generic/generic_menu_options_.md) and fill every input field.

![connection new](https://user-images.githubusercontent.com/54523080/149883960-4ed7fd3d-b832-47d4-89c3-9eb330098e56.png)

![connection new conn](https://user-images.githubusercontent.com/54523080/149884425-9c0e10f8-aaab-435d-91aa-d4052d37c8ed.png)

When creating a Connection we need to set its Namespace, its name and the URL, which is the base URL for that API.

![connection new connection](https://user-images.githubusercontent.com/54523080/149884830-f9da523f-70d0-4495-a1f4-a14c534f2a24.png)

We also need to set the authorization and the parameters and header it might need. The connection URL, parameters and headers can be described by using Liquid Templates. The template parameters and its values are available in the Liquid Templates as local variables so the URL and its components can be computed dynamically.

![credentials](https://user-images.githubusercontent.com/54523080/149885338-6df7fe82-9ff2-485c-af52-59d1c3acb8be.png)

When setting the authorization is important to set true the field Authorization Handler.

 ![headers](https://user-images.githubusercontent.com/54523080/150025093-646488f8-aa7c-414e-b8b3-3a4499dbfe0e.png)

You may set as many headers as you need, by pressing the + button repeatedly. In this case, the value for the header Authorization, which is the keyword Bearer followed by the access token.  The token will be computed dynamically.

![parameters 1](https://user-images.githubusercontent.com/54523080/149980883-dbff2a82-92fe-4869-8a35-af43938a502d.png)

You may also set as many parameters as you need, by pressing the + button repeatedly. In this case, no other parameters are needed, just the access token an it was passed as a header. Besides, you can define template parameters and its values can be assigned via code later.

![connection save](https://user-images.githubusercontent.com/54523080/149888975-a435bd5a-bf67-4ee5-a465-594750a468de.png)

After completing the connection declaration and pressing the save button, you can see the new connection on the list of connections and you can manage it as well as you can do with other elements in Cenit.

![connection list](https://user-images.githubusercontent.com/54523080/149889334-9f028f11-ed4d-4228-b8e7-b31d7259cb30.png)
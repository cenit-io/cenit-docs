---
sidebar_position: 2

---

# Connection

The [Import Flow](workflows/import_flows.md) gets information from an API as well as the [Export Flow](workflows/export_flows.md) sends data to another API. For communicating with those APIs, Cenit needs to know where to send the request. The APIs generally provide a collection of methods with the same base URL, something like:

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

You may also perform operations on connections via CENIT IO API V2. To do that, see more details in the section [Connections](https://cenit-io.github.io/api-v2-specs/#tag/Connections) of this API Spec. 

#### Add New

For creating a new Connection, click the New button (+) in the [Generic Menu](generic/generic_menu_options_.md) and fill every input field.

![New Connection](https://user-images.githubusercontent.com/99367633/160868810-19f81d85-fb81-4fe2-ad71-ac689081df83.png)

![Connection elements](https://user-images.githubusercontent.com/99367633/160863200-76125513-57b4-4027-9546-8e2dcf2e8cfc.png)

When creating a Connection we need to set its Namespace, its name and the URL, which is the base URL for that API.

![First elements](https://user-images.githubusercontent.com/99367633/160863798-6b904c6c-3841-480a-8e88-9634dfec5b4b.png)

We also need to set the authorization and the parameters and header it might need. The connection URL, parameters and headers can be described by using Liquid Templates. The template parameters and its values are available in the Liquid Templates as local variables so the URL and its components can be computed dynamically.

![credentials](https://user-images.githubusercontent.com/54523080/149885338-6df7fe82-9ff2-485c-af52-59d1c3acb8be.png)

When setting the authorization is important to set true the field Authorization Handler.

![Authorization](https://user-images.githubusercontent.com/99367633/160865430-2e20a055-971d-425e-86a5-688a44fddf3e.png)

 You may set as many headers as you need, by pressing the + button repeatedly. In this case, the value for the header Authorization, which is the keyword Bearer followed by the access token.  The token will be computed dynamically.

![parameters 1](https://user-images.githubusercontent.com/54523080/149980883-dbff2a82-92fe-4869-8a35-af43938a502d.png)

You may also set as many parameters as you need, by pressing the + button repeatedly. In this case, no other parameters are needed, just the access token an it was passed as a header. Besides, you can define template parameters and its values can be assigned via code later.

![Save connection](https://user-images.githubusercontent.com/99367633/160866429-121df7d8-0076-425c-9a40-da8c1ac7a8ba.png)

After completing the connection declaration and pressing the save button, you can see the new connection on the list of connections and you can manage it as well as you can do with other elements in Cenit.

![New connection in the list](https://user-images.githubusercontent.com/99367633/160867928-ddecb031-836a-4b05-a412-b67893efd378.png)
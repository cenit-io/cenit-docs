---
sidebar_position: 3

---

# Resource Paths

As mentioned in the [Connections](gateway/connection.md) section, when dealing with an API in Cenit, the base URL should be defined as a Connection, only once, and you should define a Resource Path for every method used; that way we separate in Cenit the base URL and the methods. Both, Connection and Resources Path, make up the endpoint, the whole URL where the request is sent.

The resources are the final step in a flow, implemented like a request HTTP to an endpoint, for sending or receiving data. They allow to define an HTTP Method and its parameters. 

The submenu [Resource Paths](gateway/resources.md) allows to define new resources or managing the existing ones.

The [Connection Example](gateway/connection.md?id=connection-example) in the [Connections](gateway/connection.md) section, refers the definition of  the method conversations.list, with its parameter limit as a resource. So, let's see how doing that.

#### Add New

For creating a new Resource Path, click the New button (+) in the [Resource Paths]() inside [Generic Menu](generic/generic_menu_options_.md), and fill every input field, as shown in figure bellow:

![Filling a resource path](https://user-images.githubusercontent.com/99367633/159992059-17ebae0b-1587-4ad4-9dbd-6a38981d0a3a.png)

Every Resource includes some common fields along with the specific object data for the event, these fields are:

- Namespace: The name of the namespace you are using.

- Name: The name of the resource to be created or getting.

- Path: It defines URL after the connection URL to make the request. Connection URL + Resource URL, define the entire URL petition.

- Method: The operation to do with the resource, for example: GET, POST.

- Description: A text field to describe the purpose of the method for this resource, por example: "this method retrieves all the messages existing in the channel specified".

- Credentials: In Credentials, it is not necessary to specify an authorization if you want to use the same one already defined in the Connection. We note that when defining an authorization at this point, the system will consider it, above the authorization defined in the Connection. It is enough to mark the check "Authorization Handler" as true in order to consider the authorization defined previously in the Connection.

- Parameters: An array of Parameters needed for the petition. They will be part of the petition and they could be sent  as a query string, after the "?" character in the URL, in case of a GET request or inside the request body when another http method is used. 

- Headers: An array of Headers needed for the petition, according of the definition of the method in the API.

- Template parameters: Variables to fill in the resource path, parameters or headers defined in the`{{variable}}` way. Their values ussually are filled via code.

Depending on the headers and parameters a method needs, you must fill those fields. In our example, we need to send the token which was already set as a header when declaring the connection and the parameter limit with value 10. We must define limit as a parameter with key limit and value 10. We could define limit as a template parameter instead, and we will be able to set its value via code later. 

![parameters](https://user-images.githubusercontent.com/54523080/149887939-8a2f3b27-314c-4423-b1dc-9200f00b8216.png)

After completing the resource declaration and pressing the save button, you can see the new resource on the list of resource paths and you can manage it as well as you can do with other elements in Cenit:

![Lista de resource paths](https://user-images.githubusercontent.com/99367633/159995736-c8d85d9e-d0a2-49cb-8652-821a28610fbe.png)

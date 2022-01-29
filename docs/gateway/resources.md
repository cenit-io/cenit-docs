# Resources

As mentioned in the [Connections](gateway/connection.md) section, when dealing with an API in Cenit, the base URL should be defined as a Connection, only once, and you should define a Resource for every method used; that way we separate in Cenit the base URL and the methods. Both, Connection and Resources, make up the endpoint, the whole URL where the request is sent.

The resources are the final step in a flow, implemented like a request HTTP to an endpoint, for sending or receiving data. They allow to define an HTTP Method and its parameters. 

The submenu [Resources](gateway/resources.md) allows to define new resources or managing the existing ones.

The [Connection Example](gateway/connection.md?id=connection-example) in the [Connections](gateway/connection.md) section, refers the definition of  the method conversations.list with its parameter limit as a resource. So, let's see how doing that.

#### Add New

For creating a new Resource, click the New button (+) in the [Generic Menu](generic/generic_menu_options.md) and fill every input field.

Every Resource includes some common fields along with the specific object data for the event, these fields are:

- path:
  
  It defines URL after the connection URL to make the request. Connection URL + Resource URL, define the entire URL petition.

- Parameters:
  
  An array of Parameters needed for the petition. They will be part of the petition, usually are sent after: "?" character in the URL.

- Headers:
  
  An array of Headers needed for the petition.

- Template parameters:
  
  Variables to fill in the resource path, parameters or headers defined in the`{{variable}}` way. Their values ussually are filled via code.

- Operations:
  
  Sometimes the same method, and consequently the entire URL, can be used to execute different actions depending on the http method. That means you can send a get request to an URL and send a post request to the same URL and obtain different results. Therefore, you should add one or more operations to the resource. Every operation could need different parameters that you must define when adding the operation. 

For creating a new Resource, click the New button (+) in the [Generic Menu](generic/generic_menu_options.md) and fill every input field.

![resource new](https://user-images.githubusercontent.com/54523080/150006305-e3d9b5e6-f00c-4cf8-838a-e94838304a2e.png)

You may set as many operations as you need, by pressing the + button repeatedly. In our example there is only one, with method get.

![resource new parameters](https://user-images.githubusercontent.com/54523080/150008417-8613d0c8-a338-42fc-ad1c-1053fb4ee8df.png)

Depending of the headers and parameters a method needs, you must fill those fields. In our example, we need to send the token which was already set as a header when declaring the connection and the parameter limit with value 10. We must define limit as a parameter with key limit and value 10. We could define limit as a template parameter instead and we will be able to set its value via code later. 

![parameters](https://user-images.githubusercontent.com/54523080/149887939-8a2f3b27-314c-4423-b1dc-9200f00b8216.png)

After completing the resource declaration and pressing the save button, you can see the new resource on the list of resources and you can manage it as well as you can do with other elements in Cenit.

![resources list](https://user-images.githubusercontent.com/54523080/150022311-465a14cf-6ea6-41fe-8c35-2a3dbcd27a30.png)

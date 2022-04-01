---
sidebar_position: 3

---

# Authorization Definition

As explained in the [Authorization with OAuth 2.0 Section](security/authorization.md),  during the OAuth 2.0 flow,  Cenit sends an authorization request to a specific **authorization endpoint** by presenting its credentials (**identifier** and **secret**) and the list of **scopes**, usually separated by comma, to clarify which resources are intended to use. If authorized, Cenit receives a temporary authorization **code** that will be sent to a specific **token endpoint** in the authorization server and the code is used for requesting an **access token**. After getting the access token, it will be sent to the resource server anytime you want to access to a protected resource.

In order to enable Cenit for accessing an API's protected resource you need to create an Authorization. The Authorization contains a [Client](security/authorization_clients.md) and this, in turn, contains a [Provider](security/authorization_providers.md). By defining all three of them you embrace every element involved in the OAuth 2.0 flow. So, maybe could be better if you define the provider first, then you can define the client which contains a provider and finally define the authorization which contains a client.

The Security/Authorizations  submenu allows to define new authorization as well as managing the previously defined ones.

#### Add New Authorization

For creating a new authorization, click the New button (+) in the [Generic Menu](generic/generic_menu_options_.md): 

![Add Authorization](https://user-images.githubusercontent.com/99367633/160901377-82f7f9f2-b707-4a4d-a064-da91464b2e60.png)

Then select the type of authorization, usually OAuth 2.0 Authorization, and fill every input field.![Pick Authorization](https://user-images.githubusercontent.com/99367633/160901804-038de6b9-622c-4521-bc22-f32d945b1603.png)

When setting the authorization client, you can select an authorization provider previously defined, or you can create the client from the new authorization interface by clicking the button + in the client field, as explained in [Authorization Clients](security/authorization_clients.md) section.

You need to assign the authorization to a Namespace and setting its Name.

![Selecting client](https://user-images.githubusercontent.com/99367633/160902427-a2975a5d-9e65-41f3-bc67-63a3c63fdef0.png)

Then you need to add the scopes to the list, one by one by pressing the + button that appears in the next figure:

![Adding scopes](https://user-images.githubusercontent.com/99367633/160903272-43db7587-8b0e-4ed0-811b-c656f87512fe.png)

By pressing the + button repeatedly you can add the scopes, one by one.

In the image below, you should note the + button refers to add a new scope to the list and the x button allows to delete some scope.

![Scopes all](https://user-images.githubusercontent.com/99367633/160904274-5ce45343-c683-4daa-8c2c-80973144884d.png)

You can see the elements in the scope list while you are adding every scope needed.

After completing the scope list and filling the other fields, you can finish  the authorization creation by pressing the save button.

At this time, the system confirms the creation of the authorization:

![Authorization view](https://user-images.githubusercontent.com/99367633/160908216-eff84249-5a46-4d64-a7ca-a16594cb748f.png)By selecting the button show in the previous figure, you can see the authorization details.

![Unauthorized](https://user-images.githubusercontent.com/99367633/160908843-0ad662d0-6006-4b58-ad76-ac67529e047f.png)

The image above shows the recently created authorization in detail. You should note an important issue: it hasn't been authorized. So, a final step is needed in order to complete the authorization definition: to **authorize.**

#### Authorize

When you refresh the list of authorizations, the system shows all authorizations created:

![New authorization](https://user-images.githubusercontent.com/99367633/160909212-9a328b46-4ebf-4522-a251-c533d999840c.png)

The authorization creation process can be completed by selecting the authorization in the list and pressing the Authorize button.  In the example, we are going to authorize the authorization named ANAPRUEBA.![Test AnaPrueba](https://user-images.githubusercontent.com/99367633/160914181-43d09075-10d2-4044-b3f5-58337a55839f.png)The authorization process involves the resource owner, so we probably be redirected to the application we're asking for permission. 

So, we could be redirected to different URLs depending on the resource authorization endpoint.

After pressing the button Authorize, we are redirected to Slack APP, as shown in the images below.

![Slack](https://user-images.githubusercontent.com/99367633/160911280-ff7ae61b-4b2f-4e38-8112-e4c1c1330155.png)

You must select the workspace where you created an APP, from which you have the ID Client and ID Secret previously.

![Permitir](https://user-images.githubusercontent.com/99367633/160912769-0da08549-3d48-4780-8252-015747076b60.png)

![Test passed](https://user-images.githubusercontent.com/99367633/160913168-331bbc61-7244-45fc-a568-3a3888722e0b.png)

When the authorization is completed, we can show the authorization details again and we're going to see it was authorized successfully.

![Authorized!](https://user-images.githubusercontent.com/99367633/160913708-1473291c-a7d1-4a58-8da4-da3a222b334e.png)The authorized check mark indicates we're ready to send requests by using the authorization defined, or rather we got permission to do it. 

Of course we need to know the URL we're going to send the request to, so we should define a [Connection](gateway/connection.md).
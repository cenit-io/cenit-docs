# Authorization Definition

As explained in the [Authorization with OAuth 2.0 Section](security/authorization.md),  during the OAuth 2.0 flow,  Cenit sends an authorization request to a specific **authorization endpoint** by presenting its credentials (**identifier** and **secret**) and the list of **scopes**, usually separated by comma, to clarify which resources are intended to use. If authorized, Cenit receives a temporary authorization **code** that will be sent to a specific **token endpoint** in the authorization server and the code is used for requesting an **access token**. After getting the access token, it will be sent to the resource server anytime you want to access to a protected resource.

In order to enable Cenit for accessing an API's protected resource you need to create an Authorization. The Authorization contains a [Client](security/authorization_clients.md) and this, in turn, contains a [Provider](security/authorization_providers.md). By defining all three of them you embrace every element involved in the OAuth 2.0 flow. So, maybe could be better if you define the provider first, then you can define the client which contains a provider and finally define the authorization which contains a client.

The Security/Authorizations  submenu allows to define new authorization as well as managing the previously defined ones.

#### Add New

For creating a new authorization, click the New button (+) in the [Generic Menu](generic/generic_menu_options_.md), then select the type of authorization, usually OAuth 2.0 Authorization, and fill every input field.

![authorizations](https://user-images.githubusercontent.com/54523080/149284081-9f5e709f-e02e-4415-a5ce-f66c30cf8d82.png)
![authorizations type](https://user-images.githubusercontent.com/54523080/149284092-92280585-c73a-497f-a25d-ee3dad75b25c.png)

When setting the client you can select a provider previously defined or you can create the client from the new authorization interface by clicking the button + in the client field as explained in [Authorization Clients](security/authorization_clients.md) section when selecting its provider.

![authorizations selecting client](https://user-images.githubusercontent.com/54523080/149286182-fad0fac0-0eea-4186-8f2a-71209f423152.png)

You need to assign the authorization to a Namespace and setting its Name.

![scopes](https://user-images.githubusercontent.com/54523080/149365480-dcdd8206-001e-4df2-a9c9-464c877443e4.png)

Then you need to add the scopes to the list, one by one by pressing the + button that appears now previous to the x button. In the image below you should note the + button refers to add a new scope to the list and the x button means deleting the entire list.

![scopes add](https://user-images.githubusercontent.com/54523080/149367652-3da2716b-8038-4418-9130-7d2df2665a3a.png)

By pressing the + button repeatedly you can add the scopes, one by one.

![scopes add one](https://user-images.githubusercontent.com/54523080/149368985-7c352e93-288b-4c5d-872e-ef0b0139acbb.png)

You must select the provider linked to the authorization and type the scope name. The description field is optional. After pressing the save button you are ready to add another scope. You can see the elements in the scope list while you are adding every scope needed.

![scopes list](https://user-images.githubusercontent.com/54523080/149370137-75bc2f80-1a00-4a9c-b490-88bef5220dbc.png)

After completing the scope list and filling the other fields you can finish  the authorization creation by pressing the save button.

![authorization save](https://user-images.githubusercontent.com/54523080/149371182-64dcb037-20b1-4e48-8a21-f5f66d9e5342.png) 

When the authorization is saved you can see the new authorization in the list and you can manage it as well as you can do with other elements in Cenit.

![authorization list](https://user-images.githubusercontent.com/54523080/149374258-aa1865b6-4e56-4bb8-9cb3-a20c971305b9.png)

By selecting the authorization and clicking the button show, you can see the authorization details.

![authorization not authorized](https://user-images.githubusercontent.com/54523080/149380595-e5a37ce8-f831-4520-ab35-f1eff5af6e21.png)

The image above shows shows the recently created authorization in detail. You should note an important issue: it hasn't been authorized. So a final step is needed in order to complete the authorization definition: to authorize.

#### Authorize

The authorization creation process can be completed by selecting the authorization in the list and pressing the Authorize button.

![authorization authorize](https://user-images.githubusercontent.com/54523080/149390636-3568da44-d1f2-4e31-b364-1bee358930e7.png)

The authorization process involves the resource owner, so we probably be redirected to the application we're asking for permission. So, we could be redirected to different URLs depending on the resource authorization endpoint.

![authorization authorize redirection](https://user-images.githubusercontent.com/54523080/149393015-e556cd43-d8fd-4e4b-91dc-3959a72a7981.png)

The example of authorization shows a redirection to de Slack API authorization endpoint, so after pressing the button Authorize we are redirected to slack as shown in the image below.

![authorization authorize slack](https://user-images.githubusercontent.com/54523080/149393441-f51d948c-9447-4289-b9da-f07f28df9898.png)

When the authorization is completed, we can show the authorization details again and we're going to see it was authorized successfully.

![authorization authorize show](https://user-images.githubusercontent.com/54523080/149393687-f82ab53b-ea3c-4883-931f-c24f09d7716e.png)

The authorized check mark indicates we're ready to send requests by using the authorization defined, or rather we got permission to do it. Of course we need to know the URL we're going to send the request to, so we should define a [Connection](gateway/connection.md).
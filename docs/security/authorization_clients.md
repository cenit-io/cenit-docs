# Authorization Client

By defining an authorization client you can set the identifier and secret. To know the role of these elements in the authorization process, you can read the [Authorization with OAuth 2.0 Section](security/authorization.md) You must also select a [Provider](security/authorization_providers.md) in order to set the other elements needed in the authorization process. Other optional parameters related to the token request could be set when needed.

The Security/Authorization Clients submenu allows to define a new client as well as managing the previously defined ones.

#### Add New

For creating a new client, click the New button (+) in the [Generic Menu](generic/generic_menu_options_.md), then select the type of client, usually Remote OAuth Client and fill every input field.

![clients](https://user-images.githubusercontent.com/54523080/149278072-035490a9-cea0-4537-979a-77157751f3f0.png)

![client type](https://user-images.githubusercontent.com/54523080/149278250-df6b4f50-690f-40af-a355-e51359639912.png)

When setting the provider you can select a provider previously defined.

![client selecting provider](https://user-images.githubusercontent.com/54523080/149278579-c289e05a-9d6f-4f1e-8bcf-0cc04136d6dc.png)

However, you can also create the provider from the new client interface by clicking the + button in the provider field as explained in [Generic Form Elements](generic/generic_action_form.md)

![client creating provider](https://user-images.githubusercontent.com/54523080/149279064-e734a339-c6c2-40d6-ad8f-d4ce15d7ae83.png)

Clicking the + button will lead you to create a provider the same way you can do it when you use the new action in the [Authorization Providers](security/authorization_providers.md) submenu.

After associating a provider to the client, you must set the identifier and secret parameters. You also need to assign the client to a Namespace and enter a Name that allows to link it with an Authorization.

#### List of providers

After pressing the Save button, the client appears in the client list.

![](C:\Users\joe\AppData\Roaming\marktext\images\2022-01-13-01-52-04-image.png)

#### Managing a client

You can manage a client by selecting it and pressing one of the buttons in the [Generic Menu](generic/generic_menu_options_.md)
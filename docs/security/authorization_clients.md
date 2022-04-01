---
sidebar_position: 4

---

# Authorization Client

By defining an authorization client you can set the identifier and secret. To know the role of these elements in the authorization process, you can read the [Authorization with OAuth 2.0 Section](security/authorization.md) You must also select a [Provider](security/authorization_providers.md) in order to set the other elements needed in the authorization process. Other optional parameters related to the token request could be set when needed.

The Security/Authorization Clients submenu allows to define a new client as well as managing the previously defined ones.

## Add New Authorization Client

For creating a new client, click the New button (+) in the [Generic Menu](generic/generic_menu_options_.md): 

![New authorization client](https://user-images.githubusercontent.com/99367633/160873169-a84d86dc-7320-43cd-829a-9801314ae214.png)

Then, select the type of client, usually Remote OAuth Client, and fill every input field.

![New authorization client](https://user-images.githubusercontent.com/99367633/160873693-27dfc56a-2f0c-4c31-ac10-7234796c8294.png)When setting the provider you can select a provider previously defined.

![Setting the provider](https://user-images.githubusercontent.com/99367633/160879399-45d1dee9-e4d8-40cf-a284-e1a4b1d78ed6.png)

However, you can also create the provider from the new client interface by clicking the + button in the provider field as explained in [Generic Form Elements](generic/generic_action_form.md)

![client creating provider](https://user-images.githubusercontent.com/54523080/149279064-e734a339-c6c2-40d6-ad8f-d4ce15d7ae83.png)

Clicking the + button will lead you to create a provider the same way you can do it when you use the new action in the [Authorization Providers](security/authorization_providers.md) submenu.

After associating a provider to the client, you must set the identifier and secret parameters. You also need to assign the client to a Namespace and enter a Name that allows to link it with an Authorization.

## List of clients

After pressing the Save button, the client appears in the client list.

## ![List of clients](https://user-images.githubusercontent.com/99367633/160879800-1a015394-2e27-434d-806c-aaff4a558a21.png)Managing an authorization client

You can manage an authorization client by selecting it and pressing one of the buttons in the [Generic Menu](generic/generic_menu_options_.md). For example, the next figure shows an authorization client to be edited:

![Manage clients](https://user-images.githubusercontent.com/99367633/160880483-f64d362d-5bc4-4049-b81b-06291dd64709.png)

Similarly, other operations can be performed on that authorization client.
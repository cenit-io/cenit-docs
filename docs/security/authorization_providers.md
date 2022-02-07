---
sidebar_position: 5

---

# Authorization Provider

By defining an authorization provider you can set the response type which is code, the authorization endpoint, the token endpoint, the method the token is sent, the scope separator which is usually a comma (,) and the refresh token strategy. To know the role of these elements in the authorization process, you can read the [Authorization with OAuth 2.0 Section](security/authorization.md)

The Security/Authorization Providers submenu allows to define new provider as well as managing the previously defined ones.

#### Add New

For creating a new provider, click the New button (+) in the [Generic Menu](generic/generic_menu_options_.md), then select the type of provider, usually OAuth 2.0 Provider and fill every input field.

![providers](https://user-images.githubusercontent.com/54523080/149273740-0a164078-1d20-4ea7-b932-a2508f312003.png)

![provider type](https://user-images.githubusercontent.com/54523080/149274373-df538dea-8172-4246-a675-7e66f6e4c621.png)

In order to set the proper parameters, you should read carefully the API Specification.

![provider new](https://user-images.githubusercontent.com/54523080/149274566-6ba6863b-f44c-4548-a681-61ca57bf45d3.png)

You need to assign the provider to a Namespace, enter a Name that allows to link it with an Authorization Client. The authorization and token endpoints should be taken from the API Specification. The refresh token strategy must be set to none if no needed, default if you are going to use a default one or custom if you want to customize it.

#### List of providers

After pressing the Save button, the provider appears in the provider list.

![providers list](https://user-images.githubusercontent.com/54523080/149275698-56f017ec-5531-4c69-b866-f4a86352131d.png)

#### Managing a provider

You can manage a provider by selecting it and pressing one of the buttons in the [Generic Menu](generic/generic_menu_options_.md)

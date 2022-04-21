---
sidebar_position: 5

---

# Authorization Provider

By defining an authorization provider you can set the response type which is code, the authorization endpoint, the token endpoint, the method the token is sent, the scope separator which is usually a comma (,) and the refresh token strategy. To know the role of these elements in the authorization process, you can read the [Authorization with OAuth 2.0 Section](security/authorization.md)

You can perform operations on authorization providers by CENIT IO API V2 according to this API Spec in section [Authorization Providers](https://cenit-io.github.io/api-v2-specs/#tag/Authorizations-Providers).

The Security/Authorization Providers submenu allows to define new provider as well as managing the previously defined ones.

## Add New

For creating a new provider, click the New button (+) in the [Generic Menu](generic/generic_menu_options_.md):

![Adding a provider](https://user-images.githubusercontent.com/99367633/160882988-c227ba73-2ecb-4460-9d7b-033d8e108ad1.png)

Then select the type of provider, usually OAuth 2.0 Provider: 

![Pick a provider](https://user-images.githubusercontent.com/99367633/160883401-f097cf70-e547-4553-9ccf-3d06e5ab9ee8.png)

The next step consists of fill every input field. In order to set the proper elements, you should read carefully the API Specification.

You need to assign to the provider a Namespace. Enter a Name that allows to link it with an Authorization Client. The authorization and token endpoints should be taken from the API Specification. The refresh token strategy must be set to **none** if it is not needed, **default** if you are going to use a default one or **custom** if you want to customize it.

![Provider to Slack](https://user-images.githubusercontent.com/99367633/160876680-ba14bfad-7241-4cd7-bef7-ff660504f5e3.png)

![Token endpoint](https://user-images.githubusercontent.com/99367633/160876242-d90fdf3d-d917-47e0-89ed-c95499184478.png)

## List of providers

After pressing the Save button, the provider appears in the provider list.

![List of providers](https://user-images.githubusercontent.com/99367633/160878059-436c0b93-0061-48e1-937e-dab1fa836470.png)

## Managing a provider

You can manage a provider by selecting it and pressing one of the buttons in the [Generic Menu](generic/generic_menu_options_.md). For example, the next figure shows an authorization provider to be edited:

![Manage provider](https://user-images.githubusercontent.com/99367633/160884263-8bd5f809-c6cd-4f66-b2e0-c0afd5bdf860.png)

Similarly, other operations can be performed on that authorization provider.

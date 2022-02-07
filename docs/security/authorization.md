---

sidebar_position: 2

---



# Authorization with OAuth 2.0

The Import  Flow  gets  information from an API as well as the Export Flow sends data to another API.  For communicating with those APIs, Cenit needs to know  where to send the request, that is a base URL and its endpoint. Moreover, a flow should ask for permission to access that URL and resource. The [Gateway Section](gateway/gateway.md) explains how to define where to send requests, while this section describes how to configure all the elements related to the authorization process.

When defining the authorization in Cenit to enable its access to another API's resource, we need to notice that this process depends on the other API Specification. If Cenit wants to access a resource from an API A and that API implements a basic authorization, then we just need to define a Basic Authorization in Cenit with two simple parameters: username and password. Although Cenit allows you to define different kinds of authorizations, from a basic one to an Oauth 2.0 Authorization, you should consider Oauth 2.0 protocol as the most widely used nowadays. So, let's focus on how to define an Oauth 2.0 Authorization while we keep in mind that Cenit allows us to do it another way when needed.

The picture below shows how Oauth 2.0 protocol works. It was taken from the Slack API Specification [Installing with OAuth | Slack](https://api.slack.com/authentication/oauth-v2) but it's mostly the same regardless the API we're getting authorization from. 

<img src="https://a.slack-edge.com/fbd3c/img/api/articles/oauth_scopes_tutorial/slack_oauth_flow_diagram.png"  alt="Slack Oauth Flow Diagram"  />

During the OAuth 2.0 flow, the client, in our case Cenit, sends an authorization request to a specific **authorization endpoint** by presenting its credentials (**identifier** and **secret**) and the list of **scopes**, usually separated by comma, to clarify which resources are intended to use. If authorized, Cenit receives a temporary authorization **code** that will be sent to a specific **token endpoint**  in the authorization server and the code is used for requesting an **access token**. After getting the access token, it will be sent to the resource server anytime you want to access to a protected resource. The API Specification lets you know how to send the access token, for instance, as an Authorization HTTP header, in a query string or a post body.

The sections [Authorization Definition](security/authorization_definition.md), [Authorization Clients](security/authorization_clients.md) and [Authorization Providers](security/authorization_providers.md) explain the way Cenit implements the OAuth 2.0 Authorization for accessing an API's protected resource.
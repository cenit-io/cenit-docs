# Authorization Concepts

Cenit access has been improved by the implementation of an OAuth 2.0 authorization protocol, more precisely, the implementation of an OAuth 2.0 Authorization Code Flow. Such authorization flow also complies with the OpenID Connect protocol, so it can be used to retrieve End-User’s identity information.

The Authorization Code Flow goes through the following steps:

1. The client prepares an authorization request, with the desired parameters.

2. The client sends the request to the authorization endpoint.

3. The authorization server authenticates the End-User.

4. The authorization server obtains the End-User consent/authorization.

5. The authorization server sends back to the client an authorization code.

6. The client requests a response using the authorization code at the token endpoint.

7. The client receives a response that contains an access token in the response body and possible an ID Token, if it was requested in the authorization request parameters.

## The Authorization Endpoint

The authorization endpoint accepts authorization requests and performs the authentication of the End-User. The URL for the Cenit OAuth authorization endpoint is the combination of the Cenit homepage URL and the path `/{{oauth_path}}/authorization`, where  oauth_path is a Cenit configuration option which default value is oauth.

For example, at `https://app.cenit.io/` the authorization endpoint is:

`https://app.cenit.io/oauth/authorization`

## The Authorization Request

The authorization request is sent to the authorization endpoint to start the authorization code flow. The following OAuth 2.0 request parameters are REQUIRED to accept an authorization request:

- **scope**
  
  In the Cenit OAuth protocol, the scope parameter defines which operations and over which data types, the client is requesting for.  It should be conformed as a space separated sequence of Cenit OAuth Scopes.

- **response_type**
  
  The response_type parameter determines the OAuth 2.0 authorization processing flow to be used. In the Cenit OAuth protocol the value of this parameter should be code.

- **client_id**
  
  A valid client identifier that should correspond with a Cenit App.

- **redirect_uri**
  
  Redirection URI to which the response will be sent. It should exactly match one of the redirection URI values configured at the Cenit App identified by the client_id parameter. 

The **state** parameter is OPTIONAL but RECOMMENDED. As in the OAuth 2.0 protocol, the state parameter is used to maintain state between the request and the callback.

The **show_consent** parameter is also OPTIONAL and can be used to force Cenit to prompt the user consent form to the End-User, even if the requesting access scopes are already granted. To force the prompt of the user consent the value of the show_consent parameter must be true, otherwise the user consent form won’t be prompted unless the authorization access scopes defines a scope not included in the already granted ones.

## Cenit OAuth Scopes

A Cenit OAuth scope defines a Cenit access behavior. They can be classified into three categories: access type scopes,  OpenID Connect scopes and data type access scopes.

### Access Type Scopes

The access type scopes determine how the client can enjoy the granted authorization:

- **offline_access**
  
  The offline_access scope requests an OAuth 2.0 Refresh Token that can be used to obtain an Access Token that grants access to the other authorized scopes even when the End-User is not present, i.e,  not logged in.

- **auth**
  
  The auth scope authorizes the corresponding client Cenit App to authorize other applications to enjoy the same grants it has, except for the auth scope. This means that the corresponding Cenit App is able to generate an authorization response that contains an access token that can be sent to other applications to access Cenit.

### OpenID Connect Scopes

The following OpenID Connect scopes can be used in a Cenit OAuth authorization request:

- **openid**
  
  Request the presence of an ID Token in the authorization response that contains  End-User's identity information according to the other OpenID Connect scopes contained in the authorization grants. Including the openid scope is REQUIRED to be able to include other OpenID Connect scopes.

- **email**
  
  Request access to the  End-User's email address.

- **profile**
  
  Requests access to the End-User's basic profile.

### Data Types Access Scopes

The data type access scopes defines which operations and over which data types, the client is requesting authorization for. There are four access scopes corresponding to the CRUD operations: **create**, **read**, **update** and **delete**.

Each scope, or a scope group, can be followed by a selector that defines, in a JSON format, over which data types the client is requesting authorization. If the selector is not present, then it is understood that the authorization is requesting access to any data type, existing or not, at the moment of the authorization request. If the selector is present, then the access only applies to the data types defined by the selector at the moment of the authorization request. The following examples show how a data type access scope can be defined:

- **read create**
  
  Request access to retrieve and create records on any data type.

- **read create { "namespace": "Test"}**
  
  Request access to retrieve and create records on the data types belonging to the namespace Test at the moment of the request, even if they are moved from the Test namespace later. Further data types included in the namespace Test will not be accessible unless the authorization request is repeated again.

- **create { "namespace": "Test"} read** 
  
  Request access to create records on the data types belonging to the namespace Test at the moment of the request and to retrieve records from any data type.The access scopes selectors are inspired on MongoDB query selectors and if the same access scope is present multiple times in the same request scope parameter then the respective selectors are combined into a single one, except when the access scope is declared with no selector, then all selector for such access scope are suppressed. 

For example:

- **read {"name": "A"} read {"name": "B"}**
  
  Is equivalent to read {"$or": [{"name": "A"},{"name": "B"}]}.

- **read {"name": "A"} create read**
  
  Is equivalent to read create.

## Incremental Grant Access

Cenit OAuth grants access are incremental, which means that new authorizations requests for the same client does not override the previous grant but combine them. Access grants can be inspected at the Cenit homepage URL in the path /oauth_access_grant. 

For example at `https://app.cenit.io` the OAuth access grants can be found at:

`https://app.cenit.io/oauth_access_grant`

The authorization request scope is stored in an access grant for the corresponding client and can be modified by the user thought the edit action.

New authorization request scopes are combined with the previously stored at the corresponding access grant, incrementing that way the access grant for the corresponding client.

## Bad Authorization Request

If the authorization request is not valid the authorization endpoint response code is 400 (bad request) and it will contain information about what makes the request invalid.

## Successful Authorization Response

In the authorization code flow the response to the authorization request is sent to the redirection URI defined in the redirect_uri parameter. The authorization code is added as a query parameter to the redirection URI using the application/x-www-form-urlencoded format. If the state parameter was present in the authorization request then it is also included in the query parameters of the redirection URI.

For example:

`https://example.org/oauth/callback?code=ELTfbg5FpK1K8wk9P&state=UJ5xndxz9Skh9Us-Zahb`

## Authorization Denied Response

If the End-User denies the authorization request, then the error response parameter is added as a query parameter to the redirection URI. If the state parameter was present in the authorization request, then it is also included in the query parameters of the redirection URI.

For example:

`https://example.org/oauth/callback?error=Access+denied&state=UJ5xndxz9Skh9Us-Zahb`

## The Token Endpoint

Clients send tokens request to the token endpoint to obtain Access Tokens and optionally ID Tokensand Refresh Tokens.The URL for the Cenit OAuth token endpoint is the combination of the Cenit homepage URL and the path `/{{oauth_path}}/token`, where  oauth_path is a Cenit configuration option which default value is oauth.For example at `https://app.cenit.io` the authorization endpoint is:

`https://app.cenit.io/oauth/token`

## The Token Request

The Client sends the token request parameters to the Token Endpoint using the HTTP POST method and the form serialization. The following OAuth 2.0 request parameters are REQUIRED to accept a token request:

- **grant_type**
  
  The grant_type parameter defines the type of authorization grant the request is intended for. There are two possible values: authorization_code and refresh_token.

- **client_id** 
  
  A valid client identifier that should correspond with the authorized Cenit App.

- **client_secret**
  
  A valid client secret token that should correspond with the authorized Cenit App.

Depending on the value of the grant_type parameter, some of the following parameters could be also REQUIRED:

- **code**
  
  If the grant_type parameter value is authorization_code then the code parameter is required and its value should be a valid authorization code obtained from an authorization request.

- **redirect_uri**
  
  If the grant_type parameter value is authorization_code then the redirect_uri parameter is required and it should exactly match one of the redirection URI values configured at the Cenit App identified by the client_id parameter.

- **refresh_token**
  
  If the grant_type parameter value is refresh_token then the refresh_token parameter is required and its value should be a valid refresh token obtained from an authorization request with an offline_access scope.

## Token Responses

The response for a token request is always a JSON format content containing information about the request. If the token request success then the response code is 200 and the response body is a JSON document containing the following entries:

- **access_token**
  
  The access token that can be used for an authorization header to access Cenit.

- **token_type**
  
  The OAuth 2.0 access token type, it should be the value Bearer.

- **created_at**
  
  A time-stamp indicating when the access token was created.

- **token_span**
  
  The span time in seconds the token will still valid, usually 3600s.

- **id_token**
  
  If the authorization grant includes openid scopes then the entry id_token contains an ID Token conforming according to such scopes. 

If the token request does not succeed then the response code is 400 and the response body is a JSON document containing just one entry: **errors**. The errors entry value is an array of the errors that makes the token request invalid, for example: Code missing, Refresh token missing, etc.

## Using Access Tokens

Valid access tokens can be used to access the Cenit API by including the Authorization header whose value  is the combination of the access token type and the access token value, for example:

`Bearer ntM5zxdfzEo8CZzN7BxiQwEyNAUwxq-ppxxLCVJGfxaicT2HsZot7E2bPGJ5`

If the access token expires then the client should get a new one, either by starting a new authorization code flow or by making a token request to the token endpoint by using a refresh token previously obtained.

## Handle an authorization via code.

### New Authorization

If you want to create an authorization into a snippet(code of algorithm or translator), you can do it follow this way:

> This example shows an authorization created previously. We can use it as base, copy its properties, and customize it into a new authorization. You must keep  in mind that the authorization base has a client and provider that will be created in the new authorization too, but also you can change them into the hash properties of the new authorization.

```
base_authorization = Cenit.namespace(:Test).authorization(:base)
dt_auth = base_authorization.try(:class).data_type

auth = base_authorization.to_hash.deep_symbolize_keys

auth[:namespace] = 'Test'
auth[:name] = 'test_auth'
auth[:template_parameters] = [{ key: 'shop', value: '123'}]

dt_auth.create_from_json!(new_auth.to_json, primary_field: %w(namespace name))
```

or 

```
base_authorization = Cenit.namespace(:Test).authorization(:base)
dt_auth = base_authorization.try(:class).data_type

auth = base_authorization.to_hash.deep_symbolize_keys

auth.merge!(
  namespace: 'Test',
  name: 'test_auth',
  template_parameters: [{ key: 'shop', value: '123'}]
)

dt_auth.create_from_json!(new_auth.to_json, primary_field: %w(namespace name))
```

## Assign authorization to a connection

A connection could be editable to use different authorizations depending on the scenario where you need it.

```
auth = Cenit.namespace('A').authorization('name_auth')
connection = Cenit.namespace('A').connection('name_connection')
connection.authorization = auth
connection.save
```

## To know if an auth is authorized via code

```
auth = Cenit.namespace('A').authorization('name_auth')
auth.authorized?
```

## Unauthorize an authorization via code

```
auth = Cenit.namespace('A').authorization('name_auth')
auth.cancel!
```

## Delete an authorization via code

```
auth = Cenit.namespace('A').authorization('name_auth')
auth.delete
```

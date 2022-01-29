The Cenit User API Flow

The User API URL is:

`http[s]://{{cenit_host}}/api/v2/setup/user`

To create a user using the API two requests must be successfully completed.

In the first request send the user data to the User API URL using the POST method.

The user data must be a JSON document with the following format:

```JSON
 {
    "email": "jhon@example.com",
    "name": "John Smith",
    "password": "xx-yy-zz",
    "password_confirmation": "xx-yy-zz"
 }
```

Only the email field is mandatory and the order in the JSON document is not relevant. If the password is not provided a random one is generated. The password confirmation is optional but it should match the password if present. All the fields but the email can be sent later in the second request.

A successful response to the first request contains a JSON document containing a token in the following format:

```JSON
 {
   "token": "e6txp_zyjpkj91xadhAy"
 }
```

The token should be used to retrieve a code in a captcha image format at the URL:

`http[s]://{{cenit_host}}/captcha/{{token}}`

The captcha code is then sent together with the token in a second request, also via POST method, to the User API URL. The second request data should be a JSON document with the following format:

```JSON
 {
    "token": "e6txp_zyjpkj99xadhAy",
    "code": "abcde",
    "email": "john@example.com",
    "name": "John Smith",
    "password": "xx-yy-zz",
    "password_confirmation": "xx-yy-zz"
 }
```

Only the token and code fields are mandatory and the other fields values override the ones provided in the first request except for the email that must match the previous value if present.

A success response to the second request contains the created user ID and credentials in the following format:

```JSON
 {
   "id": "59a71756ce50764bce000008",
   "number": "N506688486",
   "token": "gsftq-2YzjKG11qpQBko"
 }
```
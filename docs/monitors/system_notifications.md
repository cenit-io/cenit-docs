---
sidebar_position: 2

---

# System Notifications

The execution of flows, tasks or algorithms might generate system notifications depending of the configuration or resulting from being explicitly created via code. These notifications provide information about the execution. They don't only notify whether the execution was successful or not, but also contain detailed information of HTTP requests and responses in those cases an HTTP request was sent.

You can perform operations on system notifications using CENIT IO API V2. See the section [System Notifications](https://cenit-io.github.io/api-v2-specs/#tag/System-Notifications) in the API Spec.

The Monitors/System Notifications submenu allows to manage the system notifications.

![System notifications menu](https://user-images.githubusercontent.com/54523080/153112162-49f0398b-7e2b-4bef-aad1-0ffedcf0693d.png)

A shortcut to the System Notifications menu is the bell button in the top bar:

![Notifications bell](https://user-images.githubusercontent.com/54523080/153328430-f536524c-83ee-41cd-803d-673913c51b2f.png)

Cenit shows the notifications ordered by date and time in a decreasing way, that means newer first.

![System notifications list 1](https://user-images.githubusercontent.com/54523080/153113106-031e5341-24e4-4cbc-88c1-17df7afbcb1b.png)

Notifications are particularly significant when a flow or algorithm communicate with an API. When that is the case, we can get information about both the request and the response when the process completed.

#### Getting details about the request

By exploring a notification you can get information about the request: the URL the petition was sent to, the URL parameters when they exist, the http headers, etc.

![Notification request](https://user-images.githubusercontent.com/54523080/153116785-f7fec483-c516-4eb8-9860-c80af68fe319.png)

In case of a POST request, you can check the petition body by exploring the attachment

![Notification request atachment](https://user-images.githubusercontent.com/54523080/153123042-005f9ddb-c786-45c1-8781-25493f495004.png)

For that example, the content of the attachment, or rather, the POST body  is:

```
{
 "id":"C02SH94G2E5",
 "text":"You are in varios channel",
 "channel":"C02S4LXKFL3"
}
```

#### Getting details about the response

By exploring a notification you can get information about the response and confirm whether the request was successful or not.

![Notification response](https://user-images.githubusercontent.com/54523080/153123610-a946561e-c5d4-4cd5-a0e3-19fbf370dab8.png)

You can also check the response content by exploring the attachment

![Notification response atachment](https://user-images.githubusercontent.com/54523080/153123622-41ab3334-9d7f-4c22-ad40-d1afb8447df6.png)

For that example, the content of the attachment, or rather, the response body is:

```
{
  "ok":true,
  "channel":"C02S4LXKFL3",
  "ts":"1643439552.770979",
  "message":{"bot_id":
             "B02RQ3DHWTH",
             "type":"message",
             "text":"You are in varios channel",
             "user":"U02S70MGF1A",
             "ts":"1643439552.770979",
             "team":"T02RXV0890W",
             "bot_profile":{"id":"B02RQ3DHWTH",
                            "app_id":"A02S4MXN491",
                            "name":"Joe's App",
                            "icons":{"image_36":"https:\/\/a.slack-edge.com\/80588\/img\/plugins\/app\/bot_36.png",
                                     "image_48":"https:\/\/a.slack-edge.com\/80588\/img\/plugins\/app\/bot_48.png",
                                     "image_72":"https:\/\/a.slack-edge.com\/80588\/img\/plugins\/app\/service_72.png"
                                     },
                            "deleted":false,
                            "updated":1640706919,
                            "team_id":"T02RXV0890W"
                            }
              }
}
```

#### How to create notifications

When executing an algorithm, a flow or a task which involve http requests, notifications  for requests and responses are implicitly generated. Nevertheless, you can configure the flow in order to specify whether you want it to generate notifications or not. 

When defining a flow you can set true or false in both fields Notify Request and Notify Response, so when executing the flow notifications will be generated or not.

![Notify flow](https://user-images.githubusercontent.com/54523080/153129675-80bf0263-a9bc-4f7b-85b6-a77b0960e570.png)

You can achieve the same goal by accessing the Flow Config menu.

![flow config menu](https://user-images.githubusercontent.com/54523080/153130372-078505bf-3d4b-45b2-a461-e6d07e9d639a.png)

You can pick up a flow from the list, edit the configuration and set true if  you want that flow to create notifications or false in other case.

![flow config menu list](https://user-images.githubusercontent.com/54523080/153130824-f977076b-310b-4625-801d-c3618ada6239.png)

Cenit implicitly generates a notification in case of error:

![notification error](https://user-images.githubusercontent.com/54523080/153132106-215018ed-48d7-4e19-b828-10e9caddada2.png)

#### Creating notifications via code

You can also create notifications via code. You can use the Tenant object to create notifications inside an algorithm's code:

![Tenant Error](https://user-images.githubusercontent.com/54523080/153133654-0528b421-3498-438a-8340-2fec38a582e8.png)

After running that algorithm you can see the notification by accessing the System Notifications Menu:

![Tenant error notification](https://user-images.githubusercontent.com/54523080/153133667-14c3dd2f-ee72-4032-95ae-df1c7ef8aa80.png)

You should note the notification type is Error. When omitting the type parameter, the error type is used as a default value

```
Tenant.notify (message: 'error message')
```

However, is possible to create a warning notification by using the parameter type with value warning:

```
Tenant.notify (message: 'warning message', type: 'warning')
```

For example, the code:

![Tenant Warning](https://user-images.githubusercontent.com/54523080/153135158-ca09e952-620a-467d-b4ff-11fa4d487c6f.png)

generates the notification shown below.

![Tenant Warning notification](https://user-images.githubusercontent.com/54523080/153135447-961518e0-ae50-4df8-a3b6-cdcd41a79e19.png)

A notification with a low level of importance can be also created by using the parameter type with value notice:

```
Tenant.notify (message: 'notice message', type: 'notice')
```

For example, the code:

![Tenant Notice](https://user-images.githubusercontent.com/54523080/153135161-63456c45-6105-410a-8f0e-ce55e7c6e4e9.png)

generates the notification shown below.

![Tenant Notice notification](https://user-images.githubusercontent.com/54523080/153135454-c172a10d-d2e6-4590-a8bc-af04798453a9.png)
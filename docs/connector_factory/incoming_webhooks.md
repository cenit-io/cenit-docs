---
sidebar_position: 5

---

# Incoming webhooks

Some APIs allow you to get instant notifications whenever an action is performed on the remote platform. When an API implements the notifications (or events), the system notifies you of the event by sending a request to an URL. So, you can enable notifications based on a specific operation like create or update. That means when a record is created or updated in the remote platform, the event is triggered and automatically a request is send to the defined URL, for example to Cenit IO, where the record can be created or updated.

In order to achieve the goal of creating or updating a record in Cenit IO anytime the record is created or updated in the remote platform, two conditions must be accomplished:

- The remote platform allows to define notifications, events or any other mecanism, no matter its name is, that let you configure the process which sends a request to an URL defined by the user anytime a record is created or updated in the remote platform.

- You must define the resources in Cenit IO in order to accept requests from the remote platform to receive the information about the new record created or updated there. 

The activation of the events in the remote platform may vary from one API to another. For example, in the case of the Slack API you can enable and configure the events via web in the same view where you handle the app which access to the API.

![image](https://user-images.githubusercontent.com/54523080/180124555-7d3191d9-c7d3-4e21-9ad0-19803d82a7ea.png)

However, in the case of the Zoho CRM API you need to send a request for configuring the notifications (events) via API.

![image](https://user-images.githubusercontent.com/54523080/180478205-b2bd30d6-2f98-4ca4-af1b-782ae1291534.png)

On the other hand, the process differs from one API to another. For example, in the case of the Slack API, when an event is triggered, the request sent to Cenit IO contains the entire record that was created or updated in the remote platform, so it can be stored in Cenit IO directly.

![Slack event support](https://user-images.githubusercontent.com/54523080/180131061-38605ef1-1fc5-4111-be92-8be502146454.jpg)

However, in the case of the Zoho CRM API, when a notification (event) is triggered, the request sent to Cenit IO contains only the id of the record that was created or updated in the remote platform, so Cenit IO needs to use that id to request the entire record in a new petition and recover it from the response.

![Zoho CRM notification support](https://user-images.githubusercontent.com/54523080/180131064-7313101f-e9c1-4996-9b9a-ec962a5f28a2.jpg)

The set of resources for implementing this process in Cenit IO is called incoming webhook and it's described in the next section [understanding_the_incoming_webhooks_elements](connector_factory/understanding_the_incoming_webhooks_elements.md)
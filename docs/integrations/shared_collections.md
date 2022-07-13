---
sidebar_position: 3

---

# Shared Collections

Sharing collections is a way to make a collection available to all tenants.
First of all, let's compare this operation with export and then import or pull import. When importing a collection, a user A can use the elements of the collection whose file has been created by another user B and the user B delivered that file, for instance my_collection.json, to the user A. In other words, the collection to be imported is available only to those users which got the file my_collection.json  in advance.

On the other hand, a shared collection is available to every user, so all users will be able to import a shared collection to their tenants by using the Pull action. After pulling the shared collection, they can reuse its elements as they were created or they can be modified them according to the needs of a user in a particular tenant.

You can perform operations on shared collections using the Cenit IO API V2. To do this, see the specification of this API regarding [shared collections](https://cenit-io.github.io/api-v2-specs/#tag/Shared-Collections).

## Creating a Shared Collection

In order to share a collection, you must access the Integration/Collections Menu, select the collection you want to share and press the Share button as shown below.

![image](https://user-images.githubusercontent.com/54523080/178767761-20d1bedf-e859-4a53-8844-600cba50442f.png)

Then you need to configure the shared collection by specifying some attributes:

![image](https://user-images.githubusercontent.com/54523080/178768659-97744673-e68f-4b10-9d24-7642e7c108ed.png)

- name: the name of the shared collection, a lowercase identifier

- title(optional): a title for the shared collection 

- summary(optional): a short description of the shared collection

- pull parameters(optional): a list of parameters that can be requested to the user when importing the shared collection into his(her) tenant.

After entering those fields, you must press the Share button

![image](https://user-images.githubusercontent.com/54523080/178769556-6802fe45-d89a-4bdd-baa1-a2a3152b1a13.png)

When the Share button is pressed, a task is enqueued for sharing the collection in an asynchronous way. 

![image](https://user-images.githubusercontent.com/54523080/178770779-7a3e4ba2-3c75-4a14-880e-64fcf84e842c.png)

Use [System Notifications](monitors/system_notifications.md) to check for errors. If no errors occur, the collection will be shared and you will be notified as shown below

![image](https://user-images.githubusercontent.com/54523080/178771724-86de900a-0e94-44d7-971b-d5d9d2f36870.png)

Then you can access the Integration/Shared Collections Menu and you can see the Shared Collection in the list:

![image](https://user-images.githubusercontent.com/54523080/178777588-07991de8-7742-4b67-9cdb-d7b0c67c0e28.png)

When a Shared Collection is created, it is available in the Shared Collection Menu only in the tenants that belong to the same owner. For example, if we move to other tenant of the same user, the Shared Collection of the example, is available:

![image](https://user-images.githubusercontent.com/54523080/178779103-41732bbe-2b35-4813-9197-810276431224.png)

However, it will not be available to all the tenants until you perform the Cross action. You should notice the title in a purple background indicates the Shared Collection is only available in the tenants owned by the same user.

For making a Shared Collection available to all the tenants, you must select the Shared Collection and press the Cross button as shown below.

![image](https://user-images.githubusercontent.com/54523080/178782986-3d311d28-7704-40ed-b199-3da0785c4ca9.png)

Then you need to select Shared to specify you want to cross the Shared Collection to all the tenants and press the Cross button in the bottom right as shown below. You should know that crossing a Shared Collection to all the tenants is only available to the users with the role "cross_shared". So, when Cenit IO is running in the cloud, only a few users may execute this action, the ones with permission for making a Shared Collection available to all the tenants. So, if you want to share a collection to all the tenants in the cloud app.cenit.io, you can send an email to support@cenit.io suggesting a collection to   be tested and shared. When Cenit IO is running on premise and you want to perform this action, you must ensure the user in charge of crossing the Shared Collection has the right permissions (the role cross_shared) .

![image](https://user-images.githubusercontent.com/54523080/178784955-da825556-3821-4b94-bb9d-0b8281594c89.png)

When the task execution for crossing the Shared Collection  is completed, you will be notified with a view like the one below.

![image](https://user-images.githubusercontent.com/54523080/178785680-f3719379-d60b-4507-a6d2-25220322a739.png)

Then, you can see the Shared Collection with the title in a light-green background, which indicates it's now available to all the tenants.

![image](https://user-images.githubusercontent.com/54523080/178789630-8ec53454-4db7-4e4f-b694-da88024dbc13.png)

## Importing a Shared Collection

You can bring a Shared Collection to your tenant by executing the Pull action to a Shared Collection. At first, let's explore the list of Collection in a tenant used as an example.

![image](https://user-images.githubusercontent.com/54523080/178794708-d93c0a77-f2ae-4e6d-b5ed-e523282dfc15.png)

For importing a Shared Collection to your tenant you need to access the Shared Collection Menu and select the Shared Collection, then press the button Pull. As you can see in the picture below, the Shared Collection Jira used as an example in the previous section, is now available to all tenants.

![image](https://user-images.githubusercontent.com/54523080/178795821-e7f13bd9-8eb4-4777-b842-a0bc6381ae18.png)

After pressing the button Pull, you need to press the button Play.

![image](https://user-images.githubusercontent.com/54523080/178796097-759404cd-18b5-4cdb-9805-5d40ebd9267c.png)

After a while you will be notified to make a review of the collection, so you need to press the button shown below to enter to the review window.

![image](https://user-images.githubusercontent.com/54523080/178797367-6f31e3b0-62d4-4021-9108-5c01e87cd5cf.png)

Then you need to press the button Review

![image](https://user-images.githubusercontent.com/54523080/178797651-c9fde1a1-2159-4559-8f7b-0d8fa62d7e6e.png)

In the next view you can explore all the elements in the collection, then you need to confirm the review by pressing the button at the bottom right:

![image](https://user-images.githubusercontent.com/54523080/178800584-595280a6-341b-4b6b-b017-8d5ed607f64d.png)

After the pull process is completed, you will be notified as shown below.

![image](https://user-images.githubusercontent.com/54523080/178800870-f674bc41-7882-45b2-a18e-15826e1cfac8.png)

Then you can access the Collections Menu and refresh the Collection List

![image](https://user-images.githubusercontent.com/54523080/178801036-6822134c-5c99-4991-bf3e-b9c8a75ca653.png)

And you can see the Collection in your tenant.

![image](https://user-images.githubusercontent.com/54523080/178801191-58eca6e7-a24f-4005-96f8-4d114a83127b.png)

After importing a Shared Collection to your tenant, it will be available to be used, for example, in the Connector Factory, if the collection is of type Connector App.
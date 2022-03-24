---
sidebar_position: 3

---

# Shared Collections.

Sharing collections is a way to make a collection available to all tenants.
First of all, let's compare this operation with export and then import or pull import. When importing a collection, a user A can use the elements of the collection whose file has been created by another user B and the user B delivered that file, for instance my_collection.json, to the user A. In other words, the collection to be imported is available only to those users which got the file my_collection.json  in advance.

On the other hand, a shared collection is available to every user, so all users will be able to import a shared collection to their tenants by using the Pull action. After pulling the shared collection, they can reuse its elements as they were created or they can be modified them according to the needs of a user in a particular tenant.

In order to share a collection, you must go to the Integration Menu/Collections and select the desired collection to share it. 

![image](https://user-images.githubusercontent.com/54523080/159975735-9192b942-d048-4a7d-bdd9-d4f8e6cbf600.png)

After you select the name of the shared collection and its title, you can place in the "Pull Parameters"" those parameters that you want the user to set when downloading the collection to your tenant, for example, connections or authorizations that have template parameters defined.

Finally, selecting the "Share" button launches the task of sharing the collection. See how to do it in the figure below. 

![Sharing a collection second picture](https://user-images.githubusercontent.com/99367633/159582932-bf113cdd-9eef-4f83-9fde-b1a63b46f77f.png)

Use [System Notifications](integrations/shared_collections.md) to check for errors. If no errors occur, after a while the collection will be shared.
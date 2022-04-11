---
sidebar_position: 2

---

# Collections

A collection is a way to organize a group of elements of an integration. By grouping those elements, you are able to manage them all at once, in order to export the collection, import it or share it with another account or tenant.

You can perform operations on collections using the Cenit IO API V2. To do this, see the specification of this API regarding [collections](https://cenit-io.github.io/api-v2-specs/#tag/Collections).

To go the Collection Section, please head over: Integration Menu/ Collections.

![Collections Menu](https://user-images.githubusercontent.com/99367633/159567476-f56cdd59-9b6f-49af-b5fc-586a6d602381.png)

In the previous image, a collection called "connectoslack" is already available.

If you select it, you will be able to see or edit the elements that make up that collection, as shown in the following image:

![Reviewing a connection](https://user-images.githubusercontent.com/99367633/159568976-11ce28b2-8012-45bc-80b6-759843902212.png)

However, it is recommended not to change the elements at this point, but to do so on the elements available in your tenant: datatypes, workflows, resources, etc. to customize them to your specific integration needs.

## Adding new Collections

You can add a new collection by creating your elements in this same environment, but it will be more difficult to test them separately. So, we recommend having the elements ready beforehand and then packing them here.

For creating a new collection, go to the Integrations/Collections/Add Collection menu. Select the "+" button as shown below:

![Adding a new Collection](https://user-images.githubusercontent.com/99367633/159572522-38170c7c-a4f6-4a9c-aabb-9a53b887a31a.png)

Next, you will be presented with a view where you can create the new collection by defining a name, a title and the elements that are going to be part of that collection.
It is important to note that the name of the collection must be written in lowercase. If you want to write more than one word, they must be joined within the name using the underscore character.

For adding elements to the collection you need to press the + button once, as shown below:

![image](https://user-images.githubusercontent.com/54523080/159968422-7016f452-2c8c-4ce1-8689-eacd8a237a2e.png)

Then you can start selecting the elements created in advance. When selecting the elements  available, be careful of typing the element name in the line and choosing the desired one. Remember that if you use the + button, a new element can be created  at that time. An example of selecting an existing element, can be seen on the screen below:

![Pasting a datatype in a new collection](https://user-images.githubusercontent.com/99367633/159576230-d64b3dc0-e2ae-4fc7-9f64-faf84cdd3856.png)

In the picture above, we can add a datatype by selecting it from the list of available datatypes in your tenant.  You can add all the elements that you want in the same way shown before. 

Pull Parameters:

These are defined as generic parameters necessary to establish in a collection when it will be incorporated into another tenant by using the Pull action. 
These parameters could be set into:

- template_parameters of connections or webhooks into the collection.

- any object reference of elements in a collection.
  
  The pull parameters are optional, and its values aren't shared in a collection, so, when the user does pull to a collection, the pull parameters values will be requested.

In any process of creating a collection, you can go to the [System Notifications ](monitors/system_notifications.md)to check that the collection has been created successfully, as we show in the picture below. in this picture, an error ocurred due to a wrong name for the collection. 

![Checking system notifications when creating a collection](https://user-images.githubusercontent.com/99367633/159578267-c4fafec4-be49-4f07-b543-05732ce4780b.png)

## Importing Collections

To import collections do it in the Menu: Integrations/Collections.

In the collections view, select the "import" action on the button shown below:

![Import Operation](https://user-images.githubusercontent.com/99367633/159703223-dc53acb3-272d-4b5d-8649-3f5f7720196b.png)

This operation will increase the amount of collections that you will have available to use their elements or to edit them, in order to solve your specific integration needs.

In the following view, you can drag or upload a file in Json format that contains the elements of the collection to be imported.

![Upload a collection in json format](https://user-images.githubusercontent.com/99367633/159741412-890e0801-47f2-481d-ae40-fdd2d0f7f510.png)

Where it says “Parser” you gently click on the line (no + sign is given, because that causes you to add a new Parser, and what you are going to do is to select one from the list), and select BASIC JSON IMPORTER. Press upload the file .json on the icon shown at the bottom right edge of the screen as shown in next figure:

![Selecting parser to import](https://user-images.githubusercontent.com/99367633/159742908-63a6234d-4f1b-4d90-8f32-d2655c027a03.png)

Then, wait for the process and when it is completed, it refreshes the list of collections and there you can see the new collection imported. At this point, you can see the elements that this collection contains and reuse or edit them at your convenience.

## Pull import Collections

The "Pull import" operation allows you to review the items to be imported before actually updating them.

To pull import a collection, go to Integrations/Collections Menu and select the button shown in the figure below:

![Pull import](https://user-images.githubusercontent.com/99367633/159800118-0c694928-7521-4b45-939f-74e7bdb296c8.png)

The steps to follow are similar to those of the "Import" operation, that is, the .json file is uploaded or dragged, but it is not necessary to select any Parser.
Finally, the operation is executed by pressing the button in the bottom right corner.

The execution triggers a task that is set in the "waiting for pull review" state, as we show now:

![Waiting for pull review](https://user-images.githubusercontent.com/99367633/159801737-b5af802e-8cd6-46ba-a052-0a500261a802.png)

By pressing the arrow that appears in the message written in yellow, you will see the pending task:

![Show Pull Import](https://user-images.githubusercontent.com/99367633/159802965-7dc4a1d1-022c-49e4-a756-3cab0c6b4e87.png)

The same is appreciated in [System Notifications](monitors/system_notifications.md) to see the notification that will show the task as "paused":

![View task pull import](https://user-images.githubusercontent.com/99367633/159803452-5be620af-1a53-4f84-8ec7-9b4212a42053.png)

If you go to [Monitors/Tasks](monitors/tasks.md) Menu, you can appreciate the same task in "pending status" as well:

![Pull import paused](https://user-images.githubusercontent.com/99367633/159805185-32f9013c-95e9-43d0-811d-a9b347786216.png)

This task will be in pending status until you review and confirm the elements you want to import, allowing to import only those elements that are convenient to update or add.

The view where you can review the items to be imported is obtained by pressing the "Review" button highlighted in the following figure:

![Review elements to pull import](https://user-images.githubusercontent.com/99367633/159807794-7a39a45f-9c4e-4c1c-8e3f-04f947337ae9.png)

At this moment, the number of elements that are going to be imported is presented, and you can go through each one of them by means of the "Show" operation.

Any of the elements can be edited before being confirmed.

![Elements in pull importing](https://user-images.githubusercontent.com/99367633/159808094-f3b2d32a-7b5a-4c5c-90b2-21e090ad600e.png)

When all items are reviewed, agree by clicking the button in the bottom right corner. After that, the task is finished, and you will have the possibility to appreciate the new collection by refreshing the list of collections in the Menu Integrations/Collections.

## Exporting a Collection

When there is a finished integration job that you want to share with other tenants, Cenit allows you to export the collection in a Json type file, which is the one used for future import or pull import operations explained above.
To share collections there is also the possibility of using the "Share" action that is explained in the [Shared Collections](integrations/shared_collections.md) section.

Sometimes you could have the need to export your collection without shared to another account or tenant.

To export collections do it in the Menu: Integrations/Collections.

In the collections view, select the "export" operation on the button shown below:

![Export Operation](https://user-images.githubusercontent.com/99367633/159811211-8247b1f4-e6bc-42f8-9109-f5f475731c79.png)

By means of this operation, a file in JSON format or in XML format with the elements of the desired collection can be obtained. 

The most common is to use JSON format, and define JSON Portable Exporter in the Template. Remember to make the selection of the Template by gently pressing the line below the Template, as shown in the figure below:

![Export View](https://user-images.githubusercontent.com/99367633/159812277-44b99de5-b450-424b-9041-8445c26233db.png)

Finally, press the button in the bottom right corner to export the collection. 

A view of the export process is shown on the following screen:

![Export Process](https://user-images.githubusercontent.com/99367633/159812601-76af450a-f0fd-4b21-86e9-23f6d89db344.png)

Go to the Tasks view in the Menu Monitors in order to see the task:

![Exportacion realizada](https://user-images.githubusercontent.com/99367633/159814456-486c4821-f589-4ac5-b5fd-9f1f20ec42fe.png)

In [System Notifications](monitors/system_notifications.md), you will select the appropiate notification, open it and observe the JSON created as an attachment that you can download:[]()

![Json selected](https://user-images.githubusercontent.com/99367633/159815092-10ee95fe-7d2a-4915-8d36-78ea3063cb23.png)

Simply click on the attachment and you can view and save it:

![Final Json exported](https://user-images.githubusercontent.com/99367633/159815465-97f6681a-5db6-4283-91c5-88ae64abfd14.png)

---
sidebar_position: 6

---

# Creating a new Recipe

### Precondition to create the Recipe

The Recipe uses a Connector App previously created to implement the maping process, so, for creating a Recipe you need two Data Types defined in one or two Connector Apps. Then, a Recipe for implementing the mapping process between two Data Types A and B need these resources have been created in advance:

- A Data Type A in a Connector App A where the import process have been defined for the Data Type A.

- A Data Type B in a Connector App B (or even in the same Connector App A) where the export process have been defined for the Data Type B.

![image](https://user-images.githubusercontent.com/54523080/177050418-8ff9998c-b049-408a-9d1e-291cc200bada.png)

The picture above shows two Connector Apps we are going to use as an example to create a Recipe for mapping a User in the Connector App slack to a Contact in the Connector App zohocrm. Nevertheless, it's possible to use only one Connector App, for example we can create a Recipe for converting a Contact in zohocrm to a Lead in zohocrm. In this case, both Data Types are defined din the same Connector App zohocrm, we just need to guarantee  the import process is implemented for the Data Type Contact and the export process is implemented for the Data Type Lead.

On the other hand, you mustn't understand this precondition as you will be forced to create the Connector App from scratch prior to creating the recipe. For example, if you access the Connector Factory in your tenant and the list of Connector Apps is empty as shown below:

![image](https://user-images.githubusercontent.com/54523080/177051346-4e3c87f2-e664-4e90-a4a6-352bae5a374f.png)

the reason is there is no collection of type Connector App available in your tenant, as the screen below shows:

![image](https://user-images.githubusercontent.com/54523080/177051505-0678ef9a-36df-414a-a1bd-662569d8d7cc.png)

A solution to that issue could be creating one or more Connector Apps from scratch. However, you can also import one or more collections of type Connector App to your tenant:

![image](https://user-images.githubusercontent.com/54523080/177051604-ada58d56-03fb-453f-bb0f-d2a9255c56e7.png)

So, after bringing the collections into your tenant:

![image](https://user-images.githubusercontent.com/54523080/177051715-151c75a9-c198-435b-b158-8bcc53983b70.png)

the Connector Apps will be shown in the list of connectors and consequently available for being used in the Recipe.

![image](https://user-images.githubusercontent.com/54523080/177051676-ad24e6d8-fec1-4ccc-a667-2bc129c9b24d.png)

### Creating the Recipe

For creating a new connector recipe, press the Add button as shown below

![image](https://user-images.githubusercontent.com/54523080/177047897-15331681-05c7-4140-b87e-2a2ee8202517.png)

After pressing the Add button the edit view is shown and you can start entering the recipe information.

![image](https://user-images.githubusercontent.com/54523080/177047953-17cdef24-b3c1-47a4-88d1-5552e0627008.png)

### Introducing data to create the Recipe

For creating a recipe you need to enter some information about the connector apps involved in the mapping process you want to implement. So the UI will guide you to enter:

- The origin connector

- The destination connector (could be the same connector selected as origin on the condition that it contains two or more Data Types)

- For every mapping process you want to implement:
  
  - The origin data type
  
  - The destination data type
  
  - The mapping code

Let's see, in detail, how to create the recipe. We are using as an example the creation of a Recipe for mapping a Slack User to a Zoho CRM Contact.

At first you need to select the origin connector (Slack in the case of the example) and the destination connector (Zohocrm in the case of the example). The namespace (SlackToZohocrm in the case of the example) and the name of the collection (slack_to_zohocrm in the case of the example) are generated automatically from the origin and the destination connectors.

![image](https://user-images.githubusercontent.com/54523080/177053112-4dc672dd-0292-4e1f-8da5-e71dc0002656.png)

Then you need to press the + button in the section Parsers to define the mapping process.

![image](https://user-images.githubusercontent.com/54523080/177054061-659a6bc0-5ad1-46b0-ba89-de3ab1f160b9.png)

After pressing the + button, a view like the one below is shown and you must select the origin Data Type (User in the case of the example) and the destination Data Type (Contact in the case of the example).

![image](https://user-images.githubusercontent.com/54523080/177055669-808a94e6-bfc8-4a0a-b33b-57561820b4d1.png)

In the same view you can specify the mapping code or you can choose to keep the default code in order to modify it later, after the Recipe is generated. You should notice the mapping code will be available to be modified later in the algorithm parse_from_sourceNS_sourceDT_to_targetNS_targetDT (in the case of the example: parse_from_slack_user_to_zohocrm_contact)

![image](https://user-images.githubusercontent.com/54523080/177055828-436faa00-3395-488a-86f9-6d28f1ec953d.png)

For setting the mapping code you need to notice you need to convert the object stored in the property raw_data in the source to an object to be stored in the property raw_data in the target and you need to map any other property outside the raw_data in the case you need it. In the case of the example we need to map every property in the raw_data.profile object to a property in the raw_data object in the target. The sample code is shown below.

```ruby
 # Write here the mapping code

 target = {
  raw_data: {
    Email: options[:source].raw_data[:profile][:email],
    Last_Name: options[:source].raw_data[:profile][:last_name].present? ? options[:source].raw_data[:profile][:last_name] : '-',
    First_Name: options[:source].raw_data[:profile][:first_name],
    Full_Name: options[:source].raw_data[:profile][:real_name],
    Skype_ID: options[:source].raw_data[:profile][:skype],
    Phone: options[:source].raw_data[:profile][:phone]
  }
 }
 target
```

After completing the mapping code you can press the save button for completing the definition of the mapping process as shown below.

![image](https://user-images.githubusercontent.com/54523080/177056283-bbe1a05e-e2fb-4508-b7f0-055eee10ad6c.png)

The recipe may contain more than one mapping process. For adding a new mapping process you need to press the + button again (see 1 in the picture below). Since a connector might contain more than one data type, you would want to map more than one pair of data types between the same connectors. For example, The zohocrm connector app contains two data types: Contact and Lead. If we want to map the User in the slack connector app to the Lead in the zohocrm connector app, we may not create a new Recipe between the connectors slack and zohocrm because the recipe name would be the same: slack_to_zohocrm (see 2 in the picture below). So, cases like this one must be implemented as a single Recipe with multiples mapping processes.

![image](https://user-images.githubusercontent.com/54523080/177180232-069c93eb-c76e-4190-9181-7958475888cd.png)

After completing the definition of the mapping process, you can check the information of the recipe is completed and press the Save button in order to create the recipe as the picture below shows (You should notice we finally didn't add the mapping process between the Slack User and the Zohocrm Lead).

![image](https://user-images.githubusercontent.com/54523080/177056210-8b5b8196-7b8e-4c56-80d5-607fa8465292.png)

When the creation process completes, you will be notified in a view like the one in the picture below

 ![image](https://user-images.githubusercontent.com/54523080/177056516-c4778a0a-e864-49cd-9993-372c78ee6493.png)

Then you can press the Back button

![image](https://user-images.githubusercontent.com/54523080/177056552-bad35b95-6a88-4b1f-9fa1-845b598c013b.png)

And you will see the recipe in the list

 ![image](https://user-images.githubusercontent.com/54523080/177056586-2626e4fa-575f-411e-a486-ba8af614aea0.png)

### Exploring the Recipe

Once a recipe is created you can explore its content in the Recipe view in the Connector Factory by selecting the recipe and pressing the Details button.

![image](https://user-images.githubusercontent.com/54523080/177057453-e34b2fad-3eda-48c4-be88-5c62c4fb8aba.png)

After pressing the Details button a list of elements is shown. That list contains all the elements generated implicitly by the Connector Factory when the recipe was created.

![image](https://user-images.githubusercontent.com/54523080/177057475-3c14d5e5-9b85-422a-8557-95ac16e9faf1.png) 

When you explore the list of the recipe elements in the Conector Factory, you are able to select one element and see its details.

![image](https://user-images.githubusercontent.com/54523080/177057497-6ed610e7-79f3-44ec-980a-74ebae069d69.png)

That action redirects the user to the show view in Cenit, so, the user will be able to manage that element the same way he can do with any other one in Cenit.

![image](https://user-images.githubusercontent.com/54523080/177057539-727a24a9-b86e-438c-8bcf-67f9688405b6.png)

Since a recipe is a special kind of collection, the recipe can be managed not only from the Connector Factory Recipe view but also from the Collections Menu in Cenit.

![image](https://user-images.githubusercontent.com/54523080/177057591-6d59f690-707e-4b9e-ad87-0d4e82d4058c.png)

As you can see in the picture above, a collection has been created in the current tenant and you can manage it as any other collection in Cenit. So, if you select the collection and press the Show button, you can explore its elements directly in the Cenit UI, for example, the algorithms.

![image](https://user-images.githubusercontent.com/54523080/177057643-a73de1e0-fe08-4d5e-a068-7a2aad3b104b.png)

You get the same result by accessing the menu Compute/Algorithms and list the elements in the corresponding namespace.

![image](https://user-images.githubusercontent.com/54523080/177057727-9a9b2eb9-3b5e-4519-bbc3-733726428e4c.png)

After the recipe is created, you might realize you missed  to add some parsers or you had some mistake, etc. In those cases, you don't need to start creating the recipe from scratch, you can just press the Resume button, so you can edit the recipe starting from the previous version and after pressing the Save button, a new collection will be generated for the new version of the recipe.

![image](https://user-images.githubusercontent.com/54523080/177057765-b2804166-cba1-48d4-bc19-027cc34eed65.png)

As mentioned before, when a recipe is created in the Connector Factory, a complete set of resources is generated in order to enable the mapping processes of a group of records. The table below contains all the elements implicitly generated in the recipe slack_to_zohocrm that we used as an example.

| Element Kind     | Elements in the Connector                                                                | Observation                                                                                                                                                         |
| ---------------- | ---------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Data Types       | ItemsMapped                                                                              | One data type for storing information about every record mapped.                                                                                                    |
| Algorithms       | do_convert_from_slack_user_to_zohocrm_contact,  parse_from_slack_user_to_zohocrm_contact | The algorithms for mapping the records of type User to records of type Contact.  Two algorithms for every mapping process defined in the recipe are generated.      |
| Other Algorithms | trigger_for_change_user,  do_start_converters                                            | This algorithms are actually generated when a Connector App is created.  However they are closely related to the recipes, that's why we include them in this table. |
| Data Event       | handle_user                                                                              | This Data Event is actually generated when a Connector App is created.  However its closely related to the recipes, that's why we include it in this table.         |

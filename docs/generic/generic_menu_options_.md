---

sidebar_position: 2

---

# Generic Menu Options

When accessing every entry in the main menu, a list of elements is shown. For example, if we access the menu Workflows/Flow, the list of flows is shown in the working area, if we enter the menu Data/Document Types the working area shows the list of data types, and so on. Regardless the kind of elements we're listing, a generic menu appears as a horizontal bar in the top-right  corner of the working area. This menu contains a set of options which are common to every list of elements in Cenit.

![Elements list](https://user-images.githubusercontent.com/54523080/152070080-894e6bcc-e9f9-4e35-87b6-95e1fedac8fb.png)

The options in the generic menu bar apply to all the elements on the list, unless one or more element are selected, if that's the case, the options in the generic menu apply only for the selected items. That means if we press the Delete button and no element is selected, we're telling Cenit to delete all the elements in the list:

![Generic Menu Delete](https://user-images.githubusercontent.com/54523080/152090216-5c5a2f98-9218-4f7b-9a3f-4d72287700b0.png)

The Filter button allows to apply a filter to narrow the list in those cases the list is large. 

![Generic Menu Filter 1](https://user-images.githubusercontent.com/54523080/152090693-ddfdb364-d2b6-4f9d-90fe-0f193524347c.png)

When filtering, we need to add one or more conditions, then press the Filter button.

![Generic Menu Filter 2](https://user-images.githubusercontent.com/54523080/152092461-72b12912-d357-4ce2-b840-8b0d046da6cf.png)

After applying the filter conditions, the list of elements shows only those elements which match the conditions. If you want to see the entire list again, you need to press the Filter button again or the found counter, in order to delete the filter conditions.

![Generic Menu Filter 3](https://user-images.githubusercontent.com/54523080/152092691-3dab0d42-6534-4d08-b435-8e1af911565d.png)

The Cross button allows to share elements to other tenants.

![Generic menu cross](https://user-images.githubusercontent.com/54523080/152093137-fb9e5a0c-a8e3-41f5-ae3e-57e5263490f9.png)

After pressing the Cross button you should select owner in order to share  the elements in that list with all the tenants managed by that owner:

![Generic menu cross owner](https://user-images.githubusercontent.com/54523080/152093567-a706403b-bc01-4126-b62e-9bcb78aab2fe.png)

When sharing is completed, the elements are available in every owners's tenant. The check boxes in purple padding indicate those are shared resources.

![Generic menu cross completed](https://user-images.githubusercontent.com/54523080/152093827-c67958de-2fe2-43ee-8eac-fa05da142768.png)

The shared elements may not be modified nor deleted. In case you need, you can stop sharing by pressing the Cross button and selecting the option Default.

![Generic menu cross default](https://user-images.githubusercontent.com/54523080/152095737-80b56ca2-086b-4b72-bf78-eb8414ef1763.png)

After sharing is stopped, the elements will not be available int the other tenants, but are now available to be modified. 

![Generic menu cross default 1](https://user-images.githubusercontent.com/54523080/152095964-c8676e81-ef74-4c1e-8c0a-c5c74365345d.png)

You should notice the previous examples show different lists of elements. That's precisely the idea we're intended to notify, no matter the kind of the elements in the list, the options in the generic menu are common to every list of elements in Cenit. Of course, when pressing the New button a different window is shown depending on the kind of element you want to create.

![Generic Menu New](https://user-images.githubusercontent.com/54523080/152096139-6897bd41-c6ab-4452-bc40-27bdd021f872.png)

As mentioned before, when no element is selected, the options in the generic menu apply to all the elements in the list. When selecting one or more elements, the menu bar might show different options depending on you select one or more elements. You should notice that when one  or more elements are selected, the menu options now don't apply for all the elements but only for the selected ones.

When only one element is selected, the Edit button is available:

![Generic Menu Edit 1](https://user-images.githubusercontent.com/54523080/152097253-8810f9b2-18cb-4550-a320-bbe50df48bad.png)

By pressing the Edit button you may modify every field of the selected element:

![Generic Menu Edit 2](https://user-images.githubusercontent.com/54523080/152097258-ee9498ec-d932-4d60-9efa-397d8da45d31.png)

When only one element is selected, the Show button is also available:

![Generic menu show 1](https://user-images.githubusercontent.com/54523080/152097260-bd86e8c4-9bec-4ba8-ad69-ef313ad7e776.png)

By pressing the Show button you may see in detail every field of the selected element. In the show window you are able to move directly to edit that element by pressing one of the two edit buttons available.

![Generic menu show 2](https://user-images.githubusercontent.com/54523080/152097263-defe588e-5cae-4411-90b3-6f77da22f153.png)

When two or more elements are selected,  neither the Show button nor the Edit button will be available:

![Generic menu two selected](https://user-images.githubusercontent.com/54523080/152097264-bbeca113-51a4-49a3-a7a0-9ce8a57cf491.png)

When selecting  one element, some options may vary depending on the kind of the select element. For example, if we select one algorithm, a Run button will be available for executing that algorithm:

![Generic 1 algorithm selected](https://user-images.githubusercontent.com/54523080/152098467-88536c49-b79e-473a-a396-040b43fb95db.png)

However, if the selected element is a data type, a Records button will be available in order to access the records of the selected data type.

![Generic 1 data type selected](https://user-images.githubusercontent.com/54523080/152098469-80274038-b283-4f84-9a93-24ae5a203328.png)

The Data Type button in the generic menu shows the Cenit Data Type of an element

![Generic menu Data Type](https://user-images.githubusercontent.com/54523080/152195588-f016a260-d987-4304-ac90-b5414f968d3e.png)

Cenit defines a Data Type for every kind of resources it manages, such as algorithms, flows, parsers, etc. Accordingly to the Cenit Type, all the resources you define are stored as records. The Data Type button shows the Cenit Data Type of an element, for example, an algorithm:

![Generic menu Data Type Show](https://user-images.githubusercontent.com/54523080/152195593-2f7b1239-cc68-4ff0-92d9-05ddee9cac4a.png)

So if we show the details for an specific algorithm and press the Jscon Code button, as shown below:

![Generic menu json code](https://user-images.githubusercontent.com/54523080/152195594-09bf9e24-920e-414e-8569-1be25c7dc272.png)

the record for that resource is shown:

![Generic menu json code show](https://user-images.githubusercontent.com/54523080/152195598-2b863c2c-e062-496c-809c-7a7a67d5b86e.png)

There are some options in the generic menu which allow to transform your resources by managing their records. So you can apply a transformation to them: update, convert, export or import. Or you can even send them to a flow.

![Generic Menu Transformations](https://user-images.githubusercontent.com/54523080/152195582-ce0ac7c3-125a-4bab-833e-0da75f391660.png)

These options might be useful if we need to transform resources via code. For example, we want to update all the algorithms for changing their language to javascript and adding the suffix _javascript to their names:

![Generic menu update to apply](https://user-images.githubusercontent.com/54523080/152195604-b770f86a-baf4-4a27-8657-db11bdb77ae5.png)

We can modify the algorithms, one by one, by using the edit button and changing its properties manually. That works for a few resources. If we want to do the same for all the algorithms, updating the resources via code is probably  the best option. In order to accomplish that goal, we can define an [Updater](transformations/updaters.md):

![Generic menu updater](https://user-images.githubusercontent.com/54523080/152221498-f5bcbb22-d7ab-455a-aad4-d97a92125e47.png)

You should note the target data type is not a data type we defined. It's a pre-defined Cenit Data Type related to the algorithm resource, the same we explored in the previous example. The code for our updater would be the one below:

```
targets.each do |target|

      target.name =  "#{target.name}_javascript"
      target.language =  "javascript"
      target_data_type.create_from_json(target.to_json, primary_field: "id") 

end
```

From the list of algorithms we can update all the algorithms by pressing the Update button. You should notice the Update button applies to all the algorithms in the list due to no algorithms are selected.

![Generic menu update](https://user-images.githubusercontent.com/54523080/152222503-cb5c7fb4-a665-4729-a33b-4a1fe0974dcc.png)

Then we need to select an updater or create a new one by using a [Form Action](generic/generic_action_form.md)

![Generic menu update save](https://user-images.githubusercontent.com/54523080/152222780-5a37b4db-2a98-4347-9b3f-ea62556ddf1d.png)

After pressing the Save button we can list the algorithms and we can see the updated names. The language property was certainly updated too.

![Generic menu algorithm list](https://user-images.githubusercontent.com/54523080/152223401-bc14fb3c-ddc5-4d8b-8720-ad8c63e1cb6f.png)

Another way to get the same result is sending the algorithms to a flow. If we define a flow that uses an Updater as translator, we can send the algorithms to that flow, so they will be updated. For example, we define a flow that uses the same updater shown before: 

![Generic menu updater flow](https://user-images.githubusercontent.com/54523080/152224189-057ece8d-90aa-412c-be78-eca397fd2ce2.png)

Then, in the list of algorithms we can press the Send To Flow button, that means processing the selected flow and this, in turn, is going to execute its translator where the algorithms are processed as targets.

![Generic Menu Send to Flow](https://user-images.githubusercontent.com/54523080/152229035-461fd43e-d9ba-4faa-8083-faecd116cc16.png)

Then, we need to select the flow and press the Save button:

![Generic Menu Send to Flow select flow](https://user-images.githubusercontent.com/54523080/152228890-54b08cb7-a904-4129-bc11-151a85aa937d.png)

After executing the flow, the algorithm's names appear updated in the list.

![Generic menu algorithm list 2](https://user-images.githubusercontent.com/54523080/152228898-a90dd285-d887-4e87-bec7-c6827fa4b733.png)

The Send To Flow button can be used also to send records to a flow. In order to send records to a flow you need to the select a Data Type, for example, Conversation, and press the Records button. 

![Generic menu records](https://user-images.githubusercontent.com/54523080/152232615-81c8b25e-1732-4712-acd7-bf9b11b94a10.png)

Then you need to select one of more records and press the Send To Flow button

![Generic menu records send to flow](https://user-images.githubusercontent.com/54523080/152233061-fb687b85-b0e3-41d1-b0e3-824fb8c94735.png)

Then you select the flow the records are sent to, for example, a converter flow, and press the Save button.

![Generic Menu Send to Flow records](https://user-images.githubusercontent.com/54523080/152233456-b5b1a466-6ec0-4563-93ff-5071abb228d8.png)

When the converter flow execution is completed, you can see the new records by exploring the records of the other Data Type, SlackMessage in this case.

![Generic Menu Send to Flow converter](https://user-images.githubusercontent.com/54523080/152233877-ef16c55f-eaf2-42f7-9a39-d0a5cdc66776.png)
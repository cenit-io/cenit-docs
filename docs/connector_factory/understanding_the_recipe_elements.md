---
sidebar_position: 7

---

# Understanding the Recipe Elements

After creating the recipe, only a few elements might need to be customized. The other ones don't require any modification; however, it's important to understand all the elements in the collection regardless you need to modify them or not. So, this section explains every element in the recipe and the next section explains some examples of the modifications they might need. Anyway, you should notice all the elements refers to the example of the recipe for mapping a Slack User to a Zoho CRM Contact we described in the previous section.

**Data Types**

The data type ItemsMapped is created for associating every record in the source data type to its match in the target data type. So every time a record of type A (Slack User in the case of the example) is mapped to a record of type B (Zohocrm Contact in the case of our example) a new record will be created in the ItemsMapped data type for associating the id of the record of type A with the id of the record of type B. Even if the Recipe contains more than one mapping process, only one Data Type ItemsMapped is created.

```json
{
  "title": "ItemsMapped",
  "type": "object",
  "properties": {
    "source_type": {
      "type": "string"
    },
    "source_id": {
      "type": "string"
    },
    "target_type": {
      "type": "string"
    },
    "target_id": {
      "type": "string"
    }
  }
}
```

The properties included in the data type schema are:

- source_type: the source Data Type, for example "Slack::User"
- source_id: the id  in the source Data Type of the record which was mapped
- target_type: the target Data Type, for example "Zohocrm::Contact"
- target_id: the id in the target Data Type of the new record which was created from the mapped record

The picture below shows an example of records in the ItemsMapped data type.

![image](https://user-images.githubusercontent.com/54523080/177186271-788ca69b-8866-4a34-bc97-4b32a0421c38.png)

**Data Events**

For every data type we added when creating the connector app, it generates:

- one data event named handle_rn  (for example handle_user)

- one trigger evaluator algorithm named trigger_for_change_rn  (for example trigger_for_change_user)

These resources are actually generated when a Connector App is created, but they are closely related to the Recipe, therefore we mentioned them.

**Algorithms**

For every mapping process added when creating the recipe, two algorithms are generated:

- do_convert_from_sourceNS_sourceDT_to_targetNS_targetDT (for example do_convert_from_slack_user_to_zohocrm_contact) 

- parse_from_sourceNS_sourceDT_to_targetNS_targetDT (for example parse_from_slack_user_to_zohocrm_contact)

Besides one more algorithm is generated for each data type in the connector app. These algorithms are actually generated when a Connector App is created, but they are closely related to the Recipe, therefore we mentioned them:

- do_start_converters

**<u>Understanding how the mapping process works</u>**

When a record of type rn (for example User) is created or updateded,  the event handle_rn (for example handle_user) executes the algorithm trigger_for_change_rn (for example trigger_for_change_user) which executes the algorithm do_start_converters. The algorithm do_start_converters finds all the algorithms with a name that matches with do_convert_from_sourceNS_sourceDT_to_targetNS_targetDT (for example do_convert_from_slack_user_to_zohocrm_contact) and executes all the algorithms that convert from the type of the record which triggered the event to any other type. This algorithm is in charge of conducting the mapping process. It calls the algorithm  parse_from_sourceNS_sourceDT_to_targetNS_targetDT (for example parse_from_slack_user_to_zohocrm_contact) which convert the source record to the format of the target data type. The algorithm do_convert_from_sourceNS_sourceDT_to_targetNS_targetDT creates or updates the record in the target data type and creates or updates the record in the ItemsMapped data type where the ids of both source and target records is stored.

*The next section explains in detail the code inside every algorithm involved in the mapping process.*

# Detailing and Editing the Recipe Elements

If you specify the mapping code in the right way, you probably don't need to edit any element in the Recipe. Anyway, this section explains the details about every element in the recipe.

**Data Type ItemsMapped**

The data type ItemsMapped is created for associating every record in the source data type to its match in the target data type. So every time a record of type A (Slack User in the case of the example) is mapped to a record of type B (Zohocrm Contact in the case of our example) a new record will be created in the ItemsMapped data type for associating the id of the record of type A with the id of the record of type B. The data type schema is shown below and you mustn't change it.

```json
{
  "title": "ItemsMapped",
  "type": "object",
  "properties": {
    "source_type": {
      "type": "string"
    },
    "source_id": {
      "type": "string"
    },
    "target_type": {
      "type": "string"
    },
    "target_id": {
      "type": "string"
    }
  }
}
```

The algorithm do_convert_from_sourceNS_sourceDT_to_targetNS_targetDT (in the case of our example: do_convert_from_slack_user_to_zohocrm_contact) creates or updates the record in the target data type (Contact) and creates or updates the record in the ItemsMapped data type where the ids of both source and target records is stored. So, for every record in the User Data Type which is mapped to a record in the Contact Data type you can find a record in the ItemsMapped data type the id of the record on each data type.

![](C:\Users\joe\AppData\Roaming\marktext\images\2022-07-04-17-14-25-image.png)

**Algorithm trigger_for_change_user**

The  data event handle_user calls the algorithm trigger_for_change_user any time a record of type User is created or updated. This algorithm calls the algorithm do_start_converters passing information about the source record: its id, its namespace: Slack and its data type: User. You don't need to make any changes to this algorithm.

![image](https://user-images.githubusercontent.com/54523080/177218677-0bd6f469-a4b7-48ff-acac-db822a86842d.png)

**Algorithm do_start_converters**

The algorithm do_star_converters finds all the algorithms with a name that matches with do_convert_from_sourceNS_sourceDT_to_targetNS_targetDT (in this case do_convert_from_zohocrm_contact_to_targetNS_targetDT) and executes all the algorithms that convert from the type of the record which triggered the event (Contact in this case) to any other type. It takes one parameters:

- options: an object that contains the id, its namespace and the data type of the record to be mapped.
- task: the task of type algorithm execution, which Cenit implicitly adds to the parameter list when the algorithm is called asynchronous.

It calls every algorithm which name matches with:

- do_convert_from_zohocrm_contact_to_targetNS_targetDT: implements the mapping process.

The algorithm code is shown below.

```ruby
ns_setup = Cenit.namespace(:Setup)

source = options[:source]
converter_name = "do_convert_from_#{source[:namespace]}_#{source[:data_type]}_to_"
converter_name = converter_name.underscore.parameterize.underscore

conditions = {
  name: { '$regex' => '^slack_to' },
  metadata: { '$regex': '"tags":\\[.*"APP-Recipe".*\\]' },
}
collections = ns_setup.data_type(:Collection).where(conditions).to_a
collections.each do |collection|
  collection.algorithms.each do |action|
    next unless action.name =~ /^#{converter_name}/
    action.run_asynchronous([{ source_id: source[:id] }])
  end
end

nil
```

The algorithm uses the source parameter to buid the converter name to find: do_convert_from_slack_user_to. Then executes every algorithm in the collection which name starts with  do_convert_from_slack_user_to in order to execute every mapping process from slack_user with the id that passes as a parameter to any other data type. This algorithm mustn't be modified.

**Algorithm do_convert_from_slack_user_to_zoho_contact**

This algorithm implements the mapping process from a Slack User to a Zohocrm Contact. It takes two parameters:

- options: an object that contains the id of the record to be mapped.
- task: the task of type algorithm execution, which Cenit implicitly adds to the parameter list when the algorithm is called asynchronous.

It calls one algorithm:

- parse_from_slack_user_to_zohocrm_contact: Contains the mapping code for parsing the new record mapped from the source record.

The algorithm try to find a record in the ItemsMapped data type with the id of the Slack User record  as source id and the target_type: 'Zohocrm::Contact' in order to check if that record was mapped  to Contact before and stores that record in the variable items_mapped_record if it exists. Then the algorithm parse_from_slack_user_to_zohocrm_contact is called for creating the new Contact record resulting from the mapping process. The record returned by the method parse_from_slack_user_to_zohocrm_contact must be stored in the Contact data type by updating a previous version if the User record with that id had been mapped before or as a new record if it is mapped for the first time. The variable items_mapped_record is used to know if the same record had been mapped before. If thats the case, the new version of the Contact record gets the id of its previos version and the variable items_mapped_criteria built from the parameter options gets the id of the items_mapped_record variable. So when the Contact record is stored in Cenit, it will be updated if already existed or created as a new record if not. After storing the Contact record the variable items_mapped_criteria is updated with the target id and stored in the ItemsMapped data type, as an update of the existing record or as a new record, depending on the mapping had been done before or not. The code is shown below.

```ruby
# Get dependencies
ns = Cenit.namespace(:SlackToZohocrm)

# Get source record
source_dt = Cenit.namespace(:Slack).data_type(:User)
source_record = source_dt.where(id: options[:source_id]).first

# Get intermediate record
items_mapped_dt = ns.data_type(:ItemsMapped)
items_mapped_criteria = { source_type: 'Slack::User', source_id: options[:source_id], target_type: 'Zohocrm::Contact' }
items_mapped_record = items_mapped_dt.where(items_mapped_criteria).first

# Get target data-type
target_dt = Cenit.namespace(:Zohocrm).data_type(:Contact)

# Get the data transformed to the structure of the target data-type
parse = ns.algorithm(:parse_from_slack_user_to_zohocrm_contact)
target_data = parse.run([{source: source_record}])
target_data[:last_source] ||= 'MAPPING_FROM_ORIGIN_CONNECTOR'

if items_mapped_record
  # When a previous conversion is being updated
  target_data[:id] = items_mapped_record.target_id
  items_mapped_criteria[:id] = items_mapped_record.id
else
  # when a conversion is new
  target_data[:remote_id] ||= "PENDING-PUBLISH-FROM-#{source_record.id}"
end

# Save the data in the target data-type
target_record = target_dt.create_from_json!(target_data, primary_field: %i[ id ])

# Update the intermediate record
items_mapped_criteria[:target_id] = target_record.id
items_mapped_dt.create_from_json!(items_mapped_criteria, primary_field: %i[ id ])
```

You probably never need to modify that code. However, in the case of the example we want to execute the mapping process only if the Slack User property is_email_confirmed is true. So we need to make a simple modification to the code for introducing that condition:

```ruby
# Get dependencies
ns = Cenit.namespace(:SlackToZohocrm)

# Get source record
source_dt = Cenit.namespace(:Slack).data_type(:User)
source_record = source_dt.where(id: options[:source_id]).first

if source_record[:raw_data][:is_email_confirmed]
  # Get intermediate record
  items_mapped_dt = ns.data_type(:ItemsMapped)
  items_mapped_criteria = { source_type: 'Slack::User', source_id: options[:source_id], target_type: 'Zohocrm::Contact' }
  items_mapped_record = items_mapped_dt.where(items_mapped_criteria).first

  # Get target data-type
  target_dt = Cenit.namespace(:Zohocrm).data_type(:Contact)

  # Get the data transformed to the structure of the target data-type
  parse = ns.algorithm(:parse_from_slack_user_to_zohocrm_contact)
  target_data = parse.run([{source: source_record}])
  target_data[:last_source] ||= 'MAPPING_FROM_ORIGIN_CONNECTOR'

  if items_mapped_record
    # When a previous conversion is being updated
    target_data[:id] = items_mapped_record.target_id
    items_mapped_criteria[:id] = items_mapped_record.id
  else
    # when a conversion is new
    target_data[:remote_id] ||= "PENDING-PUBLISH-FROM-#{source_record.id}"
  end

  # Save the data in the target data-type
  target_record = target_dt.create_from_json!(target_data, primary_field: %i[ id ])

  # Update the intermediate record
  items_mapped_criteria[:target_id] = target_record.id
  items_mapped_dt.create_from_json!(items_mapped_criteria, primary_field: %i[ id ])
end

nil
```

 **Algorithm parse_from_slack_user_to_zohocrm_contact**

This algorithm implements the mapping process from a Slack User to a Zohocrm Contact. It takes one parameter:

- options: an object that contains a source property with the record to be mapped..

This algorithm converts the source record to the structure of the target data type. So, if you input the right code when the Recipe was created, you don't need to make any changes in the code. Of course, if you realize the code you entered before doesn't work as expected, you're free to change it directly in the algorithm code.

```ruby
 # Write here the mapping code

 target = {
  rawData: {
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

# Testing the Recipe

For testing the recipe you just need to import one or more User records to Cenit. Then you can check if they were succesfully converted into Contact records and stored in the Contact data type.

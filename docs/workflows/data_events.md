---
sidebar_position: 6
---

# Data Events

Data Events are the conditions that can change the records of a data set in a certain document type.

You can perform operations on algorithms using the Cenit IO API V2. To do this, see the specification of this API regarding [Data Events.](https://cenit-io.github.io/api-v2-specs/#tag/Data-Events)

## Add New data event

For creating a new data event, click the New button (+) in the [Generic Menu](generic/generic_menu_options_.md) and fill every input field.

![Data events](https://user-images.githubusercontent.com/99367633/161153842-d56587f4-ed1a-41e1-afe4-115630068dc5.png)At first, you need to set its Namespace, Name and the Data Type you want to link to the event.

The Data Type that is selected is the one that we are going to check if certain conditions occur. These conditions are called **triggers** because the system checks that these conditions occur in the data to execute the flow associated with that data.

![Add trigger](https://user-images.githubusercontent.com/99367633/161154247-e2991b0d-a5e1-4982-95d9-39344b7f6ec8.png)

In the example, we defined two triggers to be checked about the data type "Conversation": to check all conversations created this week and conversations are from a slack member. That is, triggers can be managed around the attributes of the data type. 

![Triggers](https://user-images.githubusercontent.com/99367633/161156646-0b1364f2-2252-40f8-b916-d030ff919515.png)

When defining a trigger you may select an specific attribute, including the ones by default: create_at or updated_at.

When any attribute is selected, the possible evaluations for the triggers are:

- Available to all the attributes regardless of their types:
  
  • Is present: The attribute exists in the record. It means when the attribute value is no longer nil. It is very useful to determine when a record is create for the first time if the condition is linked to created_at attribute.
  
  • Is blank: The attribute exists and is blank.
  
  • Changes: The attribute has some change. It applies when it is created from the beginning or it already existed and its value changes.
  
  • Present and Changes: The attribute has some change. It applies only when the attribute already exists and its value changes.

In addition to these evaluations, there are some others which depend on the type. For some of them you need to specify their value or values.

- Date
  
  - Is Date: [date]
  - Is Between [- infinite] and [+infinite]
  - Today
  - Yesterday
  - This Week
  - Last Week

- String
  
  - Is exactly: [value]
  - Contains: [substring]
  - Starts with: [prefix] 
  - Ends with: [suffix]

- Boolean
  
  - true
  - false

- Number [Decimal, Float, Integer]
  
  - Is Number: [value]
  - Is Between: [- infinite] and [+infinite]

When you select created_at or updated_at, the evaluations for the triggers are:

- For both of them:
  
  • All the evaluations available for the type Date.
  
  • Is present: It's used when a record become as existed. For example, if we use "Is present" as a value for create_at, the event will trigger at the moment a record is created because Cenit will detect in that instant the record will be already present or no longer nil
  
  • Is blank: The event will be triggered when the record exists and is blank.
  
  • Changes: The record is created or has some change. It applies when it is created from the beginning or it already existed and some attribute's value changes.
  
  • Present and Changes: The record has some change. It applies only when the record already existed and some attribute's value changes.

After completing the data event declaration and pressing the save button, you can see the new data event on the list of data events, and you can manage it as well as you can do with other elements in Cenit.

The example above shows how to add triggers to a Data Event. The triggers allow to define, in simple terms, whether the event occurs or not. However, if we need to specify a complex condition, we might use a Trigger Evaluator algorithm.

![Trigger evaluator 1](https://user-images.githubusercontent.com/54523080/164564101-971927c6-aafc-48c9-b71b-cff22d4e95d2.png)

The trigger evaluator algorithm takes to parameters current and previous (in that order) which refers to the current record of the event Data Type and the previous one before update it, so previous is nil when the record is created and it wasn't present before that. The algorithm should return true to indicate the event occurs and false if not. The section [Algorithms](compute/algorithms.md) shows an example of trigger evaluator.

#### Notice:

You should notice that when you define a data event, you are not telling Cenit to do anything when the event is triggered. You must associate data events to a [Flow](workflows/flows.md)  later.
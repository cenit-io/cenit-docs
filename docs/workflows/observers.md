---
sidebar_position: 3

---

# Observers

The events in Cenit allow to activate the execution of a flow or an algorithm task. Cenit deals with two kinds of events:

- Observers, also known as Data Events, which are triggered when specific data is created or updated in Cenit.

- [Schedulers](workflows/observers.md) depends only on conditions related to date and time to be triggered and time intervals if we want to repeat it periodicaly.

Observer Events listen for property changes on records. The Workflow/Observers submenu allows to define new Observer as well as managing the observers previously defined.

#### Add New

For creating a new observer, click the New button (+) in the [Generic Menu](generic/generic_menu_options_.md) and fill every input field.

![observer new](https://user-images.githubusercontent.com/54523080/150700361-ee4283d7-6509-4c93-9114-b842656005d4.png)

At first, you need to set its Namespace, Name and the Data Type you want to link to the event.

![observer first fields](https://user-images.githubusercontent.com/54523080/150700436-410f732e-8dbf-4a1c-b1d5-c3f367911479.png)

• DataType: It is the type the observer will be checking to trigger the event in case of creating a new record of that data type or updating an existing one. 

After selecting the Data Type , both fields Trigger Evaluator and Trigger are enabled and allow you to define conditions to trigger the observer.

![observer other fieds](https://user-images.githubusercontent.com/54523080/150700992-854c99b6-1eef-4963-853d-1fa8e91cb222.png)
• Triggers: This field allows to add different pre-defined trigger conditions for your observer. By pressing the button Add Triggers you may add one or more conditions .

![observer triggers](https://user-images.githubusercontent.com/54523080/150704564-c420d312-589f-4ad7-86e6-31ca412983ec.png)

When defining a trigger you may select an specific attribute, including the ones by default: create_at or updated_at  (the ones in the blue square are just the attributes defined in the Data Type Conversation used as an example) .

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

• Trigger evaluator: By using the field Triggers, you may add one or more conditions from a set of pre-defined ones. If you need to evaluate a more complex condition, you have the possibility to program it through an algorithm. This field allow to associate a snippet to your event in order to use it as the trigger.

After completing the Observer declaration and pressing the save button, you can see the new observer on the list of observers and you can manage it as well as you can do with other elements in Cenit.

![observer list](https://user-images.githubusercontent.com/54523080/150724986-03d1dab5-2ea9-4c43-8620-5e828f84fb00.png)

#### Notice

You should notice that when you define an observer you are not telling Cenit to do anything when the event is triggered. You must associate observers to a [Flow](workflows/flows.md)  later.
---
sidebar_position: 7
---

# Schedulers

Scheduler is the type of event related to date and time to be triggered in order to execute a flow. 

A Scheduler handles time intervals which can be useful if we want to repeat it periodically.

Schedulers are events triggered on a certain moment and can be optionally recurrent. The Workflow/Schedulers submenu allows to define a new Scheduler as well as managing the schedulers previously defined.

You can perform operations on schedulers using the Cenit IO API V2. To do this, see the specification of this API in section [schedulers](https://cenit-io.github.io/api-v2-specs/#tag/Schedulers).

## Add New

For creating a new scheduler, click the New button (+) in the [Generic Menu](generic/generic_menu_options_.md) and fill every input field.

![New scheduler](https://user-images.githubusercontent.com/99367633/161334161-b772b5f2-7584-4642-9cff-4d286c2e2a5a.png)The definition of the Scheduler is pretty easy, yo just need to fill a few fields and activate it.

![Schedule fileds](https://user-images.githubusercontent.com/99367633/161334337-065e23f5-fa7a-4bce-a545-a2ad04bf4cdb.png)

- Namespace and Name:
  
  Use namespace and name as the way to referer the event from a [Flow](workflows/flows.md) or a [Task](monitors/tasks.md).

- Activated:
  
  Set activated true in order to enable the scheduler to be triggered depending on the conditions established by the other parameters. When activated is set to false, the event never ocurrs regardless the conditions have been acomplished.

- start_at:
  
  Define the date and time when the event ocurr for the first time. Before that, the event never ocurrs regardless the other conditions have been acomplished. It is set by using a selection box with two possible options:
  
  - STARTING IMMEDIATLY: The event occur as soon as the the scheduler is activated.
  
  - STARTING AT: Allow to enter the exact date and time you want the event to ocurr.

- repeat_every:
  
  Allow to define if the event is one-time execution, or has a specific periodicity, or will be triggered on appointed dates. It is set by using a selection box with two possible options:
  
  - REPEAT EVERY: Allow you to define a time interval to be triggered repeatedly, with a specific periodiocity.
  
  - REPEAT AT: Allow to set appointed dates to trigger the event. So, you can select:
    
    - the exact date and time you want the event to ocurr if it is one-time execution event.
    
    - A set of multiple dates, by selecting week days, month days, weeks and months you want the event to ocurr.

- end_at:
  
  Define the date and time when the event ocurr for the last time. After that, the event never ocurrs regardless the other conditions have been acomplished.It is set by using a selection box with two possible options:
  
  - INDEFINITELY: The event has no termination date, it may ocurr indefinitely depending on the value of the repeat every field.
  
  - ENDING AT: Allow to enter the exact date and time you want the event to stop ocurring.

The pictures below shows some examples of scheduler definitions.

This event is triggered every day at 6 am since April 4th, 2022 at 14:17 :

![Daily scheduler](https://user-images.githubusercontent.com/99367633/161336092-481236c1-53e3-423d-82b1-34c9c277cc81.png)This event might be triggered on January 25 every year but it has starting and ending date on January 2022, so it is triggered only once  on January 25, 2022 at 6am:

![scheduler one time](https://user-images.githubusercontent.com/54523080/150627665-40c2a195-c343-4a5e-bd44-c83cdb42994c.png)

This event is triggered twice a month on days 1 and 15 at 6am since it is activated:

![scheduler twice a month](https://user-images.githubusercontent.com/54523080/150627667-5e7cc56d-65a7-4f67-94ba-ff59936b51be.png)

Strictly speaking, none of those schedulers ever occur, as you may see in the picture below, because none of them is activated.

![List of schedulers](https://user-images.githubusercontent.com/99367633/161336639-3eb4df54-fb38-43b3-a992-f76e8bc11850.png)You can manage schedulers from the list, in the same way you do with every other element in Cenit. 

#### Notice

You should notice that when you define a scheduler you are not telling Cenit to do anything when the event is triggered. You must associate schedulers to a [Flow](workflows/flows.md) or to an algorithm [Task](monitors/tasks.md) later.
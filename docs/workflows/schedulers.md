---
sidebar_position: 7
---

# Schedulers

The events in Cenit allow to activate the execution of a flow or an algorithm task. Cenit deals with two kinds of events: 

- [Observers](workflows/observers.md), also known as Data Events, which are triggered when specific data is created or updated in Cenit.

- Schedulers depends only on conditions related to date and time to be triggered. A Scheduler handles time intervals which can be useful if we want to repeat it periodically.

Schedulers are events triggered on a certain moment and can be optionally recurrent. The Workflow/Schedulers submenu allows to define new Scheduler as well as managing the schedulers previously defined.

#### Add New

For creating a new scheduler, click the New button (+) in the [Generic Menu](generic/generic_menu_options_.md) and fill every input field.

![scheduler new](https://user-images.githubusercontent.com/54523080/150603309-4b2fb26b-01e7-4a1e-8336-a74fe0d17a9d.png)

The definition of the Scheduler is pretty easy, yo just need to fill a few fields and activate it.

![scheduler fields](https://user-images.githubusercontent.com/54523080/150603965-2129adb0-1f13-430f-9069-1de653297770.png)

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

The pictures below shows some examples of scheduler definitions

This event is triggered every day at 6am since January 20, 2022:

![scheduler daily](https://user-images.githubusercontent.com/54523080/150627663-bc416c5e-540c-4e69-bb81-66f9edf31d3d.png)

This event might be triggered on January 25 every year but it has starting and ending date on January 2022, so it is triggered only once  on January 25, 2022 at 6am:

![scheduler one time](https://user-images.githubusercontent.com/54523080/150627665-40c2a195-c343-4a5e-bd44-c83cdb42994c.png)

This event is triggered twice a month on days 1 and 15 at 6am since it is activated:

![scheduler twice a month](https://user-images.githubusercontent.com/54523080/150627667-5e7cc56d-65a7-4f67-94ba-ff59936b51be.png)

Strictly speaking, none of those schedulers ever occur, as you may see in the picture below, none of them is activated.

![sheduler list](https://user-images.githubusercontent.com/54523080/150628068-f6244343-3a06-4bfb-80d4-8ac63085ff78.png)

You can manage schedulers from the list the same way you do with every other element in Cenit. 

#### Notice

You should notice that when you define a scheduler you are not telling Cenit to do anything when the event is triggered. You must associate schedulers to a [Flow](workflows/flows.md) or to an algorithm [Task](monitors/tasks.md) later.
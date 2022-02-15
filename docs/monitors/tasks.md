---
sidebar_position: 3

---

# Tasks

Cenit uses the "Task" concept to refer particular processes which took place inside a tenant, for example the execution of an algorithm or a flow, the deletion of one or more records, the transformation of data, etc. Every execution of a flow or an algorithm implicitly generates a Task. A record deletion or a data transformation generates a Task as well.

The Monitors/Tasks submenu allows to manage the tasks.

![Tasks menu](https://user-images.githubusercontent.com/54523080/153328868-9980d429-30c0-4ef8-b384-496e017bafc2.png)

A shortcut to the Tasks menu is the button with the task logo, in the top bar:

![Task button](https://user-images.githubusercontent.com/54523080/153328888-918e7c82-8468-4e5e-8f8e-e51cc018603e.png)

Cenit shows the tasks ordered by date and time in a decreasing way, that means newer first.

![Task lists](https://user-images.githubusercontent.com/54523080/153329438-40eb19ed-95ab-455e-806c-90b0d831324e.png)

In the Task list, when you click a specific type of task, a new window will be opened and a list of tasks of the same type will be shown. For example, by clicking Flow Execution:

![Task list click flow](https://user-images.githubusercontent.com/54523080/153333887-0c05c734-1a23-460b-bc23-dbe06088f4c3.png)

you can retrieve the list of flows executions:

![Tasks flow executions](https://user-images.githubusercontent.com/54523080/153333905-998e26f1-cfe8-4bb6-8d8d-c44c6531a368.png)

You get a similar result when you click Algorithm Execution

![Tasks list click algorithm](https://user-images.githubusercontent.com/54523080/153334642-d22880c4-eb7c-435e-8cea-beef91375741.png)

In that case the list of algorithm executions is shown:

![Tasks algorithm executions](https://user-images.githubusercontent.com/54523080/153334650-82f9ee4c-5b50-4c79-b9c7-147e7f09ea82.png)

As mentioned in the [System Notifications](monitors/system_notifications.md) section, algorithms and flows not always generate a notification when running. So, by using the task list you can get feedback about the execution of a flow or algorithm, such as the execution date, if it succeeded or not, etc. 

A flow execution task is associated with a flow. The Task contains a reference to that flow and you can easily get details about it by inspecting the task. You can do it in two ways.

In the task list you can select a task and press the button show in the [Generic Menu](generic/generic_menu_options_.md)

![task show](https://user-images.githubusercontent.com/54523080/153339174-4b9e0e2a-3759-4f4e-bfcd-887696409c3f.png)

In the next window you must click the flow name:

![task details click flow](https://user-images.githubusercontent.com/54523080/153339183-245e2a19-2448-438b-a788-0151cd6ca8d9.png)

and then you get the flow details:

![task flow details](https://user-images.githubusercontent.com/54523080/153339191-3161b904-91c5-409f-948f-8d9ebd9a918f.png)

It's even easier if you click the flow name linked to one task in the list of flow executions:

![flow executions click flow](https://user-images.githubusercontent.com/54523080/153339195-b8d455ca-06f4-4b8e-b6ca-ff24b8c06d7a.png)

In case of algorithms executions you may proceed the same way.

## Task scheduling

Tasks are particularly important if we consider a task is able to be scheduled. As mentioned in the [Flows](workflows/flows.md) section, you can associate a [Sheduler Event](workflows/schedulers.md) to a flow. However, an algorithm can not be associated to a Scheduler. So, if you want to schedule an algorithm you need to execute it first in order to generate a task, then you need to schedule that task.

In the task list you can select the task to be scheduled and press the edit button:

![task edit](https://user-images.githubusercontent.com/54523080/153341992-c93dc61d-a279-41cd-8555-e4599f3dd743.png)

then press the schedule button:

![task scheduler 1](https://user-images.githubusercontent.com/54523080/153342017-1f2bd5dc-805b-4bf2-87ff-29b58a04a223.png)

After selecting  Scheduler or creating a new one by pressing the button +,  press save:

![task scheduler 2](https://user-images.githubusercontent.com/54523080/153342029-18992602-205a-47d9-890a-a93cad58597a.png)

The easy way is from the task list, select the task and press directly the button schedule:

![task scheduler 3](https://user-images.githubusercontent.com/54523080/153342035-2cd1f806-dcc8-4420-9f67-e2dcee9d3303.png)

When linking a task to a Scheduler, you should check the Scheduler to be active. 

For unscheduling the task proceed the same way and remove the Scheduler:

![task unschedule 1](https://user-images.githubusercontent.com/54523080/153343108-a346c315-abb7-4c53-8ef0-ae21ed8666ef.png)

After selecting the task and pressing the Schedule button, delete the Scheduler:

![task unschedule 2](https://user-images.githubusercontent.com/54523080/153343117-62d92ab0-22d7-4355-96ff-521c5fcd0448.png)

then press save:

![task unschedule 3](https://user-images.githubusercontent.com/54523080/153343123-aae9d4a3-36a6-46ef-a8cb-6cdcabd00d1b.png)

Now you can see there is no Scheduler linked to the task. The picture also shows how many times the task was executed when it was scheduled.

![task unschedule 4](https://user-images.githubusercontent.com/54523080/153343128-e0a168e1-8b36-421b-93dc-12df3aa33e45.png)
# Workflows

In a [Basic Integration](tutorials/basic_integration.md) where you want to send data from a system A to a system B, you  need to obtain data from a system A and save it in Cenit, where that information is stored. Later, those records of type A, will be mapped to records of type B, where B is a valid data type for the system B. The information of type B is also stored in CENIT and afterwards sent to the system B. In order to implement that integration in Cenit, we define 3 processes called [Flows](workflows/flows.md): the [Import Flow](workflows/flows.md?id=import-flow), the [Converter Flow](workflows/flows.md?id=converter-flow) and the [Export Flow](workflows/flows.md?id=export-flow).

The workflows group together a set of resources: connections, translators , algorithms and data, that control the petitions in a flow structure. The Workflow Menu allows to define [Flows](workflows/flows.md), and the elements related to them, such as: Data Events and Notifications.

![workflow menu](https://user-images.githubusercontent.com/54523080/150194769-5eed19e8-8b46-4593-ae8f-bac60b71ae49.png)
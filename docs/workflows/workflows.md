---
sidebar_position: 1

---

# Workflows

In a [Basic Integration](basic_integration.md), where you want to send data from a system A to a system B, you  need to obtain data from the System A and save it in Cenit. Later, those records of type A, will be mapped to records of type B, where B is a valid data type for the System B. 

In order to implement that integration in Cenit, we must define 3 processes called [Flows](workflows/flows.md): 

- the [Import Flow](workflows/import_flows), that converts data from System A to an appropiate data type in Cenit,

- the [Converter Flow](workflows/converter_flows), that converts the data stored in Cenit from System A to the appropriate data type for System B, 

- the [Export Flow](workflows/export_flows), that exports data of data type B stored in Cenit to System B. 

Each type of workflow needs some elements to be defined, to be able to fulfill the mission that is destined for it: [connections](gateway/connection.md), [authorizations](security/authorization_definition.md), [transformations](transformations/transformations.md) , [algorithms](compute/algorithms.md) and [data types](data/data.md).

These conveniently defined elements make up the structure of a flow. 

Each flow is executed manually or in a controlled way by means of [Data Events](workflows/data_events.md) or [Schedulers](workflows/schedulers.md). 

Another way to configure a flow consists of the use of Hooks.

The figure bellow shows the Workflow Menu. 

![Menu Workflows](https://user-images.githubusercontent.com/99367633/161071948-7238d99d-7c01-4527-bd96-f5bcc2c67b7f.png)
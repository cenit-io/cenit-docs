# Generic Cenit Process

Cenit is an open iPaaS system which is commonly used to design and develop integration flows, among others functionalities. It has been designed to solve unique integration needs, orchestrate data flows that may involve different types of protocols and data formats, and provide API management capabilities.

The following picture shows a basic idea of integration in Cenit.

![integration_five](https://user-images.githubusercontent.com/30662690/64360139-d03ba980-cfd7-11e9-9ddd-3ad6c7af744f.jpg)

In a basic integration where you need send data from a system A to a system B, you should visualize your scenario in the follow way:

You need to obtain data from a system A and save it in Cenit, where that information is stored. Later, those records of type A, will be mapped to records of type B, where B is a valid data type for the system B. The information of type B is also stored in CENIT and afterwards sent to the system B.

In order to implement that integration in Cenit, we define 3 processes: A, B and C. Each of these processes is usually traduced in Cenit as a flow.

Before designing any process or flow, you should set the API's [authorization](security/authorization.md) and [connection](gateway/connection.md) in Cenit, in order to  allow for making requests to APIs A and B. You also  need to define the [resources/operations](gateway/resources.md)  for accessing each endpoint. 

> See more information about that in: [Security Menu/Authorizations](security/authorization.md) and [Gateway/Conection](gateway/connection.md)

## Process A

The Process A also known as Import Flow generally works this way: 

- Cenit request the data to a System A via API using the connection/authorization and webhook/resource previously defined.
- A parser translator is in charge of storing the data obtained from API A in Cenit. A Cenit Data Type should be defined before requesting the data.
- This flow is usually triggered by an scheduler event.

The picture shows all the elements involved in the definition of the Import Flow. When creating the flow you need to focus on declaring every element related to its execution.  

See more information about how to create a flow on the [Workflows Section](workflows/workflows.md)

## Process B

The Process B or Converter Flow generally works this way:

- As a result of the execution of this flow, the data stored in Cenit by the previous flow is converted from a data type A to a data type B.
- The data type B defines the structure expected by the API B and is also declared as a Cenit Data Type. This mapping process is done by a converter translator.
- The records of type B are also stored in Cenit, in order to send them to the API B later.
- This flow is triggered by an observer event, so when a new record of type A is created or updated in Cenit, the flow will be executed.
- Since this process is executed internally inside Cenit, neither a connection nor a webhook is needed.

See more information about how to create a flow on the [Workflows Section](workflows/workflows.md)

## Process C

The Process C also known as Export Flow generally works this way: 

- An observer event triggers the export flow every time a record of type B is created or updated in Cenit.
- A template translator sends the new record to the System B via API.
- In order to send the request to the API B, a connection/authorization and a webhook/resource are needed.

See more information about how to create a flow on the [Workflows Section](workflows/workflows.md)

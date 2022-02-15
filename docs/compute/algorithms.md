---
sidebar_position: 2

---

# Algorithms

The [Basic Integration](basic_integration.md) section explains how you can achieve a basic integration in Cenit. In order to get data from an API A and send it to another API B the process or flows should be executed. The [Flows](workflows/flows.md) define how data is routed between endpoints and all integrations in order to automate your operations. Every kind of flow has a different role in the integration, which is implemented on its translator also known as transformation. A Transformation is an algorithm with a specific purpose: it defines a logic for data manipulation. However, you may define other pieces of code which can be used for general purposes. Cenit refers to them as Algorithms.

The Compute/Algorithms submenu allows to define new Algorithms as well as managing the algorithms previously defined.

#### Add New

For creating a new Algorithm, click the New button (+) in the [Generic Menu](generic/generic_menu_options_.md) and fill every input field.

![algorithm new](https://user-images.githubusercontent.com/54523080/153494251-d64b96c0-4743-43a6-b4f6-4133dc7bd5b0.png)

After pressing the "new" button you can start filling every input field the same way you define any other element in Cenit, however, when naming algorithms some restrictions apply, so read carefully the field's description below.

![algorithm name](https://user-images.githubusercontent.com/54523080/153620451-991cecee-9d0a-4d0a-b64d-140a84317199.png)

- Name:
  
  It defines the algorithm name. By naming elements in Cenit, you're able to link elements each other. Unlike other element names in Cenit, an algorithm name can be used for calling it from another snippet, so that name needs to be a valid identifier in the DSL. Therefore, the algorithm name must fulfill some rules:
  
  - It only contains lowercase letters, digits or underscores (_)
  
  - The first symbol can't be digit neither underscore, so the name starts with a lowercase letter.
  
  Examples of invalid names and valid alternatives:
  
  | Invalid name | Reason for being invalid                                                      | Valid alternative        |
  | ------------ | ----------------------------------------------------------------------------- | ------------------------ |
  | Get Orders   | Contains uppercase letters and space                                          | get_orders               |
  | GetOrders    | Contains uppercase letters. You may not use Camel Case Style                  | get_orders               |
  | get-orders   | Contains a hyphen. Only lowercase letters, digits or underscores are accepted | get_orders               |
  | _get_orders  | Starts with underscore                                                        | get_orders               |
  | 1st_request  | Starts with digit                                                             | first_request  request_1 |

- Description:
  
  It allows to describe the algorithm, its goal, the input and output data, etc.

- Parameters:
  
  Sometimes algorithms need some input data which can't be obtained inside the algorithm's code. Those cases require you pass the data to the algorithm in the moment you call it by using parameters. When defining an algorithm you can specify none, one or more parameters. Every parameter is defined by using 4 properties.
  
  *Parameter Properties*
  
  - Name
    
    The parameter name, it must be a valid variable name.
    
    The name contains only letters, digits or underscore and start with letter or underscore. Camel Case Notation is OK for parameters name.
  
  - Type
    
    The type of the parameter. It's optional, when it's not specified, the parameter accept any type. 
    
    You can leave it blank or select a type from the pull down menu: 
    
    - integer, for integer numbers 
    
    - number, for floating point precision numbers 
    
    - boolean, for booolean true or false values 
    
    - string, for string of characters 
    
    - object, for json objects or hash dictionary-like objects.
  
  - Many
    
    Set Many true to indicate the parameter is an array rather than a singular object
  
  - Required
    
    Set Required true to indicate a value must be provided for that parameter. When it's false the parameter takes zero or empty as a default value
    
    If the list of parameters contains both required and optional parameters you are forced to place the required parameters preceding the optional ones. That means a required parameter must not be placed after an optional one in the list. 
    
    For example, these lists are OK (the names don't need to contain optional or required, it's just for clarifying purposes): 
    
    - optional_a, optional_b, optional_c 
    
    - required_a, required_b 
    
    - required_a, required_b, optional_a  
    
    And these lists are NOT OK:  
    
    - optional_a, optional_b, required_a, required_b
    
    - required_a, optional_a, required_b

- Language:
  
  You may set the language used in the code: Ruby or JavaScript

- Code:
  
  Define the algorithm code. It is written in a DSL based on the Ruby Programming Language. The code is handled by Cenit as a [Snippet](compute/snippets.md). It doesn't mean you are forced to create or edit a snippet when coding, you may just modify the code field and Cenit implicitly updates the linked snippet.

##### How to add parameters

If you want to define one or more parameters, you need to press the + button once:

![parameters](https://user-images.githubusercontent.com/54523080/153798785-e3e5b3d3-9990-40c0-9c4b-81c1bc94ade1.png)

Then press repeatedly the other + button

![parameters add more](https://user-images.githubusercontent.com/54523080/153805041-171db7f6-7a58-4e53-a8ad-1a4f6ec153bf.png)

After completing the algorithm declaration and pressing the save button, you can see the new algorithm in the list of algorithms and you can manage it as well as you can do with other elements in Cenit.

![algorithm list](https://user-images.githubusercontent.com/54523080/153807270-8420d07f-c80d-4a0b-b8b5-75424624d75e.png)

#### 

#### How to execute algorithms

An algorithm can be executed in these ways:

- Run Algorithm option.
- Algorithm execution via Code, from another algorithm.
- Algorithm execution as a scheduled Task .
- Algorithm execution as an application action.

**Run Algorithm option.**

From the list of algorithms you can select an algorithm an execute it by using the Run button:

![algorithm run 1](https://user-images.githubusercontent.com/54523080/153808930-f257932a-3286-4b5b-ba58-f7b40811d4e6.png)

If the algorithm has no parameters, you just need to press the save button on the next screen:

![algorithm run 2](https://user-images.githubusercontent.com/54523080/153808933-dd17c9ba-37d9-4932-9478-a73831ad65fc.png)

In those cases the algorithm expects for the parameter's values, after pressing the Run Button:

![algorithm run 3](https://user-images.githubusercontent.com/54523080/153808935-f9d888df-4689-4534-99dc-0ab7079bd838.png)

you need to enter the parameter's values and then press save, for example:

![algorithm run 4](https://user-images.githubusercontent.com/54523080/153808936-b0eeea37-f083-48b5-8030-e4e88894d32f.png)

**Algorithm execution via Code, from another algorithm.**

An algorithm can be called from another algorithm or transformation or any other snippet.

When both the algorithm called and the algorithm making the call belongs to the same namespace, calling an algorithm is as simple as using its name followed by empty parenthesis, if it doesn't expect parameters, for example

`algorithm_r()` 

![algorithm call 1](https://user-images.githubusercontent.com/54523080/153811242-79d99f70-8736-4cfb-8338-5bb49461f9de.png)

When the algorithms expect the parameter's values, then you need to specify the list of values among parenthesis, for  example

`processing_data(5.8, "abc", "Joel", 43, [1,2,3], objJson)`

![algorithm call 2](https://user-images.githubusercontent.com/54523080/153811246-6e03d5d9-98d9-4ab0-a892-9d479a3db2cb.png)

When the algorithms to be called and the algorithm which makes the call belong to different namespaces the you need to make the call in an explicit way, for example:

`Cenit.namespace('Test').algorithm('algorithm_r').run()`

`Cenit.namespace('Test').algorithm('processing_data').run([5.8, "abc", "Joel", 43, [1,2,3], objJson])`

You should notice in case of passing parameters, the run method receives an array containing the list of the parameter's values. 

**Algorithm execution as a scheduled Task**

After executing an algorithm, a [Task](monitors/tasks.md) linked to that algorithm is created. If you associate a scheduler to that task, the algorithm will be executed every time the event occurs. If you want to know how to schedule a task, click here: [Task Scheduling](monitors/tasks.md#task-scheduling)

**Algorithm execution as an application action.**

To know how to execute and algorithm as an application action visit [Applications](compute/applications.md)

#### Algorithm's outputs

As a result of an algorithm execution, some data can be created, so the algorithm provides output data by using different ways, such as:

- Returning a value

- Storaging  data type records in Cenit

- Sending data to an API

**Returning a value**

Algorithms optionally return a value, so they can be used as functions. If you want to return a value, you don't need to specify an explicit return statement since Ruby automatically returns the last evaluated expression. So, for example, the code below return a  json object

```
     data = {                
               "text": "You got a message from Cenit",
               "channel": "C02S4LXKFL3"
            } 

     data.to_json
```

An explicit return statement  can be used in order to stop the algorithm execution in any line of code and return the argument expression. Good Ruby style would generally use an explicit return for an early return only, however the code below is also OK.

```
     data = {                
               "text": "You got a message from Cenit",
               "channel": "C02S4LXKFL3"
            } 

     return data.to_json
```

Besides, by returning nil, you may use the return statement to explicitly make clear the algorithm is not intended to return any value, as shown in the example below

```
 data = {                
           "text": "You got a message from Cenit",
           "channel": "C02S4LXKFL3"
        } 


 Cenit.namespace('Test').data_type('SlackMessage').create_from_json(data.to_json)
 return nil 
```

**Storaging data type records in Cenit**

If the algorithm is not intended to be reused, it doesn't need to return the output data, it can store the output data directly as a datatype record instead, as shown in the example below

```
 data = {                
           "text": "You got a message from Cenit",
           "channel": "C02S4LXKFL3"
        } 


 Cenit.namespace('Test').data_type('SlackMessage').create_from_json(data.to_json)
```

**Sending data to an API**

If the algorithm is not intended to be reused, it doesn't need to return the output data, it can send data directly to an API instead, as shown in the example below

```
 data = {                
           "text": "You got a message from Cenit",
           "channel": "C02S4LXKFL3"
        } 


connection = Cenit.namespace("Test").connection('Slack')
Cenit.namespace("Test").resource("Post Message").with(connection).post(body: data.to_json)
```
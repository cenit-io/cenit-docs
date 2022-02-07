---
sidebar_position: 1

---

# Generic Action Form

When defining an integration, we need to create different elements in Cenit: flows, transformations, events, data types, etc. Those objects usually contain other objects, for example, a parser translator contains a target data type, a converter translator contains a source data type and a target data type, an import flow contains a parser translator, and so on.  Cenit facilitates that association between two objects, so when you are creating an object A that contains an object B, you can select B from a list of objects  created in advance or you can create the object B directly in the same window you're creating the object A. Thus, no matter the menu you're working with, you might find similar input components , which allow to select an existing object or create a new one. Let's see some examples.

When creating a parser translator, you can select the target data type from a list of data types previously created, as shown below:

![Parser Selecting Target Data Type](https://user-images.githubusercontent.com/54523080/151891093-0b0eaee1-867e-49dc-8567-609cabea969b.png)

or you can create a new data type directly by pressing the buton +, as shown below:

![Parser Creating New Target Data Type](https://user-images.githubusercontent.com/54523080/151891100-37321c2e-7337-4290-9134-5b3a49c574a6.png)

When creating a converter translator, you can select the source data type from a list of data types previously created, as shown below:

![Converter Selecting Source Data Type](https://user-images.githubusercontent.com/54523080/151891112-ad599cfa-1cd3-45b1-a977-251619b31e26.png)

or you can create a new data type directly by pressing the buton +, as shown below:

![Converter Creating New Source Data Type](https://user-images.githubusercontent.com/54523080/151891121-e21c4894-721a-40f0-88d5-c1de950b7448.png)

When creating a flow, you can select the translator from a list of translators previously created, as shown below:

![Flow Selecting Translator](https://user-images.githubusercontent.com/54523080/151891141-60cf0f52-da9c-43df-bd09-deb11ee265d3.png)

or you can create a new translator directly by pressing the buton +, as shown below:

![Flow Creating New Translator](https://user-images.githubusercontent.com/54523080/151891160-278c67a1-83be-4c67-a25a-5e3ce348a1d4.png)

While creating new elements in Cenit, you're going to find the same components time after time, regardless of the menu you are working with. Every time you need to associate one object to another, you may decide between selecting from a list or creating a new one by pressing the button +. When the button + is pressed, a new window is shown embedded in the current one and all the input fields which are necessary to create the new object will be available. You should notice every time you press a button +, a new window will be shown, but the components in the new window may vary depending on what kind of object you're going to create. Creating a new data type to be assigned as target data type in the parser creation is not the same as creating a translator to be assigned to a flow, just to give an example.

Now let's see what happened when a new object B is created from the window where we're creating an object A.  As an example, we're creating a Parser Translator and we press the button + to create a new Data Type.

![Sample Parser](https://user-images.githubusercontent.com/54523080/151902132-c4c72a3c-14bf-4709-8e39-aba658a334b6.png)

After pressing te button +, a new window embedded in the previous one is shown with the fields related to the Data Type Creation.

![Sample Data Type](https://user-images.githubusercontent.com/54523080/151902660-24fb19d6-009d-41d3-b1a4-6734c6111fb8.png)

After pressing the save button a new Data Type have been successfully created  and it appears as the selected target data type in the parser creation window.

![Sample Parser Continue Creating](https://user-images.githubusercontent.com/54523080/151902826-f642324c-9813-4199-a2d7-00bce0dd37cb.png)

At this point, when the parser creation hasn't finished yet, if we explore the Data Types list, we can see the new data type created.

![Sample Data Type in the list](https://user-images.githubusercontent.com/54523080/151903661-0b111e20-cfba-4f1c-b9b0-2d82c419688b.png)

You should notice the data type created in the new action form wasn't created inside the parser. Actually, the data type was created as an independent object and it is just referenced from the parser object. As a matter of fact, after creating the data type we can cancel the parser creation and the data type will be still there in the list. After completing the creation of the parser and pressing the save button, we can see the Sample Parser in the list and we can see also the reference to the Sample Data Type created together with the parser.

![Sample Parser in the list](https://user-images.githubusercontent.com/54523080/151904965-50ab4bef-d5d8-49fe-a200-62ca1715c043.png)

Every time you decide to create a new object B to be linked to an object A, by using the new action form, the process occurs the same way; such is the case that it works even in the other two examples mentioned before despite their distinctive features. Let's go deep inside those two examples.

When creating a Converter Translator, for example, we can create from that window both source data type and target data type: 

![Sample 2 Converter](https://user-images.githubusercontent.com/54523080/151907561-5c7c935b-8cea-4189-96d4-43b523c257ee.png)

After pressing the button + we can create the source data type:

![Sample 2 Data Type 1](https://user-images.githubusercontent.com/54523080/151907567-3e5b6061-9d5b-4b6a-90b2-b03cb3b4c40a.png)

After created, the new data type appears selected as source data type:

![Sample 2 Data Type 2](https://user-images.githubusercontent.com/54523080/151907572-70c1a041-01f4-47e1-b2fc-37445d1d4ebe.png)

Then we can create the target data type:

![Sample 2 Data Type 2 created](https://user-images.githubusercontent.com/54523080/151907569-6cb5d42f-021f-4a26-9f06-cb009d48f3fb.png)

After created, the new data type appears selected as target data type:

![Sample 2 Converter completed](https://user-images.githubusercontent.com/54523080/151907555-dcda0f79-77b7-4900-9380-945380e93f2b.png)

After pressing the save button, the converter appears in the list:

![Sample 2 Converters list](https://user-images.githubusercontent.com/54523080/151907565-e0f689c2-b57a-4dd3-8b21-8d5d85659fa4.png)

And the two data types appears in the list of data types:

![Sample 2 Data Types list](https://user-images.githubusercontent.com/54523080/151908286-7ad86fa8-185a-4e11-a245-470c12a6b128.png)

The 3rd example is an interesting one: We are going to create an import flow. From the flow creation windows we're going to create a parser translator, then from the parser translator window we're going to create a data type.

In this example, we want to create an import flow. Then we press the button + to create the parser translator:

![Sample 3-1](https://user-images.githubusercontent.com/54523080/151910359-d77deefb-68a0-4cbb-bd80-5f474989a7c9.png)

In the window to create the parser translator, we press the button + to create the target data type:

![Sample 3-2](https://user-images.githubusercontent.com/54523080/151910790-32499fb2-4191-4b86-b750-51a0a1f58bf8.png)

We create the data type and press save:

![Sample 3-3](https://user-images.githubusercontent.com/54523080/151910363-912fce0b-79cd-4a27-a4dc-3a715e031874.png)

Then we go back to the window to create the parser translator and the created data type is selected as target data type. We complete creating the parser translator and press save:

![Sample 3-4](https://user-images.githubusercontent.com/54523080/151910367-e5205784-b3cf-4c79-8b03-adbc1baf5492.png)

After creating the parser we go back to the window to create the flow and we can see the created parser selected as translator:

![Sample 3-5](https://user-images.githubusercontent.com/54523080/151910371-fe13a1e3-1262-48e1-8432-5f2b5b8dde91.png)

After completing the creation of the flow, we press the save button and we can see the flow in the list of flows, the parser in the list of parsers and the data type in the list of data types:

![Sample 3-6](https://user-images.githubusercontent.com/54523080/151910374-7eeaee5d-9826-4eb3-81e5-e4aa2085e040.png)

![Sample 3-7](https://user-images.githubusercontent.com/54523080/151910376-24a32af6-4bbc-4c43-b46c-54eba5a759ac.png)

![Sample 3-8](https://user-images.githubusercontent.com/54523080/151910377-f7f11720-75a9-48ed-b342-b75095fb1cdd.png)
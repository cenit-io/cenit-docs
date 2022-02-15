---
sidebar_position: 3

---

# Snippets

Cenit uses the "Snippet" concept to refer pieces of code of algorithms, translators and data types definition. When you create a data type or any kind of algorithm, Cenit let you know a snippet will be implicitly created to store the data type schema or the algorithm code.

![snippets](https://user-images.githubusercontent.com/54523080/153953960-c3388d5d-4d97-422e-9d67-f1dd42e52daf.png)

The Compute/Snippets submenu allows to manage the snippets.

![snippets menu](https://user-images.githubusercontent.com/54523080/153957505-dc6f7cbc-8b1e-45ae-9416-4da8d9b8b584.png)

As mentioned before, when creating a data type or algorithm, Cenit implicitly creates a snippet and links it with the created element. The behavior is pretty similar when that element or snippet is being edited, except for those snippets which have been shared with other tenants.

![snippets  edit button](https://user-images.githubusercontent.com/54523080/153987991-f5195816-6c18-4e12-b58c-80723ad33e2a.png)

and the window for editing the snippet is shown:

![snippets edit1](https://user-images.githubusercontent.com/54523080/153988018-e8cdab44-0490-402d-a966-1e14f98a2cad.png)

There is another way which clarifies the process. Since a snippet is linked with a father element and that element contains the snippet's reference, you may access the snippet from its father element. Any change you make in the snippet means a change in the father element as well, so by accessing the snippet from its father, the probability of misleading the snippet to edit is low.  

In the father element window you can click the snippet name:

![snippets algorithm edit](https://user-images.githubusercontent.com/54523080/153988037-039155e2-6381-4e66-ac1c-41775f632773.png)

and a new window for inspecting the snippet is shown:

![snippet show](https://user-images.githubusercontent.com/54523080/153988051-09f66c5d-3a6b-431b-ba3b-d3c347c0649c.png)

You should notice the window above only shows the snippet details. For editing the snippet you must click the Edit button and then you will be able to edit:

![snippets edit1](https://user-images.githubusercontent.com/54523080/153988018-e8cdab44-0490-402d-a966-1e14f98a2cad.png)

Editing the snippet code is fine. However, editing the code directly in the father window use to be more convenient.  For example, when editing the snippet linked with a Converter Translator the is a lot of context to be aware of. If you decide to edit the code in the snippet as shown below

![snippet edit code in snippet](https://user-images.githubusercontent.com/54523080/153993563-e13fbabc-482c-4122-80bd-9dc906fef410.png)

some questions might arise:

- Would I used the variable "source" or "sources"?

- Which is the source data type?

- Which is the target data type?

By editing  the snippet code directly in the father windows, the lack of context can be solved:

![snippet in father](https://user-images.githubusercontent.com/54523080/153993554-8c684037-a889-4984-a5d0-63fd0a3e0991.png)

The context issue is present not only when dealing with translators, but also with generic algorithms. For example, if one or more parameters were defined in the algorithm, the parameter's name and type is not available when editing the code in the snippet window. So, editing the code directly in the father window is probably the best option.

#### Editing shared snippets

When a father element and, consequently, its snippet is shared with other tenants, editing the snippet bring about the creation of a new snippet. 

For example, we shared an algorithm an its snippet  to all the user's tenants, as shown in both pictures below where you can see the algorithm json_sent is shared in tenants JoeTest and JoeSlack.

![snipped algorithm tenant 1 edit button](https://user-images.githubusercontent.com/54523080/153999429-a796b006-9d92-4217-8cae-7498dd7121e3.png)

![snipped algorithm tenant 2 edit button](https://user-images.githubusercontent.com/54523080/153999446-f71329f0-b3d5-4938-9da9-89a7b8fa4ecc.png)

When editing the shared algorithm a warning is shown in the code warning area. The alert lets you know the snippet is shared and therefore it's not editable. It shows another advice: if  you continue editing and you save changes, a new snippet will be created.

![snipped algorithm tenant 1 edit window](https://user-images.githubusercontent.com/54523080/153999455-63ed0140-7144-482d-af3b-ffdd9c044a11.png)

![snipped algorithm tenant 2 edit window](https://user-images.githubusercontent.com/54523080/153999461-d43b91db-0822-420e-82f2-0a428c78ece7.png)

So we modified the code in tenant JoeSlack and save as shown  below

![snipped algorithm tenant 2 edit window change](https://user-images.githubusercontent.com/54523080/153999468-2fd4716a-0f8f-4785-aa53-b0c74583d5c2.png)

As a result a new snippet was created and it's now editable. You should notice the warning message changed:

![snippet non shared inside algorithm](https://user-images.githubusercontent.com/54523080/153999522-dcd82be0-01de-4bf6-af84-f07a434cf978.png)

If we check the snippet list, we can confirm a new snippet was created and it appears as non shared. A default name was generated for the snippet, but it can be changed considering that snippet is now editable.

![snippet non shared](https://user-images.githubusercontent.com/54523080/153999500-a6aa1044-92d2-4836-aa3d-eb0eae9a0a32.png)

In the snippet list we can also check the shared original snippet continue being shared.

![snippet shared](https://user-images.githubusercontent.com/54523080/153999483-8633efab-94a0-4f04-bc31-8c4aef792ae6.png)
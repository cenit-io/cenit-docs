# Converters

When implementing a basic integration, we usually need to transform data from one type A to a type B. Converter translators create records of a data type B inside Cenit from records of a data type A which were already stored in Cenit. So, It deals with two data types, the type A, which is referred in the converter as source data type, and the data type B, also known as target data type.

#### Add New

The submenu Transformations/Converters allow to create a new converter translator by clicking the New button (+) in the [Generic Menu](generic/generic_menu_options_.md) and selecting the type of converter you want to define, for example, Ruby Converter, which refers to a converter written in a DSL based on the Ruby Programming Language, so the logic of the converter translator is described in ruby style. When creating the converter translator, you may select the most suitable [Converter Model](transformations/converters.md?id=converter-models) depending on the data format you need to handle.

![Converter selecting ruby parser](https://user-images.githubusercontent.com/54523080/151060207-15620a9e-5730-48d3-87e8-e3d7b3908a1f.png)

After selecting the kind of parser you can start filling every field.

![Converter new](https://user-images.githubusercontent.com/54523080/151064241-fcec5b5a-df0c-4406-8542-aa684484107b.png)

- Source Data Type:
  
  It defines the type of the records to be transformed. You can select a data type previously defined or define one by pressing the + button. This field is required.

- Target Data Type:
  
  It defines the type of the records to be created. You can select a data type previously defined or define one by pressing the + button. This field is required and it may be equal to the source data type, which could be useful in those cases when you are not intended to change the data structure but only the information.

- Discard Events:
  
  Set discards events false in order to make the translator available to be executed when an event triggers a flow execution. When it is set true all the events are ignored and it could be executed only by processing the flow manually.

- Source Handler:
  
  Set source handler true in order to enable the processing of multiple records. When it is false the converter is able to handle only one record.

- Code:
  
  Define the algorithm to receive the requested data and store it in Cenit. In case of a Ruby Converter, it is written in a DSL based on the Ruby Programming Language. Other formats are available depending on the type of converter created. The code of a converter is handled by Cenit as a [Snippet](compute/snippets.md).

The main goal of a transformation is to manipulate data. The objective of a converter translator is to transform data from one type to another. In order to facilitate the data management, some pre-defined variables are available to access data from the translator code:

- source or sources:
  
  If the field Source Handler is false, the variable "source" allows to access to the record to be transformed. If it's true, the variable "sources" contains the enumeration of records to be transformed, so iterating over the variable "sources" we can transform every record in the enumeration.

- target:
  
  This variable allows to configure the new record to be created from the source record.

- target_data_type:

```
target.full_name = source.name
target.birthday = source.bday
target.age = "#{source.age} years old"
```

This code creates a new record with properties full_name and birthday instead of name and bday. In case of the age, the property has the same name but now is a string containing the original age value followed by "years old". You should notice the Source Handler field should be set false in order to access the variable source.

When processing several records, the Source Handler field should be set true in order to access the variable sources in the code which would be like the one below:

```
sources.each do |source|
    target.full_name = source.name
    target.bithday = source.bday
    target.age = "#{source.age} years old"

    target_data_type.create_from_json!(target)
end
```

The code may vary not only  because the transformation we need to implement can be complex, but also due to the different kinds of converters we are able to create, so you should know the [Converter Models](transformations/converters.md?id=converter-models) which are available to be used when defining  converter.

![Converter save](https://user-images.githubusercontent.com/54523080/151108761-860f032e-6791-42cd-8b14-966b56580636.png)

After completing the converter declaration and pressing the save button, you can see the new converter translator on the list of converters and you can manage it as well as you can do with other elements in Cenit.

![Converter list](https://user-images.githubusercontent.com/54523080/151108778-62f9a8ef-7be1-475c-8ea1-ae8c45148ed6.png)

## Converter Models

When creating a converter translator, you are able to select the most suitable kind of converter according to the format of the data you need to transform.

![Converter models](https://user-images.githubusercontent.com/54523080/151108964-d3be6221-c8d1-4347-8d31-3e88004c9e06.png)

Regardless what you model you choose, you need to notice the result format should be JSON or XML, on the contrary Cenit will try to use an EDI Parsing Algorithm to fill the target record properties.

#### Ruby Converter

![Converter selecting ruby parser](https://user-images.githubusercontent.com/54523080/151060207-15620a9e-5730-48d3-87e8-e3d7b3908a1f.png)

The logic of the converter translator in a Ruby Converter is described in ruby style. It is  written in a DSL based on the Ruby Programming Language.

![Converter new](https://user-images.githubusercontent.com/54523080/151064241-fcec5b5a-df0c-4406-8542-aa684484107b.png)

When coding the transformation, both variables: source and target, allow to access the current record and the new record to be created, respectively. For example:

![Converter Ruby Code](https://user-images.githubusercontent.com/54523080/151644407-96b1db3f-efcd-42eb-881d-073a3a2a3827.png)

When processing is finished, a new record is created from the target variable.

![Converter Ruby Code2](https://user-images.githubusercontent.com/54523080/151645797-5384bd77-711e-4163-a4e6-1037e00d0e70.png)

You should notice the pre-defined variable sources is used instead of source. The variable target is not available either. Unlike the previous example where a single record is created automatically from target, in case of iterating, you need to explicitly create the record. By specifying the primary_field you guarantee same records could be updated instead of creating new ones.

#### Liquid Converter

![Converter selecting liquid converter](https://user-images.githubusercontent.com/54523080/151425409-8045eaca-881b-4c72-805b-e4747e136c5d.png)

When using transformations such as Liquid templates, you should consider they are just template engines and so they can be used to produce any kind of content type, for example,  JSON content. So if you define a Liquid Converter with the code below, the converter will detect the produced content has a JSON format and will parse it to create or update a record. The variable "source" is also available to access the current record.

![Converter liquid Code](https://user-images.githubusercontent.com/54523080/151647537-cd8d6dd8-5dc9-484c-b5ac-0356ba9d9e57.png)

Learn more about liquid templates in [Introduction – Liquid template language](https://shopify.github.io/liquid/basics/introduction/)

#### Handlebars Converter

![Converter selecting handlebar](https://user-images.githubusercontent.com/54523080/151435277-75106852-390b-4a21-8997-3e684b97015d.png)

When using transformations such as Handlebars templates, you should consider they are just template engines and so they can be used to produce any kind of content type, for example, JSON content. So if you define a Handlebar Converter with the code below, the converter will detect the produced content has a JSON format and will parse it to create or update a record. The variable "source" is also available to access the current record.

![Converter handlebar Code](https://user-images.githubusercontent.com/54523080/151647656-c10ef97d-c0e8-41a3-8f75-758969fc1e9c.png)

Than code looks similar to the liquid template code shown above, however it's a handlebar one. Learn more about handlebar templates in [Introduction | Handlebars](https://handlebarsjs.com/guide/)

#### XSLT Converter

![Converter selecting xslt converter](https://user-images.githubusercontent.com/54523080/151446264-59eba3fd-45c5-46f3-9544-a6627c1178af.png)

When using transformations such as XSLT templates, you should consider they are just template engines and so they can be used to produce any kind of content type, for example, JSON content.

Even if records are not stored in XML format an XSLT transformation is possible for Cenit by  following the steps below :  
1.Format the source record into XML if necessary.  
2.Applies the XSLT transformation to the XML formatted record.  
3.Create a target data from the transformed XML document.

 Of course, is simpler to use for this case a template like Liquid or Handlebars.

#### Mapping Converter

![Converter selecting mapping converter](https://user-images.githubusercontent.com/54523080/151446015-92bf9f98-7608-4d06-a72c-77a5685446ec.png)

The Mapping Converter provides an attractive way to define the translation through a table which allow to set  a value for every property defined in the target data type. You should notice that the access to the source record can be done by using the {{ }} tags as in a liquid template; however the variable source is not available, so you may access the property name directly.

![Converter mapping table](https://user-images.githubusercontent.com/54523080/151647744-d3a36914-d1c1-4792-b05e-8e3ef193369c.png)

The Mapping Converter makes easy the transformation; nevertheless you should notice it may be used only for achieving simple transformations.
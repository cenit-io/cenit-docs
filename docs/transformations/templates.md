---
sidebar_position: 4

---

# Templates

When implementing a basic integration, we usually need to export data outside Cenit. Template translators format data type records stored in Cenit to data which be sent outside. It deals with only one data type, the type of the data to be formatted and sent, which is referred in the template as source data type.

#### Add New

The submenu Transformations/Templates allow to create a new template translator by clicking the New button (+) in the [Generic Menu](generic/generic_menu_options_.md) and selecting the type of template you want to define, for example, Ruby Template, which refers to a template written in a DSL based on the Ruby Programming Language, so the logic of the converter translator is described in ruby style. When creating the template translator, you may select the most suitable [Template Model](transformations/templates.md#template-models) depending on the data format you need to export.

![Template selecting ruby](https://user-images.githubusercontent.com/54523080/151486650-ba22a5d7-72a5-4e99-8439-f463f35960e5.png)

After selecting the kind of template you can start filling every field.

![Template new](https://user-images.githubusercontent.com/54523080/151486833-2fee4beb-b09a-4541-b5e5-368a62d029e6.png)

- Source Data Type:
  
  It defines the type of the records to be formatted and exported. You can select a data type previously defined or define one by pressing the + button. If no source data type is defined, then the translator is supposed to be able to export data of any data type.

- Mime Type & File Extension:
  
  A Mime Type and a File Extension can be optionally defined.

- Bulk Source:
  
  Set Bulke Source true in order to enable the processing of multiple records. When it is false the template is able to handle only one record.

- Code:
  
  Define the algorithm to format the data  which will be sent outside Cenit. It is written in a DSL based on the Ruby Programming Language. The code of a template is handled by Cenit as a [Snippet](compute/snippets.md). It doesn't mean you are forced to create or edit a snippet when coding, you may just modify the code field and Cenit implicitly updates the linked snippet.

The main goal of a transformation is to manipulate data. The objective of a template translator is to format the data that an [Export Flow](workflows/export_flows.md) will send to an API after the transformation. In order to facilitate the data management, some pre-defined variables are available to access data from the translator code. The most important pre-defined variables are described in the table below.

##### Pre-defined variables

| Variable | Semantics                                                                                                                                                                                                                                                                                                                                                                                                                                  | Pre-conditions to use it       |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------ |
| source   | If the field Bulk Source is false, the variable "source" allows to access to the record to be formatted and exported, in other words, before executing the template translator, Cenit implicitly fill the variable "source" with the record sent to the export flow and make it available in the translator.                                                                                                                               | The field Bulk Source is false |
| sources  | If the field Bulk Source is true, the variable "sources" contains the enumeration of records to be formatted and exported, in other words, before executing the template translator, Cenit implicitly fill the variable "sources" with an array which contain all the records sent to the export flow and make it available in the translator, so by iterating over the variable "sources" we can process every record in the enumeration. | The field Bulk Source is true  |

The simplest way to configure a Ruby template is by invoking the build-in format methods (to_hash, to_json, share_hash, to_xml, to_edi) on the local variable `source`, which represent the source record the template is being applied to. For example, a simple non bulkable JSON exporter can be defined by the following transformation:

`source.to_json`

That line of code means the source record doesn't need any formatting at all and it will be exported just like it's stored in Cenit.

There are some options that can be used for the build-in methods, perhaps the template should be pretty JSON formatted, or some properties must be excluded:

`source.to_json(pretty: true, ignore: 'id')`

![Template save](https://user-images.githubusercontent.com/54523080/151493746-22b3e194-283d-4ede-8371-17c88d60ab53.png)

After completing the template declaration and pressing the save button, you can see the new template translator on the list of templates and you can manage it as well as you can do with other elements in Cenit.

![Template list](https://user-images.githubusercontent.com/54523080/151493923-03d83090-ad64-42d4-a755-d3c49fd8c4f1.png)

## Template Models

When creating a template translator, you are able to select the most suitable kind of template according to the formatting you need to make of the target data.

![Template models](https://user-images.githubusercontent.com/54523080/151496264-64dc4168-90c4-402c-a823-21b1558f0217.png)

#### Ruby Template

The simplest way to configure a Ruby template is by invoking the build-in format methods (to_hash, to_json, share_hash, to_xml, to_edi) on the local variable `source`, which represent the source record the template is being applied to. For example, a simple non bulkable JSON exporter can be defined by the following transformation:

`source.to_json`

That line of code means the source record doesn't need any formatting at all and it will be exported just like it's stored in Cenit.

In case of handling multiple records, that is Bulk Source set true, a little more of logic is needed, and the variable sources must be used instead of source:

```
if (jsons = sources.collect { |source| source.to_json(pretty: true) } ).length == 1
 jsons[0]
else
 "[#{jsons.join(',')}]"
end
```

When the source record need to be formatted, you're able to do that, previous to return the formatted record, by filling the data to be exported from the source record, for example:

```
formatted = {
 "text": "You got a #{source.text}",
 "channel": "C02S4LXKFL3"
 }

formatted.to_json
```

There are a set of predefined methods available on record objects that can be used for basic formats:

`to_(json|xml|edi)`

Every formatter method can receive options, for example:

- `source.to_json(pretty: true)`

- `source.to_xml(with_blanks: true)`

- `source.to_edi(field_separator: ‘+’)`

So, if you need to format the data to xml, it might be as simple as:

`sources.to_xml`

In case of handling multiple records, that is Bulk Source set true, a little more of logic is needed, and the variable sources must be used instead of source:

```
if sources.count == 1
    sources.first.to_xml
else
      sources.to_xml_array(root: source_data_type.slug)
end
```

Whatever the case is, you are free to format the data down to the last detail,  by taking advantages of the flexibility the ruby code gives.

#### ERB Template

Several transformations use template engines as Erubis (ERB), Liquid, Handlebars and XML Stylesheet. When using those transformations, you should notice they are just template engines and so they can be used to produce any kind of content type. For example, usually ERB is used to produce HTML content, but it can be used to produce JSON content.

#### Liquid Template

Several transformations use template engines as Erubis (ERB), Liquid, Handlebars and XML Stylesheet. When using those transformations, you should notice they are just template engines and so they can be used to produce any kind of content type. For example, Liquid Templates can be used to produce JSON content.

```
{
      "text": "You got a {{text}}",
      "channel": "C02S4LXKFL3"
}
```

Learn more about liquid templates in [Introduction – Liquid template language](https://shopify.github.io/liquid/basics/introduction/)

#### Handlebars Template

Several transformations use template engines as Erubis (ERB), Liquid, Handlebars and XML Stylesheet. When using those transformations, you should notice they are just template engines and so they can be used to produce any kind of content type. For example, Handlebars Templates can be used to produce JSON content.

```
{
      "text": "You got a {{text}}",
      "channel": "C02S4LXKFL3"
}
```

Than code looks similar to the liquid template code shown above, however it's a handlebar one. Learn more about handlebar templates in [Introduction | Handlebars](https://handlebarsjs.com/guide/)

#### Prawn Template

Several transformations use template engines as Erubis (ERB), Liquid, Handlebars and XML Stylesheet. When using those transformations, you should notice they are just template engines and so they can be used to produce any kind of content type. However, that's not the case of Prawn Templates, which can be used only for generating PDF content and can only be written in Ruby so far.

#### XSLT Template

When using transformations such as XSLT templates, you should consider they are just template engines and so they can be used to produce any kind of content type, for example, JSON content.

Even if records are not stored in XML format an XSLT transformation is possible for Cenit by following the steps below :  
1.Format the source record into XML if necessary.  
2.Applies the XSLT transformation to the XML formatted record.  
3.Create a target data from the transformed XML document.

Of course, is simpler to use for this case a template like Liquid or Handlebars.
---
sidebar_position: 3

---

# File Types

Sometimes the information gotten from an API contains files, such as images, pdf, etc. That info can't be represented using the JSON format.  When dealing with files, we can't define the data type as a [Document Type](data/document_types.md),  we need to define a File Type instead.

File Types allow to store files as records. Files content can be validated against a schema. If no schema is defined, then the file content can have any structure.

You can manage file types via CENIT IO API V2. See this API Spec in section [File Types](https://cenit-io.github.io/api-v2-specs/#tag/File-Types)

The File Type submenu allows to define new File Types.

#### Add New File Type

For creating a new File Type, click the New button (+) in the [Generic Menu](generic/generic_menu_options_.md) and fill every input field.

![File Types](https://user-images.githubusercontent.com/99367633/160861178-cacebc38-c334-4871-be0f-25d4423eadc1.png)

![New File Type](https://user-images.githubusercontent.com/99367633/160861745-a9c6e9bd-801a-44de-ad04-17ed3439cfde.png)

Note that creating a File Type is similar to create a Document Type. However, on this case, defining the schema is not mandatory considering sometimes we need to say the data is a png image and we don't need to worry about its structure.
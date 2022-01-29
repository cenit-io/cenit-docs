# File Types

Sometimes the information gotten from an API contains files, such as images, pdf, etc. That info can't be represented using the JSON format.  When dealing with files, we can't define the data type as a [Document Type](data/document_types.md),  we need to define a File Type instead.

File Types allow to store files as records. Files content can be validated against a schema. If no schema is defined then the file content can have any structure.

The File Type submenu allows to define new File Types.

#### Add New

For creating a new File Type, click the New button (+) in the [Generic Menu](generic/generic_menu_options.md) and fill every input field.

![data file type](https://user-images.githubusercontent.com/54523080/149071497-40b94a32-9094-4b89-885e-a0099c35d3dd.png)

![data file type new](https://user-images.githubusercontent.com/54523080/149071736-316f3695-073c-4d31-9d1c-194d89099e3a.png)

Note that creating a File Type is similar to create a Document Type. However on this case defining the schema is not mandatory considering sometimes we need to say the data is a png image and we don't need to worry about is structure.

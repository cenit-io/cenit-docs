---
sidebar_position: 8
---

# Notification Flows

A notification flow allows to send a notification whenever a new record is created or updated in Cenit IO, for example sending an email anytime a Zoho Contact Record is created in the corresponding Data Type.

You can manage the notification flows by accesing the menu Workflow/Notification Flows . 

![image](https://user-images.githubusercontent.com/54523080/174842098-6dc6793a-69bc-48a0-b517-882a6ebd436a.png)

## Add New

For creating a new email notification flow, click the New button (+) in the [Generic Menu](generic/generic_menu_options_.md).

![image](https://user-images.githubusercontent.com/54523080/174842620-ddb59923-01aa-4351-a4bf-00edde938327.png)

Then you need to select Email Notification

![image](https://user-images.githubusercontent.com/54523080/174842989-23dea1e7-c984-466f-999e-426e3ca86348.png)

After selecting the type of notification you need to start entering a value for every field.

![image](https://user-images.githubusercontent.com/54523080/174845875-b0316585-9346-46ad-a893-fe92ca6c66b6.png)

At first you need to set

- Namespace and Name:
  
  Use namespace and name as the way to referering to the notification flow.

- Active:
  
  Set active true in order to enable the notification to be executed when the data event occurrs. When active is set to false, the flow is not executed even if the data event is triggered.

- Data Type:
  
  The Data Type associated to the notification flow. It can be selected from the list or created directly by using  the [Action Form](generic/generic_action_form).

After selecting the data type new fields are shown to complete the creation of the flow.

![image](https://user-images.githubusercontent.com/54523080/174848892-b7e8962d-ee94-4d10-9fa7-3d7453bd5997.png)

- Triggers:
  
  You must select one or more [Data Events](workflows/data_events.md) to trigger the flow execution. They can be selected from the list or created directly by using the [Action Form](generic/generic_action_form).

- Transformation:
  
  You must select a transformation of type [Converter Translator](transformations/converters.md) to convert the record to email message. It can be selected from the list or created directly by using the [Action Form](generic/generic_action_form).

- Email Channel:
  
  You must create an Email Channel for specifying the email setting you are going to use. Since there is no menu entry for creating the Email Channel separately, It probably can't be selected from the list unless you had created one before in another notification flow; so must of the times you need to create it directly by using the [Action Form](generic/generic_action_form).

- Email Type:
  
  The Data Type of the email message. You can use the Data Type Message in the namespace Cenit::MIME:  Cenit::MIME | Message . It is set as a default value in this field. I contains a property attachments, an array of type Cenit::MIME | Attachment in case of using atachments in your email. We recommend to use this predefined data type Cenit::MIME | Message.

We can select from the list a trigger created in advance, like Zoho Contact Created,  the example shown in [Data Events](workflows/data_events.md)

![image](https://user-images.githubusercontent.com/54523080/174861986-40da32a1-3eb0-4454-8578-86d5593bd273.png)

Then we need to define a [Converter Transformation](transformations/converters.md) for mapping the Zoho Contact to Cenit::MIME | Message. In this case, the Mapping Converter facilitates the transformation, so we recommend to use a Mapping Converter. The pictures below show how to create the Mapping Converter separately, from the Transformation/Converters menu.

![image](https://user-images.githubusercontent.com/54523080/174865235-c6fb74b9-4eda-422a-8586-65a14b89e44e.png)

At first we need to specify its namespace, name and both the source data type and the target data type.

![image](https://user-images.githubusercontent.com/54523080/174867771-2d70d6d8-c81a-4d5f-ac40-b1a638de157e.png)

Then you need to edit the mapping section. You should notice every field in the email is mapped from a Zoho Contact property and the double curly brackets operator allows to access to the Zoho Contact Property in an easy way.

![image](https://user-images.githubusercontent.com/54523080/174900118-4987fa7b-4e49-4787-8952-dd7a8c61ea3b.png)

After saving the Mapping Converter it can be selected in the Notification Flow view:

![image](https://user-images.githubusercontent.com/54523080/174870195-d16a13ed-699d-4ccf-afcb-871e50d534d1.png)

Since the Email Type is set to its default value Cenit::MIME | Message there is only one resource to be defined: the Email Channel. For creating the Email Channel press the + Button like shown below.

![image](https://user-images.githubusercontent.com/54523080/174870478-b4a5c63f-1f2d-423c-bd46-3ef441589dec.png)

At first we need to select the type of email channel. You can define an Email flow for sending emails via API. However the simplest way is by using a SMTP account (Please read the notification about gmail account and apps less secure at the bottom of this page).

![image](https://user-images.githubusercontent.com/54523080/174871061-accd0b64-c34b-410f-86d6-589e72bb6675.png)

After selecting SMTP account a view like the one below is shown

![image](https://user-images.githubusercontent.com/54523080/174876948-c859214b-cba9-45bc-a618-bd99094faee5.png)

After entering the email and  password and pressing the Save button, the UI alerts that you need to create a provider for that email channel. So you need to press the + button

![image](https://user-images.githubusercontent.com/54523080/174900606-76e2c644-4a25-4419-8241-0107750f18e7.png)

For creating the provider for the SMTP account, you need to set the parameters for the SMTP settings and press the Save button.

![image](https://user-images.githubusercontent.com/54523080/174880629-597fda5b-d2ec-45c5-8c89-942617488e7c.png)

Then you can see the provider is already created and select in the Email Channel, so you can press the button Save.

![image](https://user-images.githubusercontent.com/54523080/174881525-644e2e10-b86c-4576-a861-e64f8d9dffcb.png)

After saving the mail Channel you can check in the notification view that the Email Channel is created and selected. Besides you can check the flow is active, then press the Save button.

![image](https://user-images.githubusercontent.com/54523080/174882038-7d2a59b8-150e-4c3d-a86e-81c8f912f8a5.png)

After pressing the Save button you can see the notification flow in the list. 

![image](https://user-images.githubusercontent.com/54523080/174882184-42a40d76-39e0-4ccd-87f5-d0ca812216c7.png)

At this point you can create a new Zoho Contact record, which triggers the data event Zoho Contact Created and the notification flow execution is activated so the email is sent.

#### Important notice: about using a gmail smtp account in the notification flow

```
To help keep your account secure, from May 30, 2022, ​​Google no longer
supports the use of third-party apps or devices which ask you to sign in
to your Google Account using only your username and password. So you may
use a google SMTP account only if it was previously configured to accept
less secure app access since this feature is no longer available.
Google Workspace and Google Cloud Identity users won’t be affected right
away, but support for Less Secure Apps will still be phased out for those
users at a later date.
If this feature is disabled in your google account, you need to use
another SMTP account or use an Email Channel of type Email Flow instead.
The Email Channel of type Email Flow requires the configuration of an
Export Flow for sending emails via API, so you will need not only to get
the credentials for accesing that API from Cenit IO but also to configure
all the resources involved in the export flow.
```
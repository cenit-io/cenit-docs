---
sidebar_position: 3

---

# Understanding the Connector App Elements

After creating the connector app, some elements might need to be customized for fitting particular requirements according to the API. The other ones don't require any modification; however, it's important to understand all the elements in the collection regardless you need to modify them or not. So, this section explains every element in the connector app and the next section explains some examples of the modifications they might need. Anyway, you should notice all the elements refers to the example of connector app to the Zoho CRM API we described in the previous sections.

**Security**

Since we select type of authorization Oauth2,  an authorization named default_authorization, an authorization client named default_client and an authorization provider named default_provider were generated.

**Connection**

A connection named default_connection was created and it contains the default_autorization. So, when the connection is used in the algorithms it's not necessary to explicitly use the authorization.

**Resources**

For every data type we added when creating the connector app, at maximum 4 webhooks are created:

- get_rn and get_rns   (where rn is the data type resource name, for example get_contact and get_contacts) if the Process Type Import-Flow was selected.  

- create_rn and update_rn  (for example create_contact and update_contact) if the Process Type Export-Flow was selected.

**Data Types**

For every data type we added when creating the connector app a data type is created with the schema shown below.

```json
{
  "type": "object",
  "properties": {
    "remote_id": {
      "type": "string"
    },
    "hmac": {
      "type": "string"
    },
    "last_source": {
      "type": "string"
    },
    "imported_at": {
      "type": "string",
      "format": "date-time"
    },
    "raw_data": {
      "type": "object",
      "visible": false
    }
  }
}
```

The properties included in the data type schema are:

- remote_id: the id of the object in the remote platform
- hmac: it's used to determine whether the record in Cenit change or not.
- last_source: it's used to determine is the record came from the remote platform or other source
- imported_at: the date time when the record was imported from the remote API
- raw_data: it contains the entire record with the same structure it  brought from the API

**Data Events**

For every data type we added when creating the connector app, it generates:

- one data event named handle_rn  (for example handle_contact)

- one trigger evaluator algorithm named trigger_for_change_rn  (for example trigger_for_change_contact)

**Algorithms**

For every data type we added when creating the connector app, it generates the algorithms in the list below:

If the Process Type Import-Flow was selected:

- do_import_rn (for example do_import_contact) 

- do_import_rns (for example do_import_contacts)

- do_get_rn (for example do_get_contact)

- do_get_rns (for example do_get_contacts)

- parse_from_api_response_rns (for example parse_from_api_response_contacts) 

If the Process Type Export-Flow was selected:

- trigger_for_change_rn (for example trigger_for_change_contact)

- do_export_rn (for example do_export_contact)

- do_create_rn (for example do_create_contact)

- do_update_rn (for example do_update_contact)

- parse_2_api_request_rn (for example parse_2_api_request_contact)

- parse_from_api_response_rns (for example parse_from_api_response_contacts)  If both Import-Flow and Export-Flow were selected only one algorithm named parse_from_api_response_rn will be created.

Besides two more algorithms are generated regardless of the count of data types:

- do_check_error_response

- do_generate_hmac

**<u>Understanding how the import process works</u>**

For importing one record from the remote platform, the algorithm do_import_rn (for example do_import_contact) must be called. When calling the algorithm you must pass as a parameter a json object with some options, in this case is important to include a key remote_id, for example  {"remote_id":"5258774552"} to indicate which record you want to import. The algorithm do_import_rn calls the algorithm do_get_rn (for example do_get_contact) passing the same json object, so do_get_rn  makes the request for the record with that id to the remote platform, process the response and then return the record obtained from the API. Then the algorithm do_import_rn takes the record and pass it to the algorithm parse_from_api_response_rns (for example parse_from_api_response_contacts) which stores it in the corresponding Data Type.

For importing multiple records from the remote platform, the algorithm do_import_rns (for example do_import_contacts) must be called. When calling the algorithm you can pass as a parameter a json object with some options,  for example {"start_date":"2022-05-24T22:00:00+00:00"} to indicate you want to import the records updated from that date on. The algorithm do_import_rns calls the algorithm do_get_rns (for example do_get_contacts) passing the same json object, so do_get_rns makes the request to the remote platform, process the response and then return the records obtained from the API. Then the algorithm do_import_rns takes the records and pass them to the algorithm parse_from_api_response_rns (for example parse_from_api_response_contacts) which stores them in the corresponding Data Type. The algorithms do_import_rns and_do_get_rns repeat the same process explained below several times because they use the task of type algorithm execution to share each other some parameters which allow to request the records in lots (sets) instead of trying to request them all at once. So after every request is made, the algorithm do_get_rns checks if there are more records to be requested and uses the variable task.state to indicate the algorithm do_import_rns to execute itself again for importing another set of records.

*The next section explains in detail the code inside every algorithm involved in the import process.*

**<u>Understanding how the export process works</u>**

When a record of type rn (for example Contact) is created or updated in Cenit, the event handle_rn (for example handle_contact)  executes the trigger_for_change_rn (for example trigger_for_change_contact). The algorithm trigger_for_change_rn generates a new hmac for the current record and compares it with the hmac in the property hmac of the current record in order to determine if the current record has changed. If the current record changed, its hmac is updated with the new hmac and it is exported depending on its property last_source. If last_source is not equal to 'MAPPING_FROM_API_RESPONSE' the algorithm do_export_rn (for example do_export_contact) is executed and  the record must be passed as a parameter. If the record hadn't changed, a notification announcing it was ignored is created. The algorithm do_export_rn must decide if the record will be exported as a new record or as existing record to be updated in the remoted platform. If the record property remote_id starts with the string "PENDING-PUBLISH-FROM" the algorithm do_create_rn (for example do_create_contact) will be executed else do_update_rn (for example do_update_contact) will be executed instead. The algorithm parse_2_api_request_rn (for example parse_2_api_request_contact)  receives the object in the raw_data property as a parameter and formats it to be exported. One of the two algorithm do_create_rn  or do_update_rn is executed and receives the formated data as a parameter and  sends the request to the API for creating or updating the record in the remote platform and return the record. So the algorithm do_export_rn gets the record as it was returned by the API and pass it as a parameter to the algorithm parse_from_api_response_rns (for example parse_from_api_response_contacts) which stores it in the corresponding Data Type.

*The next section explains in detail the code inside every algorithm involved in the export process.*

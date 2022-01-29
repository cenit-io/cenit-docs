Once you have Cenit running in local you can start importing collections. 

First you need to create one translator that let you import all collections and data. So, go to Transformations/Parser and select New.In code write this:

```Ruby
if (parsed_data = JSON.parse(data)).is_a?(Array)
  parsed_data.each { |item|  target_data_type.create_from_json!(item) }
else
  target_data_type.create_from_json!(parsed_data)
end
```

Write a namespace and a name for it. In style select `Ruby`. Then save it.

Now you can import collections using the translator you have already created.

**Example: Importing Basic collections**

1. Export Basic collection. In Cenit.io search Basic cross collection and select Export option. In translator select JSON Portable Exporter [Shared].

2. Import Basic collection. In your Cenit in local, go to Collections/Shared Collections/All and select Import option. There select the translator you have just created and import the collection. You can see it on Collections/Shared Collections/All.
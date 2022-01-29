#  Records creation on Cenit

Cenit records belongs to some data type and there are several ways a
record can be created.

If you want to create records in Cenit by sending data from the
outside, one way is by using the Cenit API. This way, you can create
records by posting data in JSON format to a data type API URL, for
example `https://cenit.io/api/v2/ecommerce/customer`.

If you want to create records in Cenit from an outside data but you
don't want to use the API, then you can make Cenit to import the data
by configuring a Flow with a Parser. The parser should parse the data
and create the records. You can use shared parsers that are available
to parse your data such as `JSON Importer` or `XML Importer`.

If you want to configure your own parser you may use a Ruby style to
describe the parsing logic. In the ruby style there are two local
variables, `data` and `target_data_type`, representing respectively
the outside importing data and the target data type from which the
records should be created. A simple parser code to create a single
record from a JSON data may look like:

`target_data_type.create_from_json!(data)`

but a little more ruby code may allows to create multiple records by
testing if the data is a JSON Array:

```Ruby
json_data = JSON.parse(data)
json_data = [json_data] unless json_data.is_a?(Array)
json_data.each { |item_data| target_data_type.create_from_json!(item_data) }
```

The above code has the same behavior of the shared parser `JSON Importer`.

There are several methods available on the target data type object
that can be invoked to create records. They all have the following
pattern:

`(create | new)_from_(json | xml | edi)[!]`

Example: create_from_xml, new_from_edi

The `new` prefixed methods does not persist the instantiated record an
a further invocation of a save method is needed. The create methods
attempt to persist the records, halting on error only if the method
name ends with the exclamation symbol.

To complete a Flow configuration to import data from outside into
Cenit, you must specify a web-hook from where the data will be
requested. Then you can execute the flow manually or you can assigns
an scheduler or a data event to the flow.

Now, there is a core set of models which also have a corresponding
data type and which we call the setup models, such as schedulers,
flows, transformations, algorithms and so on. But we recommend not to
create records for this models dynamically. For example, if you feel
you need to create an scheduler per each customer record then there
may be a limited number of schedulers that can be activated at the
same time. But don't worry about that, you can still schedule a flow
to be executed again even if don't have a scheduler. Even more if you
feel you need to configure a Flow for each customer record you have
then you should consider to configure just one flow, because a flow
can be executed multiple times, one or more times for each customer
record.

For example, lets suppose you want to configure a flow to be executed
whenever a customer record is created. First you should create a data
event (`https://cenit.io/observer/new`) that will be triggered when the
attribute created_at is present, i.e, the record have been created,
and you will use that event to configure your flow. Now you have to
think in the right transformation (translator). If you want to:

- import data into Cenit you should use a Parser,
- export data outside Cenit you should use a Renderer,
- update data already stored in Cenit you sould use an Updater,
- convert data already stored in Cenit into new data, you should use a
Converter.

The styles to write transformations depends on the transformation
type, but all have in common the Ruby style and for this style, there
are specific available variables to help you to describe the
transformation logic. As we describe before for Parsers where there
are available the `data` and `target_data_type` variables, for the
case of Renderers there are available `source` and `source_data_type`,
if you mark the renderer to be bulk source, then 'sources' is
available instead of `source`, that is if you want to export multiple
(bulk) records in a single render. You can write a non bulk JSON
renderer simply like this:

`source.to_json`

or a bulk JSON renderer with a little more of code like this:

```Ruby
jsons = sources.collect { |source| source.to.json }
if jsons.length == 1
  jsons[0]
else
  "[#{jsons.join(',')}]"
end
```

The above code is pretty similar to the shared renderer JSON Exporter,
take a look at shared renderers at `https://cenit.io/renderer`.

Like creation methods for the target data types, there are also
available a set of formatter methods you can use on renderers. They
all have the following pattern:

`to_(json | xml | edi)`

and every formatter method can receive options, for example:

`source.to_json(pretty: true)`

`source.to_xml(with_blanks: true)`

`source.to_edi(field_separator: '+')`

Now if you need to update some data and you want to do that by
triggering a flow the you can configure an Updater. In the ruby style
there will be available the variables `target` and `target_data_type`,
so you can modify the target record to be updated and all changes will
be stored when the transformation gets executed. For example, if you
want to update a created customer because the country field is missing
the you can write

`target.country = 'CO'` if `target.city == 'BOGOTA'`

Perhaps, if you want to create a record of another data type when a
customer is created then you may use a Converter. In the ruby style
for converters there will be available both the `source`, `target` and
`source_data_type` and `target_data_type`, representing the source
record that will be converted and  the target record where the
conversion comes.  For example, lets convert a customer into a MIME
Message that will be sent through a mail by another flow. You can
define a converter in ruby style just like:

```Ruby
target.to = source.email
target.subjet = 'Confirmation Email'
target.body = "Hello #{target.first_name}, we are glad to count with you."
```

Now back to your flow configuration, you choose your trigger event,
and your transformation (translator) and depending on the
transformation you may also need to configure the web-hooks from where
to request the import data or where to send the export data. If the
trigger event is an scheduler then you will get the flow executed
multiple times, depending on your scheduler configuration, but if your
trigger event is not a scheduler, for example, your data event that is
only triggered when a customer is created, you can also get your flow
executed again by explicitly telling it to do that. In all ruby
transformations style there is available the `task` variable. The task
represent the flow execution, and there may be multiple executions for
the same flow configuration. You can explicitly tell the task to
execute it again by  writing in your code

`task.run_again`

or you can specify a span to be resumed again

`task.resume_in 20.minutes`

You are able to store data that will be shared between task
executions, for example, an execution count, to prevent the task to be
executed no more than 10 times:

```Ruby
task.state['count']  ||= 0
if task.state['count'] < 10
  task.state['count'] += 1
  task.resume_in 5.minutes
end
```

The task state is a Hash that is stored every time the task is
executed, in the first execution the task state is a blank Hash and
that's why we use `task.state['count']  ||= 0` to initialize the entry
`count`.
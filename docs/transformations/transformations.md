---

sidebar_position: 1

---



# Transformations

[Flows](workflows/flows.md) define how data is routed between endpoints and all integrations in order to automate your operations. Every kind of flow has a different role in the integration, which is implemented on its translator also known as transformation. A Transformation defines a logic for data manipulation.

Data manipulation can occur in the following main scenarios:

- Importing outside data into Cenit: [Parser Translators](transformations/parsers.md)

- Converting data already stored in Cenit: [Converter Translators](transformations/converters.md)

- Exporting data outside Cenit: [Template Translators](transformations/templates.md)

- Updating data already stored in Cenit: [Updater Translators](transformations/updaters.md)

Cenit makes easier the transformation implementation by providing some pre-defined variables, together with other Cenit features such as [Data Types Definition](data/document_types.md) and a DSL based on the Ruby Programming Language.

The Transformations Menu allows to define translators of every kind which are usually run from a flow execution, although they may be executed via code as well.

![transformations](https://user-images.githubusercontent.com/54523080/150836944-5feb97c8-9b8c-46c0-a0da-96570988a5ba.png)

## Transformation Models

In the early beginning of Cenit there was only one model for transformation. We sacrifice a well design and implement only one model `Translator` to keep the Rails Admin navigation menu simple, with a few entries. Currently, we support index/create actions for multiple sub-models in the same navigation entry, so it’s time to correct the past.

The Transformation model is now the root of a hierarchy of  several models. Each model corresponds to a combination of the old translator fields type and style. Here is a tree representing such relation:

Template (Export)

- liquid: `Setup::LiquidTemplate`

- xslt: `Setup::XsltTemplate`

- html.erb: `Setup::ErbTemplate`

- js.erb: `Setup::ErbTemplate`

- ruby: `Setup::RubyTemplate`

- pdf.prawn: `Setup::PrawnTemplate`

Converter (Conversion)

- liquid: `Setup::LiquidConverter`

- xslt: `Setup::XsltConverter`

- ruby: `Setup::RubyConverter`

- mapping: `Setup::MappingConverter`

Parser (Import)

- ruby: `Setup::RubyParser`

Updater (Update)

- ruby: `Setup::RubyUpdater`

Despite this list, there are two other transformations included, which don't match any old translator style, those are `Setup::HandlebarsTemplate` and `Setup::HandlebarsConverter`
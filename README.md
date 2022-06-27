![cenit_io](https://user-images.githubusercontent.com/4213488/150586701-53545c9b-b4f9-497f-9782-ef6a19715ecd.svg)

[![Code Climate](https://codeclimate.com/github/openjaf/cenit/badges/gpa.svg)](https://codeclimate.com/github/openjaf/cenit)
[![codebeat](https://codebeat.co/badges/1b596784-b6c1-4ce7-b739-c91b873e4b5d)](https://codebeat.co/projects/github-com-cenit-io-cenit)
[![license](https://img.shields.io/packagist/l/doctrine/orm.svg)]()

[![OpenAPIs in collection][numApis-image]][apisDir-link]
[![OpenAPI specs][numSpecs-image]][apisDir-link]
[![Endpoints][endpoints-image]][apisDir-link]

[![Follow on Twitter][twitterFollow-image]][twitterFollow-link]


* [Join our Slack][join-slack-link]
* [(cenitio.slack.com)][join-slack-link]
* [docs](https://docs.cenit.io/)
* [Shared Collections](https://cenit.io/setup~shared_collection)
* support@cenit.io

# [Cenit](https://web.cenit.io)

Is a 100% open integration-platform-as-a-service (iPaaS) that's modern, powerful, yet hackable to the core, ready to [use in the cloud](https://web.cenit.io) or on-premises. It is designed to solve unique integrations needs, orchestrate data flows that may involve types of protocols and data formats, and provide API management capabilities. All of which can support a wide range of integration use cases. It is particularly valuable to embrace a pervasive integration approach.

To install and learn more about the platform check the [documentation](https://docs.cenit.io/) supported under this repo. 

## Docs website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

[numApis-image]: https://api.apis.guru/badges/apis_in_collection.svg
[numSpecs-image]: https://api.apis.guru/badges/openapi_specs.svg
[endpoints-image]: https://api.apis.guru/badges/endpoints.svg
[apisDir-link]: https://github.com/APIs-guru/openapi-directory/tree/master/APIs
[twitterFollow-image]: https://img.shields.io/twitter/follow/cenit_io.svg?style=social
[twitterFollow-link]: https://twitter.com/intent/follow?screen_name=cenit_io
[join-slack-link]:
https://join.slack.com/t/cenitio/shared_invite/zt-1ac9cntav-nbygqIURukJNbWq1CAfPIg

import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'The Platform',
    Svg: require('../../static/img/Cenit_IO_The_platform.svg').default,
    description: (
      <>
        Multitenant open iPaaS with a modern and powerful engine. Designed to solve unique integrations needs, supporting a wide range of use cases.
      </>
    ),
  },
  {
    title: 'Open Source',
    Svg: require('../../static/img/Cenit_IO_Open_source.svg').default,
    description: (
      <>
        Cenit IO is open source and free, and the right place to launch an on-premises Cenit server, that you can modified as needed to build your business. Your code contributions are welcome.
      </>
    ),
  },
  {
    title: 'Cloud or On-premises',
    Svg: require('../../static/img/Cenit_IO_Cloud_or_local.svg').default,
    description: (
      <>
        It is your choice use our cloud services to move faster and not worry about infrastructure or deploy a Cenit server in your data center with full control to meet your needs..
      </>
    ),
  },
  {
    title: 'Backendless',
    Svg: require('../../static/img/Cenit_IO_Backendless.svg').default,
    description: (
      <>
        New Data Type is created using a JSON Schema, then a complete REST API and a CRUD UI are generated to manage the data.
      </>
    ),
  },
  {
    title: 'Data Integration',
    Svg: require('../../static/img/Cenit_IO_Data_integration.svg').default,
    description: (
      <>
        Cover data validation, transformation, and mapping. Supported multiple data formats and communication protocols.
      </>
    ),
  },
  {
    title: 'Routing & orchestrations',
    Svg: require('../../static/img/Cenit_IO_Routing_&_orchestrations.svg').default,
    description: (
      <>
        Setting up multi-step integration flows through atomic functions like connection, transformation, webhook, and flow.
      </>
    ),
  },
  {
    title: 'Level Visibility',
    Svg: require('../../static/img/Cenit_IO_Shared_resources.svg').default,
    description: (
      <>
        Giving options to share integrations at different openness levels: inside a tenant, to specific tenants, or for everyone.
      </>
    ),
  },
  {
    title: 'Integration Services',
    Svg: require('../../static/img/Cenit_IO_Integration_services.svg').default,
    description: (
      <>
        Runs cloud service integration for publication and management of APIs to support application and data integration needs.
      </>
    ),
  },
  {
    title: 'Multi-tenant',
    Svg: require('../../static/img/Cenit_IO_Multi_tenant.svg').default,
    description: (
      <>
        Convenient Onboarding of New Tenants. Each tenant's data is isolated and remains invisible to other tenants.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

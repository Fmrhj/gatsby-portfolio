---
path: /notes/public-cloud-services-data-engineering
title: Public Cloud Services for Data Engineering
date: 2021-07-08
description: An overview of comparable cloud services for data engineering.
template: blog-template
tags:
  - public-cloud
  - PaaS
  - data-engineering
thumbnail: /data.jpg
---

In general, data engineering tasks involve *moving* from A to B, *transforming*, *storing*, *cleaning*, sometimes *serving*, and *presenting/visualing* these data. Now we have the public cloud, which brings even more alternatives to solve data problems and these can be overwhelming. Cloud services are meant to bundle many use cases and target a certain group of specialists by offering specific features. Depending on the nature of the business problem and how frequent data is refreshed there will be a different data solution architecture.

The building blocks of a cloud data architecture may change for different problems, but many times they could achieve similar purposes. This can be confusing. The public cloud developent teams for the major players, say [AWS](https://aws.amazon.com/), [Azure](https://azure.microsoft.com/en-us) or [GCP](https://cloud.google.com/), try to differentiate their services and to concurr in the big [PaaS](https://en.wikipedia.org/wiki/Platform_as_a_service) cloud solutions market, developing interesting features and extending their products. However, most of them are quite similar or at least comparable.

After going through many PaaS catalogues, I decided to break down a generic cloud data architecture, regardless of the specifics of data collecion, and to write down services that are similar in my opinion.

## General

A common cloud design pattern we may find in the could could be the following:

<div align="center">

<img src="https://user-images.githubusercontent.com/15943417/125093097-49bfe980-e0d2-11eb-95fe-6b633e08e8ea.png" alt="Data Cloud Architecture" width="120%"/>

*<small>Generic Cloud Data Architecture.</small>*
</div>

We define a **collecion** layer with different **ingestion** jobs, these feed data into a big **storage** layer. Here we store raw data or unprocessed data. The level of organization at this point can/should be the lowest. The collecion could be achieved with either **batch** or **streaming** jobs. In many cases, we need to have a more organized and powerful entity that gathers processed data and makes it available for downstream processes, this is the concept of **data warehousing**. Specialized divisions may want to access a particular subset of the data in **data marts**. They aggregate the data in such a level so they can consume it for their business purpose. Finally, we visualize the data with a business inteligence (BI) and reporting tool.

## Cloud Data Services Overview

| Service                              | AWS                                                        | GCP                                                       | Azure                     |
|--------------------------------------|------------------------------------------------------------|-----------------------------------------------------------|---------------------------|
| Data Warehouse                       | [Redshift](https://aws.amazon.com/redshift)                | [Big Query](https://cloud.google.com/bigquery/docs)                                             | [Synapse Analytics (ASA)](https://docs.microsoft.com/en-us/azure/synapse-analytics)|
| FaaS                                 | [Lambda](https://aws.amazon.com/lambda/)                   | [Cloud Functions](https://cloud.google.com/functions/docs)                                       | [Functions](https://docs.microsoft.com/en-us/azure/azure-functions/functions-overview)|
| Data Integration / ETL               | [Glue](https://aws.amazon.com/glue)                        | [Dataprep](https://cloud.google.com/dataprep)             | [Data Factory (ADF)](https://docs.microsoft.com/en-us/azure/data-factory/introduction) |
| Data Streaming                       | [Kinesis](https://aws.amazon.com/kinesis)                  | [Dataflow](https://cloud.google.com/dataflow/docs)        | [Event Hubs](https://docs.microsoft.com/en-us/azure/event-hubs/event-hubs-about) |
| Publisher-Subscription / Ingestion   | [Simple Notification Service (SNS)](https://aws.amazon.com/sns/)| [Pub/Sub](https://cloud.google.com/pubsub/docs/overview)  | [Service Bus](https://docs.microsoft.com/en-us/azure/service-bus-messaging/service-bus-messaging-overview)|
| Wide Column Databases                | [Dynamo](https://aws.amazon.com/dynamodb)                  | [BigTable](https://cloud.google.com/bigtable/docs/overview)  | [Cosmos DB](https://docs.microsoft.com/en-us/azure/cosmos-db/introduction)|
| Storage                              | [S3](https://aws.amazon.com/s3)                 | [Cloud Storage](https://cloud.google.com/storage/docs/overview)  | [Blob Storage](https://docs.microsoft.com/en-us/azure/storage/blobs/storage-blobs-introduction)|
| Data Lake                            | [Lake Formation](https://aws.amazon.com/lake-formation)                | [Cloud Storage](https://cloud.google.com/storage/docs/overview)  | [Data Lake Storage Gen2](https://docs.microsoft.com/en-us/azure/databricks/data/data-sources/azure/adls-gen2)|
| Data Marts                            | [RDS](https://docs.aws.amazon.com/rds/index.html)| [Cloud SQL](https://cloud.google.com/sql/docs/introduction)  | [Azure SQL Server](https://docs.microsoft.com/en-us/azure/azure-sql/azure-sql-iaas-vs-paas-what-is-overview)|
| Hadoop / Spark                   | [EMR](https://docs.aws.amazon.com/emr/index.html)| [Dataproc](https://cloud.google.com/dataproc/docs)  | [Azure HD Insight](https://docs.microsoft.com/en-us/azure/hdinsight/hdinsight-overview)|

## Resources

- [Overview for Cloud Services in AWS](https://dev.to/srinidhi/data-engineering-series-2-cloud-services-and-foss-in-data-engineer-s-world-5c46)

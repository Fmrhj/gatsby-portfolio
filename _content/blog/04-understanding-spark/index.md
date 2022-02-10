---
path: /notes/understanding-spark
title: Understanding Spark
date: 2022-01-17
description: Key elements to get into Spark
template: blog-template
tags:
  - distributed-systems
  - data-engineering
thumbnail: /spark.png
---

The most important points about Spark:

- Spark is a distributed system to process data
- It is memory-intensive processing.
- Reduces I/O in hard-drives (storage layer).

## Where should it go

Since it is a data processing framework, Spark would be normally located after a certain ingestion job. The result of this processing step could be either:

- connected to a queue/topic system, like Kakfa or
- written in disk or to a database for further analytics.

Taking as reference a [Lambda Architecture](https://levelup.gitconnected.com/big-data-lambda-architecture-in-a-nutshell-fd5e04b12acc), it will be part of both the *speed layer* which processes real-time data, and on the other hand, also part of the processing of immutable with batch jobs in the *batch layer*. 

## PySpark

This is the Python API to interact with a Spark Cluster. Today is the de facto interface for Spark displacing the original Scala API. It brings all the data processing frameworks from Python like pandas plus the normal features from Spark.

> See [PySpark docs](https://spark.apache.org/docs/latest/api/python/index.html).

## When not to use Spark

Spark integrates really good with streaming and batch processing. [Spark Streaming](https://databricks.com/glossary/what-is-spark-streaming) extends the Spark Core 


## Resources

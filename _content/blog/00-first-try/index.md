---
path: /blog/getting-started-with-opencl-and-gpu-computing
title: Getting started with OpenCL and GPU Computing
date: 2021-02-03
description: On parallel computation with OpenCL. A beginner's perspective
template: blog-template
tags:
  - parallel computing
  - OpenCL
  - GPGPU
  - open-source
thumbnail: /OpenCL_Logo.png
---
I have been experimenting with different ways of computing big data frames for some time now. Normally for these kind of problems, one would think quickly on distributed computing frameworks like [Spark](https://spark.apache.org/), [Flink](https://flink.apache.org/) or others from the Apache ecosystem, [](https://www.h2o.ai/products/h2o/)but I have the impression that one always try to out-scale prematurely something that we could achieve within a single node. Truth is, we can actually profit from parallel computing in our own (single node) hardware if we find the right way of stating the instructions. These are some notes from a beginner's perspective on **OpenCL** and **General-Purpose Computing on Graphical Processing Units (GPGPU)**.

## OpenCL for parallel computing

[OpenCL (Open Computing Language)](https://www.khronos.org/opencl/) has been around for some years now and allows us to execute programs in different computing **devices** like CPUs and GPUs. Its low-level API translates C/C++ code into compute *kernels* (which is another term for function) which can be run in a vast list of computing devices from different vendors like Nvidia, AMD, Intel, etc. It is similar to [CUDA](https://developer.nvidia.com/cuda-zone) but not specific to Nvidia devices. What is the best of it? It is open-source, royalty-free and a wide spread **standard**. Check [this comprehensive list](https://github.com/OpenCL/OpenCL/blob/master/OpenCL.md) of different platforms and tools working with OpenCL.

How is it faster? Essentially, it uses the power of the parallelization from the architecture of the computing device itself. CPU devices are designed to handle a wide-range of tasks but are limited in the amount of tasks they can handle *concurrently*. GPUs, on the other hand, are designed to process a larger amount of more *simple* tasks due to its larger amount of (smaller) cores. At being able to set a kernel running in a GPU, for instance, OpenCL can process data parallely in what they call *work-groups*.

<div align ="center">

<img src="https://i.ibb.co/rtVZ2GZ/cpu-gpu.png" alt="CPUs and GPU cores" width="30%"/>

*<small>Example comparison of number of cores for CPUs and a GPUs for emphasis.</small>*

</div>

## Base problem

Say we want to process a 2048 $\times$ 2048 pixel image. The whole **problem domain** consists of **4,194,304 points**. In a naive formulation, we would loop over all the points in the problem domain. With OpenCL, we can reformulate loops with **kernels** executing at each point. In the OpenCL verbose, we process $n$ work-items with work-groups. 

```c{numberLines:false}
// Traditional Loop
void trad_mult(int n, const float *a, const float*b, float *c){
    int i;
    // Loop over all n elements
    for(int i=0,i<n;i++){
        c[i] = a[i]*b[i];
    }
}
```

```opencl{numberLines:false}
// OpenCL implementation: execute kernel over n work-items
__kernel void dp_mult(global_const float *a, 
                      global_const float *b, 
                      global float *c){
    // Statement from loop
    int id = get_global_id(0);
    c[id] = a[id] * b[id];
}
```

*<small>Traditional loop in C vs Data Parallel OpenCL from [Poluri et.al 2014 - CNN based High Performance Computing for Real Time Image Processing on GPU](https://www.researchgate.net/publication/261984960_CNN_Based_High_Performance_Computing_for_Real_Time_Image_Processing_on_GPU)</small>*

</div>

Looking at the example above, one can see that OpenCL abstracts each loop step into a kernel defined by the `__kernel` type. A kernel is actually an algorithmic expression for each work-item. A global variable sets the number of work-items that should be grouped into a work-group. Let's say we group 128 work-items into a work-group, then we would have 4,194,304/128 = 32,768 work-groups in our example.

> *The granularity of each work-item will be determined by the implementer. In the example above we would take m-dimensional arrays and multiply them together.*

## Computation principles

To understand how kernels are executed in host devices it takes a bit more of computing architecture knowledge. Modern GPUs are in great part implementations of wide single instruction multiple data streams (SIMD) architectures. This means, a single command (e.g. kernel in OpenCL) operates on multiple data streams. Instructions can be executed parallely or sequentially on those streams.   

<div align="center">

<img src="https://upload.wikimedia.org/wikipedia/commons/2/21/SIMD.svg" alt="SIMD Architecture" width="35%"/>

*<small>SIMD Computer Architecture from [Flynn's taxonomy](https://en.wikipedia.org/wiki/Flynn%27s_taxonomy)</small>*

</div>

## Higher Level APIs: PyOpenCL

There are also implementations in other high-level languages like Python. The implementation is called [PyOpenCL](https://documen.tician.de/pyopencl/) and I will give some example implementations in the future. For now, here is a really good presentation at a PyCon 2018:

<div align="center">

[![pyOpenCL](https://img.youtube.com/vi/hqieYt9sXPU/0.jpg)](https://www.youtube.com/watch?v=hqieYt9sXPU "pyOpenCL")

*<small align="center">Gordon Inggs talking about PyOpenCL at the [PyCon South Africa 2018](https://www.youtube.com/watch?v=hqieYt9sXPU)</small>*

</div>

## Resources

* [Linux setup](https://wiki.tiker.net/OpenCLHowTo/)
* [Khronos OpenCL Blog](https://www.khronos.org/blog/tags/tag/opencl)
* [OpenCL: A Hands-on Introduction](https://www.nersc.gov/assets/pubs_presos/MattsonTutorialSC14.pdf)
* [OpenCL for programming shared memory multicore CPUs](https://www.diva-portal.org/smash/get/diva2:628242/FULLTEXT01.pdf)
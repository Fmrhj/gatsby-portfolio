---
path: /blog/on-parallel-computing-and-opencl
title: On parallel computing and OpenCL 
date: 2020-08-29T23:26:30.825Z
description: "About readings on parallel computation APIs and PyOpenCL. "
template: blog-template
tags: ["parallel computing", "python", "OpenCL", "CUDA"]
thumbnail: /OpenCL_Logo.png
---
To start a blog was not as easy as I thought. It requires discipline, dedication and time. Regardless of the subject, to take a look on the latest stand, to condense an idea around it and to write about it is an interestingly fullfilling endeavour. The culmination of the learning process should be to try to explain what you have just learned to somebody else. Following the principles of the great explainer Richard Feynmann and his [well-renowned technique](https://www.youtube.com/watch?v=GD-_fcpylcE), I would like to explain concepts in plain and simple language.  

I have been reading and working lately with parallel computing APIs. So let's start with that. 

## OpenCL for parallel computing

[![pyOpenCL](https://img.youtube.com/vi/hqieYt9sXPU/0.jpg)](https://www.youtube.com/watch?v=hqieYt9sXPU "pyOpenCL")

*<small>Gordon Inggs talking about PyOpenCL in PyCon South Africa 2018</small>*

![](https://www.researchgate.net/profile/Fadi_Al_Machot/publication/261984960/figure/fig1/AS:392430919667714@1470574230230/A-comparison-traditional-loop-with-the-OpenCL-data-parallel-kernel-The-gives-the.png "Traditional loop vs Data Parallel OpenCL")

*<small>Traditional loop vs Data Parallel OpenCL from [Poluri et.al 2014 - CNN based High Performance Computing for Real Time Image Processing on GPU](https://www.researchgate.net/publication/261984960_CNN_Based_High_Performance_Computing_for_Real_Time_Image_Processing_on_GPU)</small>*


## Setting up in Linux 

Wait a minute. 

## PyOpenCL

```python
import pyopencl
import numpy

# Get OpenCL system plaftforms 
print(platform.name for _ in pyopencl_getplatforms())
```

## Links

- [Linux setup](https://wiki.tiker.net/OpenCLHowTo/)
---
path: /blog/on-parallel-computing-and-opencl
title: On parallel computing and OpenCL 
date: 2020-08-29T23:26:30.825Z
description: "About readings on parallel computation APIs and PyOpenCL. "
template: blog-template
tags: ["parallel computing", "python", "OpenCL", "CUDA"]
thumbnail: /pexels-544917.jpg
---
To start a blog was not as easy as I thought. It requires discipline, dedication and time. Regardless of the subject, to take a look on its latest stand, to condense an idea around it and to write about it, is an interestingly fullfilling endeavour. The culmination of the learning process should be to try to explain what your learned to somebody else right away. Following the principles of the great explainer Richard Feynmann and his [well-renowned technique](https://www.youtube.com/watch?v=GD-_fcpylcE), I would like to explain concepts in plain and simple language.  

I have been reading and working lately around parallel computing. So let's start with that. 

## OpenCL for parallel computing

[![pyOpenCL](https://img.youtube.com/vi/hqieYt9sXPU/0.jpg)](https://www.youtube.com/watch?v=hqieYt9sXPU "pyOpenCL")

*<small>Gordon Inggs talking about PyOpenCL in PyCon South Africa 2018</small>*


## PyOpenCL

```python
import pyopencl
import numpy
```
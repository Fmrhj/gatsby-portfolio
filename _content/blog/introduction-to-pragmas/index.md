---
path: /blog/introduction-to-pragmas
title: Introduction to pragmas
date: 2021-02-14
description: An introduction to C compiler directives a.k.a pragmas. Examples with OpenMP.
template: blog-template
tags:
  - programming
  - compilers
  - open-source
thumbnail: /pragmas.png
---

A programming language is a collection of *language constructs* formed by [lexicon tokens](https://en.wikipedia.org/wiki/Lexical_analysis#Token) which represent instructions. A **compiler** processes these instructions and turns them into machine code. A **preprocessor** is a part of the compiler that process the code in a first instance and takes control of inclusion of header files, macro expansions and conditional compiling logic. 

## Pragmas and C

The [C standard](https://en.cppreference.com/w/c/header) allows additional language constructs in the **preprocessor** like `#define`, `#include`. A special directive handled by the preprocessor is `#pragma` which indicates a implementation-dependent feature. It basically indicates that we are about to use some specific implementation of the language and that this should be taken into account by the compiler and will basically turn on (or turn off) some features. 

Why do they exists? In general, its use indicates that we are about to use an implementation which is not part of the standard. One of the interesting uses of `#pragma` directives is that we tell the compiler to [set a machine-specific or os-specific context](https://stackoverflow.com/a/232796). 
 
## OpenMP example

## Resources

- [A proposal for loop transformation pragmas](https://link.springer.com/chapter/10.1007/978-3-319-98521-3_3)

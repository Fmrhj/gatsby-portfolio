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

A programming language is a collection of *language constructs* formed by [lexicon tokens](https://en.wikipedia.org/wiki/Lexical_analysis#Token) which are processed to indicate instructions in a lower level (machine) language. A **compiler** processes these entities and turns them into machine code. A **preprocessor** is a part of the compiler that processes the code in a first instance and takes control of tasks such as the inclusion of header files, macro expansions and **conditional compiling** logic. I would like to demonstrate the concept of compiler directives in the context of the C programming language, using a simple example of pragmas to execute parallel programs with OpenMP.

## Pragmas and C

The [C standard](https://en.cppreference.com/w/c/header) allows additional language constructs in the **preprocessor** like `#define`, `#include`. A special directive handled by the preprocessor is `#pragma` which indicates a implementation-dependent feature. It basically announces that we are about to use some specific implementation of the language and that this should be taken into account by the compiler and will basically turn on or turn off some special features.

**What is the use of it?**  It indicates that we are about to use an implementation which is not part of the standard. One of the interesting uses of **pragma** directives is that we tell the compiler to [set a machine-specific or os-specific context](https://stackoverflow.com/a/232796). In the context of GPGPU computing, this is essential to take advantage of a superior hardware setup.

## OpenMP example

[OpenMP](https://www.openmp.org/) is an open-source API that supports **multi-platform shared-memory multiprocessing** programming in C/C++ and Fortran. It consists of a collection of compiler directives, library routines (in runtime) and environment variables. I would like to use this library as an example of the use of pragmas.

Let us formulate a simple program that outputs the execution time of the same program. We abstract the computation with a simple `time()` function which runs for two seconds.

```c
#include<stdio.h>
#include<time.h>  // for time()
#include<unistd.h>  // for sleep()
 
// function to find the execution time of a program
int main()
{
    // to store execution time of code
    time_t begin = time(NULL);
    
    // wait 2 seconds
    sleep(2);
    
    time_t end = time(NULL);
    
    printf("Time elapsed is %ld seconds", (end - begin));
 
    return 0;
}
```

The output is the following:

```output
Time elapsed is 2 seconds%
```

Let us say, we want to run this function five times. We could put the inner function inside of a loop:

```c
int main()
{
    time_t begin = time(NULL);
    int i = 0;
    int number_of_times = 5; 

    for (i=0; i<= number_of_times; i++){
        // wait 2 seconds
        sleep(2);
    }   

    time_t end = time(NULL);
    
    printf("Time elapsed is %ld seconds", (end - begin));
 
    return 0;
}
```

The output, as expected is:

```output
Time elapsed is 10 seconds%
```

A parallel version of this program using OpenMP pragmas would look like this:

```c
// execute the program parallely
int main()
{
    time_t begin = time(NULL);
    int i;
    int number_of_times = 5; 

    // set number of threads 
    omp_set_num_threads(number_of_times);
    
    // we open a parallel region
    #pragma omp parallel for
    for (i=0; i<number_of_times;i++){
        int thread_id = omp_get_thread_num();
        printf("Starting thread number %d\n", thread_id);
        sleep(2);
    }
        
    time_t end = time(NULL);
    
    printf("Time elapsed is %ld seconds", (end - begin));
 
    return 0;
}
```

And the output is:

```output
Starting thread number 0
Starting thread number 3
Starting thread number 2
Starting thread number 1
Starting thread number 4
Time elapsed is 2 seconds%  
```

>**Note**: to compile this program you need to pass the flag `-fopenmp` argument to the compiler (in this case `gcc`).

In the example above, even though the function `sleep(2)` was executed five times, the whole program took a total execution of 2 seconds and not 10 as in the sequential variant.

## Conclusion

This is a simple example to show the syntax portability and flexibility of pragmas to interact with a comprehensive API such as OpenMP. They allow to preserve language functionality and interact with a whole new ecosystem that extends the base language with few directives. They work as a switch dealing with the compiler directly and that facilitates new features to coexist with the core language, e.g. in sequential environments, OpenMP pragmas would be considered as comments and thus ignored. This is specially interesting when dealing with software that shall adapt to different contexts, as well as taking advantage from a different hardware configuration without having to change the code.

## Resources

- [A proposal for loop transformation pragmas](https://link.springer.com/chapter/10.1007/978-3-319-98521-3_3)
- [OpenMP API 5.1 Specs](https://www.openmp.org/wp-content/uploads/OpenMP-API-Specification-5-1.pdf)
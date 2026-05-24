---
title: "Thoughts on vertical integration"
date: 2018-02-10
layout: post.njk
permalink: /inspirations/2018/02/10/vertical-integration.html
description: "Imagine taking an airplane, one would not need to know how to build it before sitting comfortable in it. Similarly, a pilot need not to know how each part of..."
lang: en
translation_key: vertical-integration
original: true
---

Imagine taking an airplane, one would not need to know how to build it before sitting comfortable in it. Similarly, a pilot need not to know how each part of the plane works mechanically, a mechanic need not to know how each tool is created, and a software engineer need not to know the blueprint of his/her computer chips. Thus, for every complicate system there are different levels of abstraction. Each level is build on top of the previous one. Moreover, it seems to be easier to build level x+1 using level x rather than level x-1.

However, one may argue that everything can be explained or constructed using only the very low level components (e.g., atom level), except that it is almost impossible for us to comprehend a holistic view using only the lower level components. By introducing higher level abstractions, we make communication of ideas and knowledge more efficiently. Essentially, we create embedding to reduce the computation cost for ourselves to think and imagine, and to reduce the bandwidth need for us to communicate. But, at the same time, such compression also introduce noise.

On the other hand, machines have perfect memory and potentially more computation power. So, is it possible that in future machine learning we can abandon the higher level abstractions? Obviously, current approaches still embrace the structure information and the idea of embedding and adding levels of abstraction (e.g., 100+ layer CONV Nets). But do we really need it? If we do so much computation and achieve optimization using genetic programming, why can't we have a "vertical integration" of abstractions and learn everything at the atom level? In that case, we create less noise and higher accuracy.

One note to myself is that structural information may not equal to high level of abstraction. For example, by processing an image using a 2D/3D array instead of a 1D array, we preserve information rather than introducing a higher level of abstraction.

(TODO: Need to write an example in CNN…)


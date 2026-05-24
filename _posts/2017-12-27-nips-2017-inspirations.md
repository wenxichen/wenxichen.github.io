---
title: "Inspirations from Worms at NIPS2017"
date: 2017-12-27
layout: post.njk
permalink: /inspirations/2017/12/27/nips-2017-inspirations.html
description: "NIPS2017 is my first time to the conference. I would like to share some thoughts and inspirations from the Workshop on Worm's Neural Information Processing."
lang: en
translation_key: nips-2017-inspirations
original: true
---

NIPS2017 is my first time to the conference. I would like to share some thoughts and inspirations from the [Workshop on Worm's Neural Information Processing](https://sites.google.com/site/wwnip2017/home). Hopefully it would be useful for others' research.

[C. Elegans](https://en.wikipedia.org/wiki/Caenorhabditis_elegans) is a worm species. What's special about it is that all of its neurons have been completely mapped out. Although the worm only has 302 neurons, it can perform most things animals do - navigating, mating, finding food etc. So the Workshop on Worm's Neural Information Processing tried to bridge between the neural science research on C. Elegans and machine learning. I personally had never heard about C. Elegans before the workshop. But the workshop turned out to be really interesting and inspiring. Below are some interesting points the great speakers came across that I found not entirely consistent with the current popular design of machine learning models, thus worth sharing.

## Sensory layer does more than embedding

Professor Netta Cohen gave a talk about C. Elegans search for salt. She showed that the sensory layer in C. Elegans is adaptive to its experience. So the simple example was that if the worm is on salt, it will become less attracted to salt; if it is not around salt any more, it will become attracted by salt again. As a result, there seems to be recurrent computation between the internal sensory states. This kind of computation certainly is doing more than embedding. Indeed, they did some experiment on pothole detection using a simulated adaptive navigation [1].

## Activation may be distributed to more than one neurons

Dr. William R. Schafer gave a talk about the effect of removing neurons on C. Elegans' muscle control. They found different types of mapping between neurons to the muscle movement. Some neuron is necessary to certain movement, while some other neuron is not individually necessary. It is not clear why the differences, but it is definitely worth looking into. However, I realize this is not inconsistent with MLP where the effect of removal of certain neuron on activation depends on the weight. Abstract of the paper on this topic can be found here [2].

## Recurrent structure of neurons

Professor Radu Grosu presented his team's work on robot parking with worm inspired neural networks. There are two things make this neural network design really interesting. The first is that the network only has about 10 neurons. Secondly, each neuron is like a flip-flop. There are recurrent computations within groups of neurons and also from a single neuron direct back to itself. The network was trained using some genetic algorithms. But Ramin M. Hasani and Mathias Lechner (both are contributors to this work) mentioned they implemented this on tensorflow using some gradient method which increased the training speed significantly.

It seems the recurrent structure can really help with reducing the number of neurons. I believe the team will publish their work soon (hopefully the code as well). I can't wait to read more about this.

## Holistic design in Biology

Another interesting issue pointed out during the final panel discussion is that the neurons and body of an organism are usually highly synchronized with each other. Maybe this is not something we need to concern if we just want to design a model that does not control a body. But if it is an intelligent system for a robot, it may be worth thinking about what constitutes this synergy and what's the benefit of it.

## Conclusion

Although I don't think AI will be designed exactly the same way as any existing living organism, the work of nature can still give us a lot of inspirations. I remember hearing the argument that to achieve what human can do we should start small to achieve what a rat can do first. Thus, it may worth a while looking into C. Elegans first.

## References

1. A C. elegans inspired robotic model for pothole detection [[link](https://docs.google.com/viewer?a=v&pid=sites&srcid=ZGVmYXVsdGRvbWFpbnx3d25pcDIwMTd8Z3g6YTg4YzA5YTViMzRhMWNm)]

   John Lones, Anthony G Cohn, Netta Cohen

2. Using network control principles to probe the structure and function of neuronal connectomes [[abstract](https://docs.google.com/viewer?a=v&pid=sites&srcid=ZGVmYXVsdGRvbWFpbnx3d25pcDIwMTd8Z3g6ZTRjNGYzMTMxMWZlYzQ3)]

   William R. Schafer, Gang Yan, et al.


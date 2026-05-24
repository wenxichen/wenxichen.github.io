---
title: "NIPS2017 线虫神经信息处理工作坊的启发"
layout: false
permalink: false
lang: zh
translation_key: nips-2017-inspirations
---

NIPS2017 是我第一次参加这个会议。我想分享一些来自[线虫神经信息处理工作坊](https://sites.google.com/site/wwnip2017/home)的想法和启发，希望对其他人的研究有所帮助。

[秀丽隐杆线虫（C. Elegans）](https://en.wikipedia.org/wiki/Caenorhabditis_elegans)是一种线虫。它的特别之处在于，其所有神经元都已被完全绘制出来。尽管这种线虫只有 302 个神经元，它却能完成大多数动物能做的事情——导航、交配、寻找食物等。因此，线虫神经信息处理工作坊试图在 C. Elegans 的神经科学研究与机器学习之间架起桥梁。在此之前，我个人从未听说过 C. Elegans。但这场工作坊非常有趣且富有启发性。以下是几位优秀演讲者提出的一些有趣观点——我发现它们与当前流行的机器学习模型设计并不完全一致，因此值得分享。

## 感觉层不只是嵌入

Netta Cohen 教授做了一场关于 C. Elegans 寻找盐分的报告。她展示了 C. Elegans 的感觉层会根据经验进行自适应。一个简单的例子是：如果线虫处于有盐的环境中，它对盐的吸引力会减弱；如果它不再处于有盐的环境中，它又会重新被盐吸引。因此，内部感觉状态之间似乎存在循环计算。这种计算显然不只是在做嵌入。事实上，他们使用模拟的自适应导航进行了一些坑洼检测实验 [1]。

## 激活可能分布在多个神经元上

William R. Schafer 博士做了一场关于移除神经元对 C. Elegans 肌肉控制影响的报告。他们发现神经元与肌肉运动之间存在不同类型的映射。某些神经元对特定运动是必需的，而另一些神经元则不是单独必需的。目前尚不清楚差异的原因，但绝对值得深入研究。不过，我意识到这与 MLP 并不矛盾——移除某个神经元对激活的影响取决于权重。相关论文摘要见此处 [2]。

## 神经元的循环结构

Radu Grosu 教授展示了他团队用受线虫启发的神经网络进行机器人停车的研究。这种神经网络设计有两个非常有趣的特点。第一，网络只有大约 10 个神经元。第二，每个神经元类似于一个触发器（flip-flop）。神经元组内存在循环计算，单个神经元也可以直接反馈到自身。网络使用遗传算法进行训练。但 Ramin M. Hasani 和 Mathias Lechner（均为该工作的贡献者）提到，他们用 TensorFlow 实现了某种梯度方法，显著提高了训练速度。

循环结构似乎真的有助于减少神经元数量。我相信该团队很快会发表他们的工作（希望代码也会公开）。我迫不及待想阅读更多相关内容。

## 生物学中的整体设计

在最后的 panel 讨论中，另一个有趣的问题是：生物体的神经元与身体通常高度协同。如果我们只是想设计一个不控制身体的模型，这可能不是我们需要关心的问题。但如果是一个用于机器人的智能系统，也许值得思考这种协同是如何形成的，以及它有什么好处。

## 结论

虽然我不认为 AI 会完全按照现有生物体的方式设计，但自然界的作品仍然能给我们带来很多启发。我记得曾听到一种说法：要实现人类能做的事情，应该从小处着手，先实现老鼠能做的事情。因此，研究 C. Elegans 也许是值得的。

## 参考文献

1. A C. elegans inspired robotic model for pothole detection [[link](https://docs.google.com/viewer?a=v&pid=sites&srcid=ZGVmYXVsdGRvbWFpbnx3d25pcDIwMTd8Z3g6YTg4YzA5YTViMzRhMWNm)]

   John Lones, Anthony G Cohn, Netta Cohen

2. Using network control principles to probe the structure and function of neuronal connectomes [[abstract](https://docs.google.com/viewer?a=v&pid=sites&srcid=ZGVmYXVsdGRvbWFpbnx3d25pcDIwMTd8Z3g6ZTRjNGYzMTMxMWZlYzQ3)]

   William R. Schafer, Gang Yan, et al.

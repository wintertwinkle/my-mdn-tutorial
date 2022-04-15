# Performance fundamentals

## What is performance?

从根本上来说，用户感知性能是性能优化的终极目标：即提升用户体验。

### Responsiveness

应用应该能对用户的交互做出即时响应

### Framerate

应用应尽量保持页面的帧率>=60

### Memory usage

合理利用内存，在满足应用所需要维护的状态下，做到不浪费内存。

### Power usage

电量优化

## Platform performance optimizations

该节讨论了浏览器对优化所做出的贡献

### Web technologies

HTML 和 CSS 的绘制是浏览器接管的，而 Canvas 直接给开发者提供一个像素缓存(pixel buffer)进行底层绘制。

### Gecko rendering(渲染引擎)

浏览器引擎主要有 3 家：

- Mozilla 的 Gecko
- Apple 的 Webkit (基于 KHTML)
- Google 的 Blink (基于 Webkit)

## Application performance

This section is intended for developers asking the question: "How can I make my app fast"?

### Startup performance

应用的启动性能主要由 3 方面影响：

1. First paint 首次绘制，
2. When the application becomes **interactive** 可交互时间
3. Full load

在首次绘制之前，必然会经历以下严格步骤：

1. The HTML must be parsed
2. The DOM for that HTML must be constructed
3. Resources like images in that part of the DOM have to be loaded and decoded
4. The CSS styles must be applied to that DOM
5. The styled document has to be reflowed

JS 的加载和执行，图片的加载和解码不在上述步骤之中，也就是说它们不是渲染的必要组成部分。

所以为了提高启动性能，主要的方法就是在 `critical path` 中只执行必要的代码。其余的不必要的资源和代码可以后续加载，这就是 `Lazy loading` 策略。

除了 `critical path` 所占用的时间之外，另一个影响应用启动速度的因素就是获取资源的速度。

我们可以以浏览器和服务器之间为界限，可以把影响应用启动速度的因素分成两类：

1. 在服务器端到浏览器，获取资源的速度快慢。

获取资源的速度快慢首要因素是网速，这个是不可控因素。

可控的部分如：

- 利用 CDN 提高内容分发速度
- 利用缓存提高内容分发速度，比如浏览器本地缓存，这是最快的速度了。
- 利用 dns-prefetch 提高 URL 解析速度
- 合并 HTTP 请求来减少 TCP 的建立时间
- 保持 TCP 通道的建立
- 通过压缩资源，减少传输时间

2. 在浏览器端，执行 `critical path` 的速度。

- 合理确定首页资源的顺序，利用 preload 来调整资源加载顺序
- 延迟非必要脚本的执行

### Framerate

确保高帧率的第一要务是使用合适的工具做合适的事情：

- 能用静态 HTML 和 CSS 完成的事情就不要用 JavaScript 来动态生成
- 能用 CSS 动画就不要用 JavaScript 动画
- 涉及到高动态性高交互性的内容比如游戏应该使用 Canvas 进行渲染，高性能应用必用 Canvas 进行图形渲染
- 使用 `requestAnimationFrame()` 代替 `setInterval()` 进行动画渲染

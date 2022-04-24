# What is web performance?

一切性能优化的出发点都是为了提高用户体验。

- Does the site load quickly?
- Allow the user to start interacting with it quickly?
- Offer reassuring feedback if something is taking time to load (e.g. a loading spinner)?
- Are scrolling and animations smooth?

## What is web performance?

Web performance is the objective measurement and perceived user experience of a web site or application. This includes the following major areas:

### Reducing overall load time 减少整体加载时间

可用的措施：

- 对可重用文件进行 HTTP 缓存
- 减少传输文件的体积，压缩
- 减少 HTTP 连接次数，合并多个文件
- 利用 dns-prefetch 提前解析资源 IP 地址

- 利用 CDN 缩短资源加载时间 [What is a CDN? | How do CDNs work](https://www.cloudflare.com/learning/cdn/what-is-a-cdn/)

### Making the site usable as soon as possible 减少首页加载时间

This basically means loading your web site assets in a sensible order so that the user can start to actually use it really quickly.

**性能指标：** [TTI: Time to interactive](https://developer.mozilla.org/en-US/docs/Glossary/Time_to_interactive)

可用的措施：

- 利用 [preload](https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types/preload) 改变资源加载顺序
- [Lazy loading](https://developer.mozilla.org/en-US/docs/Web/Performance/Lazy_loading) 非必要资源的延迟加载

### Smoothness and interactivity 交互的即时响应和流畅性

即时响应和流程性怎么描述：

- 页面的滚动是否丝滑？
- 按钮是不是能点击？
- pop-ups 是不是能快速打开？
- 动画是否流畅？

可用的措施：可用的措施太多了

- 在动画的选择上，能用 CSS 动画就不要用 JS 动画
- 减少计算量大的 JS 操作，或者用 Web worker 来接管计算量大的 JS 操作，避免 JS 执行栈的堵塞
- 利用 [throttle debounce](https://css-tricks.com/debouncing-throttling-explained-examples/) 来减少事件的触发频率，避免 JS 执行栈的堵塞
- 尽量减少页面的重排和重绘

JavaScript方面性能优化的推荐书籍：

- High Performance JavaScript by Nicholas C. Zakas

### Perceived performance 用户感知性能

可用的措施：

- 加载提示如骨架屏，进度条等

### Performance measurements 性能测量

## How content is rendered

为了更好的进行性能优化，了解浏览器背后的一些工作原理是必需的，包括：

- [浏览器渲染原理](https://developer.mozilla.org/en-US/docs/Web/Performance/How_browsers_work)
- 首页资源加载顺序
- [浏览器渲染路径](https://developer.mozilla.org/en-US/docs/Web/Performance/Critical_rendering_path)
- 了解 DOM
- [网络延迟](https://developer.mozilla.org/en-US/docs/Web/Performance/Understanding_latency)，了解 TCP, HTTP, HTTPS 的建立流程

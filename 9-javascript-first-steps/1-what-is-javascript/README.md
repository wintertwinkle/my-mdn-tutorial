# What is JavaScript?

## Script loading strategies

JS 代码加载策略 1:

```html
<body>
  <!--content-->
  <script src="script.js"></script>
</body>
```

JS 代码加载策略 2: 适用于嵌入式 JS

`DOMContentLoaded` 事件： HTML body is completely loaded and parsed.

```js
document.addEventListener("DOMContentLoaded", () => {
  // do something
})
```

JS 代码加载策略 3: 适用于外部脚本

```html
<script src="script.js" defer></script>
<script src="script.js" async></script>
```

### async 和 defer

`async`:

异步加载，加载完立即执行，执行期间阻塞 DOM 的解析，不能保证执行顺序。

适用场景：不需要依赖 DOM 和其他 JS 文件，需要尽快执行的代码。

`defer`:

异步加载，等待 DOM 解析完毕后执行，保证按加载顺序执行。

适用场景：需要依赖 DOM 和其他 JS 文件，不需要尽快执行的代码。

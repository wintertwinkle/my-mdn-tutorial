# Client-side storage

## Client-side storage?

浏览器端存储的用途：

-   保存用户偏好：如颜色主体，字体大小，对某型功能的偏好等
-   (会话持久化) Persisting previous site activity (e.g. storing the contents of a shopping cart from a previous session, remembering if a user was previously logged in).
-   (数据和资源缓存) Saving data and assets locally so a site will be quicker (and potentially less expensive) to download, or be usable without a network connection.
-   Saving web application generated documents locally for use offline

浏览器端存储和服务端存储一般共同使用来完成某个功能：

比如，用户在玩一个游戏或使用音乐播放器的时候，初始时先从服务器获取音乐，接着将其存储在客户端，然后下次再打开的时候，就不需要重新从服务器获取了。

## Cookies

最早的浏览器存储功能是 `cookies`, `cookies` 一般用来存储用户相关信息如 `session IDs` 和 `access tokens`

[Using HTTP cookies](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies)

## Web Storage

[Web Storage API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API)

有两种 Web Storage 存储机制：

`sessionStorage`:

保存和服务器会话过程中的数据，当页面刷新，恢复时不会销毁，当页面关闭时数据销毁。数据不会发送给服务器。数据大小限制为 `5MB`

`localStorage`:
数据存储在浏览器本地，没有过期时间，只能通过 JavaScript 来和清除浏览器缓存来销毁。

### 存储范围疑问

storage 是所有 tab 页共享存储还是按 `Origin` 单独存储的？

答：按 `Origin` 进行存储的，从安全的角度出发，必然是这样的，防止数据跨域。

### 浏览器能力检测

[brief history of feature-detecting localStorage](https://gist.github.com/paulirish/5558557)

在使用 storage API 时，首先要对浏览器能力进行检测：

```js
function storageAvailable(type) {
    var storage
    try {
        storage = window[type]
        var x = "__storage_test__"
        storage.setItem(x, x)
        storage.removeItem(x)
        return true
    } catch (e) {
        return (
            e instanceof DOMException &&
            // everything except Firefox
            (e.code === 22 ||
                // Firefox
                e.code === 1014 ||
                // test name field too, because code might not be present
                // everything except Firefox
                e.name === "QuotaExceededError" ||
                // Firefox
                e.name === "NS_ERROR_DOM_QUOTA_REACHED") &&
            // acknowledge QuotaExceededError only if there's something already stored
            storage &&
            storage.length !== 0
        )
    }
}
```

使用方法：

```js
if (storageAvailable("localStorage")) {
    // Yippee! We can use localStorage awesomeness
} else {
    // Too bad, no localStorage for us
}
```

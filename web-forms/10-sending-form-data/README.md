# Sending form data

## On the client side: defining how to send the data

`<form>`元素定义了数据如何发送给服务器。

### The `action` attribute

### The `method` attribute

## A special case: sending files

通过 HTTP 发送的数据大多都是文本格式，但文件是二进制数据。

由于 HTTP 是一个文本协议，因此文件的传输需要一些特殊处理。

### The `enctype` attribute

这个属性可以指定由表单提交发起的 HTTP 请求的 `Content-Type` header.

表单发起请求时，如果不指定 `enctype` 的值，它的默认值是 `application/x-www-formurlencoded`. 意味着表单数据将会添加到 url 参数上。

如果要发送文件，需要以下三步：

1. 设置 `method="POST"` 因为文件不能像普通数据那样添加到 url 上
2. 设置 `enctype="multipart/form-data"` `multipart`意味着请求的 body 里有多个数据，可能是文本，可能是文件。
3. 在表单里添加 `<input type="file">`

## Security issues

每次向服务器发送数据时，都要考虑安全性。

[Website security](https://developer.mozilla.org/en-US/docs/Learn/Server-side/First_steps/Website_security)

### Be paranoid: Never trust your users

-   对于一切具有潜在危险的字符都要进行转义
-   限制发送到服务器的数据大小
-   对于上传的文件使用沙盒

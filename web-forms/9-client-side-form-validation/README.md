# Client-side form validation

表单验证

## Different types of client-side validation

两种类型的表单验证：

-   Built-in form validation 浏览器 HTML5 自带验证
-   JavaScript 开发者使用 JavaScript 自定义的表单验证

## Using built-in form validation

通常浏览器自带验证会根据表单控件上带的属性进行验证：

-   `required`
-   `minlength` `maxlength`
-   `min` `max` 范围要求
-   `type` 比如 `type="email"` `type="tel"` 等等
-   `pattern` 自定义正则表达式

## Validating forms using JavaScript

### The Constraint Validation API

表单验证 API：[Constraint validation API](https://developer.mozilla.org/en-US/docs/Web/API/Constraint_validation)

支持表单验证 API 的元素有：

-   HTMLButtonElement (represents a <button> element)
-   HTMLFieldSetElement (represents a <fieldset> element)
-   HTMLInputElement (represents an <input> element)
-   HTMLOutputElement (represents an <output> element)
-   HTMLSelectElement (represents a <select> element)
-   HTMLTextAreaElement (represents a <textarea> element)

上面这些元素有以下属性：

-   `validationMessage` : 提示信息
-   `validity`: 返回一个 `ValidityState` 对象，这个对象有几个描述元素相关验证状态的属性, [查看 ValidityState 详细信息](https://developer.mozilla.org/en-US/docs/Web/API/ValidityState)
-   `willValidate`: 返回当提交表单前这个元素是否需要被验证。

### Validating forms without a built-in API

有些时候，旧版的浏览器不支持表单验证 API，或者是你 DIY 的表单控件。这些情况下表单验证 API 就不能用了，需要自己去实现验证功能。

在实现验证功能之前，先问自己几个问题：

-   使用哪种验证方法？字符串操作？类型转换？正则表达式？
-   当验证失败的时候，怎么提示用户？
-   怎么提示用户进行正确的输入？

参考资料：

-   [Form-Field Validation: The Errors-Only Approach](https://www.smashingmagazine.com/2012/06/form-field-validation-errors-only-approach/)
-   [Web Form Validation: Best Practices and Tutorials](https://www.smashingmagazine.com/2009/07/web-form-validation-best-practices-and-tutorials/)
-   [10 Tips for Optimizing Web Form Submission Usability](https://www.webfx.com/blog/web-design/10-tips-for-optimizing-web-form-submission-usability/)
-   [Inline Validation in Web Forms](https://alistapart.com/article/inline-validation-in-web-forms/)

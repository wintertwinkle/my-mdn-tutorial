# Styling web forms

## Why is styling form widgets challenging?

因为 CSS 的出现时间(1996)比表单控件的出现时间(1995)要晚。
并且一开始浏览器厂商不愿意提供装饰表单元素的功能。

### 在相同的 CSS 下，不是所有的表单控件的表现都一致

根据表单控件的装饰难度可以分为以下三级：

1. The good: 容易装饰的表单控件
   - `<form>`
   - `<filedset>` 和 `<legend>`
   - 单行`<input>` 如 type text, url, email 除了 `<input type="search">`
   - `<textarea>`
   - Buttons(包括 `<input>` 和 `<button>`)
   - `<lable>`
   - `<output>`
2. The bad: 难装饰的表单控件，需要复杂的 CSS 技巧
   - Checkboxes and radio buttons
   - `<input type="search">`
3. The ugly: 不能完全装饰的表单控件，推荐使用自定义控件(custom form controls)代替
   - `<input type="color">`
   - Date-related controls such as `<input type="datetime-local">`
   - `<input type="range">`
   - `<input type="file">`
   - Elements involved in creating dropdown widgets, including `<select>`, `<option>`, `<optgroup>` and `<datalist>`.
   - `<progress>` and `<meter>`

## The good

## A specific styling example

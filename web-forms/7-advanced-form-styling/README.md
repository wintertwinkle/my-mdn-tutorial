# Advanced form styling

这部分内容主要是讲如何用 CSS 装饰那些比较难装饰的表单控件如：

-   单选和多选按钮 Checkboxes and radion buttons
-   搜索框 `<input type="search">`
-   下拉列表 `<select>` `<option>` `<optgroup>` `datalist`
-   颜色选择器 `<input type="color">`
-   文件选择器 `<input type="file>`
-   进度条 `<progress>` 和 `<meter>`

## appearance: controlling OS-level styling

表单控件的外观很大程度上由操作系统决定。

`appearance`属性是用来控制表单控件应用哪种系统外观的一种方法，但是在不同的浏览器中，该属性的表现可能会不一样，因此没什么卵用(我丢~)，但是该属性用的最多的一个值是：

```css
input {
    -webkit-appearance: none;
    appearance: none; // 尚未标准化的时候，浏览器是不认识这个属性的
}
```

这个值可以丢弃表单控件的默认外观，然后就可以自己 DIY 外观啦！

**Note:** 对于带有前缀的属性，最好同时写上带前缀和不带前缀的版本。因为带前缀的版本意味着这个属性是尚未标准化的属性，当称为标准后，浏览器厂商可能会删掉带前缀的属性。

### Taming search boxes

```
input[type="search"] {
    -webkit-appearance: none;
    appearance: none;
}
```

### Styling checkboxes and radio buttons

Styling a checkbox or a radio button is tricky by default.

The sizes of check boxes and radio buttons are not meant to be changed with their default designs, and browsers react very differently when you try.

解决方法：

```
input[type="checkbox"] {
    -webkit-appearance: none;
    appearance: none;
}
```

## What can be done about the "ugly" elements?

-   下拉列表 `<select>` `<option>` `<optgroup>` `datalist`
-   颜色选择器 `<input type="color">`
-   文件选择器 `<input type="file>`
-   进度条 `<progress>` 和 `<meter>`

这些表单控件理论上很难完全通过 CSS 来控制其外观。比如它们内部的一些功能部件在理论上来说你是无法用 CSS 修饰的。

### Selects and datalists

关于`<select>` 和 `<datalist>`主要有两个点是无法控制的：

第一个点： the `<select>`'s "arrow" icon that indicates it is a dropdown differs across browsers.

解决方法：

第一步：使用 `appearance: none` 消掉这个指示箭头

```css
select {
    -webkit-appearance: none;
    appearance: none;
}
```

第二步：使用 `::before` 或者 `::after` 自己造一个箭头

```html
<div class="select-wrapper">
    <select id="select" name="select">
        <option>Banana</option>
        <option>Cherry</option>
        <option>Lemon</option>
    </select>
</div>
```

```css
.select-wrapper {
    position: relative;
}

.select-wrapper::after {
    content: "▼";
    font-size: 1rem;
    top: 6px;
    right: 10px;
    position: absolute;
}
```

### Date input types

the internal parts of the control (e.g. the popup calendar that you use to pick a date, the spinner that you can use to increment/decrement values) are not stylable at all, and you can't get rid of them using appearance: none;. If you really need full control over the styling, you'll have to either use some kind of library to generate a custom control, or build your own.

### Range input types

对于 `<input type="range">`, 修改那根横条很简单，但是中间那个拖动块很难搞，需要自己 DIY 一个。

下面是一篇关于 DIY 这个的文章：

[Styling Cross-Browser Compatible Range Inputs with CSS ](https://css-tricks.com/styling-cross-browser-compatible-range-inputs-css/#top-of-site)

### Color input types

同样的问题，自己 DIY 吧骚年。

### File input types

关于文件选择器的 CSS 问题，主要是那个选择文件的按钮完全无法被 CSS 控制。

解决方案：
加一个相关的 `<label>` 然后把 `<input type="file">` 给隐藏

```html
<p>
    <label for="fileChooser" id="filePicker">Choose a file</label>
    <input type="file" name="" id="fileChooser" />
</p>
```

```css
input[type="file"] {
    height: 0;
    padding: 0;
    opacity: 0;
}
#filePicker {
    box-sizing: border-box;
    cursor: pointer;
    background-color: black;
    color: #fff;
    width: 100px;
    height: 50px;
    padding: 5px;
    border: 0;
    border-radius: 10px;
    margin: 0;
}
```

### Meters and progress bars

放弃使用原生，用第三方库或者自己 DIY 吧

这里有一个比较不错的库：[progress.js](https://kimmobrunfeldt.github.io/progressbar.js/#examples)，原理：SVG 绘图

# Other form controls

非 `<input>` 表单控件

## Multi-line text fields

`<textarea>`

## Drop-down controls

### Select box

`<select>`

```html
<select id="simple" name="simple">
  <option>Banana</option>
  <option selected>Cherry</option>
  <option>Lemon</option>
</select>
```

### Autocomplete box

`<datalist>`

```html
<label for="myFruit">What's your favorite fruit?</label>
<input type="text" name="myFruit" id="myFruit" list="mySuggestion" />
<datalist id="mySuggestion">
  <option>Apple</option>
  <option>Banana</option>
  <option>Blackberry</option>
  <option>Blueberry</option>
  <option>Lemon</option>
  <option>Lychee</option>
  <option>Peach</option>
  <option>Pear</option>
</datalist>
```

## Other form features

### Progress

例子：

```html
<progress max="100" value="75">75/100</progress>
```

### Meter

```html
<meter min="0" max="100" value="75" low="33" high="66" optimum="50">75</meter>
```

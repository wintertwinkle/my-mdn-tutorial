# The HTML5 input types

下面这些都是 HTML5 支持的新类型输入控件，但是不是所有浏览器都支持这些新的控件类型。
较新版本的浏览器可能全部支持，旧版本的浏览器可能支持部分，也可能都不支持。
并且对于相同的控件，在不同的浏览器的表现(样式风格)和功能也可能是不一致的。

因此，为了保证不同用户在不同浏览器上的体验的一致性，还是有必要**自定义(自制)输入控件**。

## E-mail address field

`email`控件有内置的输入验证(`validation`)。
但还是建议自己实现 `validation`,可以通过 `pattern` 属性来自定义验证正则表达式。

```html
<input type="email" id="email" name="email" />
```

## Search field

`search`控件和`text`控件的区别在于，they also sometimes display an "Ⓧ", which clears the field of any value when clicked.(PS:我在 firefox 上根本没有看到"Ⓧ"，但是在 chrome 上看到了"Ⓧ")

```html
<input type="search" id="search" name="search" />
```

## Phone number field

```html
<input type="tel" id="tel" name="tel" />
```

## URL field

`url`控件用来输入`url`地址

```html
<input type="url" id="url" name="url" />
```

## Numeric field

## Slider controls

```html
<label for="price">Choose a maximum house price: </label>
<input
  type="range"
  name="price"
  id="price"
  min="50000"
  max="500000"
  step="100"
  value="250000"
/>
<output class="price-output" for="price"></output>
```

```js
const price = document.querySelector("#price")
const output = document.querySelector(".price-output")

output.textContent = price.value

price.addEventListener("input", function () {
  output.textContent = price.value
})
```

## Date and time pickers

Gathering date and time values has traditionally been a nightmare for web developers.

For good user experience, it is important to provide `a calendar selection UI`.

### `datetime-local`

creates a widget to display and pick a date with time with no specific time zone information.

```html
<input type="datetime-local" name="datetime" id="datetime" />
```

### `month`

creates a widget to display and pick a month with a year.

```html
<input type="month" name="month" id="month" />
```

### `time`

creates a widget to display and pick a time value. While time may display in 12-hour format, the value returned is in 24-hour format.

```html
<input type="time" name="time" id="time" />
```

### `week`

creates a widget to display and pick a week number and its year.

```html
<input type="week" name="week" id="week" />
```

### Constraining date/time values

All date and time controls can be constrained using the `min` and `max` attributes, with further constraining possible via the `step` attribute (whose value varies according to input type).

```html
<label for="myDate">When are you available this summer?</label>
<input
  type="date"
  name="myDate"
  min="2013-06-01"
  max="2013-08-31"
  step="7"
  id="myDate"
/>
```

## Color picker control

```html
<input type="color" name="color" id="color" />
```

# The HTML5 input types

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

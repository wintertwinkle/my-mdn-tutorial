# Basic native form controls

look at the `functionality` of the different form controls, or widgets, in detail — studying all the different `options` available to collect different types of data.

## Text input fields

All basic text controls share some common behaviors:

- They can be marked as `readonly` (the user cannot modify the input value but it is still sent with the rest of the form data) or `disabled` (the input value can't be modified and is never sent with the rest of the form data).
- They can have a `placeholder`; this is text that appears inside the text input box that should be used to briefly describe the purpose of the box.
- They can be constrained in `size` (the physical size of the box) and `maxlength` (the maximum number of characters that can be entered into the box).
- They can benefit from spell checking (using the `spellcheck` attribute), if the browser supports it.

### Single line text fields

A single line text field is created using an `<input>` element whose type attribute `value` is set to `text`, or by omitting the `type` attribute altogether (`text` is the default value).

```html
<input type="text" id="comment" name="comment" value="I'm a text field" />
```

### Password field

The `password` value doesn't add any special constraints to the entered text, but it does obscure the value entered into the field (e.g. with dots or asterisks) so it can't be easily read by others.

```html
<input type="password" id="pwd" name="pwd" />
```

Keep in mind this is just a user interface feature; unless you submit your form securely, it will get sent in plain text, which is bad for security — a malicious party could intercept your data and steal passwords, credit card details, or whatever else you've submitted. The best way to protect users from this is to host any pages involving forms over a secure connection (i.e. at an `https://` ... address), so the data is encrypted before it is sent.

### Hidden content

This is used to create a form control that is invisible to the user, but is still sent to the server along with the rest of the form data once submitted — for example you might want to submit a timestamp to the server stating when an order was placed.

```html
<input type="hidden" id="timestamp" name="timestamp" value="1286705410" />
```

If you create such an element, it's required to set its `name` and `value` attributes. The `value` can be dynamically set via JavaScript. The `hidden` input type should not have an associated label.

## Checkable items: `checkboxes` and `radio` buttons

There are two kinds of checkable item: the check box and the radio button.

Both use the `checked` attribute to indicate whether the widget is checked by default or not.

### Check box

A check box is created using the `<input>` element with a `type` attribute set to the value `checkbox`.

```html
<input type="checkbox" id="questionOne" name="subscribe" value="yes" checked />
```

### Radio box

A radio button is created using the `<input>` element with its `type` attribute set to the value `radio`:

```html
<input type="radio" id="soup" name="meal" checked />
```

## Actual buttons

There are three input types that produce buttons:

- `submit`
- `reset`
- `button`

Then we also have the `<button>` element itself.

This can take a `type` attribute of value `submit`, `reset`, or `button` to mimic the behavior of the three `<input>` types mentioned above.

The main difference between the two is that actual `<button>` elements are much easier to style.

### Image button

The **image button** control is rendered exactly like an `<img>` element, except that when the user clicks on it, it behaves like a submit button.

```html
<input type="image" alt="Click me!" src="my-img.png" width="80" height="30" />
```

## File Picker

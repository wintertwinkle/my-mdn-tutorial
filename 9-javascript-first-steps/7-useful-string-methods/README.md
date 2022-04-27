# Useful string methods

## Strings as objects

Most things are objects in JavaScript. When you create a string, for example by using:

```js
const string = "This is my string"
```

your variable becomes a string object instance, and as a result has a large number of properties and methods available to it.

## Finding the length of a string

```js
const browserType = "mozilla"
browserType.length // 7
```

## Retrieving a specific string character

```js
browserType[0] // 'm'
browserType[browserType.length - 1] // 'a'
```

## Testing if a string contains a substring

`includes(substring)`: It returns true if the string contains the substring, and false otherwise.

```js
const browserType = "mozilla"

if (browserType.includes("zilla")) {
    console.log("Found zilla!")
} else {
    console.log("No zilla here!")
}
```

`startsWith(substring)` `endsWith(substring)`

```js
const browserType = "mozilla"

if (browserType.startsWith("zilla")) {
    console.log("Found zilla!")
} else {
    console.log("No zilla here!")
}

if (browserType.endsWith("zilla")) {
    console.log("Found zilla!")
} else {
    console.log("No zilla here!")
}
```

## Finding the position of a substring in a string

`indexOf(substring)` 返回子串第一次出现的下标，如果没有找到子串，返回`-1`

```js
const tagline = "MDN - Resources for developers, by developers"
console.log(tagline.indexOf("developers")) // 20
console.log(tagline.indexOf("x")) // -1
```

怎么找到第二次，第三次出现的子串呢？
`indexOf(subString, position)`

```js
const firstOccurrence = tagline.indexOf("developers")
const secondOccurrence = tagline.indexOf("developers", firstOccurrence + 1)

console.log(firstOccurrence) // 20
console.log(secondOccurrence) // 35
```

## Extracting a substring from a string

左闭右开，截取子串，会截取 beginIndex 位置的字符，但不会截取 endIndex 位置的字符

```js
slice(beginIndex) // beginIndex: the index at which to start extracting
slice(beginIndex, endIndex) // endIndex: the index at which to stop extracting
```

```js
const browserType = "mozilla"
console.log(browserType.slice(1, 4)) // "ozi"
browserType.slice(2) // "zilla"
```

## Changing case

`toLowerCase()`

`toUpperCase()`

```js
const radData = "My NaMe Is MuD"
console.log(radData.toLowerCase()) // "my name is mud"
console.log(radData.toUpperCase()) // "MY NAME IS MUD"
```

## Updating parts of a string

```js
replace(regexp, newSubstr)
replace(regexp, replacerFunction)

replace(substr, newSubstr)
replace(substr, replacerFunction)
```

`replace()`不会改变原有的字符串，而是返回一个新的字符串。

```js
const browserType = "mozilla"
const updated = browserType.replace("moz", "van")

console.log(updated) // "vanilla"
console.log(browserType) // "mozilla"
```

`replace()`只会替换第一次出现的子串，如果要改变所有的子串，需要使用 `replaceAll()`

```js
let quote = "To be or not to be"
quote = quote.replaceAll("be", "code")

console.log(quote) // "To code or not to code"
```

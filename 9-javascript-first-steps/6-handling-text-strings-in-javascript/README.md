# Handling text — strings in JavaScript

## Concatenating strings

Concatenate just means "join together".

-   使用模板字符串进行变量拼接
-   Concatenation using "+"
-   使用 `concat()` 进行拼接

## Numbers vs. strings

String to Number:

```js
const myString = "123"
const myNum = Number(myString)
console.log(typeof myNum)
```

Number to String:

```js
const myNum2 = 123
const myString2 = myNum2.toString()
console.log(typeof myString2)
```

## Including expressions in strings

```js
const song = "Fight the Youth"
const score = 9
const highestScore = 10
const output = `I like the song ${song}. I gave it a score of ${
    (score / highestScore) * 100
}%.`
console.log(output) // "I like the song Fight the Youth. I gave it a score of 90%."
```

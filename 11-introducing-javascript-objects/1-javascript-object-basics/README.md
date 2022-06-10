# JavaScript object basics

对象是一些列具有相关关系的数据和函数的集合体。

## Dot notation

The object name (person) acts as the **namespace** — it must be entered first to access anything inside the object.

```js
person.age
person.name.first
```

## Bracket notation

```js
person["age"]
person["name"]["first"]
```

## What is "this"?

`this` 是一个指针，指向函数执行时被绑定的执行对象。

函数的四种调用模式：

-   指向 `globalObject`：当函数被当做一个函数执行时，无论在哪里执行，都会指向`globalObject`
-   指向所属对象：当函数被当做一个对象的方法执行时，指向所属对象
-   指向新对象：当函数被当做对象构造器使用 `new` 关键字调用时，指向新的对象
-   `call`, `apply` 和 `bind`可以改变函数被绑定的执行对象。其中 bind 会返回一个新的绑定了执行对象的函数。这 3 个函数给 JavaScript 的函数提供了超高的灵活性，从而使得函数具有复用性。

`call` 和 `apply` 的区别在于对函数参数的接收形式不一样，`call` 接收一个个单独的参数，而 `apply` 接收一个参数数组

## Introducing constructors

We would like a way to define the "shape" of an object

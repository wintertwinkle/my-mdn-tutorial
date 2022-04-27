# Arrays

## Creating arrays

```js
const shopping = ["bread", "milk", "cheese", "hummus", "noodles"]
console.log(shopping)
```

## Finding the length of an array

```js
const shopping = ["bread", "milk", "cheese", "hummus", "noodles"]
console.log(shopping.length) // 5
```

## Accessing and modifying array items

```js
const shopping = ["bread", "milk", "cheese", "hummus", "noodles"]
console.log(shopping[0])
// returns "bread"
```

## Finding items in an array

```js
const birds = ["Parrot", "Falcon", "Owl"]
console.log(birds.indexOf("Owl")) //  2
console.log(birds.indexOf("Rabbit")) // -1
```

## Adding items

The `push()` method adds one or more elements to the end of an array and **returns the new length of the array**.

```js
const cities = ["Manchester", "Liverpool"]
const newLength = cities.push("Bristol")
console.log(cities) // [ "Manchester", "Liverpool", "Bristol" ]
console.log(newLength) // 3
```

## Removing items

To remove the last item from the array, use `pop()`.

```js
const cities = ["Manchester", "Liverpool"]
const removedCity = cities.pop()
console.log(removedCity) // "Liverpool"
```

To remove the first item from an array, use `shift()`:

```js
const cities = ["Manchester", "Liverpool"]
cities.shift()
console.log(cities) // [ "Liverpool" ]
```

The `splice()` method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place

```js
splice(start)
splice(start, deleteCount)
splice(start, deleteCount, item1)
splice(start, deleteCount, item1, item2, itemN)
```

## Accessing every item

`for ... of`:

```js
const birds = ["Parrot", "Falcon", "Owl"]

for (const bird of birds) {
    console.log(bird)
}
```

`map()`:
We give a function to the `map()`, and `map()` calls the function once for each item in the array, passing in the item.

It then adds the return value from each function call to **a new array**, and finally returns the new array.

```js
function double(number) {
return number \* 2;
}
const numbers = [5, 2, 7, 6];
const doubled = numbers.map(double);
console.log(doubled); // [ 10, 4, 14, 12 ]
```

`filter()`: we give a function to the `filter()` method, and `filter()` calls this function for every item in the array, passing in the item.

If the function returns true, then the item is added to a new array.

Finally it returns the new array.

```js
function isLong(city) {
    return city.length > 8
}
const cities = ["London", "Liverpool", "Totnes", "Edinburgh"]
const longer = cities.filter(isLong)
console.log(longer) // [ "Liverpool", "Edinburgh" ]
```

## Converting between strings and arrays

`split()`

```js
const data = "Manchester,London,Liverpool,Birmingham,Leeds,Carlisle"
const cities = data.split(",")
cities // [Manchester,London,Liverpool,Birmingham,Leeds,Carlisle]
```

`join()`

```js
const commaSeparated = cities.join(",")
commaSeparated //"Manchester,London,Liverpool,Birmingham,Leeds,Carlisle"
```

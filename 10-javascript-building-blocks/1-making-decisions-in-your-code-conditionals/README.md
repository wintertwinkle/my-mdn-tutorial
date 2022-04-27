# Making decisions in your code — conditionals

-   `if else`
-   `switch`
-   `? :`

Any value that is not `false`, `undefined`, `null`, `0`, `NaN`, or an empty string (`''`) actually returns `true` when tested as a conditional statement, therefore you can use a variable name on its own to test whether it is `true`, or even that it exists (that is, it is not undefined.)

For example:

```js
let cheese = "Cheddar"

if (cheese) {
    console.log("Yay! Cheese available for making cheese on toast.")
} else {
    console.log("No cheese on toast for you today.")
}
```

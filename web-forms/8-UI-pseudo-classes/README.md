# UI pseudo-classes

可以利用不同的伪类选择器根据表单元素的状态对表单进行 CSS 装饰。

## What pseudo-classes do we have available?

有哪些伪类？表单元素都有哪些状态？

最基本的伪类选择器：

-   `:hover`
-   `:focus`
-   `:active`

除此之外：

## Styling inputs based on whether they are required or not

-   `:required` 必选项
-   `:optional` 可选项

## Using generated content with pseudo-classes

-   `::before`
-   `::after`

## Styling controls based on whether their data is valid

数据有效性验证：

-   `:valid`
-   `:invalid`

数据范围验证：

-   `:in-range`
-   `out-of-range`

## Styling enabled and disabled inputs, and read-only and read-write

-   `:enabled`
-   `:disabled`
-   `:read-only`
-   `:read-write`

## Radio and checkbox states — checked, default, indeterminate

-   `:checked`
-   `:indeterminate` 不确定
-   `:default`

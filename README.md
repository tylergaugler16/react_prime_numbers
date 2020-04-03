## Table of Contents

* [Problem](#problem)
* [Available Scripts](#available-scripts)
  * [yarn start](#yarn-start)

## Problem Goals

### Print List Of First 10 Items
Using the skeleton of a basic React app, update the Main component to print a list of the first 10 items

```
0
1
2
3
4
5
6
7
8
9
10
```

### Prime Numbers Count
Update Main component so that each item displays the following:
1) The index of the item in the list.
2) The number of prime numbers up to and including the index of the item in the list.

A prime number is a whole number greater than 1 whose only factors are 1 and itself.

Example prime number: 3 is only divisible by 1 and 3.
Example non-prime number: 10 is divisible by 1, 2, 5, and 10.

For example, the list would have the following first 10 items displayed:

```
0 prime numbers <= 0
0 prime numbers <= 1
1 prime numbers <= 2
2 prime numbers <= 3
2 prime numbers <= 4
3 prime numbers <= 5
3 prime numbers <= 6
4 prime numbers <= 7
4 prime numbers <= 8
4 prime numbers <= 9
4 prime numbers <= 10
```

### Move Prime Numbers Count To Redux
Move the logic of Prime Numbers Count to redux. The Main component should display the first 10 items upon mounting

### Add Button To Calculate More Prime Numbers Count
Add a button to Main component so that on each click the next 10 Prime Numbers Count gets calculated

## Available Scripts

### `yarn start`

Runs your app in development mode.

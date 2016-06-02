# Grading

You work for a school, and you need to help the teachers come up with some analytics about their students.

## Challenge 1 - Determining differences

You are given an array of grades.  You need to process this array, and return an array that describes whether each grade
was higher, lower or even to the previous grade.

So given the following array:

```javascript
[6,3,5,4,3,4,4,5]
```

Your code would produce:

```javascript
["down","up","down","down","up","even","up"]
```

When given an empty array, it returns an empty array.

NOTE: your array tracks the differences between grades, so it will be one item _shorter_ than the given array.

## Challenge 2 - Finding students in decline

A student is considered in decline if they have 3 grades lower than previous grades, even if there are some steady
grades in there.  Look for 3 "down" movements that are either a) separated by "even"s or b) consecutive.

For example:

```javascript
[10, 10, 10, 9, 9, 8, 8, 8, 8, 7] // ["even", "even", "down", "even", "down", "even", "even", "even", "down"]
[10, 10, 10, 9, 9, 8, 8, 8, 8, 7] // in decline

[10, 10, 10, 11, 9, 8, 8, 8, 8, 7] // ["even", "even", "up", "even", "down", "even", "even", "even", "down"]
[10, 10, 10, 11, 9, 8, 8, 8, 8, 7] // not in decline

[10, 9, 8, 7] // ["down", "down", "down"]
[10, 9, 8, 7] // in decline

[10, 9, 8, 7, 8] // ["down", "down", "down", "up"]
[10, 9, 8, 7, 8] // not in decline

[10, 9, 8] // ["down", "down"]
[10, 9, 8] // not in decline
```

## Challenge 3 - Check your code

There are 27 students in decline in the `data/grades.json` files, and 73 students not in decline.

Run your code against this file and make sure it matches.

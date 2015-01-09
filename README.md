Guess Your Number
=================
Divide et Impera method for guessing a number you choose from an interval.
You will answer to a minimum number of questions.

## The steps
1. Choose the limits of your number: **limMin** (e.g. `10`) and **limMax** (e.g. `50`).
2. Choose your number (e.g. `42`).
3. Give the correct answers, and the application will guess your number.

## Demo

[Click here for the online demo](http://ionicabizau.github.io/Guess-Your-Number/).

 - [English version](http://ionicabizau.github.io/Guess-Your-Number/en.html)
 - [Romanian version](http://ionicabizau.github.io/Guess-Your-Number/ro.html)

The basic functionality is this:

```js
var i, j, mij;

// Yes, it's greather than mij
  i = mij + 1;
  j = j;
  think();

// No, it isn't greather than mij
  i = i;
  j = mij;
  think();


// think function
function think() {
    if(i == j + 1 || i == j) {
        console.log("The number is: " + i);
        return;
    }

    mij = Math.floor((i + j) / 2);

    // Ask again: is it greather than mij?
}
```

## License
See the LICENSE file.

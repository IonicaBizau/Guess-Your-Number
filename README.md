guess-your-number
=================

Divide et Impera method for quessing a number you choose in an interval.
The minimum number of questions for the correct answer.

## The steps
1. Choose the limits of your number: limMin and limMax.
2. Choose your number.
3. Give the correct answers, and the application will guess your number.

## Javascript

View the live preview of Javascript version (which has few bugs because it's only a preview: after downloading this, they are fixed.):

 - [English version](http://htmlpreview.github.com/?https://raw.github.com/IonicaBizau/guess-your-number/master/Javascript/en.html)
 - [Romanian version](http://htmlpreview.github.com/?https://raw.github.com/IonicaBizau/guess-your-number/master/Javascript/ro.html)

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

## Copyright
    Copyright (C)  2012  Ionica Bizau.
    Permission is granted to copy, distribute and/or modify this document
    under the terms of the GNU Free Documentation License, Version 1.3
    or any later version published by the Free Software Foundation;
    with no Invariant Sections, no Front-Cover Texts, and no Back-Cover Texts.
    A copy of the license is included in the section entitled "GNU
    Free Documentation License".

guess-your-number
=================

Divide et Impera method for quessing a number you choose in an interval.

1. Choose the limits of your number: limMin and limMax.
2. Choose your number.
3. Give the correct answers, and the application will guess your number.

### Javascript

View the live preview of Javascript version (which has few bugs because it's only a preview: after downloading this, they are fixed.):

 - [English version](https://raw.github.com/IonicaBizau/guess-your-number/master/Javascript/en.html)
 - [Romanian version](https://raw.github.com/IonicaBizau/guess-your-number/master/Javascript/en.html)

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

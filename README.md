
# web-guess-your-number [![PayPal](https://img.shields.io/badge/%24-paypal-f39c12.svg)][paypal-donations] [![Version](https://img.shields.io/npm/v/web-guess-your-number.svg)](https://www.npmjs.com/package/web-guess-your-number) [![Downloads](https://img.shields.io/npm/dt/web-guess-your-number.svg)](https://www.npmjs.com/package/web-guess-your-number) [![Get help on Codementor](https://cdn.codementor.io/badges/get_help_github.svg)](https://www.codementor.io/johnnyb?utm_source=github&utm_medium=button&utm_term=johnnyb&utm_campaign=github)

> Divide et Impera method for guessing a number you choose from an interval. You will answer to a minimum number of questions.


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

## :yum: How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].


## :scroll: License

[MIT][license] © [Ionică Bizău][website]

[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2013#license-mit
[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md

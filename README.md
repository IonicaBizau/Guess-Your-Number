
# web-guess-your-number

 [![Support me on Patreon][badge_patreon]][patreon] [![Buy me a book][badge_amazon]][amazon] [![PayPal][badge_paypal_donate]][paypal-donations] [![Version](https://img.shields.io/npm/v/web-guess-your-number.svg)](https://www.npmjs.com/package/web-guess-your-number) [![Downloads](https://img.shields.io/npm/dt/web-guess-your-number.svg)](https://www.npmjs.com/package/web-guess-your-number)

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


## :sparkling_heart: Support my projects

I open-source almost everything I can, and I try to reply everyone needing help using these projects. Obviously,
this takes time. You can integrate and use these projects in your applications *for free*! You can even change the source code and redistribute (even resell it).

However, if you get some profit from this or just want to encourage me to continue creating stuff, there are few ways you can do it:

 - Starring and sharing the projects you like :rocket:
 - [![PayPal][badge_paypal]][paypal-donations]—You can make one-time donations via PayPal. I'll probably buy a ~~coffee~~ tea. :tea:
 - [![Support me on Patreon][badge_patreon]][patreon]—Set up a recurring monthly donation and you will get interesting news about what I'm doing (things that I don't share with everyone).
 - **Bitcoin**—You can send me bitcoins at this address (or scanning the code below): `1P9BRsmazNQcuyTxEqveUsnf5CERdq35V6`

    ![](https://i.imgur.com/z6OQI95.png)

Thanks! :heart:



## :scroll: License

[MIT][license] © [Ionică Bizău][website]

[badge_patreon]: http://ionicabizau.github.io/badges/patreon.svg
[badge_amazon]: http://ionicabizau.github.io/badges/amazon.svg
[badge_paypal]: http://ionicabizau.github.io/badges/paypal.svg
[badge_paypal_donate]: http://ionicabizau.github.io/badges/paypal_donate.svg
[patreon]: https://www.patreon.com/ionicabizau
[amazon]: http://amzn.eu/hRo9sIZ
[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(https%3A%2F%2Fionicabizau.net)&year=2013#license-mit
[website]: https://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md

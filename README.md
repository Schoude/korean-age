# Korean Age Calculator

Converts the _regular_ age of a person into _Korean age_, which is up to two years more, depending on when you are born and the current date.

## Installation

`npm install korean-age`

## Usage

There is only one exported function called `calcKoreanAge(birthday)` which takes a birthday as the parameter. The birthday has to be a Date Object. The format should be `Tue Nov 13 1990 00:00:00 GMT+0100 (Mitteleuropäische Normalzeit)`. When using a `<input type="date" />` you just have to convert the `event.target.value` into a Date Object like so: `let myBirthday = new Date(event.target.value);`

`calcKoreanAge(birthday)` returns an Object with the fields `westernAge` and `koreanAge` of type number.

## Example Code

```
import {calcKoreanAge} from 'korean-age';

let myBirthday = new Date('1997-03-14);
// you can set the hours to 00:00:00
myBirthday.setHours(0, 0, 0, 0,);

// call the functio with the birthday as the parameter.
let ages = calcKoreanAge(myBirthday);

```

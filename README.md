# Korean Age Calculator

## Installation

`npm install korean-age`

## Usage

There is only one exported function called `calcKoreanAge(birthday)` which takes a birthday as the parameter. The birthday has to be a Date Object. The format should be `Tue Nov 13 1990 00:00:00 GMT+0100 (Mitteleuropäische Normalzeit)`.

`calcKoreanAge(birthday)` returns an Object with the fields `westernAge` and `koreanAge` of type number.

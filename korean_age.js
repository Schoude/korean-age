"use strict";
exports.__esModule = true;
function getAge(birthday) {
    var ageDifMs = Date.now() - birthday.getTime();
    var ageDate = new Date(ageDifMs); // miliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}
function setCurrentYear(birthday) {
    var thisYear = new Date(Date.now()).getFullYear();
    var thisYearBdayMs = birthday.setFullYear(thisYear);
    return new Date(thisYearBdayMs);
}
function hasBirthDayPassed(thisYearBday) {
    var now = new Date();
    now.setHours(0, 0, 0, 0);
    return now > thisYearBday;
}
function getKoreanAge(westernAge, hasBdayPassed) {
    return hasBdayPassed ? Number(westernAge) + 1 : Number(westernAge) + 2;
}
function calcKoreanAge(birthday) {
    var westernAge = getAge(birthday);
    var thisYearBday = setCurrentYear(birthday);
    getKoreanAge(westernAge, hasBirthDayPassed(thisYearBday));
    return {
        westernAge: westernAge,
        koreanAge: getKoreanAge(westernAge, hasBirthDayPassed(thisYearBday))
    };
}
exports.calcKoreanAge = calcKoreanAge;

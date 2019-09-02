function getAge(birthday: Date): number {
  let ageDifMs: number = Date.now() - birthday.getTime();
  let ageDate: Date = new Date(ageDifMs); // miliseconds from epoch
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}

function setCurrentYear(birthday: Date): Date {
  let thisYear: number = new Date(Date.now()).getFullYear();
  let thisYearBdayMs: number = birthday.setFullYear(thisYear);
  return new Date(thisYearBdayMs);
}

function hasBirthDayPassed(thisYearBday: Date): boolean {
  let now: Date = new Date();
  now.setHours(0, 0, 0, 0);
  return now > thisYearBday;
}

function getKoreanAge(westernAge: number, hasBdayPassed: boolean): number {
  return hasBdayPassed ? Number(westernAge) + 1 : Number(westernAge) + 2;
}

export function calcKoreanAge(birthday): Object {
  let westernAge: number = getAge(birthday);
  let thisYearBday: Date = setCurrentYear(birthday);
  getKoreanAge(westernAge, hasBirthDayPassed(thisYearBday));
  return {
    westernAge,
    koreanAge: getKoreanAge(westernAge, hasBirthDayPassed(thisYearBday))
  };
}

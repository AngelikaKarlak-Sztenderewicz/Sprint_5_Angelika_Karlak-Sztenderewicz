const birthDay = "05-15";

function daysUntilBirthday(dateString) {
  const today = new Date(); //dzisiejsza data
  const currentYear = today.getFullYear(); // bieżący rok
  const thisYearBirthDay = new Date(`${currentYear}-${dateString}`); //data urodzin w tym roku
  const oneDay = 24 * 60 * 60 * 1000; // jedna doba

  if (today > thisYearBirthDay) {
    const nextBirthday = new Date(`${currentYear + 1}-${dateString}`);
    const diffDay = Math.round((nextBirthday - today) / oneDay);
    return diffDay;
  } else {
    const diffDay = Math.round((thisYearBirthDay - today) / oneDay);
    return diffDay;
  }
}
console.log(daysUntilBirthday(birthDay));

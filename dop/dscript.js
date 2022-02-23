//console.log(document.getElementById("body"));
let arrayWeek = [
  "Понедельник",
  "Вторник",
  "Среда",
  "Четверг",
  "Пятница",
  "Суббота",
  "Воскресенье",
];
let data = new Date();
let day = data.getDate();
let hour = data.getHours() > 10 ? data.getHours() : "0" + data.getHours();
let dayWeek = data.getDay();
let partDay;
let seconds = data.getSeconds();
let minutes = data.getMinutes();
let year = data.getFullYear();
let amPm = hour >= 12 ? "PM" : "AM";
let remainingDay;
let newYear = new Date("01.01." + (year + 1));
let newYearTime = newYear.getTime();
let timeNow = data.getTime();
remainingDay = Math.floor((newYearTime - timeNow) / 1000 / 3600 / 24);
console.log(remainingDay);
switch (true) {
  case hour > 3 && hour < 12:
    partDay = "утро";
    break;
  case hour > 11 && hour < 17:
    partDay = "день";
    break;
  case hour > 16 && hour < 24:
    partDay = "вечер";
    break;
  case hour > 23 && hour < 4:
    partDay = "ночи";
    break;
}
console.log(`Доброй ${partDay}`);
console.log("сейчас" + arrayWeek[dayWeek - 1]);
const bodyEl = document.querySelector("body");

const header1 = document.createElement("h1");
header1.textContent = `Доброй ${partDay}`;
bodyEl.append(header1);

const header2 = document.createElement("h2");
header2.textContent = `Сегодня: ${arrayWeek[dayWeek - 1]}`;
bodyEl.append(header2);

const headerTime = document.createElement("h2");
headerTime.textContent = `Текущее время: ${hour}:${minutes}:${seconds} ${amPm}`;
bodyEl.append(headerTime);

const remainDayNewYear = document.createElement("h2");
remainDayNewYear.textContent = `До нового года осталось ${remainingDay} дней`;
bodyEl.append(remainDayNewYear);

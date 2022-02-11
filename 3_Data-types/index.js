console.log('-----Task 1-----');
// https://javascript.info/task/string-new-property

// Answer:
// undefined. Cause when Alert is started, object-wrapper has already been destroyed.


console.log('-----Task 2-----')
// https://javascript.info/task/sum-interface

// const firstNum = +prompt('First num is','');
// const secondNum = +prompt('Second num is','');
// alert(firstNum + secondNum);


console.log('-----Task 3-----')
// https://javascript.info/task/why-rounded-down

console.log(Math.round(6.35 * 10) / 10);


console.log('-----Task 4-----')
// https://javascript.info/task/repeat-until-number

// function enterNumber() {
//   let value = prompt('Enter a number', '');
//   if(isNaN(value)) {
//     enterNumber();
//   } else {
//     if(value === null || value === '') {
//       return null;
//     } else {
//       return +value;
//     }
//   }
// }
// enterNumber();


console.log('-----Task 5-----');
// https://javascript.info/task/endless-loop-error

// Проблема в потере точности

console.log('-----Task 6-----');
// https://javascript.info/task/random-min-max

const random = (min, max) => Math.random() * (max - min) + min;
console.log(random(0, 4));


console.log('-----Task 7-----');
// https://javascript.info/task/random-int-min-max

const randomInt = (min, max) => Math.round(Math.random() * (max - min) + min);
console.log(randomInt(0, 4))


console.log('-----Task 8-----');
// https://javascript.info/task/ucfirst

function ucFirst(str) {
  let result = '';
  for(let char of str) {
    if(result.length === 0) {
      result += char.toUpperCase();
    } else {
      result += char.toLowerCase();
    }
  }
  return result;
}

console.log(ucFirst('ivAn'));


console.log('-----Task 9-----');
// https://javascript.info/task/check-spam

function checkSpam(str) {
  const newstr = str.toLowerCase();
  return newstr.includes('viagra') || newstr.includes('xxx');
}
console.log(checkSpam('buy ViAgRA now'));


console.log('-----Task 10-----');
// https://javascript.info/task/truncate
function truncate(str, n) {
  if(str.length > n) {
    return `${str.substr(0, n)}...`;
  } else {
    return str;
  }
}
console.log(truncate("What I'd like to tell on this topic is:", 10));


console.log('-----Task 11-----');
// https://javascript.info/task/extract-currency

const extractCurrencyValue = money =>  money.slice(1);
console.log(extractCurrencyValue('$222'));


console.log('-----Task 12-----');
// https://learn.javascript.ru/task/camelcase

function camelize(str) {
  return str[0] + str
    .split('-')
    .map((el, i) => 
        el = el[0].toUpperCase() + el.slice(1))
    .join('')
    .slice(1)
}
console.log(camelize('my-short-string'))


console.log('-----Task 13-----');
// https://learn.javascript.ru/task/filter-range

let array = [5, 3, 8, 1];
function filterRange(arr, a, b) {
  return arr.filter(el => (el >= a) && (el <= b))
}
console.log(filterRange(array, 1, 4));


console.log('-----Task 14-----');
// https://learn.javascript.ru/task/filter-range-in-place

function filterRangeInPlace(arr, a, b) {
  arr = arr.filter(el => (el >= a) && (el <= b))
  console.log(arr);
}


console.log('-----Task 15-----');
// https://learn.javascript.ru/task/sort-back

let arr = [5, 2, 1, -10, 8];
console.log(arr.sort((a, b) => b - a));


console.log('-----Task 16-----');
// https://learn.javascript.ru/task/copy-sort-array

let ar = ["HTML", "JavaScript", "CSS"];
const copySorted = arr => arr.slice().sort();
let sorted = copySorted(array);
console.log(ar, sorted)

console.log('-----Task 17-----');
// https://learn.javascript.ru/task/array-get-names

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };
let users = [ vasya, petya, masha ];
const result = users.map(el => el.name);
console.log(result);

console.log('-----Task 18-----');
// https://learn.javascript.ru/task/map-objects
let vasya2 = { name: "Вася", surname: "Пупкин", id: 1 };
let petya2 = { name: "Петя", surname: "Иванов", id: 2 };
let masha2 = { name: "Маша", surname: "Петрова", id: 3 };
let users2 = [ vasya2, petya2, masha2 ];
let usersMapped = users2.map(el => ({fullname: `${el.name} ${el.surname}`, id: el.id}))
console.log(usersMapped);


console.log('-----Task 19-----');
// https://learn.javascript.ru/task/sort-objects
let vasya3 = { name: "Вася", age: 25 };
let petya3 = { name: "Петя", age: 30 };
let masha3 = { name: "Маша", age: 28 };
let noSortArr = [ vasya3, petya3, masha3 ];
function sortByAge(arr) {
  return arr.sort((a, b) => a.name > b.name ? 1 : -1);
}
console.log(sortByAge(noSortArr));


console.log('-----Task 20-----');
// https://learn.javascript.ru/task/average-age

let vasya4 = { name: "Вася", age: 25 };
let petya4 = { name: "Петя", age: 30 };
let masha4 = { name: "Маша", age: 29 };
let arr4 = [ vasya4, petya4, masha4 ];
const getAverageAge = arr => arr4.reduce((acc, el) => acc + el.age, 0) / arr.length;
console.log(getAverageAge(arr4));


console.log('-----Task 20-----');
// https://learn.javascript.ru/task/array-unique
let strings = ["кришна", "кришна", "харе", "харе",
  "харе", "харе", "кришна", "кришна", ":-O"];
function unique(arr) {
  const result = [];
  for(let i = 0; i < arr.length; i++) {
    if(!result.includes(arr[i])) {
      result.push(arr[i]);
    }
  }
  return result;
}
console.log(unique(strings));


console.log('-----Task 21-----');
// https://learn.javascript.ru/task/serialize-object

let user = {
  name: "Василий Иванович",
  age: 35
};
let jsonUser = JSON.stringify(user);
let noJsonUser = JSON.parse(jsonUser);
console.log(jsonUser, noJsonUser);


console.log('-----Task 22-----');
// https://learn.javascript.ru/task/serialize-event-circular

let room = {
  number: 23
};
let meetup = {
  title: "Совещание",
  occupiedBy: [{name: "Иванов"}, {name: "Петров"}],
  place: room
};
room.occupiedBy = meetup;
meetup.self = meetup;
let result2 = JSON.stringify(meetup, (key, value) => (value === meetup && key !== "") ? undefined : value)
console.log(result2);


console.log('-----Task 23-----');
// https://learn.javascript.ru/task/new-date

let day = new Date(2012, 1, 20, 3, 12);
console.log(day)


console.log('-----Task 24-----');
// https://learn.javascript.ru/task/get-week-day

const  getWeekDay = date => ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'][date.getDay() - 1];
let date = new Date();
console.log(getWeekDay(date));


console.log('-----Task 25-----');
// https://learn.javascript.ru/task/weekday

function getLocalDay(date) {
  return date.getDay() === 0 ? 1 : date.getDay();
}
const euroday = new Date();
euroday.setDate(6);
console.log(getLocalDay(euroday))


console.log('-----Task 26-----');
// https://learn.javascript.ru/task/get-date-ago

function getDateAgo(date, days) {
  const actualDate = new Date(date);
  actualDate.setDate(date.getDate() - days);
  return actualDate.getDate();
}
const currentDay = new Date();
console.log(getDateAgo(currentDay, 20))


console.log('-----Task 27-----');
// https://learn.javascript.ru/task/last-day-of-month

function getLastDayOfMonth(year, month) {
  const lastDay = new Date(year, month, 0);
  return lastDay.getDate();
}
console.log(getLastDayOfMonth(2022, 2));


console.log('-----Task 28-----');
// https://learn.javascript.ru/task/get-seconds-today

function getSecondsToday() {
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate())
  return Math.round((now - today) / 1000);
}
console.log(getSecondsToday());


console.log('-----Task 29-----');
// https://learn.javascript.ru/task/get-seconds-to-tomorrow

function getSecondsToTomorrow() {
  const now = new Date();
  const tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1)
  return Math.round((tomorrow - now) / 1000);
}
console.log(getSecondsToTomorrow())
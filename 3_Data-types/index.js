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
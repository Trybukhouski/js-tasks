console.log('-----Task 1-----');
// https://learn.javascript.ru/task/sum-to

function loopSumTo(n) {
  let sum = 0;
  for(let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}
console.log(loopSumTo(3));

function recSumTo(n) {
  if(n === 1) {
    return n;
  } else {
    return n + recSumTo(n - 1);
  }
}
console.log(recSumTo(3));

function formulaSumTo(n) {
  return n * (n + 1) / 2;
}
console.log(formulaSumTo(3));



console.log('-----Task 2-----');
// https://learn.javascript.ru/task/factorial

function factorial(n) {
  if(n === 1) {
    return n;
    } else {
      return n * factorial(n - 1);
    }
}
console.log(factorial(5));



console.log('-----Task 3-----');
// https://learn.javascript.ru/task/fibonacci-numbers

function fib(n) {
  let a = 1;
  let b = 1;
  for(let i = 3; i <= n; i++) {
    let c = a + b;
    a = b;
    b = c;
  }
  return b;
}
console.log(fib(7));



console.log('-----Task 4-----');
// https://learn.javascript.ru/task/output-single-linked-list

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};
function printList(list) {
  let temp = list;
  while(temp) {
    console.log(temp.value);
    temp = temp.next;
  }
};
printList(list);



console.log('-----Task 5-----');
// https://learn.javascript.ru/task/counter-independent

// Answer: 0,1
// Счетчики имеют независимые LE



console.log('-----Task 6-----');
// https://learn.javascript.ru/task/counter-object-independent
// Answer: everything is good



console.log('-----Task 7-----');
// https://learn.javascript.ru/task/function-in-if

// Answer:
// sayHi is not defined in this block



console.log('-----Task 8-----');
// https://learn.javascript.ru/task/closure-sum

function sum(a) {
  return function(b) {
    return a + b;
  }
}
console.log(sum(5)(2));



console.log('-----Task 9-----');
// https://learn.javascript.ru/task/filter-through-function

let arr = [1, 2, 3, 4, 5, 6, 7];
function inBetween(a, b) {
  return function(el) {
    return el >= a && el <=b;
  }
}
console.log(arr.filter(inBetween(3, 5)));



console.log('-----Task 10-----');
// https://learn.javascript.ru/task/counter-inc-dec

function makeCounter() {
  let count = 0;
  function countFunc() {
    return count++;
  }
  countFunc.set = function(num) {
    return count = num;
  }
  countFunc.decrease = function() {
    return count--;
  }
  
  return countFunc;
}

let counterFirst = makeCounter();
counterFirst.set(10);
counterFirst.decrease();
counterFirst.decrease();
counterFirst.decrease();
counterFirst.decrease();
counterFirst.decrease();
counterFirst();
console.log(counterFirst());



console.log('-----Task 11-----');
// https://learn.javascript.ru/task/output-numbers-100ms

function printNumbers(from, to) {
  let temp = from
  const timerID = setInterval(() => {
    if(temp !== to) {
      console.log(temp++);
    } else {
      clearInterval(timerID);
    }
  }, 1000);
}
printNumbers(5, 15);



console.log('-----Task 12-----');
// https://learn.javascript.ru/task/settimeout-result

// Answer: 100000000



console.log('-----Task 13-----');
// https://learn.javascript.ru/task/debounce

function logTheNum() {
  console.log('ok!');
}
function debounce(func, ms) {
  let isReady = false;
  return function() {
    if (isReady) return;
    isReady = true;
    setTimeout(() => isReady = false, ms);
  }
}




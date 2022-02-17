console.log('-----Task-----')
// https://learn.javascript.ru/task/rewrite-to-class

class Clock {
  constructor({template}) {
    this.template = template;
  }

  render() {
    let date = new Date();
    let hours = date.getHours();
    if (hours < 10) hours = '0' + hours;
    let mins = date.getMinutes();
    if (mins < 10) mins = '0' + mins;
    let secs = date.getSeconds();
    if (secs < 10) secs = '0' + secs;
    let output = this.template
      .replace('h', hours)
      .replace('m', mins)
      .replace('s', secs);
    console.log(output);
  }
  stop() {
    clearInterval(this.timer);
  }
  start() {
    this.render();
    this.timer = setInterval(() => this.render(), 1000);
  }
}
let clock = new Clock({template: 'h:m:s'});
clock.start();






console.log('-----Task-----')
// https://learn.javascript.ru/task/class-constructor-error

class Animal {
  constructor(name) {
    this.name = name;
  }
}
class Rabbit extends Animal {
  constructor(name) {
    super(name);               // mistake was here
    this.created = Date.now();
  }
}
let rabbit = new Rabbit("Белый кролик");
alert(rabbit.name);
// Answer: need to use super()





console.log('-----Task-----')
// https://learn.javascript.ru/task/class-extend-object

// Answer:
// 1. Use super()
// 2. prolems in prototypes (but need to discuss)





console.log('-----Task-----')
// https://learn.javascript.ru/task/strange-instanceof

// Answer: need to discuss





console.log('-----Task-----')
// https://learn.javascript.ru/task/property-after-delete

let animal = {
  jumps: null
};
let rabbit = {
  __proto__: animal,
  jumps: true
};
console.log( rabbit.jumps ); // true
delete rabbit.jumps;
console.log( rabbit.jumps ); // null
delete animal.jumps;
console.log( rabbit.jumps ); // undefined





console.log('-----Task-----')
// https://learn.javascript.ru/task/search-algorithm

let head = {
  glasses: 1
};

let table = {
  pen: 3,
  __proto__: head,
};

let bed = {
  sheet: 1,
  pillow: 2,
  __proto__: table,
};

let pockets = {
  money: 2000,
  __proto__: bed,
};





console.log('-----Task-----')
// https://learn.javascript.ru/task/proto-and-this

// Answer: rabbit




console.log('-----Task-----')
// https://learn.javascript.ru/task/changing-prototype

// 1. true
// 2. false
// 3. true (delete не идет по прототипам)
// 4. undefined





console.log('-----Task-----')
// https://learn.javascript.ru/task/defer-to-prototype

Function.prototype.defer = function(ms) {
  setTimeout(this, ms);
};





console.log('-----Task-----')
// https://learn.javascript.ru/task/compare-calls

// 1. Rabbit
// 2. undefined
// 3. undefined
// 4. undefined

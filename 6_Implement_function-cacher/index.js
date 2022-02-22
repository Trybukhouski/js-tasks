function sum(a, b, c) {
  return a + b + c;
}

function division(a, b) {
  return a / b;
}


class Cacher {
  withCache(func) {
    let cache = new Map();
    return function(...keys) {
      let args = JSON.stringify(arguments);
      if(cache.has(args)) {
        return `${cache.get(args)} cash`; 
      } else {
        let value = func(...keys);
        cache.set(JSON.stringify(arguments), value);
        return value;
      }
    }
  }
}

const cacher = new Cacher();

const cachedSum = cacher.withCache(sum);
const a = cachedSum(5, 4, 3);
console.log(a);
const b = cachedSum(5, 4, 3);
console.log(b)
const c = cachedSum(3, 4, 6);
console.log(c);

const cachedDiv = cacher.withCache(division);
const d = cachedDiv(5, 2);
console.log(d);
const e = cachedDiv(5, 2);
console.log(e);
const f = cachedDiv(10, 2);
console.log(f);
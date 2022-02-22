function factorial(...nums) { 
  return nums.map((num) => 
    num !== 1 ? num * factorial(num - 1) : 1); 
}

class Cacher {
  withCache(func) {
    let cache = new Map();
    return function(...keys) {
      let result = [];
      for(let key of keys) {
        if(cache.has(key)) {
          result.push(`${cache.get(key)} - из кеша`); 
        } else {
          let value = +func(key);
          cache.set(key, value);
          result.push(value);
        }       
      }
      return result;
    }
  }
}

const cacher = new Cacher();
const cachedFactorial = cacher.withCache(factorial);
const a = cachedFactorial(5, 4, 3);
console.log(a);
const b = cachedFactorial(5, 3);
console.log(b)
const c = cachedFactorial(3);
console.log(c);
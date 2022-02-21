function factorial(num) {                           // Создаем факториал
  return num !== 1 ? num * factorial(num - 1) : 1;
}

class Cacher {                                       // Создаем класс с кеширующей функцией
  withCache(func) {                                  // Создаем декоратор, проверяющий, находится ли данное в кеше
    let cache = new Map();                           // Создаем коллекцию map, выполняющую роль кеша
    return function(key) {                           // Создаем замыкание для сохранения данных в кеше
      if(cache.has(key)) {                           // Проверяем, есть ли данное в кеше
        return `${cache.get(key)} - из кеша`;        // Если есть, берем данное из кеша
      } else {
        let result = func(key);                      // Если нет, то выполняем функцию и сохраняем ее результат в кеше
        cache.set(key, result);
      }
      return cache.get(key);                         // Возвращаем сохраненный в кеше результат выполнения функции
    }
  }
}

const cacher = new Cacher();                        // Создаем экземпляр класса
const cachedFactorial = cacher.withCache(factorial);// Создаем переменную и присваиваем ей метод кеширования из созданного ранее класса
const a = cachedFactorial(5);                       // Передаем в метод число для расчета факториала
console.log(a);
const b = cachedFactorial(5);                       // Передаем в метод аналоничное число и проверяем, взято ли оно из кеша
console.log(b);
const c = cachedFactorial(4);                       // Передаем другое число и проверяем резульат
console.log(c);


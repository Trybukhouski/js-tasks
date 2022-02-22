console.log(`-----Task-----`);
// https://learn.javascript.ru/task/re-resolve

// Answer: 1
// Second resovle will be ignored






console.log(`-----Task-----`);
// https://learn.javascript.ru/task/delay-promise

function delay(ms) {
  return new Promise(function(res, rej) {
    setTimeout(res, ms)
  })
}
delay(3000).then(() => alert('выполнилось через 3 секунды'));





console.log(`-----Task-----`);
// https://learn.javascript.ru/task/then-vs-catch

// Answer:
// No, the first example handles the error, the second does not





console.log(`-----Task-----`);
// https://learn.javascript.ru/task/error-async

// Answer: 
// No. But need to discuss




console.log(`-----Task-----`);
// https://learn.javascript.ru/task/rewrite-async

async function loadJson(url) {
  let response = await fetch(url);
  if (response.status == 200) {
    let json = await response.json();
    return json;
  }
  throw new Error(response.status);
}
loadJson('no-such-user.json')
  .catch(alert);




  
console.log(`-----Task-----`);
// https://learn.javascript.ru/task/async-from-regular

async function wait() {
  await new Promise(resolve => setTimeout(resolve, 1000));

  return 10;
}
function f() {
  wait.then((res) => console.log(res))
}
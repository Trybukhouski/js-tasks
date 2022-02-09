// OBJECTS

// https://javascript.info/task/hello-object
console.log(`-----Task 1-----`);

const user = {};
user.name = 'John';
console.log(user.name);
user.surname = 'Smith';
user.name = 'Pete';
console.log(user.name);
delete user.name;
console.log(user);

// https://javascript.info/task/is-empty
console.log(`-----Task 2-----`);

const isEmpty = obj => Object.keys(obj).length === 0;
console.log(isEmpty(user));

// https://javascript.info/task/sum-object
console.log(`-----Task 3-----`);

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}

const sum = obj =>
  Object.values(obj).reduce((acc, value) => acc + value, 0);
console.log(sum(salaries))

// https://javascript.info/task/multiply-numeric
console.log(`-----Task 4-----`);

let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

function multiplyNumeric(obj) {
  for(let key in obj) {
    if (typeof obj[key] === 'number') {
      obj[key] *= 2;
    }
  }
  return obj;
}
console.log(multiplyNumeric(menu));



// THIS

// https://javascript.info/task/object-property-this
console.log(`-----Task 5-----`);

function makeUser() {
  return {
    ref() {
      return this;
    },
    name: "Джон",
  };
};
let user1 = makeUser;
console.log(user1().ref().name);

// https://javascript.info/task/calculator
console.log(`-----Task 6-----`);

let calculator = {
  read() {
    this.firstValue = prompt('First Value', '');
    this.secondtValue = prompt('Second Value', '');
    return this;
  },
  sum() {
    return +this.firstValue + +this.secondtValue;
  },
  mult() {
    return this.firstValue * this.secondtValue;
  },
}
calculator.read();
alert( calculator.sum() );
alert( calculator.mult() );

// https://javascript.info/task/chain-calls
console.log(`-----Task 6-----`);

let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep() {
    console.log( this.step );
    return this;
  }
};
ladder.up().up().down().showStep().down().showStep()
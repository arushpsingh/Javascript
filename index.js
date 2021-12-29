const numbers = [1, -1, 3, 2, 4, 5];

const re = numbers.reduce(myFunc);

function myFunc(items, num) {
  return items + num;
}

const filtered = numbers.filter((e) => e > 1);

const items = filtered.map((e) => {
  const obj = { value: e };
  return obj;
});

// console.log(re);

// ------------------Rest and Spread--------------

function sumOne(a, b) {
  return a + b;
}

const myArray = [4, 5];
// console.log(sumOne(...myArray)); //Rest

// console.log(sumOne(4, 47))

function sumMultples(...args) {
  //Spread
  let sum = 0;
  for (const arg of args) {
    sum += arg;
  }
  return sum;
}

// console.log(sumMultples(1, 2, 3));

// ------Promise---------
const uno = () => {
  return "I am one";
};

const dos = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("I am two");
    }, 3000);
  });
};

const tres = () => {
  return "I am three";
};

const callMe = async () => {
  let varOne = uno();
  console.log(varOne);

  let varTwo = await dos();
  console.log(varTwo);

  let varThree = tres();
  console.log(varThree);
};

callMe();

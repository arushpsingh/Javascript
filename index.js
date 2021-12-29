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

console.log(re);

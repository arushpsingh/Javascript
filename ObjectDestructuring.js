const myData = {
  name: "Arush",
  age: 26,
  deg: "B.Tech",
  hobbies: {
    first: "valorant",
    second: "anime",
  },
};

console.log(myData.name, { ...myData });

// let { name, age, deg, hobbies } = myData;

// console.log(
//   `My name is ${name}. My ageis ${age}. My degree is ${deg}. My hobby is ${hobbies.second}`
// );

// const obj = {
//     car: "bmw",
//     driver: {
//         name:'Artem'
//     }
// }

// let obj2 = obj // obj2=равен той же ссылке что obj
// console.log(obj2 === obj)// true
// console.log(obj2.driver === obj.driver)// true

// console.log({} === {}) //false

//QUESTION
//Сколько типов копирования объектов существует?
//ANSWER
// Есть два типа копирования:
// 1)Не глубокое копирование делается с помощью Object.assign() и оператора ...
//EXAMPLE
const carBMW = {
  mark: "BMV",
  year: 2020,
  enginer: {
    sila: 3000,
  },
};

const carAUDI = {
  ...carBMW, // mark, year,enginer,
  // enginer:{...carBMW.enginer}
};

console.log(carAUDI);
// console.log(carAUDI, carBMW);
console.log(carAUDI === carBMW);
console.log("enginer", carAUDI.enginer === carBMW.enginer);

//QUESTION
//Как делается глубокое копирование?
//ANSWER
// Глубокое копирование делается с помощью strucutredClone and JSON.parse(JSON.strngify(user))
// у глубокого копирования есть ограничение, оно не поддерживает копированеи функций.
//EXAMPLE
const carLada = JSON.parse(JSON.stringify(carBMW));
console.log(carLada === carBMW);
console.log("enginer", carLada.enginer === carBMW.enginer);

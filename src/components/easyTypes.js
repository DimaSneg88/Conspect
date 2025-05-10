// 7 примитивных типов
// string, number, boolean, bigInt, null, undefined, Symbol
// string
console.log("14");
console.log("dsgdf");
// number
console.log(23432);
console.log(15);
// booleadn
console.log(true);
console.log(false);
// undeinfed
console.log(undefined);
console.log(null);

// Явное
// Явное приведение к sting за счет String()
console.log(String(23432)); // "23432"
console.log(String(true)); // "true"
console.log(String(undefined)); // "undefiend"

// Явное приведение в number с помощью Number
console.log("------------------------");
console.log(Number(23432)); //23432
console.log(Number(true)); // 1
console.log(Number(false)); // 0
console.log(Number(undefined)); // NaN
console.log(Number("54")); //  54
console.log(Number("sdfds")); // NaN
console.log(Number("")); // 0
// Явное приведение в boolean через Boolean
console.log("------------------------");
console.log(Boolean(23432)); //true
console.log(Boolean(undefined)); // false
console.log(Boolean(-1)); //false
console.log(Boolean(0)); // true
console.log(Boolean("sdfds")); // true
console.log(Boolean("")); // false

Boolean(""); // false
Boolean(0); // false
Boolean(-0); // false
Boolean(NaN); // false
Boolean(null); // false
Boolean(undefined); // false
Boolean(false); // false

// Неявное приведение в строку делает через + какого нибудь значения к строке
// то есть null + ''
console.log("------------------------");
console.log(undefined + "");
console.log(null + "5234");

// Неявное приведение в булеан делается за счет двух "не" !!
console.log("------------------------");
console.log(!!"dfg");
console.log(!!0);
console.log(!!1);

// Неявное преобразование делают математические дейсвтия:
// >, <, <=, >=, == , !=
// -, +, *, /, %
// В + есть исключение, если хотя бы один оператор из них строка, то будет преобразование к строке
// Если значение нельзя перевести в number, то это будет NaN
console.log("------------------------");
console.log(1 * "34");
console.log(+"54");
console.log("10" + 2 * "5");
("1010");

//ANSWER
// QUESTION Какой непримитивный тип данных?
// EXAMPLE:
// не примитвный
// object

// const str = 'asd'

// const str2 = str; // const str2='asd'

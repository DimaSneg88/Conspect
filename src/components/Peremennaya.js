//QUESTION
//какие области видимости существуют?
//ANSWER
//Существуют области видимости:
//глобальная
//модульная
//блочная
//функциональная
//поднятие

var a = 5;
var b = 6;

function some() {
  if (a) {
    console.log(a); // 5
    a = 8;
    console.log(a); // 8
  }

  if (b) {
    console.log(b); // 6
    var b = 10;
  }

  if (a) {
    const c = 5;
  }
  console.log(c); // 9
}
const c = 9;
some();

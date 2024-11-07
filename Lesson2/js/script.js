// Змінні

//console.log(a);   // Виникає помилка ReferenceError: a is not defined тому що змінна а ще не була створена
let a = 10;         // let створює зміну значення якою можливо змінювати
console.log(a);
a = 20;
console.log(a);

const b = 15;       // const не дозволяє змінювати в подальшому значення змінної
console.log(b);
//b = 5;            // Виникає помилка Assignment to constant variable. тому що змінна була створена за допомогою const

//Типи даних

//Boolean;
//Number;
//String;
//null;
//undefined;
//object;
//symbol;
//NaN;

//typeof - дозволяє петевірети акий тип даних у змінної

console.log(typeof 3);
console.log(typeof "abc");
console.log(typeof true);


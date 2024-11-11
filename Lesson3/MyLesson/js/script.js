// області видимості

const a = 5;

if (true) {
  console.log("if", a);
  const b = 10;
  console.log("if", b);
}

console.log("Global", a);
//console.log("Global", b); //викличе помилку

// Цикли

// while
// do while
// for
// break && continue

// while
let aa = 0;

while (aa < 5) {
  aa += 1;
  console.log("a", aa);
}

let aa1 = 3;

while (aa1) console.log(aa1--); //якщо 1 умова, то можна записати в 1 строчку

//do while
let aa2 = 0;

do {
  console.log(aa2);
  aa2 += 1;
} while (aa2 < 5);

//for

for (let i = 0; i < 3; i++) {
  console.log(i);
}

// break
let summ = 0;

while (true) {
  let value = +prompt("Введіть число");
  if (!value) break;
  summ += value;
}

console.log("Summ", summ);

// continue

for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) continue;
  console.log(i);
}

//масиви ([])

let arr = [1, 2, 3, 4, 5];
let arr1 = ["Apple", "Orange", "Blum"];

console.log(arr1);
console.log(arr1[0]);
console.log(arr1[2]);
console.log(arr1[1]);

arr1[2] = "Lemon";
console.log(arr1[2]);
arr1[3] = "Cherry";
console.log(arr1);
console.log(arr1.length);

let arr2 = [1, "hello", { key: "" }];
console.log(arr2);

//push()
arr1.push("Tomat");
console.log(arr1);

//pop()
arr1.pop();
console.log(arr1);

//shift()
arr1.shift();
console.log(arr1);

//unshift()
arr1.unshift("Tomat");
console.log(arr1);

// Методи перебору масиву

//більш старий варіант
for (let i = 0; i < arr1.length; i++) {
  console.log(arr1[i]);
}

//більш сучасний варіант
for (let item of arr1) {
  console.log(item);
}

//з доступом по індексу

for (let key in arr1) { 
  console.log(arr1[key]);
}

//forEach

const arr12 = ["a", "b", "c"];
arr12.forEach((element) => console.log(element));

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(matrix);
console.log(matrix[1][1]);

// мєтоди присвоєння
// примітивні типи копіюются за значенням

let a1 = 5
let b1 = a;

a1 = 10;

console.log(a1);
console.log(b1);

//складні (масиви та обєкти) копіюются за посиланням

let arr11 = [1, 2, 3];
let arr22 = arr11;

arr11.push(a);

console.log(arr11);
console.log(arr22);

//ще методи масиву

//splice

let arrstr = ["a", "b", "c", "d", "f"];

arrstr.splice(2, 1);

console.log(arrstr);

//slice

let arrstr1 = ["a", "b", "c", "d", "f"];

console.log(arrstr1.slice(1, 3))

//concat

let arra = [1, 2, 3];
let arrb = [4, 5, 6];

console.log(arra + arrb); // не працює

console.log(arra.concat(arrb));

// indexOf, lastIndexOf, includes

console.log(arrstr1.indexOf("c", 1)); // 2 аргумент не обов'язковий
console.log(arrstr1.lastIndexOf("c")); // шукає з кінця, 2 аргумент не обов'язковий
console.log(arrstr1.includes("c"));

//find

const fruits = [
  { id: 0, name: "Apple" },
  { id: 1, name: "Tomat" },
  { id: 2, name: "Cherry" },
  { id: 3, name: "Orange" },
];

console.log(fruits.find((item) => item.id === 1));

// filter

console.log(fruits.filter((item) => item.id < 2));

//map

let result = fruits.map((item) => item.name.length);
console.log(result);

//split - перетворює строку в масив

let names = "Оля, Юля, Аня, Петя"
let arrName = names.split(", ");
console.log(arrName);

//joun - перетворює масив в строку

let newString = arrName.join(", ");
console.log(newString);

//reduce

let arrRed = [1, 2, 3, 4, 5];
let red = arrRed.reduce((summ, item) => summ + item);

console.log(red);

let arrRed1 = [23, 45, 30];

let summ1 = arrRed1.reduce((sum, item) => sum + item) / arrRed1.length;

console.log(summ1);
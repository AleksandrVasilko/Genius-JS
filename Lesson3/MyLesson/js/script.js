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

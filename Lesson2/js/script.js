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

//Boolean

let nameFieldChecked = true;
let ageFieldChecked = false;

console.log(nameFieldChecked);
console.log(ageFieldChecked);

//null
//undefined

let aa = null;
console.log(aa);

let bb;
console.log(bb);

//Число

let c = 8;
console.log(c);

//приведення до числа

const value = "3"; //Строка
console.log(value);
console.log(typeof value);
console.log(Number(value)); //Приведе до числа
console.log(typeof Number(value));

//isNaN

const number = Number("51");
console.log(Number.isNaN(number));

const string = Number("qweqwe");
console.log(Number.isNaN(string));

//Number.parseInt() 

console.log(Number.parseInt("5ddd")); //5
console.log(Number.parseInt("12qg994")); // 12
console.log(Number.parseInt("11.6qwfe79")); //11
console.log(Number.parseInt("zzzz")); //NaN

//Number.parseFloat()

console.log(Number.parseFloat("5ddd")); //5
console.log(Number.parseFloat("12qg994")); // 12
console.log(Number.parseFloat("11.6qwfe79")); //11.6
console.log(Number.parseFloat("zzzz")); //NaN

//кладання з крапкою


console.log(0.1 + 0.2 === 0.3)// false
console.log(0.1 + 0.2)// 0.30000000000000004

//тому

console.log((0.1 * 10 + 0.2 * 10) / 10);

//Объект Math

//Math.floor(num)
console.log(Math.floor(1.7)); //1

//Math.ceil(num)
console.log(Math.ceil(1.8)); //2

//Math.round(num)
console.log(Math.round(1.2)); //1
console.log(Math.round(1.5)); //2

//Math.max(num1, num2, ...)
console.log(Math.max(20, 10, 50, 40)); //50

//Math.min(num1, num2, ...)
console.log(Math.min(20, 10, 50, 40)); //10

//Math.pow(base, exponent)
console.log(Math.pow(2, 53)); //16

//Math.random()
console.log(Math.random()); //випадкове число 0.1 - 0.9
console.log(Math.random() * (10 - 1) + 1); //випадкове число в діапозоні min, max
// (max + 1 - min) + min
console.log(Math.floor(Math.random() * (8 + 1 - 6) + 6));

//String

let str = "Подвійні лапки";
console.log(str);
let str2 = 'Одинарні лапки';
console.log(str2);
let phrase = `Так можна вставляти змінну до повідомлення ${str} або ${str2}`;
console.log(phrase);

let name = "Оля";
let hello = `Привіт ${name}`;
console.log(hello);

const message = "JavaScript " + " is " + " awesome"; //конкaтенація
console.log(message);

// Конкaтенація

let result;
result = 5 + "5"; // при цьому перетворюется на строку
console.log(result); // '55'
console.log(typeof result); //string

result = 5 + "5" + 5; // при цьому перетворюется на строку
console.log(result); // '55'
console.log(typeof result); //string

result = 5 + 5 + "5"; // при цьому перетворюется на строку
console.log(result); // '55'
console.log(typeof result); //string

//методи строк

// length - довжина
// toLowerCase() и toUpperCase()
// indexOf()
// includes()

const message1 = "Welcome to Bahamas!";
//length
console.log(message1.length); //19
console.log('There is nothing impossible to him who will try'.length); //47

// toLowerCase() и toUpperCase()
console.log(message1.toLowerCase()); //welcome to bahamas!
console.log(message1.toUpperCase()); //WELCOME TO BAHAMAS!

// indexOf()
console.log(message1.indexOf("t")); //8
console.log(message1.indexOf("hello")); // -1

// includes()
console.log(message1.includes("welcom")); //false
console.log(message1.includes("Welcom")); //true

//BigInt
const bigNum = 9007199254740991n;
console.log(typeof bigNum)

//Объекти

let user = {
    name: "Ivan",
    age: 30,
    work: true,
};

console.log(user); //весь объект
console.log(user.name); //тільки name
console.log(user.age); //тільки age

//delete - виделяе

let user1 = {
    name: "Ivan",
    age: 30,
    "like birds": true,
};

//якщо ключ с де кілька слів то обов'язково лапки "like birds"
//при цьому для виклику через user1["like birds"]

console.log(user1["like birds"])

delete user1.age;

console.log(user1);
console.log(user1.age);

let user2 = {};
user2.name = "Niko"
console.log(user2);
user2.age = 45;
console.log(user2);

//Цикл "for...in"

// for (key in object) {

// }

let user3 = {
    name: "Ivan",
    age: 30,
    isAdmin: true,
};

for (let key in user3) {
    //ключі
    console.log(key); //name, age, isAdmin
    //значення
    console.log(user3[key]); //Ivan, 30, true
};

//Впорядкування властивостей об'єкта
let codes = {
    49: "Німеччина",
    41: "Швейцарія",
    44: "Великобританія",
    1: "США",
}

for (let code in codes) {
    console.log(code);
}

let user4 = {
    name: "Ivan",
    surname: "Smith",
    age: 40,
}

for (let prop in user4) { 
    console.log(prop);
};
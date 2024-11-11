const message = "JavaScript is awesome!"

//Виведення

//alert
alert(message);

//console.log
console.log(message);

//Отримання

//confirm
const isConfirm = confirm("Please confirm reservation");
console.log(isConfirm);

//prompt
const userName = prompt("Pease enter your name:");
console.log(userName);

//prompt повертає string тому для роботи з числами потрібно зробити перетворення типу

let value = prompt("Pease enter a number!");
console.log(typeof value); //string
console.log(value); //'5'

// ---String--- //

value = false;
console.log(typeof value);
const newValue = String(value);
console.log(typeof newValue);

// ---Number--- //

value = "123";
console.log(typeof value);
const newNumber = Number(value);
console.log(typeof newNumber);

const test = Number("qwerty");
console.log(test);
console.log(typeof test);

// ---Boolean--- //

console.log(Boolean(1));
console.log(Boolean(0));

console.log(Boolean("Вітаю"));
console.log(Boolean(""));

console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(NaN));

// Оператори математичні

// Додавання +

console.log(2 + 2);

// Віднімання -

console.log(10 - 4);

// Множення *

console.log(5 * 5);

// Ділення /

console.log(6 / 2);

// Остача від ділення %

console.log(8 % 3);
console.log(10 % 3);
console.log(10 % 2);

//Піднесення до степеня **

console.log(5 ** 2);
console.log(4 ** 4);

// Оператори логічні
// Результат повернаєтся буль

// Порівняння

console.log(5 > 3);
console.log(5 < 3);
console.log(5 >= 5);
console.log(7 <= 3);

// не строге, з преведенням типів
console.log(5 == "5");
console.log(5 == 5);
console.log(5 != "5");
console.log(5 != 5);

//строге
console.log(5 === "5");
console.log(5 === 5);
console.log(5 !== "5");
console.log(5 !== 5);


// and - or - not //

// and (&&)

console.log(5 === 6 && 6 > 3);
console.log(6 + 3 >= 9 && 8 + 1 === 9);

// or (||)

console.log(5 + 5 === 25 || 2 * 2 === 6);
console.log(5 * 5 === 25 || 2 * 2 === 6);

// not (!)

console.log(true);
console.log(!true);
console.log(false);
console.log(!false);

//Умови

// if/else

//-- одинарні

if (5 * 5 === 10) {
    console.log("Hello");
} else { 
    console.log("No Hello");
}

//-- Тернарний оператор

2 + 2 === 4 ? console.log(1) : console.log(2);
5 * 5 === 24 ? console.log(true) : console.log(false);

// else if

if (5 + 5 === 7) {
    console.log("5 + 5 === 7");
} else if (2 + 2 === 4) {
    console.log("2 + 2 === 4");
} else { 
    console.log("no");
}

let leng = "ua";

if (leng === "ua") {
    console.log("Понеділок");
} else if (leng === 'en') {
    console.log("Monday");
} else { 
    console.log("Reset");
}

// switch/case

let num = 5;

switch (num) { 
    case 0:
        console.log(0);
        break;
    case 5:
        console.log(5);
        break;
    case 10:
        console.log(10);
        break;
}

let cost = null;
const sub = "premium"; 

switch (sub) { 
    case "free":
        cost = 0;
        break;
    case "pro":
        cost = 100;
        break;
    case "premium":
        cost = 500;
        break;
    default:
        console.log("Invalid sub");
}

console.log(cost);

//Задачи

// Чверті години

const min = prompt("Введіть хвилину");

if (min >= 0 && min <= 14) {
    console.log("Перша чверть");
} else if (min >= 15 && min <= 29) {
    console.log("Друга чверть");
} else if (min >= 30 && min <= 44) {
    console.log("Третя чверть");
} else if (min >= 45 && min <= 59) {
    console.log("Четверта чверть");
} else { 
    console.log("Введіть іншу цифру");
} 

//

const value1 = prompt("Введіть назву товару").toLowerCase();
let cost1 = null;

switch (value1) { 
    case "яблуко":
        cost1 = 10;
        break;
    case "вишня":
        cost1 = 50;
        break;
    case "грушка":
        cost1 = 45;
        break;
    case "кавун":
        cost1 = 70;
        break;
    case "чорниця":
        cost1 = 110;
        break;
    case "диня":
        cost1 = 150;
        break;
    default:
        alert(`Товару ${value1}, немає в наявності`);
}

if (cost1 !== null) {
    alert(`${value1} коштує ${cost1} гривень`);
}
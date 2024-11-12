//функції
//function declaration

function showMassege() { 
    console.log("Hello");
};

showMassege();
showMassege();
showMassege();

//Параметри і аргументи

function showMassege1(a, b="Kiev") { 
    console.log("Hello", a, b);
};

showMassege1();

function showMassege2(name, city) { 
    console.log("Hello, my name is " + name + " I'm from " + city);
};

showMassege2("Nata", "Kyiv");
showMassege2("Olia", "Lviv");

// function expression

const sayHi = function () {
    console.log("Hi");
};

sayHi();

//локальні та глобольні змінні

const userName = "Ann"; //глобальна доступна з усього коду

const sayHi1 = function () {
    let message = "Hello, my name "; //локальна
    console.log(message + userName);
};

sayHi1();

//return - повертає результат функції та зупеняє ії виконяння

function sum(a, b) { 
    let c = a + b;
    return c;
};

let result = sum(7, 8);
console.log(result);

//порядок виконання коду

const a = function () { 
    c();
    console.log("function a");
    b();
}

const b = function () { 
    console.log("function b");
}

const c = function () { 
    console.log("function c");
}

a();

//Псевдомасив arguments i rest(...)

const addName = function () { 
    console.log(arguments);
}

addName(1, 3, 5);
addName(1, 3, 5, 67, 55);

const addName1 = function () { 
    const arg = Array.from(arguments);
    console.log(arguments);
    console.log(arg);
}

addName1(1, 3, 5);
addName1(1, 3, 5, 67, 55);

//rest (...)

const rest = function (...arg) { 
    console.log(arg);
}

rest(1, 3, 5);
rest(1, 3, 5, 85, 67);

//callback - функція яка буде виконана піздніше

function ask(question, yes, no) { 
    if (confirm(question)) {
        yes();
    } else { 
        no();
    }
}

function showOk() { 
    console.log("You say ok");
}

function showCancel() { 
    console.log("You say No");
}

ask("Yes or no?", showOk, showCancel);

//hof (high order function) - callback

const hello = function (name) {
    console.log(`Hello, ${name}`);
};

const searchName = function (callback) { 
    const name = "Ivan";
    callback(name);
}

searchName(hello);

function checkAge(age) { 
    if (age > 18) {
        return console.log("Hello");
    } 
    return console.log("Good Bye");
};

checkAge(12);
checkAge(21);


//return - не обовязково щось повертає, а просто завершує виконання блоку коду.
function showMovie(age) { 
    if (age < 21) { 
        return
    }
    return console.log("Go to movie!");
}

showMovie(12);
showMovie(21);

//стрілкові функції - найбільш сучасний сінтаксіс
//в них не має псевдомасиву arguments 

const test = (arg) => {
    console.log("hello test");
};

test();

const showMovie1 = (age) => {
    if (age > 21) { 
        return console.log("Hello");
    }
    return console.log("Bye!");
};

showMovie1(12);
showMovie1(22);

// контексти і виклики

const a1 = () => {
    console.log("a1");
};

const b1 = () => {
    console.log("b1");
};

const c1 = () => {
    console.log("c1");
    a1();
    b1();
};

c1();

//document

console.log(document);

const numberRef = document.querySelector('input[name="number"]');

const buttonRef = document.querySelector("button");

console.log(numberRef.value);
console.log(buttonRef);

buttonRef.addEventListener('click', () => { 
    console.log(numberRef.value);
})
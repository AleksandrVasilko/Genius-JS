// Якщо змінна більше нуля - виведіть true, менше - false
//Перевірте це на варіантах  1, 0, -3.

let a = 20;

console.log(a)

if (a >= 0) {
    console.log(true);
} else { 
    console.log(false);
}

// Якщо змінна ="test" - виведіть true,
//Перевірте це на варіантах  'test', "qwerty", true

let b = "test"

if (b === "test") { 
    console.log(true)
}

// Якщо змінна більше 10 -  відніміть 5,
//менше - додайте 5, результат виведіть в консоль
//Перевірте це на варіантах  1, 10, 13.

let c = 7;

if (c > 10) {
    c -= 5;
} else { 
    c += 5;
}

console.log(c);

//Зробіть сервіс який отримує число від 1 до 12
// виведіть місяць який дорівнює числу

let d = Math.floor(Math.random() * (12 + 1 - 1) + 1);
console.log(d);
switch (d) { 
    case 1:
        console.log("Січень");
        break;
    case 2:
        console.log("Лютий");
        break;
    case 3:
        console.log("Березень");
        break;
    case 4:
        console.log("Квітень");
        break;
    case 5:
        console.log("Травень");
        break;
    case 6:
        console.log("Червень");
        break;
    case 7:
        console.log("Липень");
        break;
    case 8:
        console.log("Серпень");
        break;
    case 9:
        console.log("Вересень");
        break;
    case 10:
        console.log("Жовтень");
        break;
    case 11:
        console.log("Листопад");
        break;
    case 12:
        console.log("Грудень");
        break;
};

//Зробіть сервіс який отримує тризначне число
//Поверніть користувачу сумму цих чисел

let e = Math.floor(Math.random() * (999 + 1 - 100) + 100);
console.log(e);

let sum = 0;
let str = String(e);
for (let i = 0; i < str.length; i++) {
    let f = str[i];
    f = Number(f);
    sum += f;
}

console.log(sum);
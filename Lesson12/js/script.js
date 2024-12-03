// Сінхроний код віконуєтся по черзі
console.log("1");
console.log("2");
console.log("3");
console.log("4");

// Асінхроний код може віконуватися зі зміщенням черги
console.log("11");
setTimeout(() => (console.log("22"), 2000));
console.log("33");
console.log("44");

const hello = () => {
  console.log("hello");
};

const timeout = setTimeout(hello, 2000);

clearTimeout(timeout);

const hello1 = () => {
  console.log("hello111");
};

const timeout1 = setInterval(hello, 2000);

const startButton = document.querySelector("#start");
const stopButton = document.querySelector("#stop");

startButton.addEventListener("click", () => {
  time = setInterval(() => {
    console.log("123");
  }, 1000);
});

stopButton.addEventListener("click", () => {
  clearInterval(time);
  console.log("stop");
});

const a = {
  classic() {
    setTimeout(function () {
      console.log(`${this}, classic in obj`);
    });
  },
  arr() {
    setTimeout(() => {
      console.log(`${this}, arr in obj`);
    });
  },
};

a.classic();
a.arr();

// Date та його методи
const date = new Date();
console.log(date);

const date1 = new Date("March, 10, 2023");
console.log(date1);

const dateAll = new Date(2022, 4, 1, 10, 15, 37, 25);
console.log(dateAll);

const unixDate = new Date(1000);
console.log(unixDate);

const newUnixDate = Date.now();
console.log(newUnixDate);

const date2 = new Date();
console.log(date2.getDate());
console.log(date2.getMonth());
console.log(date2.getFullYear());

const options = {
  weekday: "long",
  year: "numeric",
  month: "short",
  day: "numeric",
  hour: "2-digit",
  minute: "2-digit",
};

const dateUkr = date2.toLocaleString("Uk-uk", options);
console.log(dateUkr);

// Promise
let prom = new Promise(function (resolve, reject) {
  setTimeout(() => resolve("resolve"), 1000);
  setTimeout(() => reject("reject"), 1000);
});

prom.then(
  (resolve) => console.log(resolve),
  (reject) => console.log(reject)
);

prom.catch(alert);

prom.finally();

function load(src) {
  return new Promise(function (resolve, reject) {
    let script = document.createElement("script");
    script.src = src;

    script.onload = () => resolve(script);
    script.onerror = () => reject(new Error(`Err ${script}`));
    document.head.append(script);
  });
}

let prom1 = load("");

prom1.then(
  (script) => console.log(`Download ${script}`),
  (error) => console.log(`Error ${error.message}`)
);

//prom1.catch((error) => console.log(`Error ${error.message}`));

//prom1.finally(console.log("Finally"));

new Promise(function (resolve, reject) {
  setTimeout(() => resolve(2), 1000);
})
  .then(function (result) {
    console.log(result);
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(result + 5), 1000);
    });
  })
  .then(function (result) {
    console.log(result);
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(result + 5), 1000);
    });
  })
  .then(function (result) {
    console.log(result);
  });

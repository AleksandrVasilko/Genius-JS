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

const startButton = document.querySelector('#start');
const stopButton = document.querySelector('#stop');

startButton.addEventListener("click", () => { 
    time = setInterval(() => {
        console.log("123");
    }, 1000);
});

stopButton.addEventListener("click", () => { 
    clearInterval(time);
    console.log("stop");
})
// замикання

function createNewSum(n) { 
    return function () {
        console.log(10 * n);
    };
};

const call = createNewSum(5);
call();

//-------

function createNewNumber(n) { 
    return function (num) {
        return n + num;
    };
};

const addFive = createNewNumber(5);
console.log(addFive(10));

//-------

function createUrl(domain) { 
    return function (url) {
        return `https://${url}.${domain}`
    };
};

const comUrl = createUrl("com");
const comUa = createUrl("ua");

console.log(comUrl("google"));
console.log(comUrl("fb"));

console.log(comUa("google"));
console.log(comUa("fb"));

// this - контекст

function hello() { 
    console.log("hello", this);
}

hello();

const user = {
    name: "Ivan",
    city: "Odesa",
    sayHello: hello,
}

user.sayHello();

//-----------

function abc() { 
    console.log(this);
}

abc();

document.querySelector('p').onclick = abc;
document.querySelector('li').onclick = abc;
//----------------

function changeColor() { 
    console.log(this);
    this.style.background = "green"
}

document.querySelector('div').onclick = changeColor;

let user1 = document.querySelectorAll("div");

user1.forEach(function (element) { 
    element.onclick = changeColor;
})

//----------------
//стрілкова функція не має this

const showList = () => {
    console.log(this);
};

showList();

const list = {
    names: ["Ann", "Olga", "Nata"],
    showList: showList,
};

list.showList();

//---------------------

function hello() { 
    console.log(this);
};

const user2 = {
    name: "Ivan",
    age: 30,
    hello: hello,
    sayHelloWindow: hello.bind(window),
    info: function (city) {
        console.log(`Name is ${this.name}`);
        console.log(`Age is ${this.age}`);
        console.log(`City is ${city}`)
    }
};

user2.hello();
user2.sayHelloWindow();
user2.info();

const Ann = {
    name: "Anna",
    age: 23,
}

const Nata = {
    name: "Natalia",
    age: 50,
}

const Olga = { 
    name: "Olga",
    age: 34,
}

user2.info.bind(Ann)('Kyiv');
user2.info.bind(Nata, 'Odesa')();

const olgaInfo = user2.info.bind(Olga, "Lviv");
olgaInfo();

// call

const userInfo = {
    name: "name",
    age: 98,
    logInfo: function (job) {
        console.group(`${name} info:`);
        console.log(`Name is: ${this.name}`);
        console.log(`Age is: ${this.age}`);
        console.log(`Job is: ${job}`);
        console.groupEnd();
    },
};

const Vano = {
    name: "Ivan",
    age: 45,
}

userInfo.logInfo.call(Vano, 'developer');

// apply

const showUserInfo = {
    name: name,
    age: 87,
    logInfo: function (job, city) {
        console.group(`${name} info:`);
        console.log(`Name is: ${this.name}`);
        console.log(`Age is: ${this.age}`);
        console.log(`Job is: ${job}`);
        console.log(`City is: ${city}`);
        console.groupEnd();
    },
}

const Niko = {
    name: "Mykola",
    age: 49,
}

showUserInfo.logInfo.apply(Niko, ["operator", "Dnipro"]);

//-----Задачи--------

const message = function (name, stars) {
    console.log(`${name}, Welcome to ${this.hotel}, stars ${stars}`);
};

const Bukovel = {hotel: "Bukovel"};
const Turist = { hotel: "Turist" };

//call
message.call(Bukovel, "Ivan", "5");
message.call(Turist, "Oleg", "3");

//apply
message.apply(Bukovel, ["Ivan", "5"]);
message.apply(Turist, ["Oleg", "3"]);

//bind
message.bind(Bukovel, "Ivan", "5")();
message.bind(Turist, "Oleg", "3")();

//Роблта з інтерфейсом

const cart = {
    showItem() {
        console.log("В корзині: ", this.items);
    },
};

const woman = {
    items: ["Сукня", "Туфлі"],
}

const man = {
    items: ["Костюм", "Рубашка"],
}

const child = {
    items: ["Майка", "Шорти"],
}

cart.showItem.bind(man)();

document.querySelector('#wom').addEventListener('click', cart.showItem.bind(woman));

document.querySelector('#man').addEventListener('click', cart.showItem.bind(man));

document.querySelector('#kid').addEventListener('click', cart.showItem.bind(child));

//-------------------//

const infoCar = {
    name: "BMW",
    model: "M7",
    color: "white",
    showInfo: function () {
        console.log("Car: " + this.name + " model: " + this.model + " color: " + this.color);
    },
};

car2 = {
   name: "Opel",
    model: "XXX",
    color: "red", 
}

infoCar.showInfo();
infoCar.showInfo.bind(car2)();
infoCar.showInfo.call(car2);
infoCar.showInfo.apply(car2);
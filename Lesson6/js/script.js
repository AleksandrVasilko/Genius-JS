//Процедурне программування

const summ = 20000;
const month = 12;
const p = 1000;

const credit = (sum, date, p) => {
    return sum + p * date;
};

console.log(credit(summ, month, p));

//об'єктно орієнтованне программування

const credit1 = {
    summ: 20000,
    month: 12,
    p: 1000,
    result() {
        return this.summ + this.p * this.month;
    },
};

console.log(credit1.result());

// класи

class Bank { 
    static type = "privat";
    constructor(options) { 
        this.summ = options.summ;
        this.month = options.month;
        this.p = options.p;
    };

    credit() { 
        return console.log(this.summ + this.p * this.month);
    };

    credit2() { 
        return console.log("I am Privat");
    }
};

const userBank = new Bank({
        summ: 30000,
        month: 5,
        p: 500,
    },
);

userBank.credit();
console.log(userBank.type);
console.log(Bank.type);



class NewBank extends Bank { 
    constructor(options) { 
        super(options);
        this.card = options.card;
    }
    credit2() { 
        super.credit2();
        console.log("I am Aval");
    }
};

const aval = new NewBank({
    summ: 30000,
    month: 5,
    p: 500,
    card: true,
});

console.log(aval.credit2());


//get & set

class User { 
    constructor(props) { 
        this.name = props.name;
    }

    firstName = "";
    lastName = "";
    age = "";
    city = "";

    set name(newName) { 
        const nameRow = newName.split(" ");
        this.firstName = nameRow[0];
        this.lastName = nameRow[1];
    }

    get name() { 
        return `First name: ${this.firstName} last name: ${this.lastName}`
    }
}

const Kris = new User({
    name: "Kristina Malitowska",
}); 

const Dasha = new User({
    name: "Dasha Happy",
});

console.log(Kris);
console.log(Dasha);

//prototypes

const a = [1, 2, 3];
console.log(a);


const aa = {
    x: 1,
    y: 2,
}

const bb = Object.create(aa);
console.log(bb);

console.log(bb.hasOwnProperty("x"));

const Manager = function (name, sales) {
    this.name = name;
    this.sales = sales;

    // this.sale = function () {
    //     this.sales += 1;
    // };
};

const ann = new Manager("Anna", 5);
const ivan = new Manager("Ivan", 10);

Manager.prototype.sale = function () {
    this.sales += 1;
};

console.log(ann);
console.log(ivan);

console.log(ann.sales);
ann.sale();
console.log(ann.sales);

console.dir(Manager);

//Privat & Pablic metods of clacc

class CoffeMachine { 
    _water = 0;
    #waterLimit = 500;

    constructor(power) { 
        this.power =     power;
    }

    set waterAmount(value) { 
        if (value < 0) { 
            value = 0
        }
        this._water = value;
    };
};

let coffeMachine = new CoffeMachine(100);
console.log(coffeMachine);

coffeMachine.waterAmount = 20;
coffeMachine.waterAmount = -20;
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
    constructor(options) { 
        this.summ = options.summ;
        this.month = options.month;
        this.p = options.p;
    };

    credit() { 
        return console.log(this.summ + this.p * this.month);
    };
};

const userBank = new Bank({
        summ: 30000,
        month: 5,
        p: 500,
    },
);

userBank.credit();
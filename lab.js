
console.log("Question 1 -------------------------")
const gretter = (myArray, counter) => {
    for (const name of  myArray) {
        console.log(`Hello ${name}`);
    };
}

gretter(['Randy Savage', "Ric Flair", "Hulk Hogan"], 3)
console.log("Question 2 -------------------------")

const capitalize = (str) => {
    const [first, ...rest] = str;
    return `${first.toUpperCase()}${rest.join("")}`
}

console.log(capitalize('fooBar'))
console.log(capitalize('nodeJS'))


console.log("Question 3 -------------------------")
const colors = ['red', 'green', 'blue'];

const capitalizeArray = (arr) => {
    return arr.map(str => capitalize(str))
}

const capitalizedColors = capitalizeArray(colors)
console.log(capitalizedColors)

console.log("Question 4 -------------------------")
var values = [1, 60, 34, 30, 20, 5];
const filterLessThanTwenty = (arr) => {
    return arr.filter(num => num < 20);
}

console.log(filterLessThanTwenty(values));

console.log("Question 5 -------------------------")
var array = [1, 2, 3, 4];

const calculateSum = (arr) => {
    return arr.reduce((accumulator, current) => accumulator + current);
}

const calculateProduct = (arr) => {
    return arr.reduce((accumulator, current) => accumulator * current);
}

console.log(calculateSum(array));
console.log(calculateProduct(array));

console.log("Question 6 -------------------------")

class Car {
    constructor(model, year) {
        this.model = model
        this.year = year
    }
    
    info() {
        return `Model: ${this.model}\nYear: ${this.year}\n`;
    }
}

class Sedan extends Car {
    constructor(model, year, balance) {
        super(model, balance)
        this.balance = balance
    }

    info() {
        return `Model: ${this.model}\nYear: ${this.year}\nBalance: ${this.balance}\n`;
    }
}

const car2 = new Car ("Pontiac Firebird", 1976)
console.log(car2.info())
const sedan = new Sedan('Volvo SD', 2018, 30000)
console.log(sedan.info())
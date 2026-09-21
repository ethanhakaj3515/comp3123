const numbers = [1, 2, 3, 4, 5];

const printNumbers = (numbers) => {
    for (const number of numbers) {
        console.log(`Number: ${number}`);
    }
};

printNumbers(numbers);

const capitalize = (str) => {
    const [first, ...rest] = str;
    return [first.toUpperCase(), ...rest].join("");
};

console.log(capitalize("hello"));

const colors = ["red", "green", "blue", "yellow", "purple"];

const capitalizedColors = colors.map(color => capitalize(color));

console.log(capitalizedColors);

const values = [10, 15, 20, 25, 30, 5, 40];

const filteredValues = values.filter(value => value >= 20);

console.log(filteredValues);

const nums = [1, 2, 3, 4, 5];

const sum = nums.reduce((total, number) => total + number, 0);

const product = nums.reduce((total, number) => total * number, 1);

console.log(`Sum: ${sum}`);
console.log(`Product: ${product}`);

class Car {
    constructor(model, year) {
        this.model = model;
        this.year = year;
    }
}

class Sedan extends Car {
    constructor(model, year, balance) {
        super(model, year);
        this.balance = balance;
    }
}

const sedan = new Sedan("Toyota Camry", 2024, 25000);

console.log(`Model: ${sedan.model}`);
console.log(`Year: ${sedan.year}`);
console.log(`Balance: ${sedan.balance}`);
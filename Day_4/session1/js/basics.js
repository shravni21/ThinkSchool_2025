// ------------- Variables --------------
var variable1 = "Welcome to ThinkSchool";
let variable2 = "Hi I am Shravni";
const variable3 = "I am a student";

variable1 = "Hello ThinkSchool";

console.log("Hello World!");
console.log("ThinkSchool");
console.log(variable1);
console.log(variable2);
console.log(variable3);

// ------------- Strings --------------
const exampleString = "Hello";
console.log(exampleString);
console.log("This is a string");

const singleQuoteString = 'Hello';
const doubleQuoteString = "Hello DoubleQuote";
const backtickString = `Hello!`;

const Name = "John";
const message = `Hello, ${Name}!`;
console.log(message);

let num1 = 5;
let num2 = 10;
const sum = `${2+8}`;
const sum1 = `${num1+num2}`;

console.log(typeof sum);

const multilineString = `This is
a multiline
string`;
console.log(multilineString);

// ------------- Numbers --------------
const wholeNumber = 10;
const decimalNumber = 10.5;
let numPrint = `Sum of whole and decimal number is ${wholeNumber + decimalNumber}`;
let sub = wholeNumber - decimalNumber;
let mul = wholeNumber * decimalNumber;
let div = wholeNumber / decimalNumber;
let nan_num = numPrint / wholeNumber;

console.log(numPrint);
console.log('Subtraction:', sub);
console.log('Multiplication:', mul);
console.log('Division:', div);
console.log('NaN example:', nan_num);

// ------------- Booleans --------------
const bool = true;
console.log(~bool);

if(bool){
    console.log("bool is true");
}else{
    console.log("bool is false");
}

console.log(8 > 5);

let age = null;
let x;
age = 10;

// ------------- Objects --------------
const Fruit = {
    name: "Apple",
    color: "Red",
    weight: 100,
    isSweet: true,
    isSeedless: false,
    nutrition: {
        calories: 52,
        sugar: "10g"
    }, 
    eat() {
        console.log(`Eating a ${this.color} ${this.name}`);
    }
};

console.log(Fruit);
console.log(Fruit.name);
console.log(Fruit["color"]);
Fruit.eat();

// ------------- Arrays --------------
const PrimeAndCompositeNumbers = [3,5,7,8,9,10,11,13,24,2,15,16,17,18,30,35,96];
console.log(PrimeAndCompositeNumbers[5]);

const fruits = ["apple", "banana", "mango", "orange", "pear"];
console.log(fruits.length);
fruits.push("grapes");
console.log(fruits);
fruits.pop();
console.log(fruits);
fruits.shift();
console.log(fruits);
fruits.unshift("strawberry");
console.log(fruits);

// ------------- Conditionals & Loops --------------

for(let i = 0; i < PrimeAndCompositeNumbers.length; i++){
    if(PrimeAndCompositeNumbers[i] % 2 === 0){
        console.log(PrimeAndCompositeNumbers[i]);
    } else {
        console.log("Not even");
    }
}

let i = 0;
while (PrimeAndCompositeNumbers[i] % 2 !== 0) {
    console.log(PrimeAndCompositeNumbers[i]);
    i++;
}

const arr = [];
const less = [];
const greater = [];

for(let i = 1; i <= 20; i++){
    arr.push(i);
}

for(let i = 0; i < arr.length; i++){
    if(arr[i] < 7){
        less.push(arr[i]);
    } else {
        greater.push(arr[i]);
    }
}

console.log('Less than 7:', less);
console.log('Greater or equal to 7:', greater);

const replacedArray = [];

for(let i = 1; i < 20; i++){
    if(i % 3 === 0 && i % 5 === 0){
        replacedArray.push("xy");
    } else if(i % 3 === 0){
        replacedArray.push("x");
    } else if(i % 5 === 0){
        replacedArray.push("y");
    } else {
        replacedArray.push(i);
    }
}

console.log(replacedArray);

// ------------- Array Higher-Order Methods --------------

const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map(n => n * 2);
console.log(doubled);

const evens = numbers.filter(n => n % 2 === 0);
console.log(evens);

const sumAll = numbers.reduce((acc, val) => acc + val, 0);
console.log(sumAll);

// ------------- String Practice -----------

const str = 'Hello are you able to see my screen?';
console.log(str.length);
console.log(str[0]);
console.log(str[str.length - 1]);
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.charAt(0));
console.log(str.indexOf("able"));
console.log(str.lastIndexOf("able"));
console.log(str.slice(0, 5));
console.log(str.slice(6, 10));
console.log(str.substring(0, 5));
console.log(str.substring(6, 10));
console.log(str.replace("able", "unable"));
console.log(str.split(" "));

function reverseString(string){
    const charArray = string.split('');
    const reversedCharArray = charArray.reverse();
    const reversedString = reversedCharArray.join('');
    return reversedString;
}

console.log(reverseString(str));

function reverseWords(sentence) {
    const words = sentence.split(' ');
    const reversedWords = words.reverse();
    return reversedWords.join(' ');
}

const s = 'Hello are you able to see my screen?';
console.log(reverseWords(s));

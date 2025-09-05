// A block of code => Performs a task

// A function declaration(defining a function)
function square(number){
    return number*number;
}

// A Function call(executing function)
let result = square(5);
console.log(result);

// Function Declaration
function name(params){
    console.log(params);
    // statements
    // have access to "this keyword"
}

function square(number){
    return number*number;
}

let squareResult = square(5);
console.log(squareResult);

function name(params){
    console.log(params);
}

function add(a,b){
    return a+b;
}

const sum = add(10,20);
console.log(sum);

const squareArrow = (num) => {
    return Math.pow(num,2);
}
const res = squareArrow(5);
console.log(res);

const globalVar = "I am global!";

function checkScope() {
  const localVar = "I am local!";
  console.log(globalVar);
  console.log(localVar);

  if (true) {
    let blockVar = "I am in a block!";
    console.log(blockVar);
  }
}

console.log(globalVar);

checkScope();
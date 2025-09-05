// ------------ JS Objects ------------
const Person = {
    name: "Neela",
    age: 30,
    city: "Delhi"
}

console.log(Person);
console.log(Person.name);
console.log(Person.city);
console.log(Person['name']);
console.log(typeof Person);

let text = Person.name + " is " + Person.age + " years old and lives in " + Person.city;
console.log(text);

// ------------ Object with new keyword ------------
const Fruit = new Object({
    name: "Apple",
    color: "Red",
    price: 100
});
let priceOfApple = Fruit.name + " is " + Fruit.price + " rupees with " + Fruit.color + " color";
console.log(priceOfApple);

// ------------ JS Object Methods ------------
const Employee = {
    name: "Neela",
    age: 30,
    city: "Delhi",
    job: "Software Engineer",
    salary: 50000,
    printInfo: function(){
        console.log(this.name + " is " + this.age + " years old and works as " + this.job);
    }
};
Employee.printInfo();
let salaryOfEmployee = 'salary of position: ' + Employee.job + ' is ' + Employee.salary;
console.log(salaryOfEmployee);

const Emp1 = new Employee("Neela", 30, "Delhi", "Software Engineer", 50000);
const Emp2 = new Employee("Neha", 25, "Mumbai", "Data Scientist", 70000);
Emp1.printInfo();
Emp2.printInfo();

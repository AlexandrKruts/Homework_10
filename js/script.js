"use strict";

//1

class Employee {
  static vacationDaysPerYear = 18;

  constructor(firstName, lastName, age, jobPosition, salary) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.jobPosition = jobPosition;
    this.salary = salary;
  }

  get fullname() {
    console.log(`${this.firstName} ${this.lastName}`);
  }

  salaryOfYear = function() {
    console.log(`Годовая зарплата: ${this.salary * 12}`);
    // return this.salary * 12;
  }
  // get salaryOfYear() {
  //   console.log(this.salary * 12);
  // }
}
let employee = new Employee("Alex", "Jhonson",30,"manager",25000);
employee.fullname;
console.log(`Кол-во дней отпуска в году: ${Employee.vacationDaysPerYear}`);
employee.salaryOfYear();

let Boss = new Employee("Bob", "Polson",35,"Boss",50000);

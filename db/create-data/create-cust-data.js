'use strict';

const faker = require('faker');
// let randomDate = faker.date("%Y-%m-%d");
// console.log(randomDate, "what THEFUCK is date");

module.exports.generateCustData = () => {
  let customers = [];

  for (let i=0; i < 50; i++) {
    let firstName = faker.name.firstName();
    console.log(firstName);
    let lastName = faker.name.lastName();
    let createDate = faker.date.past(10, '2010-01-01');
// generated customer attributes values are pushed to the customers array
    customers.push({
      firstName,
      lastName,
      createDate
    });
  }
  console.log(customers);
  return customers;
}


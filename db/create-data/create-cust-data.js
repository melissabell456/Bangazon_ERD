'use strict';

const faker = require('faker');
const moment = require('moment');

module.exports.generateCustData = () => {
  let customers = [];

  for (let i=0; i < 50; i++) {
    let firstName = faker.name.firstName();
    console.log(firstName);
    let lastName = faker.name.lastName();
    let createDate = faker.date.past(10);
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


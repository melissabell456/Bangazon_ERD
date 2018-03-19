'use strict';

const { createWriteStream } = require('fs');
const { prodTypes } = require('../../data/customer/prod-types');
const { generateCustData } = require('./create-cust-data');
const { generateEmpData } = require('./create-emp-data');

let customers = generateCustData();
let custStream = createWriteStream('../../data/customer/customers.json');
custStream.write(JSON.stringify(customers));

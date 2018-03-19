'use strict';

const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('../bangazon.sqlite');
const { customers } = require('../../data/customer/customers.json');

// TODO: wrap all requests in db.serialize once building multiple tables
db.serialize(function() {  
  db.run(`DROP TABLE IF EXISTS customers`);

  db.run(`CREATE TABLE IF NOT EXISTS customers (
    custID INTEGER PRIMARY KEY,
    firstName TEXT NOT NULL,
    lastName TEXT NOT NULL,
    createDate TEXT NOT NULL)`
  );


  customers.forEach( ({firstName, lastName, createDate}) => {
    db.run(`INSERT INTO customers (firstName, lastName, createDate)
            VALUES ("${firstName}", "${lastName}", "${createDate}")`);
  });
});
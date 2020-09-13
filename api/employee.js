const express = require('express');
const employeeRouter = express.Router();

const sqlite3 = require('sqlite3');
const db = new sqlite3.Database(
  process.env.TEST_DATABASE || './database.sqlite'
);

employeeRouter.get('/', (req, res, next) => {
  db.all(
    'SELECT * FROM Employee WHERE Employee.is_current_employee = 1',
    (err, artists) => {
      if (err) {
        next(err);
      } else {
        res.status(200).json({ artists });
      }
    }
  );
});

module.exports = employeeRouter;
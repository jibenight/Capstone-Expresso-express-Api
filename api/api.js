const express = require('express');
const apiRouter = express.Router();

const employeesRouter = require('./employee.js');
apiRouter.use('/employees', employeesRouter);

// const timesheetRouter = require('./timesheet.js');
// apiRouter.use('/timesheet', timesheetRouter);

module.exports = apiRouter;

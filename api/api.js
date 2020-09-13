const express = require('express');
const apiRouter = express.Router();

const employeeRouter = require('./employee.js');
apiRouter.use('/employees', employeeRouter);

const timesheetRouter = require('./timesheet.js');
apiRouter.use('/timesheet', timesheetRouter);

module.exports = apiRouter;

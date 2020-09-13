const express = require('express');
const apiRouter = express.Router();

const employeeRouter = require('./employee.js');
apiRouter.use('/employees', employeeRouter);

// const seriesRouter = require('./series.js');
// apiRouter.use('/series', seriesRouter);

module.exports = apiRouter;

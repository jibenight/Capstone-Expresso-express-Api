const express = require('express');
const apiRouter = express.Router();

const employeesRouter = require('./employee.js');
apiRouter.use('/employees', employeesRouter);

const menusRouter = require('./menu.js');
apiRouter.use('/menus', menusRouter);

module.exports = apiRouter;

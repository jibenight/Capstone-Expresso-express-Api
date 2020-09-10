const bodyParser = require('body-parser');
const cors = require('cors');
const errorhandler = require('errorhandler');
const express = require('express');
const morgan = require('morgan');

const apiRouter = require('./api/api');

const app = express();

const PORT = process.env.PORT || 4000;

app.use(bodyParser.json());
app.use(cors());
app.use(morgan('dev'));

// routes
app.use('/api', apiRouter);

// handling error
app.use(errorhandler());

app.listen(PORT, () => {
  console.log(`Server is ready at http://localhost:${PORT}`);
});

module.exports = app;

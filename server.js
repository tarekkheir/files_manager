import router from './routes/index';
const express = require('express');

const app = express();
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log('Server running on port 5000');
});

app.use('/', router);

module.exports = app;

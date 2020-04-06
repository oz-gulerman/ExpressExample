require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.connection
  .on('open', () => {
    console.log('Mongoose connection open');
  })
  .on('error', (err) => {
    console.log(`Connection error: ${err.message}`);
});

require('./models/Registration');

const app = require('./app');
let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}
const server = app.listen(port, () => {
  console.log(`Express is running on port ${server.address().port}`);
});
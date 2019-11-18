const express = require('express');

const app = express();

const { config } = require('./config');
const platziStore = require('./routes');

app.use(express.json());
platziStore(app);

app.get('/', (req, res) => {
  const userInfo = req.header('user-agent');
  res.send(`UserInfo: ${userInfo}`);
});

app.listen(config.port, (err) => {
  if (err) {
    console.error('Error: ', err);
    return;
  }
  console.log(`Listening http://localhost:${config.port}`);
});

import express from 'express';
import dotenv from 'dotenv';
import main from './routes/main';

dotenv.config();

const PORT = process.env.PORT || 3000;
const app = express();
app.use(express.static(`${__dirname}/public`));

app.get('*', main);

app.listen(PORT, (err) => {
  if (err) console.log(err);
  console.log(`Server running on ${PORT}`);
});

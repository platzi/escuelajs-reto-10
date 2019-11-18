/* eslint-disable import/no-extraneous-dependencies */
import express from 'express';
import dotenv from 'dotenv';
import webpack from 'webpack';
import main from './routes/main';
import products from './routes/products';

dotenv.config();

const ENV = process.env.NODE_ENV;
const PORT = process.env.PORT || 3000;
const app = express();
app.use(express.static(`${__dirname}/public`));

if (ENV === 'development') {
  console.log('Loading dev config');
  // eslint-disable-next-line global-require
  const webpackConfig = require('../../webpack.config');
  // eslint-disable-next-line global-require
  // eslint-disable-next-line import/no-extraneous-dependencies
  // eslint-disable-next-line global-require
  const webpackDevMiddleware = require('webpack-dev-middleware');
  // eslint-disable-next-line global-require
  const webpackHotMiddleware = require('webpack-hot-middleware');
  const compiler = webpack(webpackConfig);
  const serverConfig = {
    contentBase: `http://localhost${PORT}`,
    port: PORT,
    publicPath: webpackConfig.output.publicPath,
    hot: true,
    historyApiFallback: true,
    stats: { colors: true },
  };
  app.use(webpackDevMiddleware(compiler, serverConfig));
  app.use(webpackHotMiddleware(compiler));
}

products(app);

app.get('*', main);

app.listen(PORT, (err) => {
  if (err) console.log(err);
  console.log(`Server runding on ${PORT}`);
});

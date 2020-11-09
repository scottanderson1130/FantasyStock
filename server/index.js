/* eslint-disable no-console */

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');
const { authRouter } = require('../authentication/routes');

require('../authentication/passport-setup.js');

const app = express();
const { userRouter } = require('./routes/user');
const { stockRouter } = require('./routes/stock');
const { leagueRouter } = require('./routes/league');
const { matchupRouter } = require('./routes/matchup');
const { messageRouter } = require('./routes/messages');
const { newsRouter } = require('./routes/news');
const models = require('./db/index');
// Cookies and Session info

// middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/* Google Authorization */
app.use(
  cookieSession({
    name: 'fantasy-stock',
    keys: ['key1', 'key2']
  })
);

app.use(passport.initialize());
app.use(passport.session());

/* End Google Authorization */

const PORT = process.env.SERVER_PORT || 8080;

app.use('/auth', authRouter);

const DIST_DIR = path.join(__dirname, '../dist');
const HTML_FILE = path.join(DIST_DIR, 'index.html');

app.use(express.static(DIST_DIR));

app.use('/user', userRouter);
app.use('/stock', stockRouter);
app.use('/league', leagueRouter);
app.use('/matchup', matchupRouter);
app.use('/messages', messageRouter);
app.use('/news', newsRouter);
app.get('/*', (req, res) => {
  res.sendFile(HTML_FILE);
});

const connection = async () => {
  try {
    await models.sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.warn('Unable to connect to the database:', error);
  }
};
const syncModels = async () => {
  try {
    await models.sequelize.sync();
    console.log('Models have been synced successfully.');
  } catch (error) {
    console.warn('Unable to sync models:', error);
  }
};

connection();
syncModels();
app.listen(PORT, () => {
  console.log(`🌌Server has started on port: 🚀${PORT}`);
});

/* eslint-disable no-console */

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
// const { userRouter } = require('./routes/user');
// const { stockRouter } = require('./routes/stock');
// const models = require('./db/index');
const bodyParser = require('body-parser');
// Cookies and Session info

// middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const PORT = process.env.SERVER_PORT || 8080;

const DIST_DIR = path.join(__dirname, '../dist');
const HTML_FILE = path.join(DIST_DIR, 'index.html');

// // Middleware
// app.use(cors());
// app.use(express.json());
// app.use(express.urlencoded())
// app.use(express.static(DIST_DIR));

app.get('/', (req, res) => {
  res.sendFile(HTML_FILE);
});

// app.use('/user', userRouter);
// app.use('/stock', stockRouter);

// const connection = async () => {
//   try {
//     await models.sequelize.authenticate();
//     console.log('Connection has been established successfully.');
//   } catch (error) {
//     console.error('Unable to connect to the database:', error);
//   }
// };
// const syncModels = async () => {
//   try {
//     await models.sequelize.sync();
//     console.log('Models have been synced successfully.');
//   } catch (error) {
//     console.error('Unable to sync models:', error);
//   }
// };

// connection();
// syncModels();
app.listen(PORT, () => {
  console.log(`🌌Server has started on port: 🚀${PORT}`);
});

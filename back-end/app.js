//lol
const express = require('@braitsch/express');

const app = express();

express.log('./logs');

express.http(app);

express.init(__dirname, app, 'node-login', true);

express.start(app);

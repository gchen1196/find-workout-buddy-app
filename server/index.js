const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
require('../database/index.js');
const userRouter = require('./routers/user.js');
const sessionRouter = require('./routers/session.js')

app.use(express.static(`${__dirname}/../client/dist`));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(userRouter);
app.use(sessionRouter);


app.listen(port, () => console.log(`App listening on ${port}!`))
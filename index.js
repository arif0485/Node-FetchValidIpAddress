const express = require('express');
const bodyParser = require('body-parser');

const routes = require('./routes')

const app = express();

app.use(bodyParser.json());
app.use('/',routes);

app.listen(3000, () => 
console.log('Server started at port : 3000'));

/*
Instructions:

Make an api call like below to see results:
http://localhost:3000/getAllIpAddress?input=25515511135

*/
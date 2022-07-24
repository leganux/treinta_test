const express = require('express');
const bodyParser = require('body-parser');
const api = require('./routes/_api');
const mongoose = require('./db')

const port = 3000;
const app = express();



// Parses the text as url encoded data
app.use(bodyParser.urlencoded({ extended: true }));

// Parses the text as json
app.use(bodyParser.json());

app.use('/api', api);
app.get('/', function (req, res) {
    res.status(200).json({
        message: 'ok'
    })
});


app.listen(port, function () {
    console.log("Server is listening at port:" + port);
});
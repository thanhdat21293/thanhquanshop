const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const config = require('./config/config')
const mongoose = require('mongoose')
mongoose.connect(`mongodb://${ config.mongoConfig.host }:${ config.mongoConfig.port }/${ config.mongoConfig.data }`)

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api/', require('./routes/routes')(express));


const port = 3000;
app.listen(port, () => {
    console.log('Ready for GET requests on http://localhost:' + port);
});
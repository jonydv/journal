const express = require('express');
const path = require('path');
const cors = require('cors');
require ('dotenv').config();

const router = require('./routes');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors());

app.use('/', router);

app.get('/', (req, res) => {
    res.send('Api is runing')
    
});

app.listen(process.env.PORT);
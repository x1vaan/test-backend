const express = require('express');
const universities = require('./routes/universitiesCRUD.js')

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended : true}));


app.use('/', universities);

module.exports = app
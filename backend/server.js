const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const fetch = require('node-fetch');

const app = express();

app.use(cors())
app.use(morgan("monnaies"))



const port = process.env.PORT || 5000;

app.listen(port, () =>
{
	console.log('En écoute du port $(port)')
})
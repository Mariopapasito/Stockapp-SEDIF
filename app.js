require('dotenv').config()
const cors = require('cors');
const express = require('express');
const dbconnect = require('./db');
const productRouter = require('./routes/product');

const app = express();

dbconnect(app);

app.use(cors({origin: true}));

app.use(express.json());


app.use('/api/v1/products', productRouter)



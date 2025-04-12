require('dotenv').config()
const path = require('path');
const mongoose = require('mongoose');
const express = require('express');
const { time } = require('console');


const app = express();

mongoose
    .connect(`mongodb+srv://MarioIvan:${process.env.MONGO_DB_PASS}@development.b98qzz6.mongodb.net/stock-app?retryWrites=true&w=majority&appName=Development`)
    .then((result)=> {
    app.listen(PORT, () => {
     console.log(`Servidor escuchando en el puerto ${PORT}`);
})
    console.log('Conectado a la base de datos')
})
    .catch((err)=> console.log(err));

const productSchema = mongoose.Schema({
    name: {type: String, required: true},
    price: Number,
},
{timestamps: true}
)

const Product = mongoose.model('Product', productSchema);

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json());


app.post('/api/v1/products', (req, res, next) => {
   
        const newProduct = new Product(req.body);

        newProduct.save().then ((result) => {
            res.status(201).json({
                ok: true,
            })
        }).catch((err) => console.log(err));
  
})


const PORT = process.env.PORT



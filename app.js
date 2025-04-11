require('dotenv').config()
const express = require('express');

const app = express();

app.get('/', (req, res) => {

    console.log('peticion recibida');
    res.send('Hola Mundo con nodemon');

})

const PORT = process.env.PORT


app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
})
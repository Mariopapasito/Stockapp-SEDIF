const express = require('express');

const app = express();

app.get('/', (req, res) => {

    console.log('peticion recibida');
    res.send('Hola Mundo');

})


app.listen(4000, () => {
    console.log('Servidor escuchando en el puerto 4000');
})